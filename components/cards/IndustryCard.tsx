import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  Activity,
  TrendingUp,
  Landmark,
  LineChart,
  Factory,
  ShoppingCart,
  Shield,
  GraduationCap,
  Radio,
  Zap,
  Truck,
  FileCheck,
} from 'lucide-react';
import { IndustryItem } from '@/config/industries';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="h-5 w-5 text-blue-400" />,
  TrendingUp: <TrendingUp className="h-5 w-5 text-emerald-400" />,
  Landmark: <Landmark className="h-5 w-5 text-amber-400" />,
  LineChart: <LineChart className="h-5 w-5 text-cyan-400" />,
  Factory: <Factory className="h-5 w-5 text-purple-400" />,
  ShoppingCart: <ShoppingCart className="h-5 w-5 text-pink-400" />,
  Shield: <Shield className="h-5 w-5 text-violet-400" />,
  GraduationCap: <GraduationCap className="h-5 w-5 text-sky-400" />,
  Radio: <Radio className="h-5 w-5 text-rose-400" />,
  Zap: <Zap className="h-5 w-5 text-amber-400" />,
  Truck: <Truck className="h-5 w-5 text-emerald-400" />,
  FileCheck: <FileCheck className="h-5 w-5 text-cyan-400" />,
};

export function IndustryCard({ industry }: { industry: IndustryItem }) {
  const icon = iconMap[industry.iconName] || <Activity className="h-5 w-5 text-primary" />;

  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Illustration Frame */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted/60 border border-border/50 aspect-video">
          <img
            src={industry.illustration}
            alt={`${industry.name} industry illustration`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Icon Badge Overlay */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 rounded-xl bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/10">
            {icon}
            <span className="text-xs font-bold text-white">{industry.name}</span>
          </div>
        </div>

        {/* Industry Title & Description */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {industry.name} AI Solutions
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {industry.description}
        </p>

        {/* Tailored Solutions List */}
        <div className="mt-4 space-y-1.5 pt-3 border-t border-border/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Tailored Enterprise Solutions:
          </span>
          {industry.solutions.map((sol, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
              <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{sol}</span>
            </div>
          ))}
        </div>

        {/* Quantified Benefits Chips */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Proven ROI Metrics:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {industry.benefits.map((benefit, bIdx) => (
              <span
                key={bIdx}
                className="inline-flex items-center rounded-lg bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 text-[11px] font-bold border border-emerald-500/20"
              >
                {benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Matching Product Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {industry.products.map((prod) => (
            <Badge key={prod} variant="accent" size="sm">
              {prod}
            </Badge>
          ))}
        </div>
      </div>

      {/* Footer Read CTA */}
      <div className="mt-6 pt-4 border-t border-border/40">
        <Link href={industry.href}>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Explore {industry.name} Solutions
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
