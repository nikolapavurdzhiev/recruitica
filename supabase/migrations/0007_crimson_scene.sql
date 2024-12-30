/*
  # Add More Companies

  1. New Data
    - Adds 4 new recruitment companies with:
      - Company details
      - Office locations
      - Benefits
      - Media/photos
*/

-- Insert Global Talent Partners
INSERT INTO companies (
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
  'Global Talent Partners',
  E'Global Talent Partners specializes in executive search and recruitment for multinational corporations. With offices across major financial hubs, we connect top-tier talent with leading organizations worldwide.\n\nOur consultative approach and deep industry knowledge enable us to understand both client and candidate needs at a fundamental level, resulting in successful long-term placements.',
  'https://globaltalentpartners.example.com',
  'Executive Recruitment',
  '100-250 employees',
  2008,
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200&h=200',
  'https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=1600',
  ARRAY['Finance', 'Technology', 'Healthcare', 'Manufacturing']
);

-- Insert Digital Staffing Solutions
INSERT INTO companies (
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
  'Digital Staffing Solutions',
  E'Digital Staffing Solutions is a modern recruitment agency focused on digital and creative roles. We help startups and established companies build their digital teams.\n\nOur innovative approach combines AI-powered matching with human expertise to deliver exceptional candidates quickly and efficiently.',
  'https://digitalstaffing.example.com',
  'Digital & Creative Recruitment',
  '25-50 employees',
  2015,
  'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=200&h=200',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600',
  ARRAY['Digital Marketing', 'UX/UI', 'Content', 'E-commerce']
);

-- Insert Healthcare Recruitment Specialists
INSERT INTO companies (
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
  'Healthcare Recruitment Specialists',
  E'Healthcare Recruitment Specialists is dedicated to staffing solutions for the healthcare sector. From nurses to medical directors, we help healthcare organizations find the right professionals.\n\nOur team includes former healthcare professionals who understand the unique demands of the industry.',
  'https://healthcarerecruitment.example.com',
  'Healthcare Recruitment',
  '50-100 employees',
  2010,
  'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=200&h=200',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600',
  ARRAY['Healthcare', 'Medical', 'Nursing', 'Pharmaceuticals']
);

-- Add locations for Global Talent Partners
INSERT INTO company_locations (company_id, city, country, address, is_headquarters)
SELECT id, 'Singapore', 'Singapore', '123 Marina Bay, 018982', true
FROM companies WHERE name = 'Global Talent Partners';

INSERT INTO company_locations (company_id, city, country, address, is_headquarters)
SELECT id, 'Hong Kong', 'China', '456 Central District', false
FROM companies WHERE name = 'Global Talent Partners';

-- Add locations for Digital Staffing Solutions
INSERT INTO company_locations (company_id, city, country, address, is_headquarters)
SELECT id, 'Berlin', 'Germany', '789 Kreuzberg', true
FROM companies WHERE name = 'Digital Staffing Solutions';

-- Add locations for Healthcare Recruitment Specialists
INSERT INTO company_locations (company_id, city, country, address, is_headquarters)
SELECT id, 'Sydney', 'Australia', '321 CBD', true
FROM companies WHERE name = 'Healthcare Recruitment Specialists';

-- Add benefits for new companies
INSERT INTO company_benefits (company_id, title, description, category)
SELECT 
  c.id,
  'International Travel',
  'Regular opportunities to visit our global offices',
  'other'
FROM companies c WHERE c.name = 'Global Talent Partners';

INSERT INTO company_benefits (company_id, title, description, category)
SELECT 
  c.id,
  'Flexible Working',
  'Choose your own hours and work location',
  'other'
FROM companies c WHERE c.name = 'Digital Staffing Solutions';

INSERT INTO company_benefits (company_id, title, description, category)
SELECT 
  c.id,
  'Professional Development',
  'Full support for medical certifications and training',
  'learning'
FROM companies c WHERE c.name = 'Healthcare Recruitment Specialists';

-- Add media for new companies
INSERT INTO company_media (company_id, url, type, title, description)
SELECT 
  c.id,
  'https://images.unsplash.com/photo-1577412647305-991150c7d163',
  'image',
  'Singapore Office',
  'Our modern headquarters in Singapore'
FROM companies c WHERE c.name = 'Global Talent Partners';

INSERT INTO company_media (company_id, url, type, title, description)
SELECT 
  c.id,
  'https://images.unsplash.com/photo-1497366216548-37526070297c',
  'image',
  'Berlin Hub',
  'Our creative space in Berlin'
FROM companies c WHERE c.name = 'Digital Staffing Solutions';

INSERT INTO company_media (company_id, url, type, title, description)
SELECT 
  c.id,
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
  'image',
  'Sydney Office',
  'Our headquarters in Sydney CBD'
FROM companies c WHERE c.name = 'Healthcare Recruitment Specialists';