'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Layers } from 'lucide-react';
import { researchConfig, ResearchCategory } from '@/config/research';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { ResearchCard } from '@/components/cards/ResearchCard';
import { ResearchTimeline } from './ResearchTimeline';

export interface ResearchSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showTimeline?: boolean;
}

const categories: ('All' | ResearchCategory)[] = [
  'All',
  'Agentic AI',
  'Large Language Models',
  'Computer Vision',
  'Voice AI',
  'Cybersecurity',
  'Cloud Native',
  'Distributed Systems',
  'Edge Computing',
  'Robotics',
];

export function ResearchSection({
  title = researchConfig.title,
  subtitle = researchConfig.badge,
  description = researchConfig.description,
  showTimeline = true,
}: ResearchSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | ResearchCategory>('All');

  const filteredPapers =
    activeCategory === 'All'
      ? researchConfig.papers
      : researchConfig.papers.filter((paper) => paper.category === activeCategory);

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

        {/* Category Filters */}
        <div className="mb-12 flex justify-center overflow-x-auto pb-2 no-scrollbar">
          <div
            role="tablist"
            aria-label="Research categories"
            className="inline-flex items-center gap-1.5 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Papers Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredPapers.map((paper, idx) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="h-full"
            >
              <ResearchCard paper={paper} />
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Roadmap Section */}
        {showTimeline && (
          <div className="mt-20 pt-16 border-t border-border/40">
            <div className="mx-auto max-w-3xl text-center space-y-3 mb-12">
              <Badge variant="accent" icon={<Layers className="h-3 w-3" />}>
                Technology Roadmap
              </Badge>
              <h3 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                IntelliForceAI Innovation Timeline
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Key technical milestones from core foundation to quantum hardware readiness.
              </p>
            </div>

            <ResearchTimeline milestones={researchConfig.roadmap} />
          </div>
        )}
      </Container>
    </Section>
  );
}
