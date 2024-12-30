import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { AccountSettings } from '../features/settings/components/AccountSettings';
import { NotificationSettings } from '../features/settings/components/NotificationSettings';
import { PrivacySettings } from '../features/settings/components/PrivacySettings';
import { PreferenceSettings } from '../features/settings/components/PreferenceSettings';

export function Settings() {
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>
      
      <div className="space-y-8">
        <AccountSettings />
        <NotificationSettings />
        <PrivacySettings />
        <PreferenceSettings />
      </div>
    </div>
  );
}