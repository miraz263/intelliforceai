import React from 'react';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { CompanyTimelineSection } from '@/components/sections/CompanyTimelineSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustedSection } from '@/components/sections/TrustedSection';
import { PartnerSection } from '@/components/sections/PartnerSection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'About Us & Company History',
  description: 'Discover the growth story, milestones, leadership team, and core pillars behind IntelliForceAI.',
};

export default function AboutPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-8">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Pioneering Enterprise AI
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              IntelliForceAI is an autonomous AI software company engineering self-governing multi-agent systems, deep learning models, and static export Web platforms.
            </p>
          </div>
        </Container>
      </Section>

      <TrustedSection />
      <CompanyTimelineSection />
      <LeadershipSection showFilters />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <PartnerSection />
    </main>
  );
}
