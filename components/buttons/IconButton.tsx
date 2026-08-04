import React from 'react';
import { Loader2 } from 'lucide-react';
import { ButtonVariant, ButtonSize } from './Button';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isRounded?: boolean;
  'aria-label': string;
  icon: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm active:scale-[0.98]',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm active:scale-[0.98]',
  outline: 'border border-border bg-transparent hover:bg-muted/50 text-foreground active:scale-[0.98]',
  ghost: 'bg-transparent hover:bg-muted/50 text-foreground active:scale-[0.98]',
  gradient: 'bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-glow hover:opacity-95 active:scale-[0.98]',
  danger: 'bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm active:scale-[0.98]',
  success: 'bg-success text-success-foreground hover:bg-success/90 shadow-sm active:scale-[0.98]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-14 w-14 text-lg',
};

export function IconButton({
  variant = 'ghost',
  size = 'md',
  isLoading = false,
  isRounded = false,
  disabled = false,
  icon,
  className,
  'aria-label': ariaLabel,
  ...props
}: IconButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      disabled={isDisabled}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      aria-disabled={isDisabled}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shrink-0 select-none',
        isRounded ? 'rounded-full' : 'rounded-lg',
        variantClasses[variant],
        sizeClasses[size],
        isDisabled && 'opacity-50 pointer-events-none shadow-none cursor-not-allowed',
        className
      )}
      {...props}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : icon}
    </button>
  );
}
