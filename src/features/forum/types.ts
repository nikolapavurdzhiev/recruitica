export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
  topics_count: number;
  latest_topic?: {
    id: string;
    title: string;
    created_at: string;
    author: {
      full_name: string;
    };
  };
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  created_at: string;
  views_count: number;
  posts_count: number;
  author: {
    full_name: string;
  };
  latest_post?: {
    created_at: string;
    author: {
      full_name: string;
    };
  };
}