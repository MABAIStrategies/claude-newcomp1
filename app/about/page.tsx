'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button, Card, Modal } from '@/components/ui';
import { ROUTES } from '@/lib/constants';

interface Skill {
  id: string;
  name: string;
  category: string;
  caseStudy: {
    title: string;
    description: string;
    outcome: string;
  };
}

const skills: Skill[] = [
  {
    id: 'ai-agents',
    name: 'AI Agent Development',
    category: 'Technical',
    caseStudy: {
      title: 'Multilingual Customer Service Agent',
      description:
        'Built an AI agent capable of handling customer inquiries in 12 languages, processing 10,000+ conversations monthly.',
      outcome: '92% customer satisfaction rate, 60% reduction in response time',
    },
  },
  {
    id: 'automation',
    name: 'Process Automation',
    category: 'Technical',
    caseStudy: {
      title: 'End-to-End Invoice Automation',
      description:
        'Designed a complete automation system from project completion detection to payment collection.',
      outcome: '$180K annual savings, 45% faster payment collection',
    },
  },
  {
    id: 'web-development',
    name: 'Full-Stack Development',
    category: 'Technical',
    caseStudy: {
      title: 'Real-Time Analytics Dashboard',
      description:
        'Created a Next.js dashboard processing 1M+ data points daily with sub-second response times.',
      outcome: '60% faster decision-making, 99.9% uptime',
    },
  },
  {
    id: 'cloud-architecture',
    name: 'Cloud Architecture',
    category: 'Technical',
    caseStudy: {
      title: 'Scalable GCP Infrastructure',
      description:
        'Architected and deployed a fully serverless solution on Google Cloud Platform.',
      outcome: '40% cost reduction, auto-scaling to 100K+ concurrent users',
    },
  },
  {
    id: 'keynote-speaking',
    name: 'Keynote Speaking',
    category: 'Leadership',
    caseStudy: {
      title: 'Executive Presentation Coaching',
      description: 'Coached C-level executives on AI strategy presentations for board meetings.',
      outcome: '3 funding rounds secured, $15M+ raised',
    },
  },
  {
    id: 'strategic-consulting',
    name: 'Strategic Consulting',
    category: 'Leadership',
    caseStudy: {
      title: 'AI Transformation Roadmap',
      description:
        'Developed comprehensive AI adoption strategy for Fortune 500 company.',
      outcome: '18-month roadmap, $2M projected annual savings',
    },
  },
];

export default function AboutPage() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <div className="relative">
      {/* Hero Section with Headshot Placeholder */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Headshot with Geometric Frame */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Geometric gold frame */}
                <div className="absolute -inset-4 border-4 border-champagne-gold rounded-2xl rotate-3" />
                <div className="absolute -inset-4 border-2 border-champagne-gold/50 rounded-2xl -rotate-3" />

                {/* Headshot placeholder */}
                <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-champagne-gold/20 to-midnight-navy flex items-center justify-center gold-border overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-champagne-gold/30 flex items-center justify-center">
                      <span className="font-cinzel text-6xl font-bold text-champagne-gold">
                        M
                      </span>
                    </div>
                    <p className="text-off-white/60 text-sm">
                      Professional headshot
                      <br />
                      placeholder
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="font-cinzel text-5xl md:text-7xl font-bold gold-gradient-text text-shadow-gold mb-6">
                The Architect
              </h1>
              <div className="text-2xl text-champagne-gold font-semibold mb-4">
                Mark Anthony Barrameda
              </div>
              <p className="text-lg text-off-white/80 leading-relaxed mb-6">
                Founder & Chief AI Strategist
              </p>
              <div className="space-y-4 text-off-white/90 text-lg leading-relaxed">
                <p>
                  With over a decade of experience in AI, automation, and full-stack
                  development, Mark has transformed operations for businesses ranging from
                  startups to Fortune 500 companies.
                </p>
                <p>
                  His unique blend of technical expertise and strategic vision enables him to
                  design solutions that don't just work—they transform.
                </p>
                <p className="text-champagne-gold italic">
                  "I don't build AI for the sake of AI. I build AI to eliminate friction and
                  unlock human potential."
                </p>
              </div>
              <div className="mt-8">
                <Link href={ROUTES.contact}>
                  <Button size="lg">Schedule Consultation</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-midnight-navy/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-12">
              The MAB AI Strategies Story
            </h2>
            <Card variant="glass" className="gold-border p-10">
              <div className="space-y-6 text-off-white/90 text-lg leading-relaxed">
                <p>
                  MAB AI Strategies was born from a simple observation: businesses were
                  drowning in repetitive tasks, while powerful AI tools sat unused or
                  misunderstood.
                </p>
                <p>
                  After years of watching talented teams waste hours on work that could be
                  automated, Mark founded MAB with a mission: to make enterprise-grade AI
                  accessible, practical, and transformative for businesses of all sizes.
                </p>
                <p>
                  Today, MAB AI Strategies serves as the bridge between cutting-edge AI
                  technology and real-world business operations—delivering custom agents,
                  automations, and web applications that generate measurable ROI.
                </p>
                <p className="text-champagne-gold font-semibold pt-4">
                  We don't sell technology. We deliver transformation.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Interactive Resume - Experience Tags */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-center gold-gradient-text mb-12">
              The Interactive Resume
            </h2>
            <p className="text-center text-off-white/70 mb-12 text-lg">
              Click on any skill to see a real case study demonstrating that expertise.
            </p>

            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="font-cinzel text-2xl font-bold mb-6 text-champagne-gold">
                Technical Expertise
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills
                  .filter((s) => s.category === 'Technical')
                  .map((skill) => (
                    <motion.button
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSkill(skill)}
                      className="px-6 py-3 glass-morph gold-border rounded-full text-champagne-gold hover:bg-champagne-gold/10 transition-all font-semibold"
                    >
                      {skill.name}
                    </motion.button>
                  ))}
              </div>
            </div>

            {/* Leadership Skills */}
            <div>
              <h3 className="font-cinzel text-2xl font-bold mb-6 text-champagne-gold">
                Leadership & Strategy
              </h3>
              <div className="flex flex-wrap gap-4">
                {skills
                  .filter((s) => s.category === 'Leadership')
                  .map((skill) => (
                    <motion.button
                      key={skill.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedSkill(skill)}
                      className="px-6 py-3 glass-morph gold-border rounded-full text-champagne-gold hover:bg-champagne-gold/10 transition-all font-semibold"
                    >
                      {skill.name}
                    </motion.button>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Modal */}
      <Modal
        isOpen={!!selectedSkill}
        onClose={() => setSelectedSkill(null)}
        title={selectedSkill?.name}
      >
        {selectedSkill && (
          <div className="space-y-6">
            <div className="glass-morph p-6 rounded-lg">
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-champagne-gold">
                {selectedSkill.caseStudy.title}
              </h3>
              <p className="text-off-white/90 text-lg leading-relaxed mb-4">
                {selectedSkill.caseStudy.description}
              </p>
              <div className="border-t border-champagne-gold/20 pt-4 mt-4">
                <div className="text-sm text-off-white/60 mb-2">Outcome:</div>
                <div className="text-lg font-semibold text-champagne-gold">
                  {selectedSkill.caseStudy.outcome}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-champagne-gold/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold gold-gradient-text mb-6">
              Let's Build Something Extraordinary
            </h2>
            <p className="text-xl text-off-white/80 mb-10">
              Ready to transform your business with AI? Schedule a consultation to get started.
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
