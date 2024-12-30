import React from 'react';
import { Building2 } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">No companies found</h3>
      <p className="text-gray-600">
        Try adjusting your search or filter criteria
      </p>
    </div>
  );
}