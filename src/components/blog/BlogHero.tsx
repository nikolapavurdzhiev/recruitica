import React from 'react';
import { BookOpen } from 'lucide-react';

export function BlogHero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl overflow-hidden mb-12">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902')] bg-cover bg-center" />
      </div>
      <div className="relative px-8 py-16 text-center">
        <BookOpen className="w-16 h-16 text-white/90 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-white mb-4">
          Recruitment Insights
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Expert perspectives, industry trends, and practical advice for recruitment professionals
        </p>
      </div>
    </div>
  );
}