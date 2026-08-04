import React from 'react';
import {
  HeartPulse,
  DollarSign,
  Globe,
  Cpu,
  GraduationCap,
  Palmtree,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Users,
} from 'lucide-react';
import { careersConfig } from '@/config/careers';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';
import { Button } from '@/components/buttons/Button';
import { CareerSection } from '@/components/sections/CareerSection';

export const metadata = {
  title: 'Careers & Culture',
  description: 'Join IntelliForceAI. Explore open positions in AI engineering, research fellowships, remote work benefits, and hiring process.',
};

const benefitIconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="h-6 w-6 text-rose-400" />,
  DollarSign: <DollarSign className="h-6 w-6 text-emerald-400" />,
  Globe: <Globe className="h-6 w-6 text-sky-400" />,
  Cpu: <Cpu className="h-6 w-6 text-indigo-400" />,
  GraduationCap: <GraduationCap className="h-6 w-6 text-amber-400" />,
  Palmtree: <Palmtree className="h-6 w-6 text-cyan-400" />,
};

export default function CareersPage() {
  return (
    <main className="w-full pt-8 pb-16 space-y-16">
      {/* Hero Header */}
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
              {careersConfig.badge}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              {careersConfig.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {careersConfig.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Benefits Grid Section */}
      <Section spacing="lg" className="w-full bg-background/50">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-12">
            <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
              Perks & Benefits
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Designed for High Performance & Well-Being
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careersConfig.benefits.map((benefit, bIdx) => {
              const icon = benefitIconMap[benefit.iconName] || <Sparkles className="h-6 w-6 text-primary" />;
              return (
                <GlassCard
                  key={bIdx}
                  intensity="medium"
                  className="p-6 sm:p-8 space-y-3 hover:border-primary/40 hover:shadow-glow transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Company Culture & Remote Work Section */}
      <Section spacing="lg" className="w-full">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="primary" icon={<Users className="h-3 w-3" />}>
                Culture & Philosophy
              </Badge>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                Zero Micromanagement. Maximum Autonomy.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                We believe exceptional engineers and researchers perform best when empowered with complete ownership over complex problems.
              </p>

              <div className="space-y-3 pt-2">
                {careersConfig.culturePillars.map((pillar, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard intensity="high" className="p-8 space-y-6 border-primary/40 shadow-glow">
              <div className="flex items-center gap-3">
                <Globe className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Remote-First Worldwide</h3>
                  <p className="text-xs text-muted-foreground">Hire & Work Anywhere</p>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Whether you live in San Francisco, London, Tokyo, or anywhere else in between, IntelliForceAI supports asynchronous global collaboration with flexible working hours.
              </p>

              <div className="pt-2">
                <a href="#open-positions">
                  <Button variant="gradient" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
                    View Open Positions
                  </Button>
                </a>
              </div>
            </GlassCard>
          </div>
        </Container>
      </Section>

      {/* Hiring Process Section */}
      <Section spacing="lg" className="w-full bg-background/50 border-t border-border/30">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-3 mb-12">
            <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
              Transparent Process
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Our 4-Step Hiring Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careersConfig.hiringProcess.map((step) => (
              <GlassCard key={step.step} intensity="medium" className="p-6 space-y-3">
                <span className="text-2xl font-mono font-extrabold text-cyan-400">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Filterable Open Jobs Board */}
      <CareerSection />
    </main>
  );
}
