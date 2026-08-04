'use client';

import React from 'react';
import { ScrollProgress } from '@/components/navigation/ScrollProgress';
import { AnnouncementBar } from '@/components/navigation/AnnouncementBar';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/footer/Footer';
import { BackToTop } from '@/components/navigation/BackToTop';

export interface RootShellProps {
  children: React.ReactNode;
}

export function RootShell({ children }: RootShellProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
      <ScrollProgress />
      <AnnouncementBar />
      <Header />
      <main id="main-content" className="flex-1 w-full">{children}</main>
      <BackToTop />
      <Footer />
    </div>
  );
}
