-- Add slug column to companies table
ALTER TABLE companies 
ADD COLUMN IF NOT EXISTS slug text UNIQUE;

-- Update existing companies with slugs
UPDATE companies 
SET slug = LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL;

-- Make slug required for future entries
ALTER TABLE companies 
ALTER COLUMN slug SET NOT NULL;

-- Create index for faster slug lookups
CREATE INDEX IF NOT EXISTS companies_slug_idx ON companies(slug);