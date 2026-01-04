# MAB AI Strategies - Official Website

Elite AI agents, custom automations, and web applications for discerning businesses.

## 🌟 Project Overview

This is the official website for MAB AI Strategies, built with a luxury-grade, hyper-interactive design featuring:

- **5-Page Interactive Experience**: Landing, Services, Portfolio, Testimonials, About
- **Premium Visual Design**: Deep starry night theme with champagne gold accents
- **Advanced Animations**: Framer Motion for smooth, elegant interactions
- **Lead Generation**: Integrated ROI calculator, contact forms, and payment portal
- **Performance Optimized**: Built with Next.js 14 for optimal speed and SEO

## 🎨 Brand Identity

### Color Palette
- **Deep Starry Night**: `#000C1F` - Primary background
- **Midnight Navy**: `#0B1A30` - Secondary background
- **Champagne Gold**: `#D4AF37` - Accent and CTAs
- **Off-White**: `#F8F9FA` - Primary text

### Typography
- **Headings**: Cinzel (Elite/Classical aesthetic)
- **Body**: Inter (Clean/Modern readability)

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/) (React 18)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Animations**: [Framer Motion](https://www.framer.com/motion/) v11
- **Charts**: [Recharts](https://recharts.org/) v2
- **Language**: TypeScript

### Backend
- **API Routes**: Next.js API Routes (Node.js runtime)
- **Deployment**: Google Cloud Run (Docker containerized)
- **Secrets**: Google Secret Manager
- **Email**: SendGrid/Mailgun (structure ready)

### Integrations
- **Payments**: Stripe (API structure ready)
- **Calendar**: Google Calendar API (API structure ready)
- **Lead Gen**: Webform3 (fully integrated)
- **Analytics**: Google Analytics 4 (fully integrated)

## 📁 Project Structure

```
mab-ai-strategies/
├── app/                      # Next.js App Router
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── portfolio/           # Portfolio page
│   ├── roi-calculator/      # ROI Calculator standalone page
│   ├── services/            # Services page
│   ├── testimonials/        # Testimonials page
│   ├── layout.tsx           # Root layout with fonts, header, footer
│   ├── page.tsx             # Landing page (Command Center)
│   └── globals.css          # Global styles & utilities
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Animated button component
│   │   ├── Card.tsx         # Card with variants
│   │   ├── Input.tsx        # Form input with validation
│   │   ├── Modal.tsx        # Full-screen modal
│   │   ├── Loading.tsx      # Loading spinners
│   │   ├── Skeleton.tsx     # Skeleton loaders
│   │   └── index.ts         # Barrel export
│   ├── interactive/         # Interactive components
│   │   ├── ROICalculator.tsx       # ROI calculator with charts
│   │   ├── CursorTrail.tsx         # Gold particle cursor trail
│   │   ├── AnimatedLogo.tsx        # Animated MAB logo
│   │   ├── ParallaxSection.tsx     # Parallax scroll effect
│   │   ├── ScrollReveal.tsx        # Scroll-based reveals
│   │   ├── PageTransition.tsx      # Page transitions
│   │   └── index.ts                # Barrel export
│   ├── Analytics.tsx        # Google Analytics 4 component
│   ├── Header.tsx          # Site header with navigation
│   └── Footer.tsx          # Site footer
├── lib/                     # Utility functions and APIs
│   ├── api/                # API integrations
│   │   ├── types.ts        # TypeScript interfaces
│   │   ├── leads.ts        # Webform3 integration
│   │   ├── email.ts        # Email service functions
│   │   └── analytics.ts    # GA4 tracking functions
│   ├── utils.ts            # Helper functions (ROI calc, formatting)
│   └── constants.ts        # App constants and config
├── public/                  # Static assets
├── Dockerfile              # Multi-stage production build
├── .dockerignore           # Docker ignore patterns
├── cloudbuild.yaml         # Google Cloud Build CI/CD config
├── .gcloudignore           # GCloud deployment ignore patterns
├── .env.example            # Environment variables template
├── IMPLEMENTATION_PLAN.md  # Detailed phased plan
├── DEPLOYMENT.md           # Production deployment guide
└── LAUNCH_CHECKLIST.md     # Pre-launch checklist
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MABAIStrategies/claude-newcomp1.git
   cd claude-newcomp1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎯 Development Phases

This project follows a **6-phase implementation plan**. See [IMPLEMENTATION_PLAN.md](./IMPLEMENTATION_PLAN.md) for details.

### ✅ Phase 1: Foundation & Infrastructure (COMPLETED)
- ✅ Next.js 14 setup with TypeScript
- ✅ Tailwind CSS with custom MAB theme
- ✅ Framer Motion integration
- ✅ ESLint & Prettier configuration
- ✅ Google Fonts (Cinzel & Inter)
- ✅ Environment variable structure
- ✅ Component library (Button, Card, Input, Modal, Loading, Skeleton)
- ✅ Global CSS with custom animations and utilities

### ✅ Phase 2: Core Pages Structure (COMPLETED)
- ✅ Landing page (Command Center) with Solution Generator
- ✅ Services page (The Arsenal) with Automation Slider
- ✅ Portfolio page (The Proof) with 6 case studies and modal system
- ✅ Testimonials page (Social Proof) with 6 testimonials
- ✅ About page (The Architect) with Interactive Resume
- ✅ Contact page with full form validation
- ✅ Header component with navigation and mobile menu
- ✅ Footer component with all links

### ✅ Phase 3: Interactive Features & Components (COMPLETED)
- ✅ ROI Calculator with Recharts (Line & Bar charts)
- ✅ PDF download with email capture
- ✅ Gold dust cursor trail (canvas-based particles)
- ✅ Page transitions with Framer Motion
- ✅ Standalone ROI Calculator page

### ✅ Phase 4: Backend Integration & APIs (COMPLETED)
- ✅ Contact form API endpoint (`/api/contact`)
- ✅ Webform3 integration for lead generation
- ✅ Email notification system (structure ready)
- ✅ Google Analytics 4 integration
- ✅ Analytics tracking for ROI Calculator
- ✅ TypeScript API types and validation

### ✅ Phase 5: Advanced Animations & Polish (COMPLETED)
- ✅ AnimatedLogo component with particle burst
- ✅ ParallaxSection component for scroll effects
- ✅ ScrollReveal component with 5 reveal directions
- ✅ Enhanced button animations
- ✅ Interactive hover states throughout

### 🔄 Phase 6: Security, Testing & Deployment (IN PROGRESS)
- ✅ Security headers (HSTS, X-Frame-Options, CSP, etc.)
- ✅ Production Dockerfile (multi-stage build)
- ✅ Google Cloud Build CI/CD configuration
- ✅ Deployment documentation ([DEPLOYMENT.md](./DEPLOYMENT.md))
- ✅ Launch checklist ([LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md))
- 🔄 Final testing and validation

## 🎨 Component Library

### Interactive Components

#### ROI Calculator
Full-featured ROI calculator with Recharts visualizations:
```tsx
import { ROICalculator } from '@/components/interactive';

<ROICalculator />
```
Features:
- 4 interactive sliders (employees, hours saved, salary, software cost)
- 12-month timeline projection (LineChart)
- As-Is vs MAB-Optimized comparison (BarChart)
- PDF download with email capture
- Google Analytics tracking

#### Cursor Trail
Gold particle cursor trail effect:
```tsx
import { CursorTrail } from '@/components/interactive';

<CursorTrail />
```
- Canvas-based particle system
- 60fps performance optimization
- Gold dust particles following cursor

#### Animated Logo
Interactive MAB logo with animations:
```tsx
import { AnimatedLogo } from '@/components/interactive';

<AnimatedLogo size="lg" interactive={true} />
```
Sizes: `sm` | `md` | `lg` | `xl`
Features:
- Rotating concentric rings
- Pulsing gold glow
- Particle burst on hover

#### Parallax Section
Scroll-based parallax effect:
```tsx
import { ParallaxSection } from '@/components/interactive';

<ParallaxSection speed={0.5}>
  Your content here
</ParallaxSection>
```
Speed: `0.5` (slow) to `1.5` (fast)

#### Scroll Reveal
Reveal animations on scroll:
```tsx
import { ScrollReveal } from '@/components/interactive';

<ScrollReveal direction="up" delay={0.2}>
  Your content here
</ScrollReveal>
```
Directions: `up` | `down` | `left` | `right` | `fade`

### UI Components

#### Button
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md">
  Scale Your Intelligence
</Button>
```

Variants: `primary` | `secondary` | `ghost`
Sizes: `sm` | `md` | `lg`

### Card
```tsx
import { Card } from '@/components/ui';

<Card variant="gold">
  Your content here
</Card>
```

Variants: `default` | `glass` | `gold`

### Input
```tsx
import { Input } from '@/components/ui';

<Input
  label="Email Address"
  type="email"
  placeholder="mark@mabaistrategies.com"
  error="Invalid email"
/>
```

### Modal
```tsx
import { Modal } from '@/components/ui';

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Project Details">
  Content
</Modal>
```

## 🔧 Configuration

### Tailwind Custom Classes

- `.gold-gradient-text` - Gradient gold text effect
- `.glass-morph` - Glass morphism background
- `.gold-border` - Gold border with transparency
- `.hover-gold-glow` - Gold glow on hover
- `.text-shadow-gold` - Gold text shadow for headings

### Animation Presets

- `animate-gold-glow` - Pulsing gold glow
- `animate-float` - Subtle floating animation
- `animate-pulse-slow` - Slow pulse effect

## 📊 Utility Functions

### ROI Calculator
```ts
import { calculateROI } from '@/lib/utils';

const roi = calculateROI({
  employees: 10,
  hoursSaved: 20,
  avgSalary: 75000,
});
// Returns: { weekly, annual, efficiencyBoost }
```

### Formatting
```ts
import { formatCurrency, formatNumber } from '@/lib/utils';

formatCurrency(150000); // "$150,000.00"
formatNumber(42000);     // "42,000"
```

## 🌐 Deployment

### Local Production Build
```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Docker Build
```bash
# Build Docker image
docker build -t mab-ai-strategies .

# Run container locally
docker run -p 3000:3000 -e NODE_ENV=production mab-ai-strategies
```

### Google Cloud Run
This application is configured for Google Cloud Run deployment with automated CI/CD via Cloud Build.

**See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions**, including:
- GCP project setup and configuration
- Secret Manager for API keys
- Custom domain DNS setup
- CI/CD with Cloud Build triggers
- Monitoring and logging
- Rollback procedures

**Quick Deploy:**
```bash
# Build and push to Google Container Registry
gcloud builds submit --config cloudbuild.yaml

# The Cloud Build configuration will automatically deploy to Cloud Run
```

### Pre-Launch Checklist
Before deploying to production, review the comprehensive [LAUNCH_CHECKLIST.md](./LAUNCH_CHECKLIST.md) covering:
- Technical requirements (performance, security, testing)
- Content and design verification
- Third-party integrations
- SEO and metadata
- Post-launch monitoring

## 🔒 Environment Variables

See `.env.example` for all required environment variables.

**Critical Variables:**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe payments
- `GOOGLE_CALENDAR_API_KEY` - Appointment booking
- `WEBFORM3_API_KEY` - Lead generation
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Analytics

## 📝 Code Style

This project uses:
- **ESLint** for code quality
- **Prettier** for consistent formatting
- **TypeScript** for type safety

Format code before committing:
```bash
npm run format
npm run lint
```

## 🤝 Contributing

This is a private project for MAB AI Strategies. For questions or suggestions, contact mark@mabaistrategies.com.

## 📄 License

Proprietary - All rights reserved by MAB AI Strategies.

---

**Built with precision. Designed for excellence.**
© 2026 MAB AI Strategies
