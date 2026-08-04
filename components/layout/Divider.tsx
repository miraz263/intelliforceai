import React from 'react';
import { cn } from '@/lib/utils';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  gradient?: boolean;
  label?: string;
}

export function Divider({
  orientation = 'horizontal',
  gradient = false,
  label,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block h-full w-[1px]',
          gradient
            ? 'bg-gradient-to-b from-transparent via-border to-transparent'
            : 'bg-border',
          className
        )}
        {...props}
      />
    );
  }

  if (label) {
    return (
      <div role="separator" className={cn('relative my-6 flex items-center w-full', className)} {...props}>
        <div className={cn('flex-grow h-[1px]', gradient ? 'bg-gradient-to-r from-transparent to-border' : 'bg-border')} />
        <span className="px-3 text-xs uppercase tracking-wider text-muted-foreground font-medium">
          {label}
        </span>
        <div className={cn('flex-grow h-[1px]', gradient ? 'bg-gradient-to-l from-transparent to-border' : 'bg-border')} />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        'w-full h-[1px] my-4',
        gradient
          ? 'bg-gradient-to-r from-transparent via-border to-transparent'
          : 'bg-border',
        className
      )}
      {...props}
    />
  );
}
