/*
  # Dashboard Tables

  1. New Tables
    - saved_jobs (for bookmarking jobs)
    - job_applications (tracking application status)
    - interviews (scheduling interviews)
    - profile_views (tracking profile visibility)
    - activities (user activity log)

  2. Security
    - Enable RLS on all tables
    - Add policies for user data access
*/

-- Create saved_jobs table
CREATE TABLE saved_jobs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id, job_id)
);

-- Create job_applications table
CREATE TABLE job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  job_id uuid REFERENCES jobs(id) ON DELETE CASCADE,
  status text NOT NULL CHECK (status IN ('pending', 'reviewing', 'interview', 'offer', 'rejected')),
  applied_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create interviews table
CREATE TABLE interviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES job_applications(id) ON DELETE CASCADE,
  scheduled_at timestamptz NOT NULL,
  duration_minutes integer NOT NULL,
  type text NOT NULL CHECK (type IN ('video', 'phone', 'in-person')),
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create profile_views table
CREATE TABLE profile_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  viewed_by uuid REFERENCES profiles(id) ON DELETE CASCADE,
  viewed_at timestamptz DEFAULT now()
);

-- Create activities table
CREATE TABLE activities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  type text NOT NULL,
  data jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE saved_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE interviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE activities ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their saved jobs"
  ON saved_jobs FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view and manage their applications"
  ON job_applications FOR ALL
  USING (auth.uid() = user_id);

CREATE POLICY "Users can view their interviews"
  ON interviews FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM job_applications
    WHERE job_applications.id = interviews.application_id
    AND job_applications.user_id = auth.uid()
  ));

CREATE POLICY "Users can view their profile views"
  ON profile_views FOR SELECT
  USING (profile_id = auth.uid());

CREATE POLICY "Users can view their activities"
  ON activities FOR SELECT
  USING (user_id = auth.uid());