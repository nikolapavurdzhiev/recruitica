import React from 'react';

interface CompanyGalleryProps {
  media: Array<{
    id: string;
    url: string;
    title: string;
    type: 'image' | 'video';
  }>;
}

export function CompanyGallery({ media }: CompanyGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {media.map((item) => (
        <div key={item.id} className="relative group">
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 rounded-lg" />
          {item.title && (
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-200">
              <p className="text-sm font-medium">{item.title}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}