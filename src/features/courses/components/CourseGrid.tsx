import React from 'react';
import { CourseCard } from './CourseCard';
import { useCourses } from '../hooks/useCourses';
import type { CourseFilters } from '../types';

interface CourseGridProps {
  filters: CourseFilters;
}

export function CourseGrid({ filters }: CourseGridProps) {
  const { data: courses, isLoading, error } = useCourses(filters);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm h-96 animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">Error loading courses. Please try again later.</p>
      </div>
    );
  }

  if (!courses?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No courses found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard 
          key={course.id} 
          course={{
            ...course,
            students: course._count?.enrollments || 0,
            duration: `${Math.round(course.duration / 60)} hours`
          }} 
        />
      ))}
    </div>
  );
}