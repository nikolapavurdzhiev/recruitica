import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

export function FeaturedCourse() {
  const course = {
    id: 'featured-1',
    title: 'Complete Recruitment Professional Certification',
    instructor: 'David Anderson',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    duration: '20 hours',
    students: 2500,
    rating: 4.9,
    price: 499,
    features: [
      'Comprehensive recruitment methodology',
      'Advanced sourcing techniques',
      'Client relationship management',
      'Industry best practices',
      'Real-world case studies'
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto">
          <img 
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:hidden" />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium">
              Featured Course
            </span>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {course.title}
          </h2>

          <p className="text-gray-600 mb-6">
            by {course.instructor}
          </p>

          <div className="flex items-center gap-6 mb-6 text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {course.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {course.students} students
            </span>
          </div>

          <div className="space-y-3 mb-8">
            {course.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">
              £{course.price}
            </span>
            <Link
              to={`/courses/${course.id}`}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Enroll Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}