-- Add admin role to user_type enum if not exists
DO $$ 
BEGIN
    ALTER TABLE profiles 
    DROP CONSTRAINT IF EXISTS profiles_user_type_check;
    
    ALTER TABLE profiles 
    ADD CONSTRAINT profiles_user_type_check 
    CHECK (user_type IN ('candidate', 'recruiter', 'admin', 'company'));
END $$;

-- Update existing admin user if exists
UPDATE profiles
SET user_type = 'admin'
WHERE email = 'admin@recruitica.com';

-- Add admin metadata to existing user if exists
UPDATE auth.users
SET raw_user_meta_data = jsonb_set(
    COALESCE(raw_user_meta_data, '{}'::jsonb),
    '{role}',
    '"admin"'
)
WHERE email = 'admin@recruitica.com';