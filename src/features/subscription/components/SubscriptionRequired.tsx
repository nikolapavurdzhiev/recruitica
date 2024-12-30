import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSubscription } from '../hooks/useSubscription';

interface SubscriptionRequiredProps {
  children: React.ReactNode;
}

export function SubscriptionRequired({ children }: SubscriptionRequiredProps) {
  const { subscription, isLoading } = useSubscription();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!subscription?.active) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <Building2 className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unlock Premium Features
          </h2>
          <p className="text-xl text-gray-600">
            Subscribe to access all features and post unlimited jobs
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex justify-between items-start gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Premium Plan
              </h3>
              <ul className="space-y-3">
                {[
                  'Post unlimited job listings',
                  'Access to premium candidates',
                  'Advanced analytics',
                  'Priority support',
                  'Company profile customization'
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                $99
                <span className="text-lg font-normal text-gray-500">/month</span>
              </div>
              <Link
                to="/pricing"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}