import React from 'react';
import { Bell } from 'lucide-react';
import { NotificationsList } from '../features/notifications/components/NotificationsList';
import { NotificationFilters } from '../features/notifications/components/NotificationFilters';
import { NotificationStats } from '../features/notifications/components/NotificationStats';

export function Notifications() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Bell className="w-8 h-8 text-indigo-600" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600">Stay updated with your recruitment activities</p>
          </div>
        </div>
      </div>

      <NotificationStats />
      <NotificationFilters />
      <NotificationsList />
    </div>
  );
}