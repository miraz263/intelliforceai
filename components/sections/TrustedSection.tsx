'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import { partnersConfig } from '@/config/partners';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { LogoCarousel } from '@/components/ui/LogoCarousel';

export function TrustedSection() {
  const config = partnersConfig.trustedBy;

  return (
    <Section spacing="lg" className="relative w-full bg-background/50 overflow-hidden border-t border-border/30">
      <Container size="xl">
        <div className="mx-auto max-w-3xl text-center space-y-3 mb-8">
          <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
            {config.badge}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            {config.title}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {config.description}
          </p>
        </div>

        {/* Infinite Logo Carousel */}
        <LogoCarousel items={config.items} direction="left" speed={28} />
      </Container>
    </Section>
  );
}
