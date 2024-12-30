/*
  # Add Podcast Features

  1. New Tables
    - `podcasts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `audio_url` (text)
      - `cover_image_url` (text)
      - `duration` (integer, in seconds)
      - `published` (boolean)
      - `author_id` (uuid, references profiles)
      - Timestamps
    
    - `podcast_episodes`
      - `id` (uuid, primary key) 
      - `podcast_id` (uuid, references podcasts)
      - `title` (text)
      - `description` (text)
      - `audio_url` (text)
      - `episode_number` (integer)
      - `duration` (integer)
      - Timestamps

  2. Security
    - Enable RLS on both tables
    - Add policies for viewing and managing podcasts
*/

-- Create podcasts table
CREATE TABLE podcasts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  cover_image_url text,
  author_id uuid REFERENCES profiles(id) NOT NULL,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create podcast episodes table
CREATE TABLE podcast_episodes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  podcast_id uuid REFERENCES podcasts(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  audio_url text NOT NULL,
  episode_number integer NOT NULL,
  duration integer,
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE podcasts ENABLE ROW LEVEL SECURITY;
ALTER TABLE podcast_episodes ENABLE ROW LEVEL SECURITY;

-- Policies for podcasts
CREATE POLICY "Published podcasts are viewable by everyone"
  ON podcasts FOR SELECT
  USING (published = true OR auth.uid() = author_id);

CREATE POLICY "Users can create podcasts"
  ON podcasts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update own podcasts"
  ON podcasts FOR UPDATE
  USING (auth.uid() = author_id);

-- Policies for episodes
CREATE POLICY "Published episodes are viewable by everyone"
  ON podcast_episodes FOR SELECT
  USING (
    published = true OR 
    EXISTS (
      SELECT 1 FROM podcasts 
      WHERE podcasts.id = podcast_episodes.podcast_id 
      AND podcasts.author_id = auth.uid()
    )
  );

CREATE POLICY "Podcast owners can manage episodes"
  ON podcast_episodes FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM podcasts 
      WHERE podcasts.id = podcast_episodes.podcast_id 
      AND podcasts.author_id = auth.uid()
    )
  );

-- Insert sample podcasts
INSERT INTO podcasts (
  title,
  description,
  cover_image_url,
  author_id,
  published
) VALUES (
  'The Recruitment Revolution',
  'Weekly discussions about the evolving landscape of recruitment and talent acquisition.',
  'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&h=800',
  (SELECT id FROM profiles WHERE email = 'system@rec2rec.example.com'),
  true
);

-- Insert sample episodes
INSERT INTO podcast_episodes (
  podcast_id,
  title,
  description,
  audio_url,
  episode_number,
  duration,
  published
) VALUES
(
  (SELECT id FROM podcasts WHERE title = 'The Recruitment Revolution'),
  'The Future of AI in Recruitment',
  'Exploring how artificial intelligence is transforming the recruitment industry.',
  'https://example.com/podcasts/ep1.mp3',
  1,
  1800,
  true
),
(
  (SELECT id FROM podcasts WHERE title = 'The Recruitment Revolution'),
  'Building Inclusive Hiring Practices',
  'Best practices for creating diverse and inclusive recruitment processes.',
  'https://example.com/podcasts/ep2.mp3',
  2,
  2100,
  true
);