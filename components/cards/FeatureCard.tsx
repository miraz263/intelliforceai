import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  badge?: string;
  actionText?: string;
  onAction?: () => void;
}

export function FeatureCard({
  title,
  description,
  icon,
  badge,
  actionText,
  onAction,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card className={cn('relative flex flex-col justify-between group', className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              {icon}
            </div>
          )}
          {badge && <Badge variant="accent">{badge}</Badge>}
        </div>

        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>

      {actionText && (
        <CardFooter>
          <Button
            variant="ghost"
            size="sm"
            onClick={onAction}
            rightIcon={<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
            className="p-0 hover:bg-transparent text-primary font-semibold"
          >
            {actionText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
