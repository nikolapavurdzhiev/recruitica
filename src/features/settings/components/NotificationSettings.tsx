import React, { useState } from 'react';
import { Bell, Mail, MessageSquare, Briefcase, Calendar } from 'lucide-react';

export function NotificationSettings() {
  const [notifications, setNotifications] = useState({
    email: {
      newJobs: true,
      applications: true,
      interviews: true,
      messages: false
    },
    push: {
      newJobs: false,
      applications: true,
      interviews: true,
      messages: true
    }
  });

  const handleToggle = (type: 'email' | 'push', setting: string) => {
    setNotifications(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [setting]: !prev[type][setting as keyof typeof prev.email]
      }
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Notification Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Email Notifications */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-4 h-4 text-gray-500" />
            <h3 className="font-medium text-gray-900">Email Notifications</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(notifications.email).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-700">
                  {key === 'newJobs' && <Briefcase className="w-4 h-4" />}
                  {key === 'applications' && <Mail className="w-4 h-4" />}
                  {key === 'interviews' && <Calendar className="w-4 h-4" />}
                  {key === 'messages' && <MessageSquare className="w-4 h-4" />}
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <button
                  onClick={() => handleToggle('email', key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Push Notifications */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-4 h-4 text-gray-500" />
            <h3 className="font-medium text-gray-900">Push Notifications</h3>
          </div>
          
          <div className="space-y-4">
            {Object.entries(notifications.push).map(([key, value]) => (
              <div key={key} className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-gray-700">
                  {key === 'newJobs' && <Briefcase className="w-4 h-4" />}
                  {key === 'applications' && <Mail className="w-4 h-4" />}
                  {key === 'interviews' && <Calendar className="w-4 h-4" />}
                  {key === 'messages' && <MessageSquare className="w-4 h-4" />}
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </label>
                <button
                  onClick={() => handleToggle('push', key)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    value ? 'bg-indigo-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      value ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}