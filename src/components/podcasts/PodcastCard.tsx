import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface PodcastCardProps {
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

export function PodcastCard({ podcast }: PodcastCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden group"
    >
      <div className="relative">
        <img
          src={podcast.cover_image_url}
          alt={podcast.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center"
          >
            <Play className="w-6 h-6 text-indigo-600 ml-1" />
          </motion.div>
        </div>
      </div>
      
      <div className="p-6">
        <Link to={`/podcasts/${podcast.id}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {podcast.title}
          </h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{podcast.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">By {podcast.author.full_name}</span>
          <span className="text-gray-500">
            {formatDistanceToNow(new Date(podcast.created_at), { addSuffix: true })}
          </span>
        </div>
      </div>
    </motion.div>
  );
}