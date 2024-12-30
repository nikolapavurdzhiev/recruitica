import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ArticleMeta } from './ArticleMeta';
import { ArticleMetrics } from './ArticleMetrics';
import type { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  const excerpt = article.content.slice(0, 200) + '...';

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
      <div className="h-64 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978')] bg-cover bg-center" />
      <div className="p-8">
        <Link 
          to={`/blog/${article.slug}`}
          className="inline-block text-2xl font-bold text-gray-900 hover:text-indigo-600 mb-4"
        >
          {article.title}
        </Link>
        <p className="text-gray-600 mb-6">{excerpt}</p>
        
        <div className="flex items-center justify-between">
          <ArticleMeta 
            author={article.author.full_name}
            date={article.created_at}
          />
          <div className="flex items-center gap-4">
            <ArticleMetrics metrics={article} />
            <Link 
              to={`/blog/${article.slug}`}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}