'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface RevealProps {
  width?: 'fit-content' | '100%';
  duration?: number;
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

export function Reveal({
  width = 'fit-content',
  duration = 0.5,
  delay = 0,
  children,
  className,
}: RevealProps) {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }} className={className}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration, delay, ease: 'easeIn' }}
        style={{
          position: 'absolute',
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: 'hsl(var(--primary))',
          zIndex: 20,
        }}
      />
    </div>
  );
}
