import React from 'react';
import { Linkedin, Github, Mail, Sparkles } from 'lucide-react';
import { LeaderProfile } from '@/config/leadership';
import { Badge } from '@/components/ui/Badge';
import { IconButton } from '@/components/buttons/IconButton';
import { GlassCard } from '@/components/cards/GlassCard';

export function LeaderCard({ leader }: { leader: LeaderProfile }) {
  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Photo Frame with Gradient Border & Hover Zoom */}
        <div className="relative mb-5 overflow-hidden rounded-2xl bg-muted/60 p-1 bg-gradient-to-br from-primary/40 via-border/50 to-transparent group-hover:from-primary group-hover:to-cyan-400 transition-all duration-500">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-background">
            <img
              src={leader.photo}
              alt={`${leader.name} photo`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Category Overlay Badge */}
            <div className="absolute top-3 left-3 z-10">
              <Badge variant="accent" size="sm">
                {leader.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Name & Position Title */}
        <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {leader.name}
        </h3>
        <p className="text-xs font-mono font-semibold text-cyan-400 mt-1">
          {leader.position}
        </p>

        {/* Experience Background Tag */}
        <div className="mt-3 inline-flex items-center gap-1 rounded-md bg-primary/10 px-2.5 py-1 text-[11px] font-mono text-primary border border-primary/20">
          <Sparkles className="h-3 w-3 text-cyan-400" />
          <span>{leader.experience}</span>
        </div>

        {/* Biography */}
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {leader.biography}
        </p>
      </div>

      {/* Social & Contact Buttons */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <a
            href={leader.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label={`${leader.name} LinkedIn`}
              variant="outline"
              size="sm"
              isRounded
              icon={<Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary" />}
            />
          </a>
          <a
            href={leader.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              aria-label={`${leader.name} GitHub`}
              variant="outline"
              size="sm"
              isRounded
              icon={<Github className="h-4 w-4 text-muted-foreground hover:text-primary" />}
            />
          </a>
          <a href={`mailto:${leader.email}`}>
            <IconButton
              aria-label={`Email ${leader.name}`}
              variant="outline"
              size="sm"
              isRounded
              icon={<Mail className="h-4 w-4 text-muted-foreground hover:text-primary" />}
            />
          </a>
        </div>

        <span className="text-[10px] font-mono text-muted-foreground uppercase">Verified</span>
      </div>
    </GlassCard>
  );
}
