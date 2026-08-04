'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPostsData, blogCategories, BlogCategory, BlogPostItem } from '@/config/blog';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/buttons/Button';
import { BlogCard } from '@/components/cards/BlogCard';

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'All' | BlogCategory>('All');

  const featuredPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full pt-8 pb-16 space-y-12">
      {/* Header */}
      <Section spacing="sm">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Badge variant="primary" icon={<Sparkles className="h-3 w-3" />}>
              Engineering & Research Insights
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-gradient">
              IntelliForceAI Blog
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Technical deep dives into multi-agent systems, Rust & CUDA optimization, eBPF security, and zero-server web architecture.
            </p>

            {/* Client-Side Search Bar */}
            <div className="pt-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles by topic, technology, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-border/80 bg-surface/80 pl-12 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured Post Spotlight Banner */}
      {!searchQuery && activeCategory === 'All' && featuredPost && (
        <Section spacing="sm" className="w-full">
          <Container size="xl">
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-surface/70 p-6 md:p-10 backdrop-blur-md shadow-glow group hover:border-primary/50 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="accent" size="sm">
                      Featured Post
                    </Badge>
                    <Badge variant="primary" size="sm">
                      {featuredPost.category}
                    </Badge>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{featuredPost.readingTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Avatar
                      src={featuredPost.author.avatar}
                      name={featuredPost.author.name}
                      size="md"
                    />
                    <div>
                      <div className="text-sm font-bold text-foreground">
                        {featuredPost.author.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {featuredPost.author.role}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      <Button
                        variant="gradient"
                        size="md"
                        rightIcon={<ArrowRight className="h-4 w-4" />}
                      >
                        Read Featured Article
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 overflow-hidden rounded-2xl bg-muted/60 border border-border/50 aspect-video lg:aspect-square">
                  <img
                    src={featuredPost.coverImage}
                    alt={`${featuredPost.title} cover`}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* Category Tabs & Articles Grid */}
      <Section spacing="md">
        <Container size="xl">
          {/* Category Tabs */}
          <div className="mb-10 flex justify-center overflow-x-auto pb-2 no-scrollbar">
            <div
              role="tablist"
              aria-label="Blog categories"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-border/60 bg-surface/60 p-1.5 backdrop-blur-md"
            >
              <button
                role="tab"
                aria-selected={activeCategory === 'All'}
                onClick={() => setActiveCategory('All')}
                className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === 'All'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                All Articles
              </button>
              {blogCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all ${
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

          {/* Posts Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post: BlogPostItem, index: number) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="h-full"
                >
                  <BlogCard post={post} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16 text-muted-foreground text-sm">
              No articles found matching &quot;{searchQuery}&quot;.
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
