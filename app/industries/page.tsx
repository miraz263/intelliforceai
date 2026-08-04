import React from 'react';
import { IndustrySection } from '@/components/sections/IndustrySection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Enterprise Industries',
  description: 'Explore IntelliForceAI tailored industry solutions across healthcare, finance, banking, manufacturing, government, logistics, and telecom.',
};

export default function IndustriesPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-8">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Enterprise Industries
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Deep domain-tailored AI solutions, matching software products, and verified quantitative ROI metrics across 12 global sectors.
            </p>
          </div>
        </Container>
      </Section>

      <IndustrySection showFilters />
    </main>
  );
}
