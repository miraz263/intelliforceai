'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { companyTimelineConfig } from '@/config/company-timeline';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { MilestoneCard } from '@/components/cards/MilestoneCard';
import { IconButton } from '@/components/buttons/IconButton';

export interface CompanyTimelineSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function CompanyTimelineSection({
  title = companyTimelineConfig.title,
  subtitle = companyTimelineConfig.badge,
  description = companyTimelineConfig.description,
}: CompanyTimelineSectionProps) {
  const [layoutMode, setLayoutMode] = useState<'vertical' | 'horizontal'>('vertical');
  const [horizontalIndex, setHorizontalIndex] = useState(0);

  const milestones = companyTimelineConfig.milestones;
  const total = milestones.length;

  const nextHorizontal = () => {
    setHorizontalIndex((prev) => (prev + 1) % total);
  };

  const prevHorizontal = () => {
    setHorizontalIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <Section spacing="xl" className="relative w-full bg-background overflow-hidden border-t border-border/30">
      <Container size="xl">
        {/* Header & Layout Toggle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
              {subtitle}
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Layout Mode Selector Buttons */}
          <div className="inline-flex items-center gap-1 rounded-xl border border-border/60 bg-surface/60 p-1 backdrop-blur-md shrink-0">
            <button
              type="button"
              aria-pressed={layoutMode === 'vertical'}
              onClick={() => setLayoutMode('vertical')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                layoutMode === 'vertical'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Vertical View
            </button>
            <button
              type="button"
              aria-pressed={layoutMode === 'horizontal'}
              onClick={() => setLayoutMode('horizontal')}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                layoutMode === 'horizontal'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Horizontal Slider
            </button>
          </div>
        </div>

        {/* Layout Mode 1: Vertical Stream Timeline */}
        {layoutMode === 'vertical' && (
          <div className="relative w-full py-6">
            {/* Central Axis Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-cyan-400 to-transparent hidden sm:block" />

            <div className="space-y-12 relative z-10">
              {milestones.map((item, idx) => {
                const isEven = idx % 2 === 0;
                const isAchieved = item.status === 'Achieved';

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card Side */}
                    <div className="w-full md:w-1/2">
                      <MilestoneCard milestone={item} />
                    </div>

                    {/* Central Node Indicator */}
                    <div className="relative flex items-center justify-center shrink-0 hidden sm:flex">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full border-2 bg-background transition-all shadow-glow ${
                          isAchieved
                            ? 'border-cyan-400 text-cyan-400'
                            : 'border-primary text-primary animate-pulse'
                        }`}
                      >
                        {isAchieved ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <Sparkles className="h-5 w-5" />
                        )}
                      </div>
                    </div>

                    {/* Empty Spacer Side */}
                    <div className="w-full md:w-1/2 hidden md:block" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Layout Mode 2: Horizontal Slider Timeline */}
        {layoutMode === 'horizontal' && (
          <div className="relative w-full py-6">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-mono font-bold text-cyan-400">
                Milestone {horizontalIndex + 1} of {total}
              </span>
              <div className="flex items-center gap-2">
                <IconButton
                  aria-label="Previous milestone"
                  onClick={prevHorizontal}
                  variant="outline"
                  size="sm"
                  isRounded
                  icon={<ChevronLeft className="h-4 w-4" />}
                />
                <IconButton
                  aria-label="Next milestone"
                  onClick={nextHorizontal}
                  variant="gradient"
                  size="sm"
                  isRounded
                  icon={<ChevronRight className="h-4 w-4" />}
                />
              </div>
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={horizontalIndex}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {[0, 1, 2].map((offset) => {
                    const itemIdx = (horizontalIndex + offset) % total;
                    const item = milestones[itemIdx];
                    return (
                      <div key={`${item.id}-${offset}`} className="h-full">
                        <MilestoneCard milestone={item} />
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
