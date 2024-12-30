import React from 'react';
import { useForumCategories } from '../features/forum/hooks/useForumCategories';
import { CategoryCard } from '../features/forum/components/CategoryCard';
import { MessageSquare } from 'lucide-react';

export function Forum() {
  const { data: categories, isLoading } = useForumCategories();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-sm p-8 mb-8 text-white">
        <div className="flex items-center justify-center mb-6">
          <MessageSquare className="w-16 h-16 opacity-90" />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">Community Forum</h1>
        <p className="text-lg text-center opacity-90">
          Join the discussion with fellow recruitment professionals
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories?.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}