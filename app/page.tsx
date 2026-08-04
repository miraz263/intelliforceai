import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { IndustrySection } from '@/components/sections/IndustrySection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { CompanyTimelineSection } from '@/components/sections/CompanyTimelineSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage() {
  return (
    <div className="w-full space-y-12">
      <HeroSection />
      <TrustedSection />
      <ServicesSection />
      <ProductsSection />
      <IndustrySection />
      <WhyChooseUsSection />
      <CompanyTimelineSection />
      <StatsSection />
      <CaseStudySection />
      <ResearchSection />
      <LeadershipSection />
      <TestimonialsSection />
      <CTASection type="Start Project" background="gradient" />
      <PartnerSection />
    </div>
  );
}
