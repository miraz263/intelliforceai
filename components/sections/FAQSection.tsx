'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, HelpCircle } from 'lucide-react';
import { faqConfig, faqCategories, FAQCategory } from '@/config/faq';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { AccordionItem } from '@/components/ui/Accordion';

export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showSearch?: boolean;
}

export function FAQSection({
  title = faqConfig.title,
  subtitle = faqConfig.badge,
  description = faqConfig.description,
  showSearch = true,
}: FAQSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | FAQCategory>('All');
  const [openId, setOpenId] = useState<string | null>('faq-static-export');

  const popularFaqs = faqConfig.faqs.filter((f) => f.isPopular);

  const filteredFaqs = faqConfig.faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <Section spacing="xl" className="relative w-full bg-background overflow-hidden">
      <Container size="xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
          <Badge variant="primary" icon={<HelpCircle className="h-3 w-3" />}>
            {subtitle}
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Search Bar */}
          {showSearch && (
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions by topic, deployment, or security..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-border/80 bg-surface/80 pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
                />
              </div>
            </div>
          )}
        </div>

        {/* Popular Questions Spotlight */}
        {!searchQuery && activeCategory === 'All' && popularFaqs.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400">
                Popular Enterprise Questions
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularFaqs.slice(0, 4).map((pFaq) => (
                <button
                  key={pFaq.id}
                  type="button"
                  onClick={() => setOpenId(pFaq.id)}
                  className="text-left p-4 rounded-xl border border-border/50 bg-surface/50 hover:border-primary/40 transition-all text-xs font-semibold text-foreground flex items-center justify-between"
                >
                  <span>{pFaq.question}</span>
                  <span className="text-[10px] font-mono text-cyan-400">View Answer</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="mb-10 flex justify-center overflow-x-auto pb-2 no-scrollbar">
          <div
            role="tablist"
            aria-label="FAQ categories"
            className="inline-flex items-center gap-1.5 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
          >
            <button
              role="tab"
              aria-selected={activeCategory === 'All'}
              onClick={() => setActiveCategory('All')}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === 'All'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              All Questions
            </button>
            {faqCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <AccordionItem
                  id={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  category={faq.category}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 text-muted-foreground text-sm">
            No questions found matching &quot;{searchQuery}&quot;.
          </div>
        )}
      </Container>
    </Section>
  );
}
