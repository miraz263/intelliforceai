'use client';

import React, { useState } from 'react';
import {
  Building2,
  Landmark,
  Shield,
  GraduationCap,
  Zap,
  Radio,
  Cloud,
  Cpu,
  Globe,
  Database,
  Code2,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { PartnerLogoItem } from '@/config/partners';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="h-5 w-5 text-blue-400" />,
  Landmark: <Landmark className="h-5 w-5 text-emerald-400" />,
  Shield: <Shield className="h-5 w-5 text-violet-400" />,
  GraduationCap: <GraduationCap className="h-5 w-5 text-amber-400" />,
  Zap: <Zap className="h-5 w-5 text-cyan-400" />,
  Radio: <Radio className="h-5 w-5 text-pink-400" />,
  Cloud: <Cloud className="h-5 w-5 text-sky-400" />,
  Cpu: <Cpu className="h-5 w-5 text-indigo-400" />,
  Globe: <Globe className="h-5 w-5 text-cyan-400" />,
  Database: <Database className="h-5 w-5 text-rose-400" />,
  Code2: <Code2 className="h-5 w-5 text-orange-400" />,
  ShieldCheck: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
  Terminal: <Terminal className="h-5 w-5 text-blue-400" />,
};

export function PartnerLogo({ item }: { item: PartnerLogoItem }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const icon = iconMap[item.svgIconName] || <Building2 className="h-5 w-5 text-primary" />;

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <a
        href={item.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${item.name} website`}
        className={cn(
          'group flex items-center gap-3 rounded-2xl border border-border/50 bg-surface/70 px-5 py-3 shadow-xs transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-surface hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
        )}
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background/80 border border-border/40 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
            {item.name}
          </span>
          <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
            {item.badgeText}
          </span>
        </div>
      </a>

      {/* Hover Tooltip */}
      {showTooltip && (
        <div
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-2.5 -translate-x-1/2 whitespace-nowrap rounded-xl border border-border/80 bg-black/90 dark:bg-dark-card/95 px-3 py-1.5 text-xs text-white shadow-xl backdrop-blur-md transition-all animate-in fade-in zoom-in-95"
        >
          <div className="font-semibold text-cyan-300 text-[11px]">{item.category}</div>
          <div className="text-[10px] text-slate-300">{item.tooltipDescription}</div>
          <div className="absolute top-full left-1/2 -ml-1 border-4 border-transparent border-t-black/90" />
        </div>
      )}
    </div>
  );
}
