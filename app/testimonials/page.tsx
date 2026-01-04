'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui';

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  videoUrl?: string; // Placeholder for future video integration
  metric?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Martinez',
    title: 'CEO',
    company: 'TechVentures Inc.',
    quote:
      "MAB AI Strategies transformed our operations completely. The custom automation reduced our processing time by 80%, and we're now serving 3x more clients with the same team size.",
    metric: '80% time reduction',
  },
  {
    id: '2',
    name: 'James Chen',
    title: 'VP of Operations',
    company: 'GlobalScale Partners',
    quote:
      'The AI agent implementation was seamless. What impressed me most was the ROI – we broke even in just 6 weeks and have saved over $200K annually since deployment.',
    metric: '$200K+ annual savings',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Founder',
    company: 'Luxury Real Estate Group',
    quote:
      "Mark's keynote coaching elevated my presentation skills to a whole new level. I closed 3 major deals directly attributed to the confidence and polish I gained.",
    metric: '3 major deals closed',
  },
  {
    id: '4',
    name: 'David Thompson',
    title: 'CTO',
    company: 'FinanceFlow Solutions',
    quote:
      'The custom web app MAB delivered was beyond our expectations. Beautiful design, flawless functionality, and our client satisfaction scores jumped 40%.',
    metric: '40% satisfaction increase',
  },
  {
    id: '5',
    name: 'Lisa Park',
    title: 'Director of Marketing',
    company: 'Innovate Digital',
    quote:
      'Working with MAB was a game-changer. The automation workflows eliminated hours of manual work, letting our team focus on creativity and strategy.',
    metric: '25+ hours saved weekly',
  },
  {
    id: '6',
    name: 'Michael Brown',
    title: 'Managing Partner',
    company: 'Prestige Consulting',
    quote:
      "I've worked with many consultants, but MAB's attention to detail and technical excellence is unmatched. Every solution is crafted with precision.",
    metric: '99.8% uptime achieved',
  },
];

const stats = [
  { metric: '100+', label: 'Projects Delivered' },
  { metric: '98%', label: 'Client Satisfaction' },
  { metric: '$5M+', label: 'Client Savings Generated' },
  { metric: '24/7', label: 'AI Agent Availability' },
];

export default function TestimonialsPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cinzel text-5xl md:text-7xl font-bold gold-gradient-text text-shadow-gold mb-6"
          >
            The Social Proof
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white/80 max-w-3xl mx-auto"
          >
            Hear from the businesses we've transformed with AI-powered solutions.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-midnight-navy/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-cinzel font-bold gold-gradient-text mb-2">
                {stat.metric}
              </div>
              <div className="text-off-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid (Masonry Layout) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={index % 3 === 1 ? 'lg:mt-12' : ''}
              >
                <Card variant="glass" className="gold-border p-8 h-full">
                  {/* Quote */}
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-champagne-gold/30 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    <p className="text-off-white/90 text-lg italic leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Metric Badge */}
                  {testimonial.metric && (
                    <div className="glass-morph px-4 py-2 rounded-full inline-block mb-6">
                      <span className="text-champagne-gold font-semibold text-sm">
                        {testimonial.metric}
                      </span>
                    </div>
                  )}

                  {/* Author Info */}
                  <div className="border-t border-champagne-gold/20 pt-6">
                    <div className="font-cinzel text-lg font-bold text-champagne-gold">
                      {testimonial.name}
                    </div>
                    <div className="text-off-white/70 text-sm">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnight-navy/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-12"
          >
            Video Testimonials
          </motion.h2>
          <Card variant="gold" className="p-12 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-champagne-gold/20 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-champagne-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-xl text-off-white/70 mb-4">
                Video testimonials coming soon
              </p>
              <p className="text-off-white/50">
                High-fidelity video wall with client success stories
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold gold-gradient-text mb-6">
              Ready to Join Them?
            </h2>
            <p className="text-xl text-off-white/80 mb-10">
              Start your transformation journey today.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-champagne-gold text-starry-night font-semibold text-lg rounded-lg hover-gold-glow transition-all"
            >
              Schedule Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
