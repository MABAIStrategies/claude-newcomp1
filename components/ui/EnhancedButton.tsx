'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface EnhancedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'glow' | 'shimmer' | 'pulse';
  children: React.ReactNode;
}

export default function EnhancedButton({
  variant = 'glow',
  children,
  className = '',
  ...props
}: EnhancedButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative overflow-hidden px-8 py-4 rounded-lg font-semibold ${className}`}
      {...props}
    >
      {/* Glow effect */}
      {variant === 'glow' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-champagne-gold/0 via-champagne-gold/50 to-champagne-gold/0"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {/* Shimmer effect */}
      {variant === 'shimmer' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 1,
            ease: 'easeInOut',
          }}
        />
      )}

      {/* Pulse effect */}
      {variant === 'pulse' && (
        <motion.div
          className="absolute inset-0 bg-champagne-gold/20 rounded-lg"
          animate={{
            scale: [1, 1.5],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      )}

      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
