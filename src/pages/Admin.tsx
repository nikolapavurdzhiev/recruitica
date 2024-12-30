import React from 'react';
import { Navigate, Link, Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AdminDashboard } from '../features/admin/components/AdminDashboard';
import { AdminUsers } from '../features/admin/components/AdminUsers';
import { AdminJobs } from '../features/admin/components/AdminJobs';
import { AdminCompanies } from '../features/admin/components/AdminCompanies';
import { AdminApplications } from '../features/admin/components/AdminApplications';
import { AdminReports } from '../features/admin/components/AdminReports';
import { AdminSettings } from '../features/admin/components/AdminSettings';
import { LayoutDashboard, Users, Briefcase, Building2, FileText, BarChart2, Settings } from 'lucide-react';

export function Admin() {
  const { user } = useAuth();

  // Check if user is admin
  const isAdmin = user?.user_metadata?.role === 'admin';
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '' },
    { icon: Users, label: 'Users', path: 'users' },
    { icon: Briefcase, label: 'Jobs', path: 'jobs' },
    { icon: Building2, label: 'Companies', path: 'companies' },
    { icon: FileText, label: 'Applications', path: 'applications' },
    { icon: BarChart2, label: 'Reports', path: 'reports' },
    { icon: Settings, label: 'Settings', path: 'settings' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white min-h-screen shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
          </div>
          <nav className="p-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={`/admin/${item.path}`}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <Routes>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="jobs" element={<AdminJobs />} />
            <Route path="companies" element={<AdminCompanies />} />
            <Route path="applications" element={<AdminApplications />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<AdminSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}