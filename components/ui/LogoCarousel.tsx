'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PartnerLogoItem } from '@/config/partners';
import { PartnerLogo } from './PartnerLogo';
import { cn } from '@/lib/utils';

export interface LogoCarouselProps {
  items: PartnerLogoItem[];
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  className?: string;
}

export function LogoCarousel({
  items,
  direction = 'left',
  speed = 30,
  className,
}: LogoCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeItems = [...items, ...items, ...items];

  const animateDirection = direction === 'left' ? ['0%', '-33.333%'] : ['-33.333%', '0%'];

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className={cn('relative w-full overflow-hidden py-4 select-none', className)}
    >
      {/* Left/Right Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

      {/* Infinite Scrolling Track */}
      <motion.div
        animate={isPaused ? {} : { x: animateDirection }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        className="flex shrink-0 items-center gap-6"
      >
        {marqueeItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="shrink-0">
            <PartnerLogo item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
