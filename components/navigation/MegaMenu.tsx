'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  Brain,
  Eye,
  Mic,
  Zap,
  ShieldCheck,
  Cloud,
  Users,
  Award,
  Handshake,
  FileText,
  Star,
  ArrowRight,
} from 'lucide-react';

export interface MegaMenuItem {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export const productItems: MegaMenuItem[] = [
  {
    title: 'AI Platform',
    description: 'Enterprise autonomous intelligence core & agent orchestration',
    href: '/products',
    icon: <Cpu className="h-5 w-5 text-blue-400" />,
  },
  {
    title: 'LLM',
    description: 'Custom fine-tuned large language models & neural reasoning',
    href: '/products',
    icon: <Brain className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: 'Computer Vision',
    description: 'Real-time video analytics & optical pattern recognition',
    href: '/products',
    icon: <Eye className="h-5 w-5 text-violet-400" />,
  },
  {
    title: 'Voice AI',
    description: 'Ultra-low latency conversational voice agents & speech synthesis',
    href: '/products',
    icon: <Mic className="h-5 w-5 text-pink-400" />,
  },
  {
    title: 'Automation',
    description: 'Self-healing workflow pipelines & intelligent RPA',
    href: '/products',
    icon: <Zap className="h-5 w-5 text-amber-400" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Predictive threat mitigation & zero-trust AI defense',
    href: '/products',
    icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: 'Cloud',
    description: 'Distributed GPU cloud infrastructure & edge inference',
    href: '/products',
    icon: <Cloud className="h-5 w-5 text-sky-400" />,
  },
];

export const companyItems: MegaMenuItem[] = [
  {
    title: 'About',
    description: 'Our mission, vision, and pioneering AI research team',
    href: '/about',
    icon: <Users className="h-5 w-5 text-blue-400" />,
  },
  {
    title: 'Leadership',
    description: 'Executive visionaries & AI research scientists',
    href: '/about',
    icon: <Award className="h-5 w-5 text-cyan-400" />,
  },
  {
    title: 'Partners',
    description: 'Global enterprise ecosystem & cloud integrations',
    href: '/about',
    icon: <Handshake className="h-5 w-5 text-violet-400" />,
  },
  {
    title: 'Case Studies',
    description: 'Proven ROI & real-world enterprise deployments',
    href: '/research',
    icon: <FileText className="h-5 w-5 text-emerald-400" />,
  },
  {
    title: 'Testimonials',
    description: 'What Fortune 500 tech leaders say about IntelliForceAI',
    href: '/about',
    icon: <Star className="h-5 w-5 text-amber-400" />,
  },
];

export interface MegaMenuProps {
  type: 'products' | 'company';
  onClose: () => void;
}

export function MegaMenu({ type, onClose }: MegaMenuProps) {
  const items = type === 'products' ? productItems : companyItems;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-full left-0 w-full pt-2 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#11162b] dark:shadow-[0_25px_70px_-12px_rgba(0,0,0,0.85)]">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-foreground capitalize">
                {type === 'products' ? 'Enterprise AI Products' : 'Company & Leadership'}
              </h3>
              <p className="text-xs text-muted-foreground">
                {type === 'products'
                  ? 'Autonomous intelligence infrastructure built for global scale'
                  : 'Empowering enterprises through breakthrough AI innovation'}
              </p>
            </div>
            <Link
              href={type === 'products' ? '/products' : '/about'}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
            >
              View All {type === 'products' ? 'Products' : 'Overview'} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-start gap-3.5 rounded-xl p-3 hover:bg-muted/60 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/80 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
