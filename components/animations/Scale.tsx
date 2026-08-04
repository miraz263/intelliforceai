'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ScaleProps extends HTMLMotionProps<'div'> {
  initialScale?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export function Scale({
  initialScale = 0.9,
  duration = 0.4,
  delay = 0,
  children,
  className,
  ...props
}: ScaleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
