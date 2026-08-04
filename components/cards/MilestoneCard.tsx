import React from 'react';
import {
  Rocket,
  Cpu,
  Building2,
  DollarSign,
  Globe,
  Trophy,
  BookOpen,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { CompanyMilestoneItem } from '@/config/company-timeline';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket className="h-5 w-5 text-cyan-400" />,
  Cpu: <Cpu className="h-5 w-5 text-blue-400" />,
  Building2: <Building2 className="h-5 w-5 text-emerald-400" />,
  DollarSign: <DollarSign className="h-5 w-5 text-amber-400" />,
  Globe: <Globe className="h-5 w-5 text-sky-400" />,
  Trophy: <Trophy className="h-5 w-5 text-yellow-400" />,
  BookOpen: <BookOpen className="h-5 w-5 text-purple-400" />,
  Sparkles: <Sparkles className="h-5 w-5 text-pink-400" />,
};

export function MilestoneCard({ milestone }: { milestone: CompanyMilestoneItem }) {
  const icon = iconMap[milestone.iconName] || <Sparkles className="h-5 w-5 text-primary" />;

  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Top Header: Year/Quarter & Status Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-base font-mono font-extrabold text-cyan-400">
              {milestone.year} {milestone.quarter}
            </span>
            <Badge variant="accent" size="sm">
              {milestone.category}
            </Badge>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {milestone.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {milestone.description}
        </p>

        {/* Metrics Badges */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Key Achievement Metrics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {milestone.metrics.map((metric, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-lg bg-primary/10 text-primary px-2.5 py-1 text-xs font-bold border border-primary/20"
              >
                <CheckCircle2 className="h-3 w-3 text-cyan-400" />
                <span>{metric}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
