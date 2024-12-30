import React from 'react';

interface ApplicationFiltersProps {
  filters: {
    status: string;
    date: string;
    type: string;
  };
  onChange: (key: string, value: string) => void;
}

export function ApplicationFilters({ filters, onChange }: ApplicationFiltersProps) {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      <select
        value={filters.status}
        onChange={(e) => onChange('status', e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">Application Status</option>
        <option value="pending">Pending</option>
        <option value="reviewing">Reviewing</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>

      <select
        value={filters.date}
        onChange={(e) => onChange('date', e.target.value)}
        className="border rounded-lg p-2"
      >
        <option value="">Date Applied</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="quarter">Last 3 Months</option>
      </select>

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
    </div>
  );
}