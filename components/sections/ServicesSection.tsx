'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  serviceCategories,
  servicesData,
  ServiceCategory,
  ServiceItem,
} from '@/config/services';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { ServiceCard } from '@/components/cards/ServiceCard';

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
}

export function ServicesSection({
  title = 'Enterprise AI & Engineering Services',
  subtitle = 'Services & Solutions',
  description = 'Data-driven, full-stack AI and software engineering capabilities engineered for global enterprise scalability.',
  showFilters = true,
}: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All');

  const filteredServices =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((item) => item.category === activeCategory);

  return (
    <Section spacing="xl" className="relative w-full bg-background/50">
      <Container size="xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Category Filters */}
        {showFilters && (
          <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
            <div
              role="tablist"
              aria-label="Service categories"
              className="inline-flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md min-w-full sm:min-w-0"
            >
              {serviceCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service: ServiceItem) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">
            No services found for this category.
          </div>
        )}
      </Container>
    </Section>
  );
}
