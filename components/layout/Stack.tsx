import React from 'react';
import { cn } from '@/lib/utils';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  horizontal?: boolean;
  align?: 'start' | 'center' | 'end' | 'stretch';
  children: React.ReactNode;
}

const spaceClasses = {
  xs: 'gap-2',
  sm: 'gap-3',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
  '2xl': 'gap-12',
  '3xl': 'gap-16',
};

const alignClasses = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

export function Stack({
  space = 'md',
  horizontal = false,
  align = 'stretch',
  className,
  children,
  ...props
}: StackProps) {
  return (
    <div
      className={cn(
        'flex',
        horizontal ? 'flex-row' : 'flex-col',
        spaceClasses[space],
        alignClasses[align],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
