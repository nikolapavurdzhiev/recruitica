import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Building2, DollarSign, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { premiumJobs } from '../../features/jobs/data/premiumJobs';

export function PremiumJobs() {
  const navigate = useNavigate();

  const handleApply = (jobId: string) => {
    navigate(`/jobs/${jobId}`);
  };

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Premium Opportunities</h2>
          <p className="text-gray-600 mt-1">Exclusive positions with industry-leading packages</p>
        </div>
        <Link 
          to="/jobs"
          className="text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-1"
        >
          View all jobs
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {premiumJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-xl shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={job.logo_url}
                  alt={`${job.company} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <Link to={`/jobs/${job.id}`}>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {job.title}
                    </h3>
                  </Link>
                  <div className="text-gray-600">{job.company}</div>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  <span>{job.salary}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {job.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full"
                  >
                    <Star className="w-3 h-3" />
                    {benefit}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={() => handleApply(job.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}