import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Building2, TrendingUp } from 'lucide-react';
import { CaseStudyItem } from '@/config/case-studies';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export function CaseStudyCard({ study }: { study: CaseStudyItem }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Cover Image Frame with Hover Zoom */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted/60 border border-border/50 aspect-video">
          <img
            src={study.coverImage}
            alt={`${study.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Industry Overlay Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="accent" size="sm">
              {study.industry}
            </Badge>
          </div>

          {/* Timeline Badge */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono text-slate-300 border border-white/10">
              <Clock className="h-3 w-3 text-cyan-400" />
              <span>{study.timeline}</span>
            </span>
          </div>

          {/* Client Name Overlay */}
          <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold text-white">
            <Building2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>{study.client}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {study.title}
        </h3>

        {/* Challenge & Solution Summary */}
        <div className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground font-semibold">Challenge: </strong>
            {study.challenge}
          </p>
          <p>
            <strong className="text-primary font-semibold">Solution: </strong>
            {study.solution}
          </p>
        </div>

        {/* Results Chips */}
        <div className="mt-4 pt-3 border-t border-border/40">
          <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
            Key Impact Results:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {study.results.map((res, rIdx) => (
              <span
                key={rIdx}
                className="inline-flex items-center gap-1 rounded-lg bg-primary/10 text-primary px-2.5 py-1 text-xs font-bold border border-primary/20"
              >
                <TrendingUp className="h-3 w-3 text-cyan-400" />
                <span>{res}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {study.technology.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Read CTA */}
      <div className="mt-6 pt-4 border-t border-border/40">
        <Link href={study.href}>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            rightIcon={<ArrowRight className="h-4 w-4" />}
          >
            Read Case Study
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
