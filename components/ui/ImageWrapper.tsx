import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ImageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'wide';
  fit?: 'cover' | 'contain' | 'fill';
  radius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  loading?: 'lazy' | 'eager';
}

const aspectMap = {
  auto: 'aspect-auto',
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[21/9]',
};

const radiusMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
};

const fitMap = {
  cover: 'object-cover',
  contain: 'object-contain',
  fill: 'object-fill',
};

export function ImageWrapper({
  src,
  alt,
  aspectRatio = 'auto',
  fit = 'cover',
  radius = 'lg',
  loading = 'lazy',
  className,
  ...props
}: ImageWrapperProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-muted/40 w-full',
        aspectMap[aspectRatio],
        radiusMap[radius],
        className
      )}
      {...props}
    >
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 animate-pulse bg-muted/60" aria-hidden="true" />
      )}

      {hasError ? (
        <div className="flex h-full w-full flex-col items-center justify-center bg-muted/30 p-4 text-muted-foreground">
          <ImageOff className="h-8 w-8 mb-2 opacity-50" />
          <span className="text-xs">Failed to load image</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            'h-full w-full transition-opacity duration-300',
            fitMap[fit],
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
      )}
    </div>
  );
}
