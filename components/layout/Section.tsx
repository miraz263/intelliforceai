import React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  children: React.ReactNode;
}

const spacingClasses: Record<NonNullable<SectionProps['spacing']>, string> = {
  none: 'py-0',
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16',
  lg: 'py-16 sm:py-24',
  xl: 'py-24 sm:py-32',
  '2xl': 'py-32 sm:py-48',
};

export function Section({
  spacing = 'lg',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn('relative w-full overflow-hidden', spacingClasses[spacing], className)} {...props}>
      {children}
    </section>
  );
}
