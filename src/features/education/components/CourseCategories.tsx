import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Brain, Briefcase, Award, BarChart, Globe, Shield, ArrowRight } from 'lucide-react';

const categories = [
  {
    icon: Users,
    name: 'Talent Sourcing',
    description: 'Master candidate sourcing and engagement strategies',
    color: 'bg-blue-500'
  },
  {
    icon: Target,
    name: 'Executive Search',
    description: 'Learn high-level recruitment techniques',
    color: 'bg-purple-500'
  },
  {
    icon: Brain,
    name: 'Interview Skills',
    description: 'Develop effective interviewing techniques',
    color: 'bg-pink-500'
  },
  {
    icon: Briefcase,
    name: 'Industry Knowledge',
    description: 'Stay updated with recruitment trends',
    color: 'bg-orange-500'
  },
  {
    icon: Award,
    name: 'Best Practices',
    description: 'Learn recruitment industry standards',
    color: 'bg-green-500'
  },
  {
    icon: BarChart,
    name: 'Analytics',
    description: 'Master recruitment metrics and KPIs',
    color: 'bg-red-500'
  },
  {
    icon: Globe,
    name: 'Global Recruitment',
    description: 'International recruitment strategies',
    color: 'bg-teal-500'
  },
  {
    icon: Shield,
    name: 'Compliance',
    description: 'Stay compliant with recruitment laws',
    color: 'bg-indigo-500'
  }
];

export function CourseCategories() {
  return (
    <section id="courses" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Course Categories</h2>
        <p className="mt-4 text-lg text-gray-600">Explore our comprehensive learning tracks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-4`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
            <p className="text-gray-600 text-sm">{category.description}</p>
            <Link
              to={`/education/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="mt-4 inline-flex items-center text-sm text-indigo-600 hover:text-indigo-700"
            >
              View Courses <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}