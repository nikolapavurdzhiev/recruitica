import React from 'react';
import { Building2, Users, MapPin, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

interface CompanyStatsProps {
  stats: {
    totalCompanies: number;
    activeJobs: number;
    locations: number;
    totalEmployees: string;
  };
}

export function CompanyStats({ stats }: CompanyStatsProps) {
  const items = [
    { icon: Building2, label: 'Companies', value: stats.totalCompanies },
    { icon: Briefcase, label: 'Active Jobs', value: stats.activeJobs },
    { icon: MapPin, label: 'Locations', value: stats.locations },
    { icon: Users, label: 'Total Employees', value: stats.totalEmployees }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <item.icon className="w-8 h-8 text-indigo-600 mb-4" />
          <p className="text-3xl font-bold text-gray-900">{item.value}</p>
          <p className="text-gray-600">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}