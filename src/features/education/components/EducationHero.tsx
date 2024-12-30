import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export function EducationHero() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10" />
      <div className="relative px-6 py-24 sm:px-12 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Level Up Your Recruitment Career
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Access expert-led courses, industry resources, and certification programs designed for recruitment professionals
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#courses"
              className="rounded-xl bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 transition-colors"
            >
              Explore Courses
            </a>
            <a
              href="#paths"
              className="text-lg font-semibold leading-6 text-white hover:text-gray-100 transition-colors"
            >
              View Learning Paths <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}