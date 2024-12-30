import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, DollarSign } from 'lucide-react';
import type { Job } from '../types';

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <Link to={`/jobs/${job.id}`}>
            <h2 className="text-xl font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
              {job.title}
            </h2>
          </Link>
          <p className="text-gray-600">{job.company}</p>
          <div className="flex flex-wrap gap-4 mt-2">
            <span className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              {job.location}
            </span>
            <span className="flex items-center text-gray-600">
              <Briefcase className="w-4 h-4 mr-1" />
              {job.experience}
            </span>
            <span className="flex items-center text-gray-600">
              <DollarSign className="w-4 h-4 mr-1" />
              {job.salary}
            </span>
          </div>
        </div>
        <div>
          <Link
            to={`/jobs/${job.id}`}
            className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
      <p className="mt-4 text-gray-600 line-clamp-2">{job.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {job.skills.slice(0, 3).map((skill, index) => (
          <span 
            key={index}
            className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-gray-500 text-sm">
            +{job.skills.length - 3} more
          </span>
        )}
      </div>
    </div>
  );
}