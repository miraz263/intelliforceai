import React from 'react';
import { cn } from '@/lib/utils';

export type TypographyVariant =
  | 'display-xl'
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body-lg'
  | 'body'
  | 'small'
  | 'caption';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
}

const variantMap: Record<TypographyVariant, string> = {
  'display-xl': 'text-display-xl font-extrabold tracking-tight',
  display: 'text-display font-extrabold tracking-tight',
  h1: 'text-h1 font-bold tracking-tight',
  h2: 'text-h2 font-bold tracking-tight',
  h3: 'text-h3 font-semibold tracking-tight',
  h4: 'text-h4 font-semibold tracking-tight',
  'body-lg': 'text-body-lg text-foreground/90',
  body: 'text-body text-foreground/80',
  small: 'text-small text-foreground/75',
  caption: 'text-caption text-muted-foreground',
};

const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
  'display-xl': 'h1',
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  'body-lg': 'p',
  body: 'p',
  small: 'span',
  caption: 'span',
};

export function Typography({
  variant = 'body',
  as,
  className,
  children,
  ...props
}: TypographyProps) {
  const Component = as || defaultTagMap[variant];

  return (
    <Component className={cn(variantMap[variant], className)} {...props}>
      {children}
    </Component>
  );
}

export function Heading({
  level = 1,
  className,
  children,
  ...props
}: {
  level?: 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const variant: TypographyVariant = `h${level}` as TypographyVariant;
  return (
    <Typography variant={variant} className={className} {...props}>
      {children}
    </Typography>
  );
}

export function Text({
  size = 'base',
  className,
  children,
  ...props
}: {
  size?: 'lg' | 'base' | 'sm' | 'xs';
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>) {
  const variantMap: Record<'lg' | 'base' | 'sm' | 'xs', TypographyVariant> = {
    lg: 'body-lg',
    base: 'body',
    sm: 'small',
    xs: 'caption',
  };
  return (
    <Typography variant={variantMap[size]} className={className} {...props}>
      {children}
    </Typography>
  );
}
