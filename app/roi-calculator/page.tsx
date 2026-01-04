'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ROICalculator from '@/components/interactive/ROICalculator';
import { Button } from '@/components/ui';
import { ROUTES } from '@/lib/constants';

export default function ROICalculatorPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-champagne-gold/5 to-transparent" />

        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-5xl md:text-7xl font-bold gold-gradient-text text-shadow-gold mb-6"
          >
            ROI Calculator
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white/80 max-w-3xl mx-auto mb-8"
          >
            Discover how much time and money you can save with MAB AI Strategies automation
            solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="glass-morph gold-border px-6 py-3 rounded-lg">
              <div className="text-champagne-gold font-semibold">Interactive Charts</div>
            </div>
            <div className="glass-morph gold-border px-6 py-3 rounded-lg">
              <div className="text-champagne-gold font-semibold">Real-Time Calculations</div>
            </div>
            <div className="glass-morph gold-border px-6 py-3 rounded-lg">
              <div className="text-champagne-gold font-semibold">PDF Report Export</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ROICalculator />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-champagne-gold/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold gold-gradient-text mb-6">
              Ready to Realize These Savings?
            </h2>
            <p className="text-xl text-off-white/80 mb-10">
              Schedule a consultation to discuss how we can implement these solutions for your
              business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href={ROUTES.contact}>
                <Button size="lg" className="text-lg px-10 py-5">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href={ROUTES.services}>
                <Button variant="secondary" size="lg" className="text-lg px-10 py-5">
                  View Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
