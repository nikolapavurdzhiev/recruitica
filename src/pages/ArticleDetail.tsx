import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';
import { CommentForm } from '../components/blog/CommentForm';
import { CommentList } from '../components/blog/CommentList';

export function ArticleDetail() {
  const { slug } = useParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: article, isLoading } = useQuery({
    queryKey: ['article', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('articles')
        .select(`
          *,
          author:profiles!articles_author_id_fkey(full_name),
          likes_count:article_likes(count),
          comments:article_comments(
            id,
            content,
            created_at,
            user:profiles!article_comments_user_id_fkey(full_name)
          )
        `)
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { mutate: toggleLike } = useMutation({
    mutationFn: async () => {
      const { data: existingLike } = await supabase
        .from('article_likes')
        .select()
        .eq('article_id', article.id)
        .eq('user_id', user.id)
        .single();

      if (existingLike) {
        await supabase
          .from('article_likes')
          .delete()
          .eq('article_id', article.id)
          .eq('user_id', user.id);
      } else {
        await supabase
          .from('article_likes')
          .insert({ article_id: article.id, user_id: user.id });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['article', slug]);
    },
  });

  const { mutate: addComment } = useMutation({
    mutationFn: async (content: string) => {
      const { error } = await supabase
        .from('article_comments')
        .insert({ article_id: article.id, user_id: user.id, content });

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['article', slug]);
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
    <div className="max-w-3xl mx-auto">
      <article className="bg-white rounded-xl shadow-sm p-8 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {article.title}
        </h1>
        <div className="flex items-center justify-between mb-8 text-sm">
          <div className="flex items-center gap-4">
            <span className="text-gray-500">
              By {article.author.full_name}
            </span>
            <span className="text-gray-500">
              {formatDistanceToNow(new Date(article.created_at), { addSuffix: true })}
            </span>
          </div>
          <button
            onClick={() => toggleLike()}
            className="flex items-center gap-1 text-gray-500 hover:text-indigo-600"
            disabled={!user}
          >
            <Heart className="w-4 h-4" /> {article.likes_count?.[0]?.count || 0}
          </button>
        </div>
        <div className="prose max-w-none">
          {article.content}
        </div>
      </article>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Comments ({article.comments?.length || 0})
        </h2>
        {user ? (
          <div className="mb-8">
            <CommentForm articleId={article.id} onSubmit={addComment} />
          </div>
        ) : (
          <p className="text-gray-500 mb-8">
            Please sign in to leave a comment.
          </p>
        )}
        <CommentList comments={article.comments || []} />
      </div>
    </div>
  );
}