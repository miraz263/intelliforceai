'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { RoadmapMilestone } from '@/config/research';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

export function ResearchTimeline({ milestones }: { milestones: RoadmapMilestone[] }) {
  return (
    <div className="relative w-full py-8">
      {/* Central Line for Desktop */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/80 via-primary/30 to-transparent hidden sm:block" />

      <div className="space-y-8 relative z-10">
        {milestones.map((item, idx) => {
          const isEven = idx % 2 === 0;
          const isCompleted = item.status === 'Completed';
          const isInProgress = item.status === 'In Progress';

          return (
            <motion.div
              key={`${item.year}-${item.quarter}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                isEven ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Content Card Side */}
              <div className="w-full md:w-1/2">
                <GlassCard
                  intensity="medium"
                  className={`p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-glow ${
                    isInProgress ? 'border-primary/60 shadow-glow' : ''
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-cyan-400">
                        {item.year} {item.quarter}
                      </span>
                      <Badge
                        variant={isCompleted ? 'success' : isInProgress ? 'primary' : 'warning'}
                        size="sm"
                      >
                        {item.status}
                      </Badge>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </div>

              {/* Central Node Indicator */}
              <div className="relative flex items-center justify-center shrink-0 hidden sm:flex">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-background transition-all ${
                    isCompleted
                      ? 'border-emerald-500 text-emerald-400 shadow-sm'
                      : isInProgress
                      ? 'border-primary text-primary shadow-glow animate-pulse'
                      : 'border-muted-foreground/40 text-muted-foreground'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : isInProgress ? (
                    <Sparkles className="h-5 w-5" />
                  ) : (
                    <Clock className="h-5 w-5" />
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
  );
}
