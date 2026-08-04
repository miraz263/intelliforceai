'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/buttons/Button';
import { Container } from '@/components/layout/Container';
import { heroConfig } from '@/config/hero';
import { HeroBackground } from './HeroBackground';
import { HeroStats } from './HeroStats';
import { HeroTrust } from './HeroTrust';

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    setMousePos({ x, y });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-80px)] w-full flex flex-col justify-between overflow-hidden pt-12 pb-8"
    >
      <HeroBackground mouseX={mousePos.x} mouseY={mousePos.y} />

      <Container size="xl" className="relative z-10 flex-1 flex flex-col justify-center my-auto">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center"
          >
            <Link
              href={heroConfig.badge.link}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-surface/80 px-4 py-1.5 text-xs font-semibold text-foreground backdrop-blur-md hover:border-cyan-400 hover:bg-surface transition-all shadow-glow"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>{heroConfig.badge.text}</span>
              <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
            </Link>
          </motion.div>

          {/* Multiline Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-none">
              <span className="block text-foreground">{heroConfig.headline.prefix}</span>
              <span className="block text-foreground/90">{heroConfig.headline.middle} </span>
              <span className="block text-gradient mt-1">{heroConfig.headline.highlight}</span>
            </h1>
          </motion.div>

          {/* Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal"
          >
            {heroConfig.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link href={heroConfig.primaryCta.href} className="w-full sm:w-auto">
              <Button
                variant="gradient"
                size="xl"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="w-full sm:w-auto shadow-glow"
              >
                {heroConfig.primaryCta.text}
              </Button>
            </Link>

            <Link href={heroConfig.secondaryCta.href} className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto glass-card hover:bg-surface"
              >
                {heroConfig.secondaryCta.text}
              </Button>
            </Link>
          </motion.div>

          {/* Statistics Grid */}
          <HeroStats />
        </div>
      </Container>

      {/* Trust Logo Marquee */}
      <div className="relative z-10">
        <HeroTrust />

        {/* Scroll Indicator */}
        <div className="flex justify-center pt-4">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
          >
            <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
            <ChevronDown className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
