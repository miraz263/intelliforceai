import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  href?: string;
}

const sizeClasses = {
  sm: { icon: 'h-6 w-6', text: 'text-lg' },
  md: { icon: 'h-8 w-8', text: 'text-xl' },
  lg: { icon: 'h-10 w-10', text: 'text-2xl' },
};

export function Logo({
  className,
  size = 'md',
  iconOnly = false,
  href = '/',
}: LogoProps) {
  const content = (
    <div className={cn('inline-flex items-center gap-2.5 group select-none', className)}>
      <div
        className={cn(
          'relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-violet-600 p-0.5 shadow-glow group-hover:scale-105 transition-transform duration-300',
          sizeClasses[size].icon
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-dark-bg text-cyan-400 font-black tracking-tighter">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3/4 w-3/4"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      {!iconOnly && (
        <span className={cn('font-bold tracking-tight text-foreground', sizeClasses[size].text)}>
          IntelliForce<span className="text-primary font-extrabold">AI</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="IntelliForceAI Home" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
