'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { testimonialsConfig, TestimonialItem } from '@/config/testimonials';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { IconButton } from '@/components/buttons/IconButton';
import { TestimonialCard } from '@/components/cards/TestimonialCard';

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export function TestimonialsSection({
  title = testimonialsConfig.title,
  subtitle = testimonialsConfig.badge,
  description = testimonialsConfig.description,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = testimonialsConfig.testimonials;
  const total = testimonials.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play timer with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Keyboard Navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  return (
    <Section spacing="xl" className="relative w-full bg-background overflow-hidden">
      <Container size="xl">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="space-y-3 text-center md:text-left">
            <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
              {subtitle}
            </Badge>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <IconButton
              onClick={prevSlide}
              aria-label="Previous testimonial"
              variant="outline"
              size="lg"
              isRounded
              icon={<ChevronLeft className="h-5 w-5" />}
              className="glass-card hover:bg-surface"
            />
            <IconButton
              onClick={nextSlide}
              aria-label="Next testimonial"
              variant="gradient"
              size="lg"
              isRounded
              icon={<ChevronRight className="h-5 w-5" />}
              className="shadow-glow"
            />
          </div>
        </div>

        {/* Carousel Window */}
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          aria-roledescription="carousel"
          aria-label="Enterprise testimonials carousel"
          className="relative w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl"
        >
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Active 3 Visible Testimonials (Wrapping indices) */}
                {[0, 1, 2].map((offset) => {
                  const itemIndex = (currentIndex + offset) % total;
                  const item: TestimonialItem = testimonials[itemIndex];
                  return (
                    <div key={`${item.id}-${offset}`} className="h-full">
                      <TestimonialCard item={item} />
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={currentIndex === idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-primary shadow-glow'
                    : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
