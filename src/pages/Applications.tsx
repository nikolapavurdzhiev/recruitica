import { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { ApplicationsTable } from '../features/applications/components/ApplicationsTable';
import { ApplicationFilters } from '../features/applications/components/ApplicationFilters';
import { ApplicationStats } from '../features/applications/components/ApplicationStats';

export function Applications() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    date: '',
    type: ''
  });
  const [search, setSearch] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
          <p className="text-gray-600 mt-1">Track and manage your job applications</p>
        </div>
      </div>

      <ApplicationStats />

      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
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
          <ApplicationFilters
            filters={filters}
            onChange={(key, value) => setFilters(prev => ({ ...prev, [key]: value }))}
          />
        )}
      </div>

      <ApplicationsTable search={search} filters={filters} />
    </div>
  );
}