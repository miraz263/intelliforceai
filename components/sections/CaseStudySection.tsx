'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  caseStudyIndustries,
  caseStudiesData,
  CaseStudyIndustry,
  CaseStudyItem,
} from '@/config/case-studies';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { CaseStudyCard } from '@/components/cards/CaseStudyCard';

export interface CaseStudySectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
}

export function CaseStudySection({
  title = 'Enterprise Deployment Case Studies',
  subtitle = 'Proven Results',
  description = 'Explore how Fortune 500 companies and government directorates achieve high-ROI outcomes with IntelliForceAI.',
  showFilters = true,
}: CaseStudySectionProps) {
  const [activeIndustry, setActiveIndustry] = useState<CaseStudyIndustry>('All');

  const filteredStudies =
    activeIndustry === 'All'
      ? caseStudiesData
      : caseStudiesData.filter((item) => item.industry === activeIndustry);

  return (
    <Section spacing="xl" className="relative w-full bg-background/50 overflow-hidden">
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
              aria-label="Case study industries"
              className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
            >
              {caseStudyIndustries.map((industry) => {
                const isActive = activeIndustry === industry;
                return (
                  <button
                    key={industry}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveIndustry(industry)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {industry}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Responsive Grid with Staggered Reveal Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study: CaseStudyItem, index: number) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <CaseStudyCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            No case studies found for this industry.
          </div>
        )}
      </Container>
    </Section>
  );
}
