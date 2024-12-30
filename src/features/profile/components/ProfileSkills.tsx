import React from 'react';
import { Star } from 'lucide-react';

export function ProfileSkills() {
  const skills = {
    technical: [
      { name: 'Technical Screening', level: 5 },
      { name: 'Salary Benchmarking', level: 4 },
      { name: 'Market Mapping', level: 5 },
      { name: 'Candidate Assessment', level: 4 }
    ],
    tools: [
      { name: 'LinkedIn Recruiter', level: 5 },
      { name: 'Greenhouse ATS', level: 4 },
      { name: 'Workday', level: 3 },
      { name: 'Boolean Search', level: 5 }
    ],
    soft: [
      { name: 'Negotiation', level: 5 },
      { name: 'Client Management', level: 4 },
      { name: 'Business Development', level: 4 },
      { name: 'Relationship Building', level: 5 }
    ]
  };

  const renderStars = (level: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < level ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Technical Skills</h3>
          <div className="space-y-4">
            {skills.technical.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex">{renderStars(skill.level)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Tools & Systems</h3>
          <div className="space-y-4">
            {skills.tools.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex">{renderStars(skill.level)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Soft Skills</h3>
          <div className="space-y-4">
            {skills.soft.map((skill) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex">{renderStars(skill.level)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}