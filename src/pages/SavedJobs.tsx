import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Search, Filter, Briefcase } from 'lucide-react';
import { SavedJobsGrid } from '../features/saved-jobs/components/SavedJobsGrid';
import { SavedJobsFilters } from '../features/saved-jobs/components/SavedJobsFilters';
import { SavedJobsStats } from '../features/saved-jobs/components/SavedJobsStats';

export function SavedJobs() {
  const [showFilters, setShowFilters] = useState(false);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    salary: ''
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Saved Jobs</h1>
          <p className="text-gray-600 mt-1">Keep track of interesting opportunities</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <SavedJobsStats />

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search saved jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <SavedJobsFilters
            filters={filters}
            onChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
          />
        )}
      </div>

      <SavedJobsGrid search={search} filters={filters} />
    </div>
  );
}