import React from 'react';
import { Calendar, Clock, Video, Building2 } from 'lucide-react';

export function UpcomingInterviews() {
  const interviews = [
    {
      id: '1',
      company: 'Global Talent Solutions',
      position: 'Senior Tech Recruiter',
      date: '2024-02-20',
      time: '10:00 AM',
      type: 'Video Call'
    },
    {
      id: '2',
      company: 'Recruit Masters',
      position: 'Recruitment Team Lead',
      date: '2024-02-22',
      time: '2:30 PM',
      type: 'Video Call'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Interviews</h2>
      
      <div className="space-y-4">
        {interviews.map((interview) => (
          <div key={interview.id} className="border rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{interview.position}</h3>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Building2 className="w-4 h-4 mr-2" />
                    {interview.company}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {interview.date}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {interview.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Video className="w-4 h-4 mr-2" />
                    {interview.type}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}