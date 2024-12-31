import { Link } from 'react-router-dom';
import { Building2, Calendar, ArrowRight, MessageSquare } from 'lucide-react';

interface ApplicationsTableProps {
  search: string;
  filters: {
    status: string;
    date: string;
    type: string;
  };
}

interface Application {
  id: string;
  position: string;
  company: string;
  status: string;
  appliedDate: string;
  lastUpdate: string;
  nextStep: string;
  type: string;
  statusColor: string;
}

export function ApplicationsTable({ search, filters }: ApplicationsTableProps) {
  const applications: Application[] = [
    {
      id: '1',
      position: 'Senior Tech Recruiter',
      company: 'Global Talent Solutions',
      status: 'Interview',
      appliedDate: '2024-02-15',
      lastUpdate: '2024-02-16',
      nextStep: 'Technical Interview - Feb 20',
      type: 'full-time',
      statusColor: 'bg-green-100 text-green-800'
    }
  ];

  const getStatusColor = (status: string): string => {
    const colors: Record<string, string> = {
      'Pending': 'bg-gray-100 text-gray-800',
      'Reviewing': 'bg-yellow-100 text-yellow-800',
      'Interview': 'bg-green-100 text-green-800',
      'Offer': 'bg-blue-100 text-blue-800',
      'Rejected': 'bg-red-100 text-red-800'
    };
    return colors[status] || colors['Pending'];
  };

  const filteredApplications = applications
    .filter(app => {
      const searchLower = search.toLowerCase();
      return app.position.toLowerCase().includes(searchLower) ||
             app.company.toLowerCase().includes(searchLower);
    })
    .filter(app => !filters.status || app.status === filters.status)
    .filter(app => !filters.type || app.type === filters.type)
    .filter(app => !filters.date || app.appliedDate.includes(filters.date));

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Position</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Company</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Applied Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Next Step</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <tr key={application.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <Link
                    to={`/applications/${application.id}`}
                    className="font-medium text-gray-900 hover:text-indigo-600"
                  >
                    {application.position}
                  </Link>
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
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(application.status)}`}>
                    {application.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-gray-600">{application.nextStep}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <Link
                      to={`/applications/${application.id}`}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <button className="text-gray-400 hover:text-indigo-600">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}