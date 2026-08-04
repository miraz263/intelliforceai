'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Calendar,
  Rocket,
  Mail,
  FileText,
  Users,
  CheckCircle2,
  Send,
} from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/buttons/Button';
import { GlassCard } from '@/components/cards/GlassCard';

export type CTAType =
  | 'Book Demo'
  | 'Start Project'
  | 'Contact Sales'
  | 'Download Brochure'
  | 'Join Team'
  | 'Subscribe';

export type CTABackground = 'gradient' | 'glass' | 'mesh' | 'dark';

export interface CTASectionProps {
  type?: CTAType;
  background?: CTABackground;
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  showSubscribeForm?: boolean;
}

const defaultTypeConfig: Record<
  CTAType,
  {
    subtitle: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    primaryText: string;
    primaryHref: string;
    secondaryText: string;
    secondaryHref: string;
  }
> = {
  'Book Demo': {
    subtitle: 'Interactive Platform Demo',
    title: 'Experience IntelliForceAI 2.0 Multi-Agent OS in Action',
    description:
      'Schedule a personalized 1-on-1 architecture walkthrough with our lead AI solution architects.',
    icon: <Calendar className="h-4 w-4 text-cyan-400" />,
    primaryText: 'Book 1-on-1 Architecture Demo',
    primaryHref: '/contact',
    secondaryText: 'Explore Products Showcase',
    secondaryHref: '/products',
  },
  'Start Project': {
    subtitle: 'Enterprise AI Deployment',
    title: 'Ready to Engineer Your Enterprise AI Platform?',
    description:
      'Deploy autonomous multi-agent pipelines, custom LLM models, and zero-trust VPC enclaves in weeks.',
    icon: <Rocket className="h-4 w-4 text-emerald-400" />,
    primaryText: 'Start Your Enterprise Project',
    primaryHref: '/contact',
    secondaryText: 'View Case Studies',
    secondaryHref: '/research',
  },
  'Contact Sales': {
    subtitle: 'Talk with Solution Architects',
    title: 'Have Questions About Pricing, SLAs, or Security?',
    description:
      'Our team is available 24/7 to provide custom enterprise quotes, SOC2 documentation, and SLA terms.',
    icon: <Mail className="h-4 w-4 text-blue-400" />,
    primaryText: 'Contact Enterprise Sales',
    primaryHref: '/contact',
    secondaryText: 'Read Enterprise FAQ',
    secondaryHref: '/faq',
  },
  'Download Brochure': {
    subtitle: 'Technical Whitepapers',
    title: 'Download IntelliForceAI Technical Architecture Guide',
    description:
      'Get comprehensive documentation on our Rust & CUDA IPC engine, eBPF security, and static export model.',
    icon: <FileText className="h-4 w-4 text-purple-400" />,
    primaryText: 'Download Architecture PDF',
    primaryHref: '/research',
    secondaryText: 'View Research Papers',
    secondaryHref: '/research',
  },
  'Join Team': {
    subtitle: 'Career Opportunities',
    title: 'Build the Next Frontier of Autonomous AI Swarms',
    description:
      'Join our team of former DeepMind researchers and systems engineers building self-governing platforms.',
    icon: <Users className="h-4 w-4 text-amber-400" />,
    primaryText: 'Explore Open Positions',
    primaryHref: '/careers',
    secondaryText: 'Meet Leadership Team',
    secondaryHref: '/about',
  },
  Subscribe: {
    subtitle: 'Stay Ahead in AI',
    title: 'Subscribe to AI Research & Engineering Weekly',
    description:
      'Get the latest breakthroughs in multi-agent orchestration, model quantization, and zero-server web architecture.',
    icon: <Sparkles className="h-4 w-4 text-pink-400" />,
    primaryText: 'Subscribe Now',
    primaryHref: '#',
    secondaryText: 'Read Our Blog',
    secondaryHref: '/blog',
  },
};

export function CTASection({
  type = 'Start Project',
  background = 'gradient',
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  showSubscribeForm = false,
}: CTASectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const config = defaultTypeConfig[type];

  const displayTitle = title || config.title;
  const displaySubtitle = subtitle || config.subtitle;
  const displayDescription = description || config.description;
  const primaryText = primaryButtonText || config.primaryText;
  const primaryHref = primaryButtonHref || config.primaryHref;
  const secondaryText = secondaryButtonText || config.secondaryText;
  const secondaryHref = secondaryButtonHref || config.secondaryHref;

  const isSubscribeMode = type === 'Subscribe' || showSubscribeForm;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3500);
  };

  // Background styling mapping
  const bgClasses: Record<CTABackground, string> = {
    gradient:
      'bg-gradient-to-r from-primary/20 via-cyan-900/30 to-purple-900/20 border-primary/40 shadow-glow',
    glass: 'glass-panel border-border/60 shadow-xl',
    mesh: 'bg-surface/80 border-cyan-500/30 backdrop-blur-xl shadow-glow',
    dark: 'bg-black/90 border-border/40 shadow-2xl',
  };

  return (
    <Section spacing="xl" className="relative w-full overflow-hidden">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard
            intensity="high"
            className={`relative overflow-hidden p-8 sm:p-12 md:p-16 rounded-3xl border transition-all ${bgClasses[background]}`}
          >
            {/* Background Glow Orbs */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl text-center space-y-6">
              {/* Badge */}
              <div className="inline-flex justify-center">
                <Badge variant="primary" icon={config.icon}>
                  {displaySubtitle}
                </Badge>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-foreground">
                {displayTitle}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {displayDescription}
              </p>

              {/* Actions: Newsletter Subscribe Form vs Dual Buttons */}
              {isSubscribeMode ? (
                <div className="pt-4 max-w-md mx-auto">
                  {subscribed ? (
                    <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-xs font-bold text-emerald-400 animate-in fade-in">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>Thank you! You are now subscribed to AI Research Weekly.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        placeholder="Enter your work email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl border border-border/80 bg-background/80 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-xs"
                      />
                      <Button
                        type="submit"
                        variant="gradient"
                        size="md"
                        className="shrink-0"
                        leftIcon={<Send className="h-4 w-4" />}
                      >
                        Subscribe
                      </Button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href={primaryHref}>
                    <Button
                      variant="gradient"
                      size="lg"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                    >
                      {primaryText}
                    </Button>
                  </Link>

                  <Link href={secondaryHref}>
                    <Button variant="outline" size="lg">
                      {secondaryText}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </Container>
    </Section>
  );
}
