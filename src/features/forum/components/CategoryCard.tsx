import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import * as Icons from 'lucide-react';
import type { ForumCategory } from '../types';

interface CategoryCardProps {
  category: ForumCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const Icon = Icons[category.icon as keyof typeof Icons];
  const latestTopic = category.latest_topic?.[0];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-start gap-6">
        <div className="p-3 bg-indigo-50 rounded-lg">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>

        <div className="flex-1 min-w-0">
          <Link 
            to={`/forum/${category.slug}`}
            className="text-xl font-semibold text-gray-900 hover:text-indigo-600"
          >
            {category.name}
          </Link>
          <p className="text-gray-600 mt-1">{category.description}</p>

          {latestTopic && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Latest topic</div>
              <Link 
                to={`/forum/topic/${latestTopic.id}`}
                className="font-medium text-gray-900 hover:text-indigo-600"
              >
                {latestTopic.title}
              </Link>
              <div className="text-sm text-gray-500 mt-1">
                by {latestTopic.author?.full_name} •{' '}
                {formatDistanceToNow(new Date(latestTopic.created_at), { addSuffix: true })}
              </div>
            </div>
          )}
        </div>

        <div className="text-center px-4">
          <div className="text-2xl font-semibold text-gray-900">
            {category.topics_count}
          </div>
          <div className="text-sm text-gray-500">Topics</div>
        </div>
      </div>
    </div>
  );
}