import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Trash2 } from 'lucide-react';

export function SavedJobs() {
  const savedJobs = [
    {
      id: '1',
      title: 'Senior Tech Recruiter',
      company: 'Global Talent Solutions',
      savedDate: '2024-02-15'
    },
    {
      id: '2',
      title: 'Recruitment Team Lead',
      company: 'Recruit Masters',
      savedDate: '2024-02-14'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Saved Jobs</h2>
      
      <div className="space-y-4">
        {savedJobs.map((job) => (
          <div key={job.id} className="flex items-center justify-between">
            <div>
              <Link
                to={`/jobs/${job.id}`}
                className="font-medium text-gray-900 hover:text-indigo-600"
              >
                {job.title}
              </Link>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <Building2 className="w-4 h-4 mr-2" />
                {job.company}
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}