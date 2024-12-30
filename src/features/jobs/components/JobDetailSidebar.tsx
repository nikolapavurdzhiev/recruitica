import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, Clock, Briefcase, GraduationCap, Users, Globe } from 'lucide-react';
import type { Job } from '../types';

interface JobDetailSidebarProps {
  job: Job;
  onApply: () => void;
}

export function JobDetailSidebar({ job, onApply }: JobDetailSidebarProps) {
  const details = [
    { icon: Building2, label: 'Company', value: job.company },
    { icon: MapPin, label: 'Location', value: job.location },
    { icon: Briefcase, label: 'Job Type', value: job.type },
    { icon: GraduationCap, label: 'Experience', value: job.experience },
    { icon: Users, label: 'Team Size', value: '10-15 people' },
    { icon: Globe, label: 'Work Type', value: job.work_type || 'Hybrid' }
  ];

  return (
    <div className="space-y-6">
      {/* Apply Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <button
          onClick={onApply}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Apply Now
        </button>
      </motion.div>

      {/* Job Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <h3 className="font-semibold text-gray-900 mb-4">Job Overview</h3>
        <div className="space-y-4">
          {details.map((detail) => (
            <div key={detail.label} className="flex items-center gap-3 text-gray-600">
              <detail.icon className="w-5 h-5" />
              <div>
                <p className="text-sm text-gray-500">{detail.label}</p>
                <p className="font-medium">{detail.value}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Required Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-6 shadow-sm"
      >
        <h3 className="font-semibold text-gray-900 mb-4">Required Skills</h3>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}