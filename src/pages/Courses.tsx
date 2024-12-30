import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { CourseFilters } from '../features/courses/components/CourseFilters';
import { CourseGrid } from '../features/courses/components/CourseGrid';
import type { CourseFilters as Filters } from '../features/courses/types';

export function Courses() {
  const [filters, setFilters] = useState<Filters>({
    category: '',
    level: '',
    duration: '',
    price: '',
    search: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 mb-8 text-white text-center"
      >
        <GraduationCap className="w-16 h-16 mx-auto mb-6 opacity-90" />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Level Up Your Recruitment Skills
        </h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">
          Expert-led courses designed to help you master modern recruitment techniques and advance your career
        </p>
      </motion.div>

      <CourseFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        search={filters.search}
        onSearchChange={(value) => handleFilterChange('search', value)}
      />

      <CourseGrid filters={filters} />
    </div>
  );
}