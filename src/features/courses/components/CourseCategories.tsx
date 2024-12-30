import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  MessageSquare, 
  TrendingUp,
  Database,
  Briefcase,
  Brain,
  Award
} from 'lucide-react';

export function CourseCategories() {
  const categories = [
    {
      icon: Users,
      name: 'Talent Sourcing',
      count: 12,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Target,
      name: 'Executive Search',
      count: 8,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: MessageSquare,
      name: 'Interview Skills',
      count: 15,
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      name: 'Business Development',
      count: 10,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: Database,
      name: 'Tech Recruitment',
      count: 14,
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Briefcase,
      name: 'Industry Knowledge',
      count: 9,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Brain,
      name: 'Recruitment Psychology',
      count: 7,
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: Award,
      name: 'Best Practices',
      count: 11,
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={`/courses/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group"
            >
              <div className={`p-3 rounded-xl ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6" />
              </div>
              <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
              <span className="text-sm text-gray-500">{category.count} courses</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}