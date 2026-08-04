'use client';

import React from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { useTheme, Theme } from '@/hooks/use-theme';
import { cn } from '@/lib/utils';

export interface ThemeToggleProps {
  className?: string;
  showLabels?: boolean;
}

export function ThemeToggle({ className, showLabels = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const themes: { value: Theme; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'system', label: 'System', icon: <Laptop className="h-4 w-4" /> },
  ];

  return (
    <div
      role="group"
      aria-label="Theme selector"
      className={cn('inline-flex items-center gap-1 rounded-full p-1 border border-border bg-surface/50 backdrop-blur-sm', className)}
    >
      {themes.map((item) => {
        const isActive = theme === item.value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setTheme(item.value)}
            aria-pressed={isActive}
            aria-label={`Switch to ${item.label} theme`}
            className={cn(
              'inline-flex items-center justify-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
              isActive
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
            )}
          >
            {item.icon}
            {showLabels && <span>{item.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
