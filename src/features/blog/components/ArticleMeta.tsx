import React from 'react';
import { formatDistanceToNow } from 'date-fns';

interface ArticleMetaProps {
  author: string;
  date: string;
  className?: string;
}

export function ArticleMeta({ author, date, className = '' }: ArticleMetaProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="text-gray-500">By {author}</span>
      <span className="text-gray-500">
        {formatDistanceToNow(new Date(date), { addSuffix: true })}
      </span>
    </div>
  );
}