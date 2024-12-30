import React from 'react';
import { Filter, X } from 'lucide-react';
import type { JobFilters } from '../types';

interface JobFiltersProps {
  filters: JobFilters;
  showFilters: boolean;
  onToggleFilters: () => void;
  onFilterChange: (key: keyof JobFilters, value: string) => void;
}

export function JobFilters({ filters, showFilters, onToggleFilters, onFilterChange }: JobFiltersProps) {
  return (
    <>
      <button
        onClick={onToggleFilters}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
      >
        {showFilters ? <X className="w-5 h-5" /> : <Filter className="w-5 h-5" />}
        Filters
      </button>

      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="">Location</option>
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
            <option value="birmingham">Birmingham</option>
            <option value="remote">Remote</option>
          </select>
          <select
            value={filters.experience}
            onChange={(e) => onFilterChange('experience', e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="">Experience Level</option>
            <option value="0-2">Entry Level (0-2 years)</option>
            <option value="3-5">Mid Level (3-5 years)</option>
            <option value="5+">Senior Level (5+ years)</option>
          </select>
          <select
            value={filters.type}
            onChange={(e) => onFilterChange('type', e.target.value)}
            className="border rounded-lg p-2"
          >
            <option value="">Job Type</option>
            <option value="full-time">Full Time</option>
            <option value="contract">Contract</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
      )}
    </>
  );
}