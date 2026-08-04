import React from 'react';
import { List } from 'lucide-react';
import { TocItem } from '@/config/docs';

export interface DocTocProps {
  items: TocItem[];
}

export function DocToc({ items }: DocTocProps) {
  if (!items || items.length === 0) return null;

  return (
    <aside aria-label="Table of Contents" className="hidden xl:block w-56 shrink-0 space-y-3">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
        <List className="h-3.5 w-3.5 text-primary" />
        <span>On This Page</span>
      </div>

      <ul className="space-y-1.5 text-xs border-l border-border/40 pl-3">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground hover:underline transition-colors block truncate"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
