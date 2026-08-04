import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { docsConfig } from '@/config/docs';
import { Container } from '@/components/layout/Container';
import { Badge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/cards/GlassCard';
import { DocSidebar } from '@/components/docs/DocSidebar';
import { DocBreadcrumb } from '@/components/docs/DocBreadcrumb';
import { DocToc } from '@/components/docs/DocToc';
import { DocCallout, CalloutType } from '@/components/docs/DocCallout';
import { DocCodeBlock } from '@/components/docs/DocCodeBlock';

export async function generateStaticParams() {
  return docsConfig.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = docsConfig.articles.find((a) => a.slug === slug);
  if (!article) return { title: 'Documentation Not Found' };
  return {
    title: `${article.title} - ${article.product} Documentation`,
    description: article.description,
  };
}

/**
 * Parser for custom markdown callouts (> [!NOTE], > [!TIP], > [!WARNING]) and code blocks
 */
function renderMarkdownContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let codeBlockBuffer: string[] = [];
  let inCodeBlock = false;
  let codeLang = 'bash';
  let calloutBuffer: string[] = [];
  let inCallout = false;
  let calloutType: CalloutType = 'note';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block start/end
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <DocCodeBlock key={`code-${i}`} language={codeLang} code={codeBlockBuffer.join('\n')} />
        );
        codeBlockBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = line.replace('```', '').trim() || 'bash';
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockBuffer.push(line);
      continue;
    }

    // Callout block start (> [!NOTE])
    if (line.startsWith('> [!')) {
      inCallout = true;
      const typeStr = line.replace('> [!', '').replace(']', '').trim().toLowerCase();
      if (typeStr === 'tip') calloutType = 'tip';
      else if (typeStr === 'warning') calloutType = 'warning';
      else if (typeStr === 'caution') calloutType = 'caution';
      else calloutType = 'note';
      continue;
    }

    if (inCallout) {
      if (line.startsWith('>')) {
        calloutBuffer.push(line.replace('>', '').trim());
        continue;
      } else {
        elements.push(
          <DocCallout key={`callout-${i}`} type={calloutType}>
            {calloutBuffer.join(' ')}
          </DocCallout>
        );
        calloutBuffer = [];
        inCallout = false;
      }
    }

    // Headers
    if (line.startsWith('## ')) {
      const headerText = line.replace('## ', '').trim();
      const id = headerText.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      elements.push(
        <h2 key={`h2-${i}`} id={id} className="text-2xl font-extrabold text-foreground pt-6 pb-2 border-b border-border/30">
          {headerText}
        </h2>
      );
      continue;
    }

    if (line.startsWith('### ')) {
      const headerText = line.replace('### ', '').trim();
      elements.push(
        <h3 key={`h3-${i}`} className="text-lg font-bold text-foreground pt-4 pb-1">
          {headerText}
        </h3>
      );
      continue;
    }

    // Lists
    if (line.startsWith('- ')) {
      elements.push(
        <li key={`li-${i}`} className="ml-4 list-disc text-sm text-muted-foreground leading-relaxed">
          {line.replace('- ', '')}
        </li>
      );
      continue;
    }

    // Paragraphs
    if (line.trim().length > 0) {
      elements.push(
        <p key={`p-${i}`} className="text-sm sm:text-base leading-relaxed text-muted-foreground my-2">
          {line}
        </p>
      );
    }
  }

  // Flush remaining callout
  if (inCallout && calloutBuffer.length > 0) {
    elements.push(
      <DocCallout key="callout-end" type={calloutType}>
        {calloutBuffer.join(' ')}
      </DocCallout>
    );
  }

  return elements;
}

export default async function DocDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = docsConfig.articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full pt-6 pb-16">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Collapsible Sidebar */}
          <DocSidebar />

          {/* Main Doc Body */}
          <article className="flex-1 min-w-0 space-y-8">
            {/* Breadcrumb Navigation */}
            <DocBreadcrumb
              product={article.product}
              category={article.category}
              title={article.title}
            />

            {/* Title & Metadata Header */}
            <div className="space-y-4 pb-6 border-b border-border/40">
              <div className="flex items-center gap-3">
                <Badge variant="primary" size="sm">
                  {article.product}
                </Badge>
                <Badge variant="accent" size="sm">
                  {article.version}
                </Badge>
                <span className="text-xs font-mono text-muted-foreground">
                  Category: {article.category}
                </span>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                {article.title}
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground pt-2">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                  <span>Updated: {article.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{article.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Markdown Rendered Content Body */}
            <div className="prose prose-invert max-w-none space-y-4">
              {renderMarkdownContent(article.content)}
            </div>

            {/* Prev / Next Page Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-border/40">
              {article.prevDoc ? (
                <Link href={`/docs/${article.prevDoc.slug}`}>
                  <GlassCard intensity="low" className="p-4 hover:border-primary/40 transition-all">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Previous Page</span>
                    </div>
                    <div className="text-sm font-bold text-foreground mt-1 truncate">
                      {article.prevDoc.title}
                    </div>
                  </GlassCard>
                </Link>
              ) : <div />}

              {article.nextDoc ? (
                <Link href={`/docs/${article.nextDoc.slug}`}>
                  <GlassCard intensity="low" className="p-4 hover:border-primary/40 transition-all text-right">
                    <div className="flex items-center justify-end gap-2 text-xs font-mono text-muted-foreground">
                      <span>Next Page</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-sm font-bold text-foreground mt-1 truncate">
                      {article.nextDoc.title}
                    </div>
                  </GlassCard>
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Table of Contents Right Bar */}
          <DocToc items={article.tableOfContents} />
        </div>
      </Container>
    </main>
  );
}
