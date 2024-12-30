import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'Recruitment Best Practices Guide',
    type: 'PDF Guide',
    size: '2.4 MB',
    category: 'Best Practices'
  },
  {
    title: 'Interview Question Templates',
    type: 'Template Pack',
    size: '1.8 MB',
    category: 'Templates'
  },
  {
    title: 'Sourcing Strategy Workbook',
    type: 'Workbook',
    size: '3.2 MB',
    category: 'Sourcing'
  },
  {
    title: 'Recruitment Metrics Dashboard',
    type: 'Excel Template',
    size: '1.5 MB',
    category: 'Analytics'
  }
];

export function ResourceLibrary() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Resource Library</h2>
        <p className="mt-4 text-lg text-gray-600">Download practical tools and templates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                  <div className="mt-1 flex items-center space-x-2 text-sm text-gray-500">
                    <span>{resource.type}</span>
                    <span>•</span>
                    <span>{resource.size}</span>
                    <span>•</span>
                    <span>{resource.category}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}