// MAB AI Strategies - Application Constants

export const SITE_CONFIG = {
  name: 'MAB AI Strategies',
  description: 'Elite AI agents, custom automations, and web applications for discerning businesses.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://mabaistrategies.com',
  email: 'mark@mabaistrategies.com',
} as const;

export const BRAND_COLORS = {
  starryNight: '#000C1F',
  midnightNavy: '#0B1A30',
  champagneGold: '#D4AF37',
  offWhite: '#F8F9FA',
} as const;

export const SERVICES = [
  {
    id: 'custom-agents',
    title: 'Custom Agents',
    tagline: 'Autonomous employees that don\'t sleep',
    description: 'AI-powered agents that work 24/7 to handle your business operations.',
  },
  {
    id: 'custom-automations',
    title: 'Custom Automations',
    tagline: 'Eliminating the friction of existence',
    description: 'Streamline your workflows with intelligent automation solutions.',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Apps',
    tagline: 'Digital infrastructure for the 1%',
    description: 'Bespoke web applications built to your exact specifications.',
  },
  {
    id: 'keynote-coaching',
    title: 'Keynote Coaching',
    tagline: 'Speaking the language of the future',
    description: 'Expert coaching to elevate your presentations and thought leadership.',
  },
] as const;

export const ROUTES = {
  home: '/',
  services: '/services',
  portfolio: '/portfolio',
  testimonials: '/testimonials',
  about: '/about',
  contact: '/contact',
  roiCalculator: '/roi-calculator',
} as const;
