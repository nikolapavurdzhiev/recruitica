import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, DollarSign, Bookmark } from 'lucide-react';

export function RecommendedJobs() {
  const recommendedJobs = [
    {
      id: '1',
      title: 'Senior Tech Recruiter',
      company: 'Global Talent Solutions',
      location: 'London, UK',
      salary: '£60,000 - £80,000',
      matchPercentage: 95
    },
    {
      id: '2',
      title: 'Recruitment Team Lead',
      company: 'Recruit Masters',
      location: 'Manchester, UK',
      salary: '£70,000 - £90,000',
      matchPercentage: 90
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Recommended Jobs</h2>
        <p className="text-gray-600 mt-1">Based on your profile and preferences</p>
      </div>
      
      <div className="divide-y">
        {recommendedJobs.map((job) => (
          <div key={job.id} className="p-6 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div>
                <Link
                  to={`/jobs/${job.id}`}
                  className="text-lg font-medium text-gray-900 hover:text-indigo-600"
                >
                  {job.title}
                </Link>
                
                <div className="mt-2 space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building2 className="w-4 h-4 mr-2" />
                    {job.company}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {job.matchPercentage}% Match
                </span>
                <button className="text-gray-400 hover:text-indigo-600">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}