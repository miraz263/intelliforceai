import React from 'react';
import { cn } from '@/lib/utils';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  interactive?: boolean;
}

export function Tag({
  children,
  interactive = false,
  className,
  ...props
}: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md bg-muted/60 px-2 py-1 text-xs font-mono font-medium text-muted-foreground border border-border/50 transition-colors',
        interactive && 'hover:bg-muted hover:text-foreground cursor-pointer',
        className
      )}
      {...props}
    >
      #{children}
    </span>
  );
}
