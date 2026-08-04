import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '@/config/testimonials';
import { Avatar } from '@/components/ui/Avatar';
import { GlassCard } from '@/components/cards/GlassCard';

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full p-6 sm:p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
    >
      <div>
        {/* Top Header: 5-Star Rating & Quote Watermark */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
        </div>

        {/* Highlight Banner */}
        <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
          &quot;{item.highlight}&quot;
        </div>

        {/* Quote Content */}
        <p className="text-sm sm:text-base text-foreground/95 italic leading-relaxed mb-6">
          &quot;{item.quote}&quot;
        </p>
      </div>

      {/* Footer Author Profile */}
      <div className="flex items-center gap-3 pt-4 border-t border-border/40">
        <Avatar src={item.avatar} name={item.name} size="md" />
        <div className="flex flex-col">
          <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
            {item.name}
          </h4>
          <span className="text-xs text-muted-foreground">{item.role}</span>
          <span className="text-[11px] font-mono text-cyan-400">{item.company}</span>
        </div>
      </div>
    </GlassCard>
  );
}
