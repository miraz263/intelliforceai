import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Sparkles } from 'lucide-react';
import { blogPostsData } from '@/config/blog';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Avatar } from '@/components/ui/Avatar';
import { TableOfContents } from '@/components/ui/TableOfContents';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { BlogCard } from '@/components/cards/BlogCard';

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPostsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'IntelliForceAI',
      logo: 'https://intelliforceai.ai/logo.png',
    },
  };

  return (
    <main className="w-full pt-8 pb-16">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section spacing="sm">
        <Container size="xl">
          {/* Back to Blog */}
          <div className="mb-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Blog Articles</span>
            </Link>
          </div>

          {/* Header Metadata */}
          <div className="mx-auto max-w-4xl space-y-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <Badge variant="accent" size="sm">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
              {post.title}
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-400" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Author Profile Header */}
            <div className="flex items-center justify-center gap-3 pt-4 border-t border-border/30 max-w-md mx-auto">
              <Avatar src={post.author.avatar} name={post.author.name} size="md" />
              <div className="text-left">
                <div className="text-sm font-bold text-foreground">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">{post.author.role}</div>
              </div>
            </div>
          </div>

          {/* Hero Cover Image */}
          <div className="my-10 overflow-hidden rounded-3xl border border-border/50 aspect-video max-w-5xl mx-auto shadow-glow">
            <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover" />
          </div>

          {/* Main Article Body Layout (Sidebar + Content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
            {/* Sidebar Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <TableOfContents headings={post.tableOfContents} />
            </aside>

            {/* Markdown Content */}
            <article className="lg:col-span-8 space-y-6 text-foreground leading-relaxed">
              <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-4">
                {post.content.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.startsWith('## ')) {
                    const headingText = paragraph.replace('## ', '');
                    const headingId = headingText
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, '-')
                      .replace(/(^-|-$)/g, '');
                    return (
                      <h2
                        key={pIdx}
                        id={headingId}
                        className="text-2xl font-bold text-foreground mt-8 mb-3 scroll-mt-28"
                      >
                        {headingText}
                      </h2>
                    );
                  }

                  if (paragraph.startsWith('```')) {
                    const codeBlock = paragraph.replace(/```[a-z]*/g, '').trim();
                    return (
                      <pre
                        key={pIdx}
                        className="overflow-x-auto rounded-2xl bg-black/90 p-4 font-mono text-xs text-cyan-300 border border-white/10"
                      >
                        <code>{codeBlock}</code>
                      </pre>
                    );
                  }

                  return (
                    <p key={pIdx} className="text-sm leading-relaxed text-foreground/90">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags & Social Share Footer */}
              <div className="pt-8 mt-10 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/30"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <ShareButtons title={post.title} url={`https://intelliforceai.ai/blog/${post.slug}`} />
              </div>
            </article>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-border/40 max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-8">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <h3 className="text-2xl font-bold text-foreground">Related Articles</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <BlogCard key={rPost.id} post={rPost} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
