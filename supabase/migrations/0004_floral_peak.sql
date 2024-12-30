/*
  # Add example company data

  1. New Data
    - Example company with full details
    - Company locations
    - Company benefits
    - Company media
    - Related jobs

  2. Purpose
    - Demonstrate company profile features
    - Show real-world example of company data structure
*/

-- Insert example company
INSERT INTO companies (
  id,
  name,
  description,
  website,
  industry,
  company_size,
  founded_year,
  logo_url,
  cover_image_url,
  tech_stack
) VALUES (
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'TechTalent Solutions',
  E'TechTalent Solutions is a leading tech recruitment firm specializing in placing top-tier developers, engineers, and IT professionals. With over a decade of experience, we''ve built strong relationships with both innovative startups and established enterprises.\n\nOur team of expert recruiters combines deep technical knowledge with a personalized approach to match the right talent with the right opportunity. We understand that successful placements go beyond just matching skills – culture fit and career growth potential are equally important.',
  'https://techtalentsolutions.example.com',
  'Technology Recruitment',
  '50-100 employees',
  2012,
  'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=200&h=200',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600',
  ARRAY['JavaScript', 'Python', 'Java', 'Cloud', 'DevOps']
);

-- Add company locations
INSERT INTO company_locations (
  company_id,
  city,
  country,
  address,
  is_headquarters
) VALUES
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'London',
  'United Kingdom',
  '123 Tech Street, EC2A 2BB',
  true
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'Manchester',
  'United Kingdom',
  '456 Digital Avenue, M1 1AB',
  false
);

-- Add company benefits
INSERT INTO company_benefits (
  company_id,
  title,
  description,
  category
) VALUES
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'Health & Wellness Package',
  'Comprehensive health insurance, dental care, and gym membership',
  'health'
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'Learning & Development',
  'Annual training budget and access to online learning platforms',
  'learning'
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'Remote Work Setup',
  'Latest MacBook Pro and home office equipment allowance',
  'equipment'
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'Flexible Time Off',
  '25 days annual leave plus bank holidays',
  'vacation'
);

-- Add company media
INSERT INTO company_media (
  company_id,
  url,
  type,
  title,
  description
) VALUES
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'image',
  'London Office',
  'Our modern office space in the heart of London'
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'https://images.unsplash.com/photo-1517502884422-41eaead166d4',
  'image',
  'Team Building',
  'Annual team retreat in the countryside'
),
(
  'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  'image',
  'Company Culture',
  'Our diverse and collaborative team at work'
);