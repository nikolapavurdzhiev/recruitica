import React from 'react';
import { Bookmark, Calendar, Building2, DollarSign } from 'lucide-react';

export function SavedJobsStats() {
  const stats = [
    { label: 'Saved Jobs', value: '16', icon: Bookmark, change: '+3 this week' },
    { label: 'New Matches', value: '8', icon: Calendar, change: 'Last 7 days' },
    { label: 'Companies', value: '12', icon: Building2, change: 'Across industries' },
    { label: 'Salary Range', value: '£45k-80k', icon: DollarSign, change: 'Average range' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <stat.icon className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
          </div>
          <p className="text-gray-600 mt-2">{stat.label}</p>
          <p className="text-sm text-indigo-600 mt-1">{stat.change}</p>
        </div>
      ))}
    </div>
  );
}