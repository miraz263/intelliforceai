'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  industriesData,
  industryNames,
  IndustryItem,
  IndustryName,
} from '@/config/industries';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { IndustryCard } from '@/components/cards/IndustryCard';

export interface IndustrySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
}

export function IndustrySection({
  title = 'Tailored AI Platforms for Global Industries',
  subtitle = 'Industry Solutions',
  description = 'Engineered to solve domain-specific challenges across healthcare, high-frequency finance, federal government, logistics, and telecom.',
  showFilters = true,
}: IndustrySectionProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | IndustryName>('All');

  const filteredIndustries =
    activeFilter === 'All'
      ? industriesData
      : industriesData.filter((item) => item.name === activeFilter);

  return (
    <Section spacing="xl" className="relative w-full bg-background overflow-hidden">
      <Container size="xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
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

        {/* Industry Filters */}
        {showFilters && (
          <div className="mb-12 flex justify-center overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Industry categories"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
            >
              <button
                role="tab"
                aria-selected={activeFilter === 'All'}
                onClick={() => setActiveFilter('All')}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeFilter === 'All'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                All Industries
              </button>
              {industryNames.map((name) => {
                const isActive = activeFilter === name;
                return (
                  <button
                    key={name}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(name)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Responsive Grid with Staggered Reveal Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((industry: IndustryItem, index: number) => (
              <motion.div
                key={industry.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <IndustryCard industry={industry} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
