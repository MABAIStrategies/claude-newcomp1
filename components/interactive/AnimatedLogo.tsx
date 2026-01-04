'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
}

const sizeClasses = {
  sm: 'w-16 h-16 text-2xl',
  md: 'w-24 h-24 text-4xl',
  lg: 'w-32 h-32 text-6xl',
  xl: 'w-48 h-48 text-8xl',
};

export default function AnimatedLogo({ size = 'lg', interactive = true }: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      whileHover={interactive ? { scale: 1.05 } : {}}
    >
      {/* Outer rotating ring */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 rounded-2xl border-2 border-champagne-gold/30`}
        animate={{
          rotate: isHovered ? 180 : 0,
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className={`${sizeClasses[size]} absolute inset-0 rounded-2xl border border-champagne-gold/20`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main logo container */}
      <motion.div
        className={`${sizeClasses[size]} relative rounded-2xl bg-gradient-to-br from-champagne-gold via-yellow-500 to-champagne-gold flex items-center justify-center overflow-hidden`}
        animate={{
          boxShadow: [
            '0 0 20px rgba(212, 175, 55, 0.3)',
            '0 0 60px rgba(212, 175, 55, 0.8)',
            '0 0 20px rgba(212, 175, 55, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent"
          animate={{
            x: isHovered ? ['0%', '200%'] : ['0%', '100%'],
            y: isHovered ? ['0%', '200%'] : ['0%', '100%'],
          }}
          transition={{
            duration: isHovered ? 1 : 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* MAB Text */}
        <motion.span
          className={`${sizeClasses[size]} font-cinzel font-bold text-starry-night relative z-10`}
          animate={{
            scale: isHovered ? [1, 1.1, 1] : 1,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          MAB
        </motion.span>

        {/* Particle effects on hover */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 1,
                }}
                animate={{
                  x: `${50 + Math.cos((i * Math.PI) / 4) * 100}%`,
                  y: `${50 + Math.sin((i * Math.PI) / 4) * 100}%`,
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                  ease: 'easeOut',
                }}
              />
            ))}
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
