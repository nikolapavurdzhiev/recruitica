import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  UserCircle, 
  Building2, 
  Shield, 
  CreditCard,
  Settings,
  MessageCircle,
  Bell,
  HelpCircle
} from 'lucide-react';

export function HelpCategories() {
  const categories = [
    {
      icon: UserCircle,
      title: 'Account & Profile',
      description: 'Manage your account settings and profile information',
      href: '/help/account'
    },
    {
      icon: Building2,
      title: 'Jobs & Applications',
      description: 'Learn about job searching and application process',
      href: '/help/jobs'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Understand how we protect your data and privacy',
      href: '/help/privacy'
    },
    {
      icon: CreditCard,
      title: 'Billing & Subscriptions',
      description: 'Information about payments and subscription plans',
      href: '/help/billing'
    },
    {
      icon: Settings,
      title: 'Platform Features',
      description: 'Discover and learn about our platform features',
      href: '/help/features'
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Tips for messaging and communication tools',
      href: '/help/communication'
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Manage your notification preferences',
      href: '/help/notifications'
    },
    {
      icon: HelpCircle,
      title: 'General FAQ',
      description: 'Common questions and answers',
      href: '/help/faq'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Help Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              to={category.href}
              className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <category.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {category.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}