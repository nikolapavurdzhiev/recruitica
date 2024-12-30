import React from 'react';
import { Building2, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ApplicationsTable() {
  const applications = [
    {
      id: '1',
      position: 'Senior Tech Recruiter',
      company: 'Global Talent Solutions',
      status: 'In Review',
      appliedDate: '2024-02-15',
      statusColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      id: '2',
      position: 'Recruitment Team Lead',
      company: 'Recruit Masters',
      status: 'Interview Scheduled',
      appliedDate: '2024-02-14',
      statusColor: 'bg-green-100 text-green-800'
    },
    {
      id: '3',
      position: 'Healthcare Recruiter',
      company: 'MedStaff Solutions',
      status: 'Pending',
      appliedDate: '2024-02-13',
      statusColor: 'bg-gray-100 text-gray-800'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b">
        <h2 className="text-xl font-semibold text-gray-900">Recent Applications</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Applied Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {applications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="font-medium text-gray-900">{application.position}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Building2 className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{application.company}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-600">{application.appliedDate}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${application.statusColor}`}>
                    {application.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/applications/${application.id}`}
                    className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}