import React from 'react';
import { Send, Clock, CheckCircle, XCircle } from 'lucide-react';

export function ApplicationStats() {
  const stats = [
    { label: 'Total Applications', value: '24', icon: Send, change: '+3 this month' },
    { label: 'In Progress', value: '8', icon: Clock, change: '2 updated recently' },
    { label: 'Successful', value: '12', icon: CheckCircle, change: '+2 this month' },
    { label: 'Rejected', value: '4', icon: XCircle, change: '-25% vs last month' }
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