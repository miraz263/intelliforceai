import React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon?: React.ReactNode;
  onDismiss?: () => void;
  selected?: boolean;
  disabled?: boolean;
}

export function Chip({
  label,
  icon,
  onDismiss,
  selected = false,
  disabled = false,
  className,
  ...props
}: ChipProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border transition-all select-none',
        selected
          ? 'bg-primary text-primary-foreground border-primary shadow-sm'
          : 'bg-surface/80 text-foreground border-border hover:bg-muted/50',
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
      {onDismiss && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onDismiss();
          }}
          aria-label={`Remove ${label}`}
          className="ml-1 rounded-full p-0.5 hover:bg-black/10 dark:hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </div>
  );
}
