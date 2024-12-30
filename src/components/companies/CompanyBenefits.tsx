import React from 'react';
import { Heart, Book, Laptop, Plane, Gift } from 'lucide-react';

const categoryIcons = {
  health: Heart,
  learning: Book,
  equipment: Laptop,
  vacation: Plane,
  other: Gift,
};

interface Benefit {
  id: string;
  title: string;
  description: string;
  category: keyof typeof categoryIcons;
}

interface CompanyBenefitsProps {
  benefits: Benefit[];
}

export function CompanyBenefits({ benefits }: CompanyBenefitsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {benefits.map((benefit) => {
        const Icon = categoryIcons[benefit.category];
        
        return (
          <div key={benefit.id} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
            </div>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        );
      })}
    </div>
  );
}