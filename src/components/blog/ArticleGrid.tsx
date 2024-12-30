import React from 'react';
import { ArticleCard } from './ArticleCard';

interface ArticleGridProps {
  articles: Array<{
    id: string;
    title: string;
    content: string;
    slug: string;
    created_at: string;
    likes_count: number;
    comments_count: number;
    author: {
      full_name: string;
    };
  }>;
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}