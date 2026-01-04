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

### Backend (Planned)
- **Runtime**: Node.js (Express)
- **Deployment**: Google Cloud Run
- **Secrets**: Google Secret Manager

### Integrations (Planned)
- **Payments**: Stripe
- **Calendar**: Google Calendar API
- **Lead Gen**: Webform3
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
mab-ai-strategies/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Landing page
│   └── globals.css          # Global styles & utilities
├── components/              # React components
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx       # Animated button component
│       ├── Card.tsx         # Card with variants
│       ├── Input.tsx        # Form input with validation
│       ├── Modal.tsx        # Full-screen modal
│       └── index.ts         # Barrel export
├── lib/                     # Utility functions
│   ├── utils.ts            # Helper functions (ROI calc, formatting)
│   └── constants.ts        # App constants and config
├── public/                  # Static assets
├── .env.example            # Environment variables template
└── IMPLEMENTATION_PLAN.md  # Detailed phased plan
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
- ✅ Component library (Button, Card, Input, Modal)
- ✅ Global CSS with animations

### 🔄 Phase 2: Core Pages Structure (NEXT)
- Landing page (Command Center)
- Services page (The Arsenal)
- Portfolio page (The Proof)
- Testimonials page (Social Proof)
- About page (The Architect)

### 📋 Upcoming Phases
- Phase 3: Interactive Features & Components
- Phase 4: Backend Integration & APIs
- Phase 5: Advanced Animations & Polish
- Phase 6: Security, Testing & Deployment

## 🎨 Component Library

### Button
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

### Production Build
```bash
npm run build
npm run start
```

### Google Cloud Run (Planned)
Deployment to Google Cloud Run will be configured in Phase 6.

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
