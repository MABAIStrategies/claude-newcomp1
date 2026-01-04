'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES } from '@/lib/constants';

const navItems = [
  { name: 'Services', path: ROUTES.services },
  { name: 'Portfolio', path: ROUTES.portfolio },
  { name: 'Testimonials', path: ROUTES.testimonials },
  { name: 'About', path: ROUTES.about },
  { name: 'Contact', path: ROUTES.contact },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 glass-morph border-b border-champagne-gold/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href={ROUTES.home} className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-champagne-gold to-yellow-600 flex items-center justify-center">
                <span className="font-cinzel text-2xl font-bold text-starry-night">
                  MAB
                </span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <div className="font-cinzel text-xl font-bold gold-gradient-text">
                MAB AI Strategies
              </div>
              <div className="text-xs text-off-white/60">Elite AI Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link key={item.path} href={item.path}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="relative px-4 py-2 group"
                  >
                    <span
                      className={`font-inter font-medium transition-colors ${
                        isActive
                          ? 'text-champagne-gold'
                          : 'text-off-white/80 hover:text-champagne-gold'
                      }`}
                    >
                      {item.name}
                    </span>
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-champagne-gold"
                      initial={{ scaleX: isActive ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link href={ROUTES.contact}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-champagne-gold text-starry-night font-semibold rounded-lg hover-gold-glow transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-champagne-gold hover:bg-champagne-gold/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-champagne-gold/20 bg-midnight-navy/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-champagne-gold/20 text-champagne-gold'
                          : 'text-off-white/80 hover:bg-champagne-gold/10 hover:text-champagne-gold'
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                );
              })}
              <Link href={ROUTES.contact} onClick={() => setIsMobileMenuOpen(false)}>
                <div className="block px-4 py-3 mt-4 bg-champagne-gold text-starry-night font-semibold rounded-lg text-center">
                  Get Started
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
