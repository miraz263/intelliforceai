'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface RotateProps extends HTMLMotionProps<'div'> {
  angle?: number;
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

export function Rotate({
  angle = 15,
  duration = 0.5,
  delay = 0,
  children,
  className,
  ...props
}: RotateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: angle }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
