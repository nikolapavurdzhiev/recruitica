import React from 'react';

interface SavedJobsFiltersProps {
  filters: {
    type: string;
    location: string;
    salary: string;
  };
  onChange: (key: string, value: string) => void;
}

export function SavedJobsFilters({ filters, onChange }: SavedJobsFiltersProps) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <select
        value={filters.type}
        onChange={(e) => onChange('type', e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">Job Type</option>
        <option value="full-time">Full Time</option>
        <option value="contract">Contract</option>
        <option value="part-time">Part Time</option>
      </select>

      <select
        value={filters.location}
        onChange={(e) => onChange('location', e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">Location</option>
        <option value="london">London</option>
        <option value="manchester">Manchester</option>
        <option value="remote">Remote</option>
      </select>

      <select
        value={filters.salary}
        onChange={(e) => onChange('salary', e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">Salary Range</option>
        <option value="0-40k">£0 - £40k</option>
        <option value="40k-60k">£40k - £60k</option>
        <option value="60k-80k">£60k - £80k</option>
        <option value="80k+">£80k+</option>
      </select>
    </div>
  );
}