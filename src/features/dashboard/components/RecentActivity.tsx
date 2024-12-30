import React from 'react';
import { Activity } from 'lucide-react';

export function RecentActivity() {
  const activities = [
    {
      id: '1',
      type: 'application',
      message: 'Applied for Senior Tech Recruiter at Global Talent Solutions',
      date: '2 hours ago'
    },
    {
      id: '2',
      type: 'profile',
      message: 'Updated your CV',
      date: '1 day ago'
    },
    {
      id: '3',
      type: 'interview',
      message: 'Scheduled interview with Recruit Masters',
      date: '2 days ago'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
      
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <Activity className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <p className="text-gray-600">{activity.message}</p>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}