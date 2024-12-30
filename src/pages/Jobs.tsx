import React, { useState } from 'react';
import { Briefcase } from 'lucide-react';
import { mockJobs } from '../features/jobs/data/mockJobs';
import { JobSearch } from '../features/jobs/components/JobSearch';
import { JobFilters } from '../features/jobs/components/JobFilters';
import { JobCard } from '../features/jobs/components/JobCard';
import type { JobFilters as Filters } from '../features/jobs/types';

export function Jobs() {
  const [filters, setFilters] = useState<Filters>({
    location: '',
    experience: '',
    type: '',
    search: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (key: keyof Filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredJobs = mockJobs.filter(job => {
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.experience && !job.experience.toLowerCase().includes(filters.experience.toLowerCase())) return false;
    if (filters.type && !job.type.toLowerCase().includes(filters.type.toLowerCase())) return false;
    if (filters.search && !job.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !job.company.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-8 text-white">
        <div className="flex items-center justify-center mb-6">
          <Briefcase className="w-16 h-16 opacity-90" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">
          Find Your Dream Recruitment Role
        </h1>
        <p className="text-xl opacity-90 text-center max-w-2xl mx-auto mb-6">
          Discover opportunities with top recruitment agencies and in-house teams
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <JobSearch 
            value={filters.search}
            onChange={(value) => handleFilterChange('search', value)}
          />
          <JobFilters
            filters={filters}
            showFilters={showFilters}
            onToggleFilters={() => setShowFilters(!showFilters)}
            onFilterChange={handleFilterChange}
          />
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}