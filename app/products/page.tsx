import React from 'react';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';

export const metadata = {
  title: 'Products Showcase',
  description: 'Discover flagship AI products built by IntelliForceAI: IntelliForceAI 2.0, Sentinel Shield, BlackMarlin OMS, and Vision AI.',
};

export default function ProductsPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Enterprise AI Products
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              Production-ready AI platforms engineered for sub-millisecond throughput, zero-trust security, and static web deployment.
            </p>
          </div>
        </Container>
      </Section>

      <ProductsSection showFilters />
      <CTASection type="Book Demo" background="glass" />
    </main>
  );
}
