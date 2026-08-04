import React from 'react';
import Link from 'next/link';
import { ArrowRight, LifeBuoy } from 'lucide-react';
import { FAQSection } from '@/components/sections/FAQSection';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';
import { Button } from '@/components/buttons/Button';

export const metadata = {
  title: 'Enterprise FAQ & Knowledge Base',
  description: 'Find answers to frequently asked questions about IntelliForceAI multi-agent architecture, static export, cPanel hosting, and zero-trust security.',
};

export default function FAQPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <FAQSection showSearch />

      {/* Still Have Questions CTA Banner */}
      <Section spacing="md" className="w-full bg-background/50">
        <Container size="xl">
          <GlassCard intensity="high" className="p-8 sm:p-12 text-center border-primary/40 shadow-glow max-w-4xl mx-auto space-y-4">
            <Badge variant="primary" icon={<LifeBuoy className="h-3 w-3" />}>
              Need Assistance?
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Still Have Technical or Sales Questions?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our senior engineering team and solution architects are available 24/7 to answer your specific infrastructure questions.
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Link href="/contact">
                <Button variant="gradient" size="lg" rightIcon={<ArrowRight className="h-4 w-4" />}>
                  Contact Engineering Team
                </Button>
              </Link>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
