import React, { useState } from 'react';
import { Settings, DollarSign, MapPin, Briefcase } from 'lucide-react';

export function PreferenceSettings() {
  const [preferences, setPreferences] = useState({
    jobTypes: ['full-time', 'contract'],
    locations: ['london', 'remote'],
    salaryRange: '60k-80k',
    industries: ['technology', 'finance']
  });

  const jobTypes = ['full-time', 'contract', 'part-time', 'temporary'];
  const locations = ['london', 'manchester', 'birmingham', 'remote'];
  const salaryRanges = ['0-40k', '40k-60k', '60k-80k', '80k+'];
  const industries = ['technology', 'finance', 'healthcare', 'retail'];

  const toggleJobType = (type: string) => {
    setPreferences(prev => ({
      ...prev,
      jobTypes: prev.jobTypes.includes(type)
        ? prev.jobTypes.filter(t => t !== type)
        : [...prev.jobTypes, type]
    }));
  };

  const toggleLocation = (location: string) => {
    setPreferences(prev => ({
      ...prev,
      locations: prev.locations.includes(location)
        ? prev.locations.filter(l => l !== location)
        : [...prev.locations, location]
    }));
  };

  const toggleIndustry = (industry: string) => {
    setPreferences(prev => ({
      ...prev,
      industries: prev.industries.includes(industry)
        ? prev.industries.filter(i => i !== industry)
        : [...prev.industries, industry]
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Settings className="w-5 h-5 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">Job Preferences</h2>
      </div>

      <div className="space-y-6">
        {/* Job Types */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Job Types
            </div>
          </label>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map(type => (
              <button
                key={type}
                onClick={() => toggleJobType(type)}
                className={`px-4 py-2 rounded-lg border ${
                  preferences.jobTypes.includes(type)
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Locations */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Preferred Locations
            </div>
          </label>
          <div className="flex flex-wrap gap-2">
            {locations.map(location => (
              <button
                key={location}
                onClick={() => toggleLocation(location)}
                className={`px-4 py-2 rounded-lg border ${
                  preferences.locations.includes(location)
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {location.charAt(0).toUpperCase() + location.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Salary Range
            </div>
          </label>
          <div className="flex flex-wrap gap-2">
            {salaryRanges.map(range => (
              <button
                key={range}
                onClick={() => setPreferences(prev => ({ ...prev, salaryRange: range }))}
                className={`px-4 py-2 rounded-lg border ${
                  preferences.salaryRange === range
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                £{range}
              </button>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Preferred Industries
            </div>
          </label>
          <div className="flex flex-wrap gap-2">
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => toggleIndustry(industry)}
                className={`px-4 py-2 rounded-lg border ${
                  preferences.industries.includes(industry)
                    ? 'border-indigo-600 text-indigo-600 bg-indigo-50'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {industry.charAt(0).toUpperCase() + industry.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}