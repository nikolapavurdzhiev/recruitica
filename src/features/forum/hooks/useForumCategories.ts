import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';
import type { ForumCategory } from '../types';

export function useForumCategories() {
  return useQuery({
    queryKey: ['forum-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_categories')
        .select(`
          *,
          topics:forum_topics(count),
          latest_topic:forum_topics(
            id,
            title,
            created_at,
            author:profiles(full_name)
          )
        `)
        .order('order_index');

      if (error) throw error;
      return data as ForumCategory[];
    },
  });
}