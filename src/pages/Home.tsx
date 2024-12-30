import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { AnimatedStats } from '../components/home/AnimatedStats';
import { FeaturedCompanies } from '../components/home/FeaturedCompanies';
import { PremiumJobs } from '../components/home/PremiumJobs';
import { Testimonials } from '../components/home/Testimonials';
import { PartnerTools } from '../components/home/PartnerTools';
import { CTASection } from '../components/home/CTASection';

export function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <AnimatedStats />
      <FeaturedCompanies />
      <PremiumJobs />
      <Testimonials />
      <PartnerTools />
      <CTASection />
    </div>
  );
}