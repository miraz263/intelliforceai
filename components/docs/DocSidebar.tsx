'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, BookOpen, Cpu, ShieldCheck, Zap, Eye } from 'lucide-react';
import { docsConfig } from '@/config/docs';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-4 w-4 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
  Zap: <Zap className="h-4 w-4 text-amber-400" />,
  Eye: <Eye className="h-4 w-4 text-purple-400" />,
};

export function DocSidebar() {
  const pathname = usePathname();

  // Group articles by product
  const articlesByProduct = docsConfig.products.map((prod) => {
    const articles = docsConfig.articles.filter((a) => a.product === prod.name);
    return {
      product: prod,
      articles,
    };
  });

  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="flex items-center gap-2 pb-4 border-b border-border/40">
        <BookOpen className="h-5 w-5 text-primary" />
        <span className="text-sm font-bold tracking-tight text-foreground">
          Documentation Navigation
        </span>
      </div>

      <nav className="space-y-6">
        {articlesByProduct.map(({ product, articles }) => {
          const icon = iconMap[product.iconName] || <BookOpen className="h-4 w-4 text-primary" />;
          return (
            <div key={product.name} className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                {icon}
                <span>{product.name}</span>
              </div>

              <ul className="space-y-1 pl-4 border-l border-border/40">
                {articles.map((article) => {
                  const href = `/docs/${article.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={article.id}>
                      <Link
                        href={href}
                        className={`flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs font-medium transition-all ${
                          isActive
                            ? 'bg-primary/10 text-primary font-bold border-l-2 border-primary'
                            : 'text-muted-foreground hover:text-foreground hover:bg-surface/50'
                        }`}
                      >
                        <span className="truncate">{article.title}</span>
                        {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0 text-primary" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
