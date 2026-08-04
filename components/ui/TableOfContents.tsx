'use client';

import React from 'react';
import { List, ChevronRight } from 'lucide-react';
import { TOCHeading } from '@/config/blog';
import { GlassCard } from '@/components/cards/GlassCard';

export function TableOfContents({ headings }: { headings: TOCHeading[] }) {
  if (!headings || headings.length === 0) return null;

  return (
    <GlassCard intensity="low" className="p-5 border border-border/50 sticky top-24">
      <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
        <List className="h-4 w-4" />
        <span>Table of Contents</span>
      </div>

      <nav aria-label="Table of contents">
        <ul className="space-y-2 text-xs">
          {headings.map((item) => (
            <li key={item.id} className={item.level === 3 ? 'pl-3' : ''}>
              <a
                href={`#${item.id}`}
                className="group flex items-start gap-1.5 text-muted-foreground hover:text-primary transition-colors leading-snug"
              >
                <ChevronRight className="h-3 w-3 shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </GlassCard>
  );
}
