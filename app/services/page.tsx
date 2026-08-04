import React from 'react';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Services & Engineering',
  description: 'Explore enterprise AI services: LLM fine-tuning, Rust CUDA acceleration, zero-trust cybersecurity, and static web platforms.',
};

export default function ServicesPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Services & Capabilities
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              End-to-end AI engineering capabilities from model fine-tuning and GPU cluster setup to cPanel static web export.
            </p>
          </div>
        </Container>
      </Section>

      <ServicesSection showFilters />
      <CTASection type="Contact Sales" background="mesh" />
    </main>
  );
}
