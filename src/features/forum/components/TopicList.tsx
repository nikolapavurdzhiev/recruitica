import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Eye } from 'lucide-react';
import type { ForumTopic } from '../types';

interface TopicListProps {
  topics: ForumTopic[];
}

export function TopicList({ topics }: TopicListProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div key={topic.id} className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <Link 
                to={`/forum/topic/${topic.id}`}
                className="text-lg font-semibold text-gray-900 hover:text-indigo-600"
              >
                {topic.title}
              </Link>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                <span>by {topic.author?.full_name}</span>
                <span>
                  {formatDistanceToNow(new Date(topic.created_at), { addSuffix: true })}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-500">
                  <MessageSquare className="w-4 h-4" />
                  <span className="font-semibold">{topic.posts_count}</span>
                </div>
                <div className="text-xs text-gray-500">Replies</div>
              </div>

              <div className="text-center">
                <div className="flex items-center gap-1 text-gray-500">
                  <Eye className="w-4 h-4" />
                  <span className="font-semibold">{topic.views_count}</span>
                </div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
            </div>
          </div>

          {topic.latest_post && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">Latest reply</div>
              <div className="font-medium text-gray-900">
                {topic.latest_post.author?.full_name}
              </div>
              <div className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(topic.latest_post.created_at), { addSuffix: true })}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}