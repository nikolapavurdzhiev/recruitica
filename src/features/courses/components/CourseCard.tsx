import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    instructor: string;
    thumbnail: string;
    duration: string;
    students: number;
    rating: number;
    price: number;
    level: string;
    category: string;
  };
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden group"
    >
      <div className="relative">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          £{course.price}
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          <Shield className="w-4 h-4 text-indigo-600" />
          {course.level}
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-sm text-indigo-600 font-medium mb-2">{course.category}</div>
        <Link
          to={`/courses/${course.id}`}
          className="block text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2"
        >
          {course.title}
        </Link>
        
        <p className="text-gray-600 mb-4">
          by {course.instructor}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {course.students.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            {course.rating}
          </div>
        </div>
      </div>
    </motion.div>
  );
}