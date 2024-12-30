import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { JobDetailHero } from '../features/jobs/components/JobDetailHero';
import { JobDetailContent } from '../features/jobs/components/JobDetailContent';
import { JobDetailSidebar } from '../features/jobs/components/JobDetailSidebar';
import { JobApplicationModal } from '../features/jobs/components/JobApplicationModal';
import { useJob } from '../features/jobs/hooks/useJob';

export function JobDetail() {
  const { id } = useParams();
  const { data: job, isLoading } = useJob(id);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleApply = () => {
    setIsApplicationModalOpen(true);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-red-50 text-red-800 p-4 rounded-lg">
          <p>Job not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <JobDetailHero job={job} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <JobDetailContent job={job} />
        </div>
        <div>
          <JobDetailSidebar job={job} onApply={handleApply} />
        </div>
      </div>

      <JobApplicationModal
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        jobTitle={job.title}
        company={job.company}
      />
    </div>
  );
}