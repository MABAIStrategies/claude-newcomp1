import React from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
};

export default function Loading({ size = 'md', text }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <motion.div
        className={`${sizeClasses[size]} rounded-2xl bg-gradient-to-br from-champagne-gold to-yellow-600 flex items-center justify-center`}
        animate={{
          boxShadow: [
            '0 0 20px rgba(212, 175, 55, 0.3)',
            '0 0 60px rgba(212, 175, 55, 0.8)',
            '0 0 20px rgba(212, 175, 55, 0.3)',
          ],
          rotate: [0, 360],
        }}
        transition={{
          boxShadow: { duration: 2, repeat: Infinity },
          rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
        }}
      >
        <span className="font-cinzel text-2xl font-bold text-starry-night">MAB</span>
      </motion.div>
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-off-white/70"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
