import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+44 (0) 20 1234 5678',
      link: 'tel:+442012345678'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@recruitica.com',
      link: 'mailto:contact@recruitica.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Recruitment Street, London, EC2A 2BB',
      link: 'https://maps.google.com/?q=123+Recruitment+Street+London+EC2A+2BB'
    },
    {
      icon: Clock,
      label: 'Business Hours',
      value: 'Monday - Friday: 9:00 AM - 6:00 PM',
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm p-8"
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
      
      <div className="space-y-6">
        {contactDetails.map((detail) => (
          <div key={detail.label} className="flex items-start gap-4">
            <div className="p-2 bg-indigo-50 rounded-lg">
              <detail.icon className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">{detail.label}</h3>
              {detail.link ? (
                <a
                  href={detail.link}
                  target={detail.link.startsWith('http') ? '_blank' : undefined}
                  rel={detail.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-gray-600">{detail.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-8 border-t">
        <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/recruitica"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/recruitica"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}