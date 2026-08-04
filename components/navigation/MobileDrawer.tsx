'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/buttons/Button';
import { productItems, companyItems } from './MegaMenu';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileDrawer({ isOpen, onClose, pathname }: MobileDrawerProps) {
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);



  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-surface border-l border-border shadow-2xl p-6 lg:hidden overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border pb-4 mb-6">
              <Logo size="sm" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 space-y-1">
              <Link
                href="/"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Home
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      productsOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {productsOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                    {productItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/services"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/services'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Services
              </Link>

              <Link
                href="/research"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/research'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Research
              </Link>

              {/* Company Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      companyOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </button>
                {companyOpen && (
                  <div className="ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                    {companyItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
                      >
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/blog'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Blog
              </Link>

              <Link
                href="/careers"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/careers'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Careers
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className={`flex items-center rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  pathname === '/contact'
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-foreground hover:bg-muted/50'
                }`}
              >
                Contact
              </Link>
            </nav>

            <div className="border-t border-border pt-6 mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">Theme</span>
                <ThemeToggle showLabels />
              </div>

              <Button
                variant="gradient"
                fullWidth
                rightIcon={<ArrowRight className="h-4 w-4" />}
                onClick={() => {
                  onClose();
                  window.location.href = '/contact';
                }}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
