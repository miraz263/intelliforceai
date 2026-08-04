'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Sparkles, BookOpen, Cpu, ShieldCheck, Zap, Eye, ArrowRight } from 'lucide-react';
import { docsConfig } from '@/config/docs';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
  Zap: <Zap className="h-6 w-6 text-amber-400" />,
  Eye: <Eye className="h-6 w-6 text-purple-400" />,
};

export default function DocsHomePage() {
  const [query, setQuery] = useState('');

  const filteredArticles = docsConfig.articles.filter((article) => {
    const q = query.toLowerCase();
    return (
      article.title.toLowerCase().includes(q) ||
      article.description.toLowerCase().includes(q) ||
      article.product.toLowerCase().includes(q) ||
      article.category.toLowerCase().includes(q)
    );
  });

  return (
    <main className="w-full pt-8 pb-16 space-y-16">
      {/* Hero Header & Search */}
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<BookOpen className="h-3 w-3" />}>
              {docsConfig.badge}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              {docsConfig.title}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {docsConfig.description}
            </p>

            {/* Search Input Bar */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search API reference, SDK guides, CLI commands, or release notes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-2xl border border-border/80 bg-surface/80 pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Filtered Search Results (if searching) */}
      {query ? (
        <Section spacing="sm" className="w-full">
          <Container size="xl">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Search Results ({filteredArticles.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/docs/${article.slug}`}>
                  <GlassCard intensity="medium" className="p-6 space-y-2 hover:border-primary/50 transition-all">
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                      <span>{article.product}</span>
                      <span>{article.version}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{article.title}</h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">{article.description}</p>
                  </GlassCard>
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-16 text-muted-foreground text-sm">
                No documentation guides found matching &quot;{query}&quot;.
              </div>
            )}
          </Container>
        </Section>
      ) : (
        <>
          {/* Products Quick-Start Cards */}
          <Section spacing="sm" className="w-full">
            <Container size="xl">
              <div className="mx-auto max-w-3xl text-center space-y-3 mb-10">
                <Badge variant="accent" icon={<Sparkles className="h-3 w-3" />}>
                  Product Hubs
                </Badge>
                <h2 className="text-3xl font-extrabold text-foreground">
                  Select a Product to Start Reading
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {docsConfig.products.map((prod) => {
                  const icon = iconMap[prod.iconName] || <BookOpen className="h-6 w-6 text-primary" />;
                  return (
                    <Link key={prod.name} href={`/docs/${prod.defaultSlug}`}>
                      <GlassCard
                        intensity="medium"
                        className="p-6 space-y-4 hover:border-primary/50 hover:shadow-glow transition-all h-full flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
                            {icon}
                          </div>
                          <h3 className="text-lg font-bold text-foreground">{prod.name}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {prod.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-bold text-primary pt-2">
                          <span>Browse Guides</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </GlassCard>
                    </Link>
                  );
                })}
              </div>
            </Container>
          </Section>

          {/* Popular Documentation Guides */}
          <Section spacing="md" className="w-full bg-background/50">
            <Container size="xl">
              <div className="mx-auto max-w-3xl text-center space-y-3 mb-10">
                <Badge variant="primary" icon={<BookOpen className="h-3 w-3" />}>
                  Featured Guides
                </Badge>
                <h2 className="text-3xl font-extrabold text-foreground">
                  Popular Technical Documentation
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {docsConfig.articles.map((article) => (
                  <Link key={article.id} href={`/docs/${article.slug}`}>
                    <GlassCard
                      intensity="low"
                      className="p-6 space-y-3 hover:border-primary/40 transition-all flex items-start justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono">
                          <span className="text-cyan-400 font-bold">{article.product}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-muted-foreground">{article.category}</span>
                        </div>
                        <h3 className="text-base font-bold text-foreground">{article.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground shrink-0 mt-1" />
                    </GlassCard>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        </>
      )}
    </main>
  );
}
