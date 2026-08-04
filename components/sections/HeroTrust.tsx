'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { heroConfig, TrustItem } from '@/config/hero';

export function HeroTrust() {
  const marqueeItems = [...heroConfig.trust, ...heroConfig.trust];

  return (
    <div className="w-full mt-12 overflow-hidden py-4 border-y border-border/30 bg-surface/30 backdrop-blur-xs select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by Fortune 500 Leaders & Global AI Ecosystems
        </span>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Left/Right Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center gap-12"
        >
          {marqueeItems.map((item: TrustItem, index: number) => (
            <div
              key={`${item.name}-${index}`}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-surface/50 px-4 py-2 text-xs font-medium text-foreground/80 shadow-xs hover:border-primary/40 hover:bg-surface transition-colors shrink-0"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-[10px]">
                {item.logoText[0]}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground text-xs">{item.name}</span>
                <span className="text-[10px] text-muted-foreground">{item.category}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
