import React from 'react';
import { cn } from '@/lib/utils';

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const intensityClasses = {
  low: 'glass-panel p-6',
  medium: 'glass-card p-8',
  high: 'glass-card p-10 backdrop-blur-2xl border-white/20 dark:border-white/10',
};

export function GlassCard({
  glow = false,
  intensity = 'medium',
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'relative rounded-2xl transition-all duration-300 overflow-hidden',
        intensityClasses[intensity],
        glow && 'glow-effect',
        className
      )}
      {...props}
    >
      {/* Background ambient gradient glow overlay */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
