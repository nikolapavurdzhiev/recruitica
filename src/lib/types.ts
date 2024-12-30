export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  author: {
    full_name: string;
  };
  likes_count: number;
  comments_count: number;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string;
  user_type: 'candidate' | 'recruiter' | 'admin';
}