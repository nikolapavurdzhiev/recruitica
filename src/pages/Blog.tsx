import React from 'react';
import { BlogHero } from '../components/blog/BlogHero';
import { FeaturedArticle } from '../features/blog/components/FeaturedArticle';
import { ArticleGrid } from '../features/blog/components/ArticleGrid';
import { useArticles } from '../features/blog/hooks/useArticles';

export function Blog() {
  const { data: articles, isLoading, error } = useArticles();

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-red-50 text-red-800 p-4 rounded-lg">
          <p>Error loading articles. Please try again later.</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <BlogHero />
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
        </div>
      </div>
    );
  }

  const [featuredArticle, ...otherArticles] = articles || [];

  if (!articles?.length) {
    return (
      <div className="max-w-6xl mx-auto px-4">
        <BlogHero />
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <p className="text-gray-600">No articles available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <BlogHero />
      
      {featuredArticle && (
        <FeaturedArticle article={featuredArticle} />
      )}

      {otherArticles.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
          <ArticleGrid articles={otherArticles} />
        </div>
      )}
    </div>
  );
}