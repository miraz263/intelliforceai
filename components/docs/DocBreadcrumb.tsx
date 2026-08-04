import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface DocBreadcrumbProps {
  product: string;
  category: string;
  title: string;
}

export function DocBreadcrumb({ product, category, title }: DocBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Link href="/docs" className="flex items-center gap-1 hover:text-foreground transition-colors">
        <Home className="h-3.5 w-3.5" />
        <span>Docs</span>
      </Link>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-border" />
      <span className="font-semibold text-muted-foreground">{product}</span>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-border" />
      <span className="font-semibold text-cyan-400">{category}</span>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-border" />
      <span className="truncate max-w-[200px] text-foreground font-bold">{title}</span>
    </nav>
  );
}
