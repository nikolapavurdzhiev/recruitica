import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  created_at: string;
}

interface CompanyJobsProps {
  jobs: Job[];
}

export function CompanyJobs({ jobs }: CompanyJobsProps) {
  if (!jobs?.length) {
    return (
      <div className="text-center py-8 bg-gray-50 rounded-lg">
        <p className="text-gray-600">No open positions at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Link
          key={job.id}
          to={`/jobs/${job.id}`}
          className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
                </span>
              </div>
            </div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              {job.type}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}