import React from 'react';
import { Cookie, Settings, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

export const metadata = {
  title: 'Cookie Policy',
  description: 'Detailed breakdown of cookies used by IntelliForceAI, GDPR compliance, and instructions on how to manage preferences.',
};

export default function CookiePolicyPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<Cookie className="h-3 w-3" />}>
              Privacy & Consent
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Cookie Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Transparent explanation of essential, analytics, and performance cookies.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="w-full">
        <Container size="lg">
          <GlassCard intensity="high" className="p-8 sm:p-12 space-y-8 border-primary/30">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400" /> 1. Essential Cookies (Required)
              </h2>
              <p>
                Essential cookies are necessary for core security features, theme persistence (dark/light mode), and CSRF protection. These cookies cannot be disabled as the website cannot function properly without them.
              </p>

              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Settings className="h-5 w-5 text-cyan-400" /> 2. Analytics & Performance Cookies (Optional)
              </h2>
              <p>
                With your explicit consent, we use privacy-friendly analytics cookies (Google Analytics 4 / Plausible) to collect aggregated, anonymous traffic data to optimize page load speeds and feature UX.
              </p>

              <h2 className="text-xl font-bold text-foreground">3. Managing Your Choices</h2>
              <p>
                You can update your cookie preferences at any time by clicking the Cookie Preferences link in the website footer or clearing your browser local storage.
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
