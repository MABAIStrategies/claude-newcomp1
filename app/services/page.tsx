'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { ROUTES, SERVICES } from '@/lib/constants';
import { calculateROI, formatCurrency } from '@/lib/utils';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Automation Slider State
  const [hoursSaved, setHoursSaved] = useState(20);
  const employees = 10;
  const avgSalary = 75000;

  const roi = calculateROI({ employees, hoursSaved, avgSalary });

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
            The Arsenal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white/80 max-w-3xl mx-auto"
          >
            Four pillars of excellence, engineered to transform your business operations.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card variant="gold" className="p-8 h-full">
                <h2 className="font-cinzel text-3xl font-bold mb-2 text-champagne-gold">
                  {service.title}
                </h2>
                <p className="text-off-white/60 text-lg italic mb-6">
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <p className="text-off-white/90 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                <button
                  onClick={() =>
                    setExpandedService(expandedService === service.id ? null : service.id)
                  }
                  className="text-champagne-gold hover:text-champagne-gold/80 font-semibold transition-colors"
                >
                  {expandedService === service.id ? 'Show Less' : 'Learn More'} →
                </button>

                {expandedService === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-champagne-gold/20"
                  >
                    <h3 className="font-semibold mb-3 text-champagne-gold">
                      What You Get:
                    </h3>
                    <ul className="space-y-2 text-off-white/80 list-disc list-inside">
                      <li>Fully customized solution tailored to your needs</li>
                      <li>Dedicated implementation and support</li>
                      <li>Comprehensive documentation and training</li>
                      <li>Ongoing optimization and updates</li>
                    </ul>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Automation Slider */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnight-navy/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-4">
              See Your Potential Savings
            </h2>
            <p className="text-center text-off-white/70 mb-12 text-lg">
              Adjust the slider to see how much time and money automation can save your
              business.
            </p>

            <Card variant="gold" className="p-10">
              <div className="mb-8">
                <label
                  htmlFor="hours-slider"
                  className="block text-lg font-medium mb-4 text-champagne-gold"
                >
                  Hours Saved Per Week: <span className="text-3xl font-bold">{hoursSaved}</span>
                </label>
                <input
                  id="hours-slider"
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(Number(e.target.value))}
                  className="w-full h-3 bg-midnight-navy/50 rounded-lg appearance-none cursor-pointer accent-champagne-gold"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-morph p-6 rounded-lg">
                  <div className="text-sm text-off-white/60 mb-2">Weekly Savings</div>
                  <motion.div
                    key={roi.weekly}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-cinzel font-bold text-champagne-gold"
                  >
                    {formatCurrency(roi.weekly)}
                  </motion.div>
                </div>

                <div className="glass-morph p-6 rounded-lg">
                  <div className="text-sm text-off-white/60 mb-2">Annual Savings</div>
                  <motion.div
                    key={roi.annual}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    className="text-4xl font-cinzel font-bold text-champagne-gold"
                  >
                    {formatCurrency(roi.annual)}
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 text-center p-6 glass-morph rounded-lg">
                <div className="text-off-white/70 mb-2">Efficiency Boost</div>
                <div className="text-5xl font-cinzel font-bold gold-gradient-text">
                  +{roi.efficiencyBoost}%
                </div>
                <p className="text-sm text-off-white/50 mt-2">
                  Based on MAB AI Strategies benchmarks
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AI Site Spark Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card variant="gold" className="p-10 text-center">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold gold-gradient-text mb-4">
              Need a Custom Web App?
            </h2>
            <p className="text-off-white/80 text-lg mb-8">
              Build your blueprint with AI Site Spark - our intelligent web template generator
            </p>
            <a
              href="https://ai-site-spark-19.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg">
                Initialize Custom Web Template →
              </Button>
            </a>
          </Card>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-off-white/80 mb-10">
              Schedule a consultation to discuss your specific needs.
            </p>
            <Link href={ROUTES.contact}>
              <Button size="lg" className="text-lg px-10 py-5">
                Schedule Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
