import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageSquare } from 'lucide-react';

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    content: string;
    slug: string;
    created_at: string;
    author: {
      full_name: string;
    };
    likes_count: number;
    comments_count: number;
  };
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
        <div className="flex items-center gap-4">
          <span className="text-gray-500">
            By {article.author.full_name}
          </span>
          <span className="text-gray-500">
            {formatDistanceToNow(new Date(article.created_at), { addSuffix: true })}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-gray-500">
            <Heart className="w-4 h-4" /> {article.likes_count || 0}
          </span>
          <span className="flex items-center gap-1 text-gray-500">
            <MessageSquare className="w-4 h-4" /> {article.comments_count || 0}
          </span>
        </div>
      </div>
    </div>
  );
}