import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export function ProfileCompletion() {
  const profileTasks = [
    { task: 'Upload CV/Resume', completed: true },
    { task: 'Add Work Experience', completed: true },
    { task: 'Add Education', completed: true },
    { task: 'Add Skills', completed: false },
    { task: 'Complete Bio', completed: false }
  ];

  const completionPercentage = 
    (profileTasks.filter(task => task.completed).length / profileTasks.length) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Completion</h2>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-indigo-600">{completionPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-indigo-600 rounded-full h-2 transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {profileTasks.map((task) => (
          <div key={task.task} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {task.completed ? (
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-yellow-500" />
              )}
              <span className="text-gray-600">{task.task}</span>
            </div>
            {!task.completed && (
              <Link
                to="/profile/edit"
                className="text-sm text-indigo-600 hover:text-indigo-700"
              >
                Complete
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}