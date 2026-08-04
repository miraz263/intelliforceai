import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantMap: Record<BadgeVariant, string> = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/20 text-secondary-foreground border-secondary/30',
  outline: 'bg-transparent text-foreground border-border',
  accent: 'bg-accent/15 text-accent-foreground border-accent/30',
  success: 'bg-success/15 text-success border-success/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  danger: 'bg-danger/15 text-danger border-danger/30',
  info: 'bg-info/15 text-info border-info/30',
};

const sizeMap = {
  sm: 'px-2 py-0.5 text-xs gap-1',
  md: 'px-2.5 py-1 text-xs font-medium gap-1.5',
  lg: 'px-3 py-1 text-sm font-medium gap-2',
};

export function Badge({
  variant = 'primary',
  size = 'md',
  icon,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border transition-colors select-none',
        variantMap[variant],
        sizeMap[size],
        className
      )}
      {...props}
    >
      {icon}
      <span>{children}</span>
    </span>
  );
}
