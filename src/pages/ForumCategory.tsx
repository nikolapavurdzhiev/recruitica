import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MessageSquare, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

export function ForumCategory() {
  const { slug } = useParams();
  const { user } = useAuth();

  const { data: category, isLoading } = useQuery({
    queryKey: ['forum-category', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_categories')
        .select(`
          *,
          topics:forum_topics(
            id,
            title,
            created_at,
            views_count,
            author:profiles(full_name),
            posts:forum_posts(count),
            latest_post:forum_posts(
              created_at,
              author:profiles(full_name)
            )
          )
        `)
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
          {user && (
            <Link
              to={`/forum/${slug}/new`}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              New Topic
            </Link>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm divide-y">
        {category.topics?.map((topic) => (
          <div key={topic.id} className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <Link 
                  to={`/forum/topic/${topic.id}`}
                  className="text-lg font-semibold text-gray-900 hover:text-indigo-600"
                >
                  {topic.title}
                </Link>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                  <span>by {topic.author?.full_name}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {formatDistanceToNow(new Date(topic.created_at), { addSuffix: true })}
                  </span>
                </div>
              </div>

              <div className="text-center px-4">
                <div className="text-xl font-semibold text-gray-900">
                  {topic.posts}
                </div>
                <div className="text-sm text-gray-500">Replies</div>
              </div>

              <div className="text-center px-4">
                <div className="text-xl font-semibold text-gray-900">
                  {topic.views_count}
                </div>
                <div className="text-sm text-gray-500">Views</div>
              </div>
            </div>

            {topic.latest_post?.[0] && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-500">Latest reply</div>
                <div className="font-medium text-gray-900">
                  {topic.latest_post[0].author?.full_name}
                </div>
                <div className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(topic.latest_post[0].created_at), { addSuffix: true })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}