import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Star } from 'lucide-react';

const paths = [
  {
    title: 'Entry-Level Recruiter',
    duration: '3-6 months',
    level: 'Beginner',
    modules: [
      'Recruitment Fundamentals',
      'Candidate Sourcing',
      'Interview Basics',
      'ATS Training'
    ]
  },
  {
    title: 'Senior Recruiter',
    duration: '6-12 months',
    level: 'Intermediate',
    modules: [
      'Advanced Sourcing Strategies',
      'Talent Pipeline Building',
      'Recruitment Marketing',
      'Data-Driven Recruiting'
    ]
  },
  {
    title: 'Recruitment Leader',
    duration: '12+ months',
    level: 'Advanced',
    modules: [
      'Team Management',
      'Strategic Recruitment',
      'Budget Planning',
      'Recruitment Analytics'
    ]
  }
];

export function LearningPaths() {
  return (
    <section id="paths" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Learning Paths</h2>
        <p className="mt-4 text-lg text-gray-600">Structured programs to advance your career</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paths.map((path, index) => (
          <motion.div
            key={path.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-6">
              <Briefcase className="w-8 h-8 text-indigo-600" />
              <span className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full">
                {path.level}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
            <p className="text-gray-600 mb-4">{path.duration}</p>
            
            <ul className="space-y-3 mb-6">
              {path.modules.map((module) => (
                <li key={module} className="flex items-start">
                  <Star className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{module}</span>
                </li>
              ))}
            </ul>

            <button className="w-full flex items-center justify-center px-4 py-2 border border-indigo-600 rounded-lg text-indigo-600 hover:bg-indigo-50 transition-colors">
              Start Path <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}