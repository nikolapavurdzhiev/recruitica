import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface FeaturedPodcastProps {
  podcast: {
    id: string;
    title: string;
    description: string;
    cover_image_url: string;
    created_at: string;
    author: {
      full_name: string;
    };
    episodes: { count: number }; // Updated type to match Supabase response
  };
}

export function FeaturedPodcast({ podcast }: FeaturedPodcastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img
            src={podcast.cover_image_url}
            alt={podcast.title}
            className="w-full h-full object-cover"
          />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
              <Play className="w-8 h-8 text-indigo-600 ml-1" />
            </div>
          </motion.div>
        </div>

        <div className="p-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium mb-4">
            Featured Podcast
          </div>
          
          <Link to={`/podcasts/${podcast.id}`}>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-indigo-600 transition-colors">
              {podcast.title}
            </h2>
          </Link>

          <p className="text-gray-600 mb-6">{podcast.description}</p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              {podcast.episodes.count} episodes
            </span>
            <span>
              Updated {formatDistanceToNow(new Date(podcast.created_at), { addSuffix: true })}
            </span>
          </div>

          <div className="mt-8">
            <Link
              to={`/podcasts/${podcast.id}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Listen Now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}