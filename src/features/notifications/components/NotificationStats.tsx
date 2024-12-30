import React from 'react';
import { Bell, MessageSquare, Calendar, Briefcase } from 'lucide-react';

export function NotificationStats() {
  const stats = [
    {
      label: 'Unread',
      value: '3',
      icon: Bell,
      change: 'Last 24 hours'
    },
    {
      label: 'Messages',
      value: '12',
      icon: MessageSquare,
      change: '2 unread'
    },
    {
      label: 'Interviews',
      value: '4',
      icon: Calendar,
      change: '1 upcoming'
    },
    {
      label: 'Applications',
      value: '8',
      icon: Briefcase,
      change: '3 in progress'
    }
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