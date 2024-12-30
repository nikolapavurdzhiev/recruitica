import React from 'react';
import { Apple, Play } from 'lucide-react';

export function FooterApps() {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
        Get the App
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <Apple className="w-6 h-6" />
          <div className="text-left">
            <div className="text-xs">Download on the</div>
            <div className="text-sm font-semibold">App Store</div>
          </div>
        </a>
        <a
          href="#"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
        >
          <Play className="w-6 h-6" />
          <div className="text-left">
            <div className="text-xs">Get it on</div>
            <div className="text-sm font-semibold">Google Play</div>
          </div>
        </a>
      </div>
    </div>
  );
}