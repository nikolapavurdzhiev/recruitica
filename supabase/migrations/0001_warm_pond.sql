/*
  # Initial Schema Setup for Rec2Rec Platform

  1. New Tables
    - profiles
      - Stores user profile information
      - Links to Supabase auth.users
    - jobs
      - Stores job listings
    - applications
      - Tracks job applications
    - companies
      - Stores company information
    - skills
      - Stores available skills
    - profile_skills
      - Junction table for profile-skill relationships

  2. Security
    - Enable RLS on all tables
    - Add policies for data access
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  email text NOT NULL,
  full_name text,
  avatar_url text,
  user_type text NOT NULL CHECK (user_type IN ('candidate', 'recruiter', 'admin')),
  title text,
  bio text,
  location text,
  salary_expectation integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create companies table
CREATE TABLE companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  website text,
  location text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create jobs table
CREATE TABLE jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  company_id uuid REFERENCES companies(id),
  recruiter_id uuid REFERENCES profiles(id),
  location text,
  salary_range_min integer,
  salary_range_max integer,
  work_type text CHECK (work_type IN ('remote', 'hybrid', 'office')),
  status text DEFAULT 'open' CHECK (status IN ('open', 'closed', 'draft')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create applications table
CREATE TABLE applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id uuid REFERENCES jobs(id),
  candidate_id uuid REFERENCES profiles(id),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'shortlisted', 'rejected', 'accepted')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create skills table
CREATE TABLE skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  category text,
  created_at timestamptz DEFAULT now()
);

-- Create profile_skills junction table
CREATE TABLE profile_skills (
  profile_id uuid REFERENCES profiles(id),
  skill_id uuid REFERENCES skills(id),
  years_experience integer,
  PRIMARY KEY (profile_id, skill_id)
);

-- Enable RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_skills ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Jobs policies
CREATE POLICY "Jobs are viewable by everyone"
  ON jobs FOR SELECT
  USING (true);

CREATE POLICY "Recruiters can insert jobs"
  ON jobs FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND user_type = 'recruiter'
    )
  );

CREATE POLICY "Recruiters can update own jobs"
  ON jobs FOR UPDATE
  USING (recruiter_id = auth.uid());

-- Applications policies
CREATE POLICY "Candidates can view own applications"
  ON applications FOR SELECT
  USING (
    candidate_id = auth.uid() OR
    EXISTS (
      SELECT 1 FROM jobs
      WHERE jobs.id = applications.job_id
      AND jobs.recruiter_id = auth.uid()
    )
  );

CREATE POLICY "Candidates can create applications"
  ON applications FOR INSERT
  WITH CHECK (
    auth.uid() = candidate_id AND
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid()
      AND user_type = 'candidate'
    )
  );

-- Skills policies
CREATE POLICY "Skills are viewable by everyone"
  ON skills FOR SELECT
  USING (true);

-- Profile skills policies
CREATE POLICY "Profile skills are viewable by everyone"
  ON profile_skills FOR SELECT
  USING (true);

CREATE POLICY "Users can manage their own profile skills"
  ON profile_skills FOR ALL
  USING (profile_id = auth.uid());

-- Create functions
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, user_type)
  VALUES (new.id, new.email, 'candidate');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();