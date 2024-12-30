import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function FooterFeatures() {
  const features = [
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Verified employers and secure data'
    },
    {
      icon: Award,
      title: 'Quality Jobs',
      description: 'Premium recruitment opportunities'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Always here to help you'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join 10k+ recruiters'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-200 dark:border-gray-800">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <feature.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
            {feature.title}
          </h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}