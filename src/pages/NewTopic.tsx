import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';
import { TopicForm } from '../components/forum/TopicForm';

export function NewTopic() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: category } = useQuery({
    queryKey: ['forum-category', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('forum_categories')
        .select('id, name')
        .eq('slug', slug)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { mutate: createTopic, isPending } = useMutation({
    mutationFn: async ({ title, content }: { title: string; content: string }) => {
      if (!category) throw new Error('Category not found');

      const { data, error } = await supabase
        .from('forum_topics')
        .insert({
          title,
          content,
          category_id: category.id,
          author_id: user?.id,
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      navigate(`/forum/topic/${data.id}`);
    },
  });

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          New Topic in {category?.name}
        </h1>
        <p className="text-gray-600">Share your thoughts with the community</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <TopicForm
          onSubmit={(data) => createTopic(data)}
          isSubmitting={isPending}
        />
      </div>
    </div>
  );
}