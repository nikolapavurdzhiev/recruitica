import React from 'react';
import { Link } from 'react-router-dom';
import { ArticleMeta } from './ArticleMeta';
import { ArticleMetrics } from './ArticleMetrics';
import type { Article } from '../types';

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const excerpt = article.content.slice(0, 150) + '...';
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <Link to={`/blog/${article.slug}`}>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600">
          {article.title}
        </h3>
      </Link>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center justify-between text-sm">
        <ArticleMeta 
          author={article.author.full_name}
          date={article.created_at}
        />
        <ArticleMetrics metrics={article} />
      </div>
    </div>
  );
}