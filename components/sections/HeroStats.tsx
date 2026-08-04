'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { heroConfig, HeroStat } from '@/config/hero';
import { GlassCard } from '@/components/cards/GlassCard';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(value % 1 !== 0 ? 1 : 0)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-extrabold tracking-tight text-3xl sm:text-4xl text-gradient">
      {count}
      {suffix}
    </span>
  );
}

export function HeroStats() {
  return (
    <div className="w-full mt-16 pt-8 border-t border-border/40">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {heroConfig.stats.map((stat: HeroStat, index: number) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <GlassCard intensity="low" className="flex flex-col items-center text-center p-4 h-full">
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-xs font-bold text-foreground mt-1">{stat.label}</span>
              <span className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                {stat.description}
              </span>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
