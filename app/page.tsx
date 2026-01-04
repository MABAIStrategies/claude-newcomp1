'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { ROUTES, SERVICES } from '@/lib/constants';
import { formatCurrency } from '@/lib/utils';

export default function Home() {
  const [solutionInput, setSolutionInput] = useState('');
  const [suggestedService, setSuggestedService] = useState<string | null>(null);

  const handleSolutionInput = (value: string) => {
    setSolutionInput(value);

    // Simple AI suggestion logic
    const lowerValue = value.toLowerCase();
    if (lowerValue.includes('automat') || lowerValue.includes('workflow')) {
      setSuggestedService('custom-automations');
    } else if (lowerValue.includes('agent') || lowerValue.includes('ai')) {
      setSuggestedService('custom-agents');
    } else if (lowerValue.includes('website') || lowerValue.includes('app')) {
      setSuggestedService('custom-web-apps');
    } else if (lowerValue.includes('speak') || lowerValue.includes('present')) {
      setSuggestedService('keynote-coaching');
    } else {
      setSuggestedService(null);
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-champagne-gold/5 via-transparent to-midnight-navy/20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Animated MAB Logo Placeholder */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex justify-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                  '0 0 60px rgba(212, 175, 55, 0.6)',
                  '0 0 20px rgba(212, 175, 55, 0.3)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 rounded-2xl bg-gradient-to-br from-champagne-gold to-yellow-600 flex items-center justify-center"
            >
              <span className="font-cinzel text-6xl font-bold text-starry-night">
                MAB
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold gold-gradient-text text-shadow-gold mb-6"
          >
            MAB AI Strategies
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-off-white/80 font-inter max-w-3xl mx-auto mb-12"
          >
            Elite AI agents, custom automations, and web applications for discerning
            businesses.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Link href={ROUTES.services}>
              <Button size="lg" className="text-lg px-10 py-5">
                Scale Your Intelligence
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-cinzel font-bold gold-gradient-text mb-2">
                100+
              </div>
              <div className="text-off-white/60">Automations Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-cinzel font-bold gold-gradient-text mb-2">
                {formatCurrency(2000000)}+
              </div>
              <div className="text-off-white/60">Client Savings Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-cinzel font-bold gold-gradient-text mb-2">
                24/7
              </div>
              <div className="text-off-white/60">AI Agent Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Generator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnight-navy/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-4">
              The Solution Generator
            </h2>
            <p className="text-center text-off-white/70 mb-12 text-lg">
              Tell us your challenge, and we'll recommend the perfect solution.
            </p>

            <Card variant="gold" className="p-8">
              <label htmlFor="solution-input" className="block text-sm font-medium mb-3">
                What business problem are you trying to solve?
              </label>
              <input
                id="solution-input"
                type="text"
                value={solutionInput}
                onChange={(e) => handleSolutionInput(e.target.value)}
                placeholder="e.g., 'I need to automate my customer onboarding process'"
                className="w-full px-6 py-4 rounded-lg bg-midnight-navy/50 border-2 border-champagne-gold/50 text-off-white placeholder-off-white/40 focus:outline-none focus:border-champagne-gold focus:ring-2 focus:ring-champagne-gold/20 transition-all text-lg"
              />

              {suggestedService && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 p-6 glass-morph rounded-lg border border-champagne-gold/30"
                >
                  <p className="text-champagne-gold font-semibold mb-2">
                    We recommend:
                  </p>
                  {SERVICES.find((s) => s.id === suggestedService) && (
                    <>
                      <h3 className="font-cinzel text-2xl font-bold mb-2">
                        {SERVICES.find((s) => s.id === suggestedService)?.title}
                      </h3>
                      <p className="text-off-white/70 mb-4">
                        {SERVICES.find((s) => s.id === suggestedService)?.description}
                      </p>
                      <Link href={ROUTES.services}>
                        <Button variant="secondary">Learn More</Button>
                      </Link>
                    </>
                  )}
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-16"
          >
            The Arsenal
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card variant="gold" className="h-full hover:scale-105 transition-transform">
                  <h3 className="font-cinzel text-xl font-bold mb-2 text-champagne-gold">
                    {service.title}
                  </h3>
                  <p className="text-off-white/60 text-sm italic mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-off-white/80">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href={ROUTES.services}>
              <Button size="lg">Explore All Services</Button>
            </Link>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-off-white/80 mb-10">
              Schedule a consultation and discover how MAB AI Strategies can elevate your
              operations.
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
