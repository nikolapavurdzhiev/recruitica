import React from 'react';
import { Search } from 'lucide-react';

interface CompanySearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function CompanySearch({ value, onChange }: CompanySearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search companies..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}