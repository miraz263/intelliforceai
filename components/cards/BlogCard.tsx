import React from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { BlogPostItem } from '@/config/blog';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export function BlogCard({ post }: { post: BlogPostItem }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Cover Image Frame with Hover Zoom */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted/60 border border-border/50 aspect-video">
          <img
            src={post.coverImage}
            alt={`${post.title} cover`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

          {/* Category Badge Overlay */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="accent" size="sm">
              {post.category}
            </Badge>
          </div>

          {/* Reading Time Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[11px] font-mono text-slate-300 border border-white/10">
            <Clock className="h-3 w-3 text-cyan-400" />
            <span>{post.readingTime}</span>
          </div>
        </div>

        {/* Date & Metadata */}
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
          <Calendar className="h-3.5 w-3.5 text-cyan-400" />
          <span>{post.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Author & Read Action */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar src={post.author.avatar} name={post.author.name} size="sm" />
          <div className="flex flex-col">
            <span className="text-xs font-bold text-foreground">{post.author.name}</span>
            <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">
              {post.author.role}
            </span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <Button
            variant="ghost"
            size="sm"
            rightIcon={<ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />}
          >
            Read
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
