'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { statsConfig, StatMetric } from '@/config/stats';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { StatCard } from '@/components/cards/StatCard';

export interface StatsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function StatsSection({
  title = statsConfig.title,
  subtitle = statsConfig.badge,
  description = statsConfig.description,
}: StatsSectionProps) {
  return (
    <Section spacing="xl" className="relative w-full bg-background/50 overflow-hidden">
      {/* Background Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[140px]"
        aria-hidden="true"
      />

      <Container size="xl" className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
          <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsConfig.metrics.map((metric: StatMetric, index: number) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <StatCard metric={metric} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
