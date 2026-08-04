import React from 'react';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Research & Innovation',
  description: 'Explore research publications, whitepapers, technology roadmap, and enterprise case studies at IntelliForceAI.',
};

export default function ResearchPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              AI Research & Innovation
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Deep dive into academic research papers, technology roadmaps, and real-world enterprise deployments.
            </p>
          </div>
        </Container>
      </Section>

      <ResearchSection showTimeline />
      <CaseStudySection showFilters />
      <CTASection type="Download Brochure" background="dark" />
    </main>
  );
}
