import React from 'react';
import type { ForumCategory } from '../types';

interface CategoryStatsProps {
  category: ForumCategory;
}

export function CategoryStats({ category }: CategoryStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-semibold text-gray-900">
          {category.topics_count}
        </div>
        <div className="text-sm text-gray-500">Topics</div>
      </div>
      
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-semibold text-gray-900">
          {/* This would come from the API */}
          142
        </div>
        <div className="text-sm text-gray-500">Posts</div>
      </div>
      
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-semibold text-gray-900">
          {/* This would come from the API */}
          38
        </div>
        <div className="text-sm text-gray-500">Active Users</div>
      </div>
      
      <div className="bg-white p-4 rounded-lg text-center">
        <div className="text-2xl font-semibold text-gray-900">
          {/* This would come from the API */}
          12
        </div>
        <div className="text-sm text-gray-500">New Today</div>
      </div>
    </div>
  );
}