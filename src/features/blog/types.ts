import { Profile } from '../../lib/types';

export interface Article {
  id: string;
  title: string;
  content: string;
  slug: string;
  created_at: string;
  author: Pick<Profile, 'full_name'>;
  likes_count: Array<{ count: number }>;
  comments_count: Array<{ count: number }>;
}

export interface ArticleMetrics {
  likes_count: Array<{ count: number }>;
  comments_count: Array<{ count: number }>;
}