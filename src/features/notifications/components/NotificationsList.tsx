import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MessageSquare, 
  Calendar, 
  Bell,
  CheckCircle,
  Clock,
  Building2
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

export function NotificationsList() {
  const notifications = [
    {
      id: '1',
      type: 'application',
      title: 'Application Status Update',
      message: 'Your application for Senior Tech Recruiter at Global Solutions has been reviewed',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
      link: '/applications/1',
      icon: Briefcase
    },
    {
      id: '2',
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from Sarah Thompson regarding your application',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: true,
      link: '/messages/2',
      icon: MessageSquare
    },
    {
      id: '3',
      type: 'interview',
      title: 'Interview Scheduled',
      message: 'Interview scheduled for tomorrow at 2:00 PM with Tech Recruiters Inc.',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: false,
      link: '/interviews/3',
      icon: Calendar
    }
  ];

  const getIconColor = (type: string) => {
    const colors = {
      application: 'text-blue-500',
      message: 'text-green-500',
      interview: 'text-purple-500',
      job: 'text-indigo-500'
    };
    return colors[type as keyof typeof colors] || 'text-gray-500';
  };

  return (
    <div className="space-y-4 mt-6">
      {notifications.map((notification, index) => (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`bg-white rounded-xl shadow-sm p-6 ${
            !notification.read ? 'border-l-4 border-indigo-600' : ''
          }`}
        >
          <div className="flex items-start gap-4">
            <div className={`p-2 rounded-lg ${!notification.read ? 'bg-indigo-50' : 'bg-gray-50'}`}>
              <notification.icon className={`w-6 h-6 ${getIconColor(notification.type)}`} />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-lg font-medium text-gray-900">{notification.title}</h3>
                <span className="text-sm text-gray-500">
                  {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                </span>
              </div>
              <p className="text-gray-600">{notification.message}</p>
              
              <div className="mt-4 flex items-center gap-4">
                <Link
                  to={notification.link}
                  className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                >
                  View Details
                </Link>
                {!notification.read && (
                  <button className="text-gray-500 hover:text-gray-700 text-sm">
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}