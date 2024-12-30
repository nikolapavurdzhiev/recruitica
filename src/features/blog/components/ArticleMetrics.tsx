import React from 'react';
import { Heart, MessageSquare } from 'lucide-react';
import type { ArticleMetrics as Metrics } from '../types';

interface ArticleMetricsProps {
  metrics: Metrics;
  className?: string;
}

export function ArticleMetrics({ metrics, className = '' }: ArticleMetricsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="flex items-center gap-1 text-gray-500">
        <Heart className="w-4 h-4" /> {metrics.likes_count?.[0]?.count || 0}
      </span>
      <span className="flex items-center gap-1 text-gray-500">
        <MessageSquare className="w-4 h-4" /> {metrics.comments_count?.[0]?.count || 0}
      </span>
    </div>
  );
}