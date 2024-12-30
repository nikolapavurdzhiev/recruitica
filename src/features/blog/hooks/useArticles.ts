import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';
import type { Article } from '../types';

export function useArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          author:profiles!articles_author_id_fkey(full_name),
          likes_count:article_likes(count),
          comments_count:article_comments(count)
        `)
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching articles:', error);
        throw error;
      }

      return data as Article[];
    },
  });
}