import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import type { Job } from '../types';

interface JobDetailContentProps {
  job: Job;
}

export function JobDetailContent({ job }: JobDetailContentProps) {
  const sections = [
    {
      title: 'Job Description',
      content: job.description,
      type: 'text'
    },
    {
      title: 'Key Responsibilities',
      content: job.responsibilities,
      type: 'list'
    },
    {
      title: 'Requirements',
      content: job.requirements,
      type: 'list'
    },
    {
      title: 'Benefits',
      content: job.benefits,
      type: 'list'
    }
  ];

  return (
    <div className="space-y-8">
      {sections.map((section, index) => (
        <motion.section
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {section.title}
          </h2>
          
          {section.type === 'text' ? (
            <p className="text-gray-600 whitespace-pre-line">
              {section.content as string}
            </p>
          ) : (
            <ul className="space-y-3">
              {(section.content as string[]).map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.section>
      ))}
    </div>
  );
}