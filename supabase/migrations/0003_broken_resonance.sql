/*
  # Add Company Media and Details

  1. New Tables
    - `company_media`
      - Photos and media for company profiles
      - Includes cover photos, gallery images
    - `company_locations`
      - Office locations and details
    - `company_benefits`
      - Company perks and benefits

  2. Updates
    - Add new fields to companies table
*/

-- Add new fields to companies table
ALTER TABLE companies ADD COLUMN IF NOT EXISTS cover_image_url text;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS logo_url text;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS industry text;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS company_size text;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS founded_year integer;
ALTER TABLE companies ADD COLUMN IF NOT EXISTS tech_stack text[];

-- Create company_media table
CREATE TABLE IF NOT EXISTS company_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  url text NOT NULL,
  type text NOT NULL CHECK (type IN ('image', 'video')),
  title text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create company_locations table
CREATE TABLE IF NOT EXISTS company_locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  city text NOT NULL,
  country text NOT NULL,
  address text,
  is_headquarters boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create company_benefits table
CREATE TABLE IF NOT EXISTS company_benefits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  category text CHECK (category IN ('health', 'vacation', 'equipment', 'learning', 'other')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE company_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_benefits ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Company media is viewable by everyone"
  ON company_media FOR SELECT
  USING (true);

CREATE POLICY "Company locations are viewable by everyone"
  ON company_locations FOR SELECT
  USING (true);

CREATE POLICY "Company benefits are viewable by everyone"
  ON company_benefits FOR SELECT
  USING (true);