import React from 'react';
import { Building2, Calendar } from 'lucide-react';

export function ProfileExperience() {
  const experience = [
    {
      company: 'Global Tech Solutions',
      title: 'Senior Tech Recruiter',
      period: 'Jan 2022 - Present',
      achievements: [
        'Achieved 150% of annual billing target (£600k+)',
        'Built and maintained relationships with 20+ tech startups',
        'Successfully placed 40+ senior engineers and tech leads',
        'Developed new business worth £200k in annual revenue'
      ]
    },
    {
      company: 'Digital Talent Partners',
      title: 'Tech Recruiter',
      period: 'Mar 2019 - Dec 2021',
      achievements: [
        'Consistently exceeded monthly KPIs by 25%',
        'Specialized in DevOps and Cloud Infrastructure roles',
        'Managed end-to-end recruitment for key accounts',
        'Mentored junior recruiters in technical recruitment'
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Experience</h2>
      
      <div className="space-y-8">
        {experience.map((role, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">{role.title}</h3>
                <div className="mt-1 flex items-center text-gray-600">
                  <Building2 className="w-4 h-4 mr-1" />
                  {role.company}
                </div>
                <div className="mt-1 flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  {role.period}
                </div>
                
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Achievements</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {role.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}