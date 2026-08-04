import React from 'react';
import { ArrowRight, MapPin, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { JobPosition } from '@/config/careers';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export function CareerCard({ job }: { job: JobPosition }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Top Header: Department & Experience Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <Badge variant="accent" size="sm">
            {job.department}
          </Badge>

          <div className="flex items-center gap-1">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-mono text-primary border border-primary/20">
              <Sparkles className="h-3 w-3 text-cyan-400" />
              <span>{job.experience}</span>
            </span>
          </div>
        </div>

        {/* Job Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {job.title}
        </h3>

        {/* Location & Type Tags */}
        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="h-3.5 w-3.5 text-blue-400" />
            <span>{job.type}</span>
          </div>
        </div>

        {/* Job Description */}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {job.description}
        </p>

        {/* Requirements Bullet Points */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Key Prerequisites:
          </span>
          <div className="space-y-1">
            {job.requirements.map((req, rIdx) => (
              <div key={rIdx} className="flex items-start gap-1.5 text-xs text-foreground/90">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 pt-4 border-t border-border/40">
        <a href={job.applyUrl}>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Apply for Position
          </Button>
        </a>
      </div>
    </GlassCard>
  );
}
