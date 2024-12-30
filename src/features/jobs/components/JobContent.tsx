import React from 'react';
import type { Job } from '../types';

interface JobContentProps {
  job: Job;
}

export function JobContent({ job }: JobContentProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
        <p className="text-gray-600 whitespace-pre-line">{job.description}</p>
      </section>

      {/* Responsibilities */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Requirements */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {job.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {job.benefits.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}