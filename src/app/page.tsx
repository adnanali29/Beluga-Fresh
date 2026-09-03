import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandingSection } from '../components/home/BrandingSection';
import { CategoryShowcase } from '../components/home/CategoryShowcase';
import { SourcingStorySection } from '../components/home/SourcingStorySection';
import { CompanyVideoSection } from '../components/home/CompanyVideoSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <BrandingSection />
      <CategoryShowcase />
      <SourcingStorySection />
      <CompanyVideoSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
