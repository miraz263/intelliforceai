'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface HeroBackgroundProps {
  mouseX?: number;
  mouseY?: number;
}

export function HeroBackground({ mouseX = 0, mouseY = 0 }: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Primary Radial Glow Mesh */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-600/20 via-cyan-500/10 to-transparent blur-[120px] rounded-full"
        style={{
          transform: `translate(calc(-50% + ${mouseX * 20}px), calc(-50% + ${mouseY * 20}px))`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Secondary Ambient Accent Glow */}
      <div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-radial from-violet-600/20 via-pink-500/10 to-transparent blur-[140px] rounded-full"
        style={{
          transform: `translate(${mouseX * -30}px, ${mouseY * -30}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />

      {/* Tertiary Accent Glow */}
      <div
        className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-gradient-radial from-cyan-600/15 via-blue-500/5 to-transparent blur-[100px] rounded-full"
        style={{
          transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] dark:opacity-[0.12]" />

      {/* Floating AI Node Graphics */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-24 left-[10%] hidden md:block"
        style={{
          transform: `translate(${mouseX * 40}px, ${mouseY * 40}px)`,
        }}
      >
        <div className="h-16 w-16 rounded-2xl border border-cyan-500/30 bg-surface/40 backdrop-blur-md p-3 shadow-glow flex items-center justify-center text-cyan-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-36 right-[12%] hidden md:block"
        style={{
          transform: `translate(${mouseX * -35}px, ${mouseY * -35}px)`,
        }}
      >
        <div className="h-20 w-20 rounded-2xl border border-violet-500/30 bg-surface/40 backdrop-blur-md p-4 shadow-glass flex items-center justify-center text-violet-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
