import React from 'react';
import { MapPin, Building2, Clock, Briefcase, GraduationCap } from 'lucide-react';
import type { Job } from '../types';

interface JobSidebarProps {
  job: Job;
}

export function JobSidebar({ job }: JobSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Apply Button */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <button className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
          Apply Now
        </button>
      </div>

      {/* Job Overview */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-gray-900 mb-4">Job Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Building2 className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Company</p>
              <p className="font-medium">{job.company}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <MapPin className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-medium">{job.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Briefcase className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Job Type</p>
              <p className="font-medium">{job.type}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <GraduationCap className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-medium">{job.experience}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Clock className="w-5 h-5" />
            <div>
              <p className="text-sm text-gray-500">Posted</p>
              <p className="font-medium">
                {new Date(job.posted_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Required Skills */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
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
      </div>
    </div>
  );
}