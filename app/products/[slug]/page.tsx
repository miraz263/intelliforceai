import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { productsData } from '@/config/products';
import { productIconMap, productStatusBadgeMap } from '@/components/cards/ProductCard';
import { ProductCard } from '@/components/cards/ProductCard';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.screenshot }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productsData.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const icon = productIconMap[product.iconName] ?? productIconMap.Cpu;
  const statusInfo = productStatusBadgeMap[product.status];

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    applicationCategory: product.category,
    image: product.screenshot,
    softwareVersion: product.status,
    publisher: {
      '@type': 'Organization',
      name: 'IntelliForceAI',
      logo: 'https://intelliforceai.ai/logo.png',
    },
  };

  return (
    <main className="w-full pt-8 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section spacing="sm">
        <Container size="xl">
          {/* Back to Products */}
          <div className="mb-6">
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to All Products</span>
            </Link>
          </div>

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface/80 border border-border/60">
                  {icon}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={statusInfo.variant} size="sm">
                    {statusInfo.label}
                  </Badge>
                  <span className="inline-flex items-center rounded-md bg-muted/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground border border-border/30">
                    {product.category}
                  </span>
                </div>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[11px] font-mono text-muted-foreground border border-border/40"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href={product.demoUrl}>
                  <Button variant="gradient" size="md" rightIcon={<ExternalLink className="h-4 w-4" />}>
                    Live Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="md">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>

            {/* Screenshot */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 aspect-video shadow-glow">
                <img
                  src={product.screenshot}
                  alt={`${product.name} screenshot`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16 max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <h2 className="text-2xl font-bold text-foreground">What It Does</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.highlights.map((highlight, idx) => (
                <GlassCard key={idx} intensity="low" className="h-full">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/90 leading-relaxed">{highlight}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-md bg-muted/50 px-3 py-1.5 text-sm font-mono font-medium text-foreground/90 border border-border/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20 pt-16 border-t border-border/40 max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-8">More in {product.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((rProduct) => (
                  <ProductCard key={rProduct.id} product={rProduct} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
