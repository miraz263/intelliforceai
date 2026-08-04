import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn about IntelliForceAI zero-trust model isolation policy, GDPR/CCPA compliance, and commitment to zero customer data model training.',
};

export default function PrivacyPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<ShieldCheck className="h-3 w-3" />}>
              Security & Privacy
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Last Updated: August 2026 • Effective Date: January 2026
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="md" className="w-full">
        <Container size="lg">
          <GlassCard intensity="high" className="p-8 sm:p-12 space-y-8 border-primary/30">
            {/* Zero Model Training Guarantee */}
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <Lock className="h-5 w-5" />
                <span>Zero Customer Data Model Pre-Training Guarantee</span>
              </div>
              <p className="text-xs sm:text-sm text-cyan-200 leading-relaxed">
                IntelliForceAI unconditionally guarantees that your prompt inputs, fine-tuning weights, proprietary documents, and application telemetry are NEVER used for pre-training public or shared foundation models. Your data remains strictly isolated within your private VPC enclaves.
              </p>
            </div>

            {/* Privacy Content Sections */}
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" /> 1. Information We Collect
              </h2>
              <p>
                We collect minimal technical information required to maintain cluster availability, billing contracts, and technical support. This includes account email addresses, technical contact names, organization names, and system availability logs.
              </p>

              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> 2. Compliance with GDPR & CCPA
              </h2>
              <p>
                Under the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA), you maintain full rights to inspect, export, or permanently erase all personal account records stored within our administrative systems.
              </p>

              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> 3. Data Subprocessors & Security
              </h2>
              <p>
                All data in transit is encrypted using TLS 1.3, and all data at rest uses AES-256 bit encryption. We do not sell, rent, or trade customer data to third-party advertising networks.
              </p>

              <h2 className="text-xl font-bold text-foreground">4. Contact Privacy Officers</h2>
              <p>
                For questions regarding data protection, GDPR subject access requests, or security audits, contact our Data Protection Officer at{' '}
                <a href="mailto:privacy@intelliforceai.ai" className="text-cyan-400 font-mono font-bold hover:underline">
                  privacy@intelliforceai.ai
                </a>.
              </p>
            </div>
          </GlassCard>
        </Container>
      </Section>
    </main>
  );
}
