import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type CardVariant = 'default' | 'glass' | 'gold';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: CardVariant;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-midnight-navy border border-white/10',
  glass: 'glass-morph',
  gold: 'glass-morph gold-border hover-gold-glow',
};

export default function Card({
  variant = 'default',
  children,
  className = '',
  ...props
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        rounded-lg p-6 transition-all duration-300
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
}
