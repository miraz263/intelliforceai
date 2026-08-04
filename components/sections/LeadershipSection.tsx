'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users } from 'lucide-react';
import {
  leadershipConfig,
  leadershipCategories,
  LeaderProfile,
  LeadershipCategory,
} from '@/config/leadership';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { LeaderCard } from '@/components/cards/LeaderCard';

export interface LeadershipSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
}

export function LeadershipSection({
  title = leadershipConfig.title,
  subtitle = leadershipConfig.badge,
  description = leadershipConfig.description,
  showFilters = true,
}: LeadershipSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'All' | LeadershipCategory>('All');

  const filteredTeam =
    activeCategory === 'All'
      ? leadershipConfig.team
      : leadershipConfig.team.filter((member) => member.category === activeCategory);

  return (
    <Section spacing="xl" className="relative w-full bg-background/50 overflow-hidden">
      <Container size="xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <Badge variant="primary" icon={<Users className="h-3 w-3" />}>
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
        {showFilters && (
          <div className="mb-12 flex justify-center overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Leadership team categories"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
            >
              <button
                role="tab"
                aria-selected={activeCategory === 'All'}
                onClick={() => setActiveCategory('All')}
                className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  activeCategory === 'All'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                All Leadership
              </button>
              {leadershipCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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
        )}

        {/* Responsive Grid with Staggered Reveal Animations */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((leader: LeaderProfile, index: number) => (
              <motion.div
                key={leader.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <LeaderCard leader={leader} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </Section>
  );
}
