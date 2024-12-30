import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { ProfileHeader } from '../features/profile/components/ProfileHeader';
import { ProfileInfo } from '../features/profile/components/ProfileInfo';
import { ProfileExperience } from '../features/profile/components/ProfileExperience';
import { ProfileSkills } from '../features/profile/components/ProfileSkills';
import { ProfileStats } from '../features/profile/components/ProfileStats';

export function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ProfileHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-8">
          <ProfileInfo />
          <ProfileExperience />
          <ProfileSkills />
        </div>
        <div>
          <ProfileStats />
        </div>
      </div>
    </div>
  );
}