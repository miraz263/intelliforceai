import React from 'react';
import { Eye, CheckCircle2, Mail } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

export const metadata = {
  title: 'Accessibility Statement',
  description: 'IntelliForceAI is committed to digital accessibility complying with WCAG 2.2 Level AA standards.',
};

export default function AccessibilityStatementPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<Eye className="h-3 w-3" />}>
              Inclusive Web
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Accessibility Statement
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Our commitment to WCAG 2.2 Level AA compliance and accessible design for all users.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="w-full">
        <Container size="lg">
          <GlassCard intensity="high" className="p-8 sm:p-12 space-y-8 border-primary/30">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" /> 1. Conformance Status
              </h2>
              <p>
                The IntelliForceAI web platform is designed to strictly conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards.
              </p>

              <h2 className="text-xl font-bold text-foreground">2. Accessibility Features Implemented</h2>
              <ul className="space-y-2 pl-4 list-disc">
                <li><strong className="text-foreground">Skip Navigation:</strong> A keyboard-accessible skip link allowing users to bypass repetitive header navigation.</li>
                <li><strong className="text-foreground">Keyboard Accessibility:</strong> All interactive buttons, tabs, accordions, and search dialogs are operable using standard keyboard navigation (Tab, Enter, Space, Escape, Arrow keys).</li>
                <li><strong className="text-foreground">Screen Reader Optimization:</strong> Proper semantic HTML5 tags and explicit WAI-ARIA attributes (<code className="text-cyan-400">aria-expanded</code>, <code className="text-cyan-400">aria-label</code>, <code className="text-cyan-400">role=&quot;dialog&quot;</code>).</li>
                <li><strong className="text-foreground">Color Contrast & Reduced Motion:</strong> High contrast HSL text tokens and strict respect for user prefers-reduced-motion CSS preferences.</li>
              </ul>

              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Mail className="h-5 w-5 text-cyan-400" /> 3. Feedback & Contact
              </h2>
              <p>
                We welcome your feedback on the accessibility of our website. If you encounter accessibility barriers, please email our engineering team at{' '}
                <a href="mailto:accessibility@intelliforceai.ai" className="text-cyan-400 font-mono font-bold hover:underline">
                  accessibility@intelliforceai.ai
                </a>.
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
