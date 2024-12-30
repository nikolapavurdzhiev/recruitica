import React from 'react';
import { Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export function PodcastHero() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden mb-12">
      <div className="relative px-8 py-16 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Headphones className="w-16 h-16 text-white/90 mx-auto" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Recruitment Insights Podcast
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-white/90 max-w-2xl mx-auto"
        >
          Listen to industry experts share their knowledge and experiences in recruitment
        </motion.p>
      </div>
    </div>
  );
}