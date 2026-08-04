'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface FadeProps extends HTMLMotionProps<'div'> {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export function Fade({
  duration = 0.5,
  delay = 0,
  children,
  className,
  ...props
}: FadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
