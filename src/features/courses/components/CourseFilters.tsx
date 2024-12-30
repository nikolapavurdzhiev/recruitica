import React from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, Sliders } from 'lucide-react';

interface CourseFiltersProps {
  filters: {
    category: string;
    level: string;
    duration: string;
    price: string;
  };
  onFilterChange: (key: string, value: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
}

export function CourseFilters({ filters, onFilterChange, search, onSearchChange }: CourseFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50">
          <Sliders className="w-5 h-5" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={filters.category}
          onChange={(e) => onFilterChange('category', e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Categories</option>
          <option value="technical">Technical Recruitment</option>
          <option value="executive">Executive Search</option>
          <option value="healthcare">Healthcare Recruitment</option>
          <option value="it">IT Recruitment</option>
        </select>

        <select
          value={filters.level}
          onChange={(e) => onFilterChange('level', e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">All Levels</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <select
          value={filters.duration}
          onChange={(e) => onFilterChange('duration', e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Any Duration</option>
          <option value="0-2">0-2 hours</option>
          <option value="2-5">2-5 hours</option>
          <option value="5+">5+ hours</option>
        </select>

        <select
          value={filters.price}
          onChange={(e) => onFilterChange('price', e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Any Price</option>
          <option value="free">Free</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  );
}