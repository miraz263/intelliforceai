'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FolderCheck,
  Building,
  Globe,
  Code2,
  Award,
  Clock,
  Download,
  Star,
} from 'lucide-react';
import { StatMetric } from '@/config/stats';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  FolderCheck: <FolderCheck className="h-5 w-5 text-blue-400" />,
  Building: <Building className="h-5 w-5 text-cyan-400" />,
  Globe: <Globe className="h-5 w-5 text-violet-400" />,
  Code2: <Code2 className="h-5 w-5 text-emerald-400" />,
  Award: <Award className="h-5 w-5 text-amber-400" />,
  Clock: <Clock className="h-5 w-5 text-pink-400" />,
  Download: <Download className="h-5 w-5 text-sky-400" />,
  Star: <Star className="h-5 w-5 text-yellow-400" />,
};

function CountUpCounter({ value, prefix = '', suffix }: { value: number; prefix?: string; suffix: string }) {
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
    <span ref={ref} className="font-extrabold text-3xl sm:text-4xl text-gradient tracking-tight">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export function StatCard({ metric }: { metric: StatMetric }) {
  const icon = iconMap[metric.iconName] || <Award className="h-5 w-5 text-primary" />;
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });

  // SVG Radial Chart Calculations
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (metric.percentage / 100) * circumference;

  return (
    <div ref={cardRef} className="h-full">
      <GlassCard
        intensity="medium"
        className="group relative flex flex-col justify-between h-full p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow"
      >
        <div>
          {/* Header Icon & SVG Radial Progress Chart */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface/80 border border-border/60 shadow-inner group-hover:scale-110 transition-transform">
              {icon}
            </div>

            {/* SVG Radial Chart */}
            <div className="relative flex items-center justify-center h-16 w-16">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 70 70">
                {/* Background Ring */}
                <circle
                  cx="35"
                  cy="35"
                  r={radius}
                  className="stroke-muted/40"
                  strokeWidth="5"
                  fill="transparent"
                />
                {/* Animated Foreground Ring */}
                <motion.circle
                  cx="35"
                  cy="35"
                  r={radius}
                  className="stroke-primary"
                  strokeWidth="5"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={{ strokeDashoffset: isInView ? strokeDashoffset : circumference }}
                  transition={{ duration: 1.8, ease: 'easeOut' }}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <span className="absolute text-[10px] font-mono font-bold text-foreground">
                {Math.round(metric.percentage)}%
              </span>
            </div>
          </div>

          {/* Count-Up Value */}
          <CountUpCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />

          {/* Label & Description */}
          <h3 className="mt-2 text-base font-bold text-foreground group-hover:text-primary transition-colors">
            {metric.label}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {metric.description}
          </p>
        </div>

        {/* Linear Progress Bar Indicator */}
        <div className="mt-6 pt-4 border-t border-border/30 space-y-1.5">
          <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
            <span>{metric.progressLabel}</span>
            <span className="text-primary font-mono">{metric.percentage}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted/50">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${metric.percentage}%` : 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
