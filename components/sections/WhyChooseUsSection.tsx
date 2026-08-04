'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Cpu,
  Server,
  ShieldCheck,
  Headphones,
  Globe,
  Sparkles,
  Check,
} from 'lucide-react';
import { whyChooseUsConfig, StrengthItem } from '@/config/why-choose-us';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="h-6 w-6 text-blue-400" />,
  Users: <Users className="h-6 w-6 text-cyan-400" />,
  Cpu: <Cpu className="h-6 w-6 text-violet-400" />,
  Server: <Server className="h-6 w-6 text-emerald-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-indigo-400" />,
  Headphones: <Headphones className="h-6 w-6 text-amber-400" />,
  Globe: <Globe className="h-6 w-6 text-sky-400" />,
  Sparkles: <Sparkles className="h-6 w-6 text-pink-400" />,
};

export function WhyChooseUsSection() {
  return (
    <Section spacing="xl" className="relative w-full bg-background/60 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" aria-hidden="true" />

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
            {whyChooseUsConfig.badge}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {whyChooseUsConfig.title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {whyChooseUsConfig.description}
          </p>
        </div>

        {/* Alternating Strengths Timeline Grid */}
        <div className="space-y-8 sm:space-y-12">
          {whyChooseUsConfig.strengths.map((item: StrengthItem, index: number) => {
            const isEven = index % 2 === 0;
            const icon = iconMap[item.iconName] || <Award className="h-6 w-6 text-primary" />;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <GlassCard
                  intensity="medium"
                  className="group relative overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Step Number & Header Info */}
                    <div
                      className={`lg:col-span-5 flex flex-col justify-center space-y-3 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-3xl font-extrabold text-primary/40 group-hover:text-primary transition-colors">
                          {item.step}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface/80 border border-border/60 shadow-inner group-hover:scale-110 transition-transform">
                          {icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-primary/90 uppercase tracking-wider">
                        {item.subtitle}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Metric Counter & Highlights Side Panel */}
                    <div
                      className={`lg:col-span-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl border border-border/40 bg-surface/50 p-6 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      {/* Metric Display */}
                      <div className="flex flex-col shrink-0 min-w-[120px]">
                        <span className="text-4xl font-extrabold text-gradient">
                          {item.metric}
                        </span>
                        <span className="text-xs font-medium text-muted-foreground mt-1">
                          {item.metricLabel}
                        </span>
                      </div>

                      {/* Highlights Bullet List */}
                      <div className="space-y-2 border-t sm:border-t-0 sm:border-l border-border/40 pt-4 sm:pt-0 sm:pl-6 w-full">
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs font-medium text-foreground">
                            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                              <Check className="h-3 w-3" />
                            </div>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
