import React from 'react';
import Link from 'next/link';
import {
  Cpu,
  Download,
  Boxes,
  ShieldAlert,
  Eye,
  FileText,
  Mic,
  Building2,
  Warehouse,
  LineChart,
  ExternalLink,
  ArrowRight,
} from 'lucide-react';
import { ProductItem, ProductStatus } from '@/config/products';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export const productIconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6 text-blue-400" />,
  Download: <Download className="h-6 w-6 text-cyan-400" />,
  Boxes: <Boxes className="h-6 w-6 text-violet-400" />,
  ShieldAlert: <ShieldAlert className="h-6 w-6 text-emerald-400" />,
  Eye: <Eye className="h-6 w-6 text-amber-400" />,
  FileText: <FileText className="h-6 w-6 text-pink-400" />,
  Mic: <Mic className="h-6 w-6 text-sky-400" />,
  Building2: <Building2 className="h-6 w-6 text-indigo-400" />,
  Warehouse: <Warehouse className="h-6 w-6 text-orange-400" />,
  LineChart: <LineChart className="h-6 w-6 text-teal-400" />,
};

export const productStatusBadgeMap: Record<
  ProductStatus,
  { variant: 'success' | 'info' | 'accent' | 'warning'; label: string }
> = {
  Released: { variant: 'success', label: 'Released' },
  Beta: { variant: 'info', label: 'Beta' },
  Enterprise: { variant: 'accent', label: 'Enterprise' },
  'Coming Soon': { variant: 'warning', label: 'Coming Soon' },
};

export function ProductCard({ product }: { product: ProductItem }) {
  const icon = productIconMap[product.iconName] || <Cpu className="h-6 w-6 text-primary" />;
  const statusInfo = productStatusBadgeMap[product.status];

  return (
    <GlassCard
      intensity="medium"
      className="group relative flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow focus-within:ring-2 focus-within:ring-primary"
    >
      <div>
        {/* Screenshot / Mock Frame */}
        <div className="relative mb-5 overflow-hidden rounded-xl bg-muted/60 border border-border/50 aspect-video">
          <img
            src={product.screenshot}
            alt={`${product.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Status Badge Overlay */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant={statusInfo.variant} size="sm">
              {statusInfo.label}
            </Badge>
          </div>

          {/* Category Tag */}
          <div className="absolute bottom-3 left-3 z-10">
            <span className="inline-flex items-center rounded-md bg-black/60 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-cyan-300 border border-white/10">
              {product.category}
            </span>
          </div>
        </div>

        {/* Header Icon & Title */}
        <div className="flex items-start gap-3 mb-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface/80 border border-border/60 shadow-xs group-hover:scale-105 transition-transform">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {product.description}
        </p>

        {/* Technologies Pills */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {product.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[11px] font-mono font-medium text-foreground/80 border border-border/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-3">
        <Link href={product.demoUrl} className="flex-1">
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            rightIcon={<ExternalLink className="h-3.5 w-3.5" />}
          >
            Live Demo
          </Button>
        </Link>

        <Link href={product.detailsUrl} className="flex-1">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Details
          </Button>
        </Link>
      </div>
    </GlassCard>
  );
}
