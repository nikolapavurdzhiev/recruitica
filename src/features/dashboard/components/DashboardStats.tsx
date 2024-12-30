import React from 'react';
import { FileSearch, Send, ThumbsUp, Eye } from 'lucide-react';

export function DashboardStats() {
  const stats = [
    { label: 'Applications', value: '12', icon: Send, change: '+3 this week' },
    { label: 'Profile Views', value: '48', icon: Eye, change: '+12 this week' },
    { label: 'Interviews', value: '4', icon: FileSearch, change: '2 upcoming' },
    { label: 'Shortlisted', value: '6', icon: ThumbsUp, change: '+2 this week' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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