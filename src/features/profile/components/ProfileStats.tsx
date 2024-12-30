import React from 'react';
import { TrendingUp, Users, Target, Award } from 'lucide-react';

export function ProfileStats() {
  const stats = [
    {
      label: 'Placements',
      value: '40+',
      icon: Users,
      description: 'Successfully placed candidates'
    },
    {
      label: 'Fill Rate',
      value: '85%',
      icon: Target,
      description: 'Average fill rate for roles'
    },
    {
      label: 'Time to Hire',
      value: '28',
      icon: TrendingUp,
      description: 'Average days to fill a role'
    },
    {
      label: 'Client Retention',
      value: '95%',
      icon: Award,
      description: 'Repeat business rate'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Stats</h2>
      
      <div className="space-y-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}