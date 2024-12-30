import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';

export function NotificationFilters() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    status: '',
    date: ''
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notifications..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <select
            value={filters.type}
            onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
            className="border rounded-lg p-2"
          >
            <option value="">Notification Type</option>
            <option value="application">Applications</option>
            <option value="message">Messages</option>
            <option value="interview">Interviews</option>
            <option value="job">Job Alerts</option>
          </select>

          <select
            value={filters.status}
            onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
            className="border rounded-lg p-2"
          >
            <option value="">Read Status</option>
            <option value="read">Read</option>
            <option value="unread">Unread</option>
          </select>

          <select
            value={filters.date}
            onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
            className="border rounded-lg p-2"
          >
            <option value="">Time Period</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
        </div>
      )}
    </div>
  );
}