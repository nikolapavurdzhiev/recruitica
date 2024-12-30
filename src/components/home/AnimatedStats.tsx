import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Building2, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Active Jobs', value: '2.4k+', icon: Briefcase },
  { label: 'Recruiters', value: '500+', icon: Users },
  { label: 'Companies', value: '1.2k+', icon: Building2 },
  { label: 'Placements', value: '10k+', icon: TrendingUp },
];

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <stat.icon className="w-8 h-8 text-indigo-600 mb-4" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-3xl font-bold text-gray-900"
          >
            {stat.value}
          </motion.p>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}