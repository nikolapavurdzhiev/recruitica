import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Heart, MessageSquare, ArrowRight } from 'lucide-react';

interface FeaturedArticleProps {
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
          <div className="flex items-center gap-4">
            <span className="text-gray-500">By {article.author.full_name}</span>
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