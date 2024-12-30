import React from 'react';
import { Building2, Target, DollarSign, Briefcase, MapPin } from 'lucide-react';

export function ProfileInfo() {
  const info = {
    type: '360° Recruiter',
    billings: '£600k+ annually',
    verticals: ['Software Engineering', 'DevOps', 'Cloud Infrastructure'],
    markets: ['UK', 'Europe', 'Remote'],
    reasonForLeaving: 'Seeking larger client base and higher commission structure',
    industries: ['Technology', 'FinTech', 'E-commerce'],
    deskType: 'Permanent',
    keyPoints: [
      'Proven track record in tech recruitment',
      'Strong network in the London tech scene',
      'Experience with high-growth startups',
      'Expertise in technical assessment'
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Professional Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Briefcase className="w-5 h-5 mr-2" />
                <span className="font-medium">Recruiter Type</span>
              </div>
              <p className="text-gray-800">{info.type}</p>
            </div>

            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <DollarSign className="w-5 h-5 mr-2" />
                <span className="font-medium">Annual Billings</span>
              </div>
              <p className="text-gray-800">{info.billings}</p>
            </div>

            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-medium">Verticals</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {info.verticals.map((vertical) => (
                  <span
                    key={vertical}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {vertical}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="space-y-4">
            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Building2 className="w-5 h-5 mr-2" />
                <span className="font-medium">Industries</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {info.industries.map((industry) => (
                  <span
                    key={industry}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">Markets</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {info.markets.map((market) => (
                  <span
                    key={market}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center text-gray-600 mb-2">
                <Briefcase className="w-5 h-5 mr-2" />
                <span className="font-medium">Desk Type</span>
              </div>
              <p className="text-gray-800">{info.deskType}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-600 font-medium mb-2">Key Points</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-800">
          {info.keyPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-gray-600 font-medium mb-2">Reason for New Opportunity</h3>
        <p className="text-gray-800">{info.reasonForLeaving}</p>
      </div>
    </div>
  );
}