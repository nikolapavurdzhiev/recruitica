import React from 'react';
import { Filter } from 'lucide-react';

interface CompanyFiltersProps {
  filters: {
    industry: string;
    size: string;
    location: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

export function CompanyFilters({ filters, onFilterChange }: CompanyFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-500" />
        <span className="font-medium text-gray-700">Filters</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={filters.industry}
          onChange={(e) => onFilterChange('industry', e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">Industry</option>
          <option value="tech">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
        
        <select
          value={filters.size}
          onChange={(e) => onFilterChange('size', e.target.value)}
          className="border rounded-lg p-2"
        >
          <option value="">Company Size</option>
          <option value="1-50">1-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
        
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
      </div>
    </div>
  );
}