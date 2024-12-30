-- Create courses table
CREATE TABLE courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  instructor_id uuid REFERENCES profiles(id),
  thumbnail text,
  duration integer NOT NULL, -- in minutes
  price decimal(10,2) NOT NULL,
  level text CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  category text NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create course_enrollments table
CREATE TABLE course_enrollments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  progress integer DEFAULT 0,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(course_id, user_id)
);

-- Create course_reviews table
CREATE TABLE course_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id uuid REFERENCES courses(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  content text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(course_id, user_id)
);

-- Enable RLS
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_reviews ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Published courses are viewable by everyone"
  ON courses FOR SELECT
  USING (published = true OR auth.uid() = instructor_id);

CREATE POLICY "Instructors can manage own courses"
  ON courses FOR ALL
  USING (auth.uid() = instructor_id);

CREATE POLICY "Users can view own enrollments"
  ON course_enrollments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll in courses"
  ON course_enrollments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own enrollment progress"
  ON course_enrollments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Course reviews are viewable by everyone"
  ON course_reviews FOR SELECT
  USING (true);

CREATE POLICY "Users can create and manage own reviews"
  ON course_reviews FOR ALL
  USING (auth.uid() = user_id);