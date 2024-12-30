import React from 'react';
import { X } from 'lucide-react';
import { DashboardStats } from '../../features/dashboard/components/DashboardStats';
import { ApplicationsTable } from '../../features/dashboard/components/ApplicationsTable';
import { SavedJobs } from '../../features/dashboard/components/SavedJobs';
import { ProfileCompletion } from '../../features/dashboard/components/ProfileCompletion';
import { UpcomingInterviews } from '../../features/dashboard/components/UpcomingInterviews';
import { RecentActivity } from '../../features/dashboard/components/RecentActivity';

interface SlidePanelDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SlidePanelDashboard({ isOpen, onClose }: SlidePanelDashboardProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div className={`fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-50 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <DashboardStats />
            <ProfileCompletion />
            <UpcomingInterviews />
            <SavedJobs />
            <ApplicationsTable />
            <RecentActivity />
          </div>
        </div>
      </div>
    </>
  );
}