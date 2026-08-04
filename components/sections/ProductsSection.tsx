'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  productCategories,
  productsData,
  ProductCategory,
  ProductItem,
} from '@/config/products';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { ProductCard } from '@/components/cards/ProductCard';

export interface ProductsSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showFilters?: boolean;
}

export function ProductsSection({
  title = 'Enterprise AI & Software Product Suite',
  subtitle = 'Flagship Products',
  description = 'Autonomous AI platforms, developer toolchains, and cloud infrastructure engineered for production deployment.',
  showFilters = true,
}: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All');

  const filteredProducts =
    activeCategory === 'All'
      ? productsData
      : productsData.filter((item) => item.category === activeCategory);

  return (
    <Section spacing="xl" className="relative w-full bg-background">
      <Container size="xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
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
          <div className="mb-12 flex justify-center overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Product categories"
              className="inline-flex items-center gap-2 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
            >
              {productCategories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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

        {/* Responsive Grid with Staggered Fade/Scale Animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product: ProductItem, index: number) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            No products found for this category.
          </div>
        )}
      </Container>
    </Section>
  );
}
