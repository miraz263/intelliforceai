import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  Brain,
  Sparkles,
  Zap,
  Cloud,
  ShieldCheck,
  Terminal,
  Database,
  Code2,
  Smartphone,
  Globe,
  Layout,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { ServiceItem } from '@/config/services';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6 text-blue-400" />,
  Brain: <Brain className="h-6 w-6 text-cyan-400" />,
  Sparkles: <Sparkles className="h-6 w-6 text-violet-400" />,
  Zap: <Zap className="h-6 w-6 text-amber-400" />,
  Cloud: <Cloud className="h-6 w-6 text-sky-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
  Terminal: <Terminal className="h-6 w-6 text-indigo-400" />,
  Database: <Database className="h-6 w-6 text-rose-400" />,
  Code2: <Code2 className="h-6 w-6 text-blue-400" />,
  Smartphone: <Smartphone className="h-6 w-6 text-pink-400" />,
  Globe: <Globe className="h-6 w-6 text-cyan-400" />,
  Layout: <Layout className="h-6 w-6 text-violet-400" />,
};

export function ServiceCard({ service }: { service: ServiceItem }) {
  const icon = iconMap[service.iconName] || <Cpu className="h-6 w-6 text-primary" />;

  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Header Icon & Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface/80 border border-border/60 shadow-inner group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
            {icon}
          </div>
          {service.popular ? (
            <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
              Popular
            </Badge>
          ) : (
            <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
              {service.category}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {service.description}
        </p>

        {/* Feature List */}
        <ul className="mt-6 space-y-2 border-t border-border/40 pt-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer CTA */}
      <div className="mt-8 pt-4 border-t border-border/30">
        <Link
          href={service.href}
          aria-label={`Learn more about ${service.title}`}
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary rounded"
        >
          <span>Learn More</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </GlassCard>
  );
}
