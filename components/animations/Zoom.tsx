'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ZoomProps extends HTMLMotionProps<'div'> {
  zoomType?: 'in' | 'out';
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export function Zoom({
  zoomType = 'in',
  duration = 0.5,
  delay = 0,
  children,
  className,
  ...props
}: ZoomProps) {
  const startScale = zoomType === 'in' ? 0.85 : 1.15;

  return (
    <motion.div
      initial={{ opacity: 0, scale: startScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
