'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Menu, ArrowRight, Search } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { Button } from '@/components/buttons/Button';
import { Navbar } from './Navbar';
import { cn } from '@/lib/utils';

// Dynamic imports for performance optimization
const SearchModal = dynamic(
  () => import('@/components/search/SearchModal').then((m) => m.SearchModal),
  { ssr: false }
);

const MobileDrawer = dynamic(
  () => import('./MobileDrawer').then((m) => m.MobileDrawer),
  { ssr: false }
);

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-md py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          <Logo />

          <Navbar />

          <div className="hidden lg:flex items-center gap-3">
            {/* Global Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search dialog"
              className="flex items-center gap-2 rounded-xl border border-border/60 bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all shadow-xs"
            >
              <Search className="h-3.5 w-3.5 text-cyan-400" />
              <span>Search...</span>
              <kbd className="rounded border border-border/80 bg-muted px-1.5 py-0.5 text-[10px] font-mono font-bold text-muted-foreground">
                ⌘K
              </kbd>
            </button>

            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/contact">
              <Button
                variant="gradient"
                size="sm"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search dialog"
              className="rounded-lg p-2 text-foreground hover:bg-muted/50 transition-colors"
            >
              <Search className="h-5 w-5 text-cyan-400" />
            </button>
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              aria-label="Open navigation menu"
              className="rounded-lg p-2 text-foreground hover:bg-muted/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {mobileDrawerOpen && (
        <MobileDrawer
          isOpen={mobileDrawerOpen}
          onClose={() => setMobileDrawerOpen(false)}
          pathname={pathname}
        />
      )}

      {searchOpen && (
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      )}
    </>
  );
}
