/*
  # Company Registration Schema Updates

  1. New Tables
    - `company_profiles` - Extended profile info for company accounts
      - `id` (uuid, references profiles.id)
      - `company_name` (text)
      - `industry` (text)
      - `size` (text)
      - `website` (text)
      - `description` (text)
      - `status` (text) - For account verification status
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Changes
    - Add company-specific fields to profiles table
    - Update user registration trigger

  3. Security
    - Enable RLS on new table
    - Add appropriate policies
*/

-- Create company_profiles table
CREATE TABLE company_profiles (
  id uuid PRIMARY KEY REFERENCES profiles(id),
  company_name text NOT NULL,
  industry text,
  size text,
  website text,
  description text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE company_profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Companies can view own profile"
  ON company_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Companies can update own profile"
  ON company_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Update the handle_new_user function to handle company registrations
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Get the user type from the raw_user_meta_data
  IF new.raw_user_meta_data->>'userType' = 'company' THEN
    -- Create profile as company
    INSERT INTO public.profiles (id, email, user_type)
    VALUES (new.id, new.email, 'company');
    
    -- Create company profile
    INSERT INTO public.company_profiles (id, company_name)
    VALUES (
      new.id,
      new.raw_user_meta_data->>'companyName'
    );
  ELSE
    -- Create profile as candidate (default)
    INSERT INTO public.profiles (id, email, user_type)
    VALUES (new.id, new.email, 'candidate');
  END IF;
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop and recreate the trigger to use the updated function
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();