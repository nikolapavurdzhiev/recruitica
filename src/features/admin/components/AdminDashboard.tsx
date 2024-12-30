import React from 'react';
import { Users, Briefcase, Building2, FileText, TrendingUp, DollarSign } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../../../lib/supabase';

export function AdminDashboard() {
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [users, jobs, companies, applications] = await Promise.all([
        supabase.from('profiles').select('count'),
        supabase.from('jobs').select('count'),
        supabase.from('companies').select('count'),
        supabase.from('job_applications').select('count')
      ]);

      return {
        users: users.count || 0,
        jobs: jobs.count || 0,
        companies: companies.count || 0,
        applications: applications.count || 0
      };
    }
  });

  const statCards = [
    { icon: Users, label: 'Total Users', value: stats?.users || 0 },
    { icon: Briefcase, label: 'Active Jobs', value: stats?.jobs || 0 },
    { icon: Building2, label: 'Companies', value: stats?.companies || 0 },
    { icon: FileText, label: 'Applications', value: stats?.applications || 0 }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <stat.icon className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
            </div>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        {/* Add activity feed here */}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Add quick action buttons here */}
        </div>
      </div>
    </div>
  );
}