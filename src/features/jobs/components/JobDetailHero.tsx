import React from 'react';
import { Building2, MapPin, Clock, BriefcaseIcon, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';
import type { Job } from '../types';

interface JobDetailHeroProps {
  job: Job;
}

export function JobDetailHero({ job }: JobDetailHeroProps) {
  return (
    <div className="relative">
      {/* Cover Image */}
      <div className="h-64 rounded-2xl overflow-hidden">
        <img
          src={job.cover_image || 'https://images.unsplash.com/photo-1497366216548-37526070297c'}
          alt={`${job.title} cover`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 bg-white rounded-xl p-2 flex items-center justify-center">
            {job.company_logo ? (
              <img
                src={job.company_logo}
                alt={job.company}
                className="max-w-full max-h-full object-contain"
              />
            ) : (
              <Building2 className="w-12 h-12 text-gray-400" />
            )}
          </div>
          
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-white mb-2"
            >
              {job.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                {job.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-1">
                <BriefcaseIcon className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Posted {formatDistanceToNow(new Date(job.posted_at), { addSuffix: true })}
              </span>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">{job.salary}</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}