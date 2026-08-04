import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Calendar, User, FileText } from 'lucide-react';
import { ResearchPaperItem, ResearchStatus } from '@/config/research';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

const statusVariantMap: Record<ResearchStatus, 'success' | 'info' | 'warning' | 'primary'> = {
  Published: 'success',
  'In Review': 'info',
  Preprint: 'warning',
  'Patent Pending': 'primary',
};

export function ResearchCard({ paper }: { paper: ResearchPaperItem }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Illustration Frame */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted/60 border border-border/50 aspect-video">
          <img
            src={paper.illustration}
            alt={`${paper.title} illustration`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant={statusVariantMap[paper.status]} size="sm">
              {paper.status}
            </Badge>
          </div>

          {/* Date Tag */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono text-slate-300 border border-white/10">
            <Calendar className="h-3 w-3 text-cyan-400" />
            <span>{paper.date}</span>
          </div>

          {/* Category Tag */}
          <div className="absolute bottom-3 left-3 z-10 text-xs font-mono font-semibold text-cyan-300">
            {paper.category}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {paper.title}
        </h3>

        {/* Authors */}
        <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
          <User className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
          <span className="truncate">{paper.authors.join(', ')}</span>
        </div>

        {/* Abstract Summary */}
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {paper.abstract}
        </p>

        {/* Technology Stack Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {paper.technology.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Read / PDF Action */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-2">
        <Link href={paper.pdfUrl} className="w-full">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            leftIcon={<FileText className="h-4 w-4" />}
            rightIcon={<ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-primary transition-colors" />}
          >
            Read Publication PDF
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
