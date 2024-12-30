import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { DashboardStats } from '../features/dashboard/components/DashboardStats';
import { ApplicationsTable } from '../features/dashboard/components/ApplicationsTable';
import { SavedJobs } from '../features/dashboard/components/SavedJobs';
import { ProfileCompletion } from '../features/dashboard/components/ProfileCompletion';
import { RecommendedJobs } from '../features/dashboard/components/RecommendedJobs';
import { UpcomingInterviews } from '../features/dashboard/components/UpcomingInterviews';
import { RecentActivity } from '../features/dashboard/components/RecentActivity';

export function Dashboard() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Candidate Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <DashboardStats />
          <ApplicationsTable />
          <RecommendedJobs />
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <ProfileCompletion />
          <UpcomingInterviews />
          <SavedJobs />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}