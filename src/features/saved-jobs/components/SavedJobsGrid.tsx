import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, DollarSign, Calendar, Trash2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface SavedJobsGridProps {
  search: string;
  filters: {
    type: string;
    location: string;
    salary: string;
  };
}

export function SavedJobsGrid({ search, filters }: SavedJobsGridProps) {
  const savedJobs = [
    {
      id: '1',
      title: 'Senior Tech Recruiter',
      company: 'Global Talent Solutions',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£60,000 - £80,000',
      savedDate: '2024-02-15',
      description: 'Leading tech recruitment role with excellent commission structure...',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=100&h=100'
    },
    // Add more saved jobs...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {savedJobs.map((job) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden group"
        >
          <div className="p-6">
            <div className="flex items-start gap-4">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1">
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-lg font-medium text-gray-900 hover:text-indigo-600 line-clamp-1"
                >
                  {job.title}
                </Link>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Building2 className="w-4 h-4 mr-1" />
                  {job.company}
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <DollarSign className="w-4 h-4 mr-2" />
                {job.salary}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                Saved on {job.savedDate}
              </div>
            </div>

            <p className="mt-4 text-gray-600 text-sm line-clamp-2">
              {job.description}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to={`/jobs/${job.id}`}
                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </Link>
              <button className="text-gray-400 hover:text-red-600 transition-colors">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}