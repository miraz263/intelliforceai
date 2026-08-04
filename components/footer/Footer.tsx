'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2 } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { siteConfig } from '@/config/site';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Leadership', href: '/about' },
        { label: 'Partners', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'AI Platform', href: '/products' },
        { label: 'LLM Engine', href: '/products' },
        { label: 'Computer Vision', href: '/products' },
        { label: 'Voice AI', href: '/products' },
        { label: 'Autonomous RPA', href: '/products' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Enterprise AI Strategy', href: '/services' },
        { label: 'Model Customization', href: '/services' },
        { label: 'Cloud Architecture', href: '/services' },
        { label: 'Security & Compliance', href: '/services' },
        { label: '24/7 Managed AI Support', href: '/services' },
      ],
    },
    {
      title: 'Resources & Legal',
      links: [
        { label: 'Research Papers', href: '/research' },
        { label: 'Blog & Articles', href: '/blog' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ];

  return (
    <footer className="w-full border-t border-border bg-surface/60 backdrop-blur-md pt-16 pb-12 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 pb-12 border-b border-border/60">
          {/* Company Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Next-generation enterprise AI software architecture & autonomous intelligence platform. Built for 100+ page global scale and cPanel static export.
            </p>

            {/* Newsletter Subscription Box */}
            <div className="pt-2 space-y-2">
              <h4 className="text-sm font-semibold text-foreground">
                Subscribe to AI Research Dispatch
              </h4>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded-xl bg-success/15 p-3 text-xs font-medium text-success border border-success/30">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Thank you for subscribing! You are now on our priority list.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full rounded-xl border border-input bg-background/80 px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      type="submit"
                      aria-label="Subscribe to newsletter"
                      className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shrink-0"
                    >
                      <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-danger">{error}</p>}
                </form>
              )}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Theme Toggle */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}, Inc. All rights reserved. Built for static export deployment.
          </p>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <span>•</span>
            <ThemeToggle showLabels={false} />
          </div>
        </div>
      </div>
    </footer>
  );
}
