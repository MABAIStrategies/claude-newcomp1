'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, Modal } from '@/components/ui';

type ProjectCategory = 'all' | 'agents' | 'automations' | 'web-apps';

interface Project {
  id: string;
  title: string;
  category: 'agents' | 'automations' | 'web-apps';
  tagline: string;
  description: string;
  roi: string;
  howItWorks: string[];
  whyItMatters: string;
}

const projects: Project[] = [
  {
    id: 'executive-liaison',
    title: 'The Executive Liaison',
    category: 'agents',
    tagline: 'AI agent that schedules, follows up, and never forgets',
    description:
      'An autonomous AI agent that manages executive calendars, handles meeting coordination, and provides intelligent follow-ups.',
    roi: '$150,000 annual savings in assistant costs',
    howItWorks: [
      'Natural language processing for email parsing',
      'Calendar API integration for real-time scheduling',
      'Context-aware response generation',
      'Automated follow-up sequencing',
    ],
    whyItMatters:
      'Executives gain back 15-20 hours per week, focusing on strategic decisions rather than administrative tasks.',
  },
  {
    id: 'zero-touch-crm',
    title: 'Zero-Touch CRM',
    category: 'automations',
    tagline: 'Customer data flows seamlessly, no human intervention required',
    description:
      'Fully automated CRM system that captures, enriches, and routes customer data without manual entry.',
    roi: '87% reduction in data entry errors',
    howItWorks: [
      'Webhook integration with all customer touchpoints',
      'AI-powered data enrichment and validation',
      'Automated segmentation and tagging',
      'Real-time sync across platforms',
    ],
    whyItMatters:
      'Sales teams close deals faster with clean, accurate data always at their fingertips.',
  },
  {
    id: 'real-estate-closer',
    title: 'The Real Estate Closer',
    category: 'agents',
    tagline: 'Multilingual agent that qualifies leads across 12 languages',
    description:
      'AI agent specialized in real estate lead qualification, operating in multiple languages with cultural awareness.',
    roi: '3x increase in qualified lead conversion',
    howItWorks: [
      'Multi-language NLP models (12 languages)',
      'Property database integration',
      'Qualification scoring algorithm',
      'Automated handoff to human agents',
    ],
    whyItMatters:
      'Capture global opportunities without hiring multilingual staff, operating 24/7 across time zones.',
  },
  {
    id: 'auto-invoicing-engine',
    title: 'Auto-Invoicing Engine',
    category: 'automations',
    tagline: 'From project completion to payment, fully automated',
    description:
      'End-to-end invoicing automation that detects project milestones and generates invoices automatically.',
    roi: 'Payment collection 45% faster',
    howItWorks: [
      'Project management tool integration',
      'Milestone detection algorithms',
      'Dynamic invoice generation',
      'Automated payment reminders',
    ],
    whyItMatters:
      'Improve cash flow dramatically while eliminating the tedious task of manual invoicing.',
  },
  {
    id: 'ai-dashboard-platform',
    title: 'AI-Powered Dashboard Platform',
    category: 'web-apps',
    tagline: 'Real-time business intelligence at your fingertips',
    description:
      'Custom web application providing real-time analytics and actionable insights for executive decision-making.',
    roi: 'Decision-making time reduced by 60%',
    howItWorks: [
      'Data aggregation from multiple sources',
      'Real-time visualization with Recharts',
      'AI-generated insight summaries',
      'Mobile-responsive Next.js architecture',
    ],
    whyItMatters:
      'Transform raw data into strategic advantage with instant access to the metrics that matter.',
  },
  {
    id: 'client-portal-luxury',
    title: 'Luxury Client Portal',
    category: 'web-apps',
    tagline: 'Premium experience for high-value clients',
    description:
      'Bespoke client portal with document sharing, secure messaging, and project tracking.',
    roi: 'Client satisfaction score increased by 35%',
    howItWorks: [
      'End-to-end encryption for security',
      'Real-time project status updates',
      'Integrated payment gateway',
      'White-label branding',
    ],
    whyItMatters:
      'Elevate your brand with a client experience that matches your premium positioning.',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: 'all' as ProjectCategory, name: 'All Projects' },
    { id: 'agents' as ProjectCategory, name: 'AI Agents' },
    { id: 'automations' as ProjectCategory, name: 'Automations' },
    { id: 'web-apps' as ProjectCategory, name: 'Web Apps' },
  ];

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
            The Proof
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-off-white/80 max-w-3xl mx-auto"
          >
            Real results from real implementations. See how we've transformed businesses with
            AI.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-champagne-gold text-starry-night hover-gold-glow'
                  : 'glass-morph gold-border text-champagne-gold hover:bg-champagne-gold/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                variant="gold"
                className="p-6 h-full cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-3">
                  <span className="text-xs uppercase tracking-wider text-champagne-gold/70">
                    {project.category.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-2 text-champagne-gold">
                  {project.title}
                </h3>
                <p className="text-off-white/60 text-sm italic mb-4">&ldquo;{project.tagline}&rdquo;</p>
                <p className="text-off-white/80 mb-4">{project.description}</p>
                <div className="flex items-center text-champagne-gold font-semibold">
                  View Details →
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="space-y-8">
            <div>
              <p className="text-off-white/60 italic mb-4">
                &ldquo;{selectedProject.tagline}&rdquo;
              </p>
              <p className="text-off-white/90 text-lg">{selectedProject.description}</p>
            </div>

            <div className="glass-morph p-6 rounded-lg gold-border">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-champagne-gold">
                ROI Impact
              </h3>
              <p className="text-2xl font-semibold text-off-white">{selectedProject.roi}</p>
            </div>

            <div>
              <h3 className="font-cinzel text-xl font-bold mb-4 text-champagne-gold">
                How It Works
              </h3>
              <div className="space-y-3">
                {selectedProject.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-champagne-gold/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-champagne-gold font-bold">{index + 1}</span>
                    </div>
                    <p className="text-off-white/80 pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-morph p-6 rounded-lg">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-champagne-gold">
                Why It Matters
              </h3>
              <p className="text-off-white/90 text-lg leading-relaxed">
                {selectedProject.whyItMatters}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
