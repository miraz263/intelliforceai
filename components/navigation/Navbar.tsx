'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { MegaMenu } from './MegaMenu';

export function Navbar() {
  const pathname = usePathname();
  const [activeMegaMenu, setActiveMegaMenu] = useState<'products' | 'company' | null>(null);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products', isMega: true, megaType: 'products' as const },
    { title: 'Services', href: '/services' },
    { title: 'Research', href: '/research' },
    { title: 'Company', href: '/about', isMega: true, megaType: 'company' as const },
    { title: 'Blog', href: '/blog' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        if (link.isMega) {
          const isOpen = activeMegaMenu === link.megaType;
          return (
            <div
              key={link.title}
              onMouseEnter={() => setActiveMegaMenu(link.megaType)}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                type="button"
                onClick={() => setActiveMegaMenu(isOpen ? null : link.megaType)}
                aria-expanded={isOpen}
                className={`group relative inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isOpen || isActive
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span>{link.title}</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground group-hover:text-foreground'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <MegaMenu type={link.megaType} onClose={() => setActiveMegaMenu(null)} />
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <Link
            key={link.title}
            href={link.href}
            className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
              isActive
                ? 'text-primary font-semibold'
                : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
            }`}
          >
            {link.title}
            {isActive && (
              <motion.div
                layoutId="navbar-indicator"
                className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
