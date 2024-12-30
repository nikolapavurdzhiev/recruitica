import React, { useState } from 'react';
import { Shield, Eye, Users, Globe } from 'lucide-react';

export function PrivacySettings() {
  const [settings, setSettings] = useState({
    profileVisibility: 'public',
    showEmail: true,
    showPhone: false,
    allowMessages: true,
    showActivity: true
  });

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Privacy Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Profile Visibility */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Profile Visibility</label>
          <div className="flex gap-4">
            <button
              onClick={() => setSettings(prev => ({ ...prev, profileVisibility: 'public' }))}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                settings.profileVisibility === 'public'
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Globe className="w-4 h-4" />
              Public
            </button>
            <button
              onClick={() => setSettings(prev => ({ ...prev, profileVisibility: 'private' }))}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${
                settings.profileVisibility === 'private'
                  ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Eye className="w-4 h-4" />
              Private
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Contact Information</label>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show email address</span>
              <button
                onClick={() => setSettings(prev => ({ ...prev, showEmail: !prev.showEmail }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.showEmail ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.showEmail ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show phone number</span>
              <button
                onClick={() => setSettings(prev => ({ ...prev, showPhone: !prev.showPhone }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.showPhone ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.showPhone ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Communication */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Communication</label>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Allow direct messages</span>
              <button
                onClick={() => setSettings(prev => ({ ...prev, allowMessages: !prev.allowMessages }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.allowMessages ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.allowMessages ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Show activity status</span>
              <button
                onClick={() => setSettings(prev => ({ ...prev, showActivity: !prev.showActivity }))}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  settings.showActivity ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    settings.showActivity ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}