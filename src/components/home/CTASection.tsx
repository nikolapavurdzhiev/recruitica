import React from 'react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-3xl p-8 md:p-12 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to Take the Next Step?</h2>
      <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
        Join thousands of recruitment professionals who have found their dream roles through our platform
      </p>
      <Link
        to="/signup"
        className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
      >
        Get Started Today
      </Link>
    </section>
  );
}