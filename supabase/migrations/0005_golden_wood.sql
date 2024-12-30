/*
  # Add Forum Feature

  1. New Tables
    - `forum_categories` - Categories for organizing discussions
    - `forum_topics` - Discussion topics/threads
    - `forum_posts` - Individual posts within topics
    - `forum_reactions` - Reactions to posts (likes, helpful, etc)

  2. Security
    - Enable RLS on all tables
    - Add policies for viewing and creating content
*/

-- Create forum categories table
CREATE TABLE forum_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  slug text UNIQUE NOT NULL,
  icon text,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create forum topics table
CREATE TABLE forum_topics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category_id uuid REFERENCES forum_categories(id) ON DELETE CASCADE,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  is_pinned boolean DEFAULT false,
  is_locked boolean DEFAULT false,
  views_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create forum posts table
CREATE TABLE forum_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  content text NOT NULL,
  topic_id uuid REFERENCES forum_topics(id) ON DELETE CASCADE,
  author_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  is_solution boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create forum reactions table
CREATE TABLE forum_reactions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id uuid REFERENCES forum_posts(id) ON DELETE CASCADE,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('like', 'helpful', 'insightful')),
  created_at timestamptz DEFAULT now(),
  UNIQUE(post_id, user_id, type)
);

-- Enable RLS
ALTER TABLE forum_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE forum_reactions ENABLE ROW LEVEL SECURITY;

-- Categories policies
CREATE POLICY "Forum categories are viewable by everyone"
  ON forum_categories FOR SELECT
  USING (true);

-- Topics policies
CREATE POLICY "Forum topics are viewable by everyone"
  ON forum_topics FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create topics"
  ON forum_topics FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their topics"
  ON forum_topics FOR UPDATE
  USING (auth.uid() = author_id);

-- Posts policies
CREATE POLICY "Forum posts are viewable by everyone"
  ON forum_posts FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create posts"
  ON forum_posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update their posts"
  ON forum_posts FOR UPDATE
  USING (auth.uid() = author_id);

-- Reactions policies
CREATE POLICY "Forum reactions are viewable by everyone"
  ON forum_reactions FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can manage their reactions"
  ON forum_reactions FOR ALL
  USING (auth.uid() = user_id);

-- Insert initial categories
INSERT INTO forum_categories (name, description, slug, icon) VALUES
('General Discussion', 'General recruitment industry discussions', 'general', 'MessageSquare'),
('Career Advice', 'Get advice on your recruitment career', 'career-advice', 'Compass'),
('Industry News', 'Latest news and updates from the recruitment world', 'industry-news', 'Newspaper'),
('Best Practices', 'Share and discuss recruitment best practices', 'best-practices', 'CheckCircle'),
('Tools & Technology', 'Discuss recruitment tools and technology', 'tools-tech', 'Tool');