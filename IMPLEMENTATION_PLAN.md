# MAB AI Strategies Website - Phased Implementation Plan

## 🎯 Project Overview
Building a hyper-interactive, luxury-grade corporate website for MAB AI Strategies with emphasis on interactivity, lead generation, and conversion optimization.

---

## 📊 Phase 1: Foundation & Infrastructure Setup
**Duration Estimate:** Foundation sprint
**Goal:** Establish technical infrastructure and project scaffolding

### 1.1 Google Cloud Platform Setup
- [ ] Create/configure GCP project for mabaistrategies.com
- [ ] Set up Cloud Run environment (staging + production)
- [ ] Configure Google Secret Manager for API keys
  - Stripe API keys
  - Google Calendar API credentials
  - Webform3 API keys
- [ ] Set up Cloud Build for CI/CD pipeline
- [ ] Configure custom domain (mabaistrategies.com) with SSL
- [ ] Set up Cloud Storage buckets for assets (images, videos, PDFs)

### 1.2 Repository & Development Environment
- [ ] Initialize Next.js 14+ project with TypeScript
- [ ] Configure Tailwind CSS with custom theme
- [ ] Install and configure Framer Motion
- [ ] Set up ESLint and Prettier
- [ ] Create environment variable structure (.env.local, .env.production)
- [ ] Set up Git workflow (main, staging, feature branches)
- [ ] Configure package.json scripts for development, build, deploy

### 1.3 Design System Implementation
- [ ] Create Tailwind config with brand colors:
  - Deep Starry Night: `#000C1F`
  - Midnight Navy: `#0B1A30`
  - Glimmering Gold: `#D4AF37`
  - Off-White: `#F8F9FA`
- [ ] Configure Google Fonts: Cinzel (headings) + Inter (body)
- [ ] Create reusable component library structure:
  - Button components (primary gold, secondary, ghost)
  - Card components (gold-bordered, glass-morph)
  - Input components (gold-trimmed)
  - Modal components (full-screen blur)
- [ ] Establish animation presets for Framer Motion
- [ ] Create global CSS for cursor effects and transitions

### 1.4 Backend Foundation
- [ ] Initialize Node.js/Express server
- [ ] Set up project structure:
  ```
  backend/
  ├── routes/
  ├── controllers/
  ├── middleware/
  ├── services/
  └── utils/
  ```
- [ ] Configure CORS for frontend communication
- [ ] Set up error handling middleware
- [ ] Implement logging (Winston/Morgan)
- [ ] Create Dockerfile for Cloud Run deployment

---

## 🏗️ Phase 2: Core Pages Structure
**Duration Estimate:** Build sprint
**Goal:** Create all 5 pages with basic structure and navigation

### 2.1 Global Components
- [ ] Header/Navigation:
  - Logo (animated MAB logo placeholder)
  - Navigation menu (Services, Portfolio, About, Contact)
  - Gold accent underline on hover
  - Mobile responsive hamburger menu
- [ ] Footer:
  - Copyright info
  - Social links (if applicable)
  - Privacy policy link
  - Contact email
- [ ] Page transition animations (Framer Motion)

### 2.2 Page 1: Landing Page (Command Center)
- [ ] Hero section layout:
  - 3D animated MAB logo placeholder
  - Headline: Customizable value proposition
  - Subheadline with typing effect
- [ ] "Solution Generator" section:
  - Gold-trimmed input field
  - AI suggestion display area (mock data initially)
  - CTA button: "Scale Your Intelligence"
- [ ] ROI Calculator preview widget
- [ ] Trust indicators section (client logos, metrics)
- [ ] Scroll-triggered animations

### 2.3 Page 2: Services Page (The Arsenal)
- [ ] Services grid layout (4 main services):
  - Custom Agents
  - Custom Automations
  - Custom Web Apps
  - Keynote Coaching
- [ ] Service card components:
  - Icon/graphic area
  - Title + description
  - "Learn More" expandable sections
- [ ] Interactive "Automation Slider":
  - Slider input component
  - Real-time calculations display
  - Clock animation placeholder
  - Profit counter animation
- [ ] AI Site Spark integration section
- [ ] CTA to schedule consultation

### 2.4 Page 3: Portfolio Page (The Proof)
- [ ] Portfolio grid layout (masonry or standard grid)
- [ ] Portfolio card components:
  - Project thumbnail
  - Project title
  - Category tags (Agent/Automation/Web App)
  - Gold border on hover
- [ ] Modal structure:
  - Full-screen overlay with blur
  - Close button (gold X)
  - Content areas: "The How" and "The Why"
  - Technical flow visualization placeholder
  - ROI metrics display
- [ ] Filter system (All, Agents, Automations, Web Apps)
- [ ] Placeholder content for 5-10 projects

### 2.5 Page 4: Testimonials Page (The Social Proof)
- [ ] "Video Wall" masonry layout
- [ ] Testimonial card components:
  - Video embed placeholder
  - Client name with gold foil effect
  - Company/title
  - Quote excerpt
- [ ] Video player controls:
  - Play on hover functionality
  - Full-screen option
  - Audio controls
- [ ] Text testimonial cards (for non-video)
- [ ] Metrics/stats showcase (projects completed, hours saved)

### 2.6 Page 5: About Page (The Architect)
- [ ] Hero section with Mark's headshot:
  - Geometric gold frame design
  - Professional photo
  - Brief intro tagline
- [ ] "Interactive Resume" section:
  - Experience tags (clickable pills)
  - Case study modal system
  - Skills visualization
- [ ] Company story/mission section
- [ ] CTA: Schedule consultation
- [ ] Personal brand elements

---

## ⚡ Phase 3: Interactive Features & Components
**Duration Estimate:** Feature development sprint
**Goal:** Implement all interactive, high-engagement features

### 3.1 ROI Calculator (Full Implementation)
- [ ] Frontend component:
  - Input fields:
    - Number of employees (slider)
    - Average salary (currency input)
    - Manual task hours/week (slider)
    - Software overhead (currency input)
  - Real-time calculation logic
  - Chart integration (Recharts):
    - 12-month timeline projection
    - Break-even point indicator (gold)
    - Bar chart: As-Is vs MAB-Optimized
- [ ] PDF generation system:
  - Backend endpoint to generate PDF
  - Email capture form
  - PDF template design
  - Download button
- [ ] Lead tracking integration

### 3.2 Solution Generator (AI-Driven Suggestions)
- [ ] Input field with autocomplete
- [ ] Backend endpoint for suggestion logic:
  - Keyword matching algorithm
  - Service recommendation engine
- [ ] Animated suggestion display
- [ ] Click-through to relevant service page
- [ ] Framer Motion transitions

### 3.3 Interactive Automation Slider
- [ ] Slider component (0-80 hours/week range)
- [ ] Real-time calculations:
  - Hours saved calculation
  - Cost savings calculation
  - Efficiency boost percentage
- [ ] Clock slowdown animation (CSS/Framer Motion)
- [ ] Counter animations (number rolling effect)
- [ ] Responsive design for mobile

### 3.4 Portfolio Modal System
- [ ] Modal component architecture
- [ ] Project data structure (JSON/CMS)
- [ ] Technical flow visualization:
  - SVG diagram system
  - Gold connecting lines
  - Icon nodes
- [ ] ROI metrics display
- [ ] "View Live" or "Case Study" buttons
- [ ] Keyboard navigation (ESC to close)
- [ ] URL parameter support (shareable links)

### 3.5 Video Wall (Testimonials)
- [ ] Video player component:
  - Play on hover
  - Pause on mouse leave
  - Mute/unmute toggle
  - Full-screen capability
- [ ] Lazy loading for performance
- [ ] Video hosting strategy (YouTube embed vs Cloud Storage)
- [ ] Fallback for missing videos

### 3.6 Interactive Resume
- [ ] Tag system (experience categories)
- [ ] Click handlers for tag interaction
- [ ] Case study modal (reuse portfolio modal)
- [ ] Timeline visualization (optional)
- [ ] Skills bar graphs or tag cloud

---

## 🔌 Phase 4: Backend Integration & APIs
**Duration Estimate:** Integration sprint
**Goal:** Connect all third-party services and implement backend logic

### 4.1 Google Calendar Integration
- [ ] Google Calendar API setup:
  - OAuth 2.0 configuration
  - Service account creation
  - Calendar permissions
- [ ] Backend endpoints:
  - GET available time slots
  - POST create appointment
- [ ] Frontend "Schedule Consultation" widget:
  - Calendar view component
  - Time slot selection
  - Timezone handling
  - Confirmation email trigger
- [ ] Real-time availability updates

### 4.2 Stripe Payment Portal
- [ ] Stripe account setup (or confirm existing)
- [ ] Stripe Elements integration:
  - Card input component (branded)
  - Payment intent creation
  - 3D Secure handling
- [ ] Backend endpoints:
  - Create payment intent
  - Confirm payment
  - Handle webhooks (payment success/failure)
- [ ] Payment options:
  - Retainer start
  - Project deposit
  - Custom amount input
- [ ] Success/failure pages
- [ ] Email confirmations
- [ ] PCI compliance verification

### 4.3 Webform3 Lead Generation
- [ ] Webform3 API integration:
  - API key configuration in Secret Manager
  - POST endpoint to Webform3
- [ ] Contact form components:
  - Name, email, phone, message fields
  - Service interest dropdown
  - Budget range (optional)
- [ ] Form validation (frontend + backend)
- [ ] Lead tracking:
  - Every "Contact Me" button triggers POST
  - Track source page/component
- [ ] Auto-responder email setup:
  - Gold-themed template
  - Mark's headshot inclusion
  - Expected response time
- [ ] Recipient configuration (mark@mabaistrategies.com)

### 4.4 AI Site Spark Integration
- [ ] Button/CTA placement on Web Apps service page
- [ ] URL with session data:
  - Generate unique session ID
  - Pass via query parameters or webhooks
- [ ] Analytics tracking for conversions
- [ ] New tab/window handling

### 4.5 Analytics & Tracking
- [ ] Google Analytics 4 setup
- [ ] Custom event tracking:
  - ROI calculator usage
  - Portfolio project views
  - Service page interactions
  - Form submissions
  - Payment completions
- [ ] Heatmap/session recording (Hotjar or similar)
- [ ] Conversion funnel setup

---

## 🎨 Phase 5: Advanced Animations & Polish
**Duration Estimate:** Polish sprint
**Goal:** Implement all premium animations and micro-interactions

### 5.1 3D Animated MAB Logo
- [ ] Logo asset preparation (SVG or 3D model)
- [ ] Three.js or Spline integration (or pure CSS)
- [ ] Gold particle system:
  - Particle generation
  - Mouse-reactive movement
  - Performance optimization
- [ ] Loading state animation
- [ ] Mobile fallback (static or simpler version)

### 5.2 Gold Dust Cursor Trail
- [ ] Canvas-based cursor trail:
  - Gold particle effects
  - Fade-out animation
  - Performance throttling
- [ ] Mobile/touch device detection (disable on mobile)
- [ ] Z-index management (always on top)

### 5.3 Parallax Effects
- [ ] Scroll-based parallax on landing page:
  - Hero section depth layers
  - Background star field movement
- [ ] Mouse-move parallax on cards
- [ ] Smooth scrolling behavior
- [ ] Performance optimization (transform vs position)

### 5.4 Hover Animations & Micro-interactions
- [ ] Button hover effects:
  - Gold glow expansion
  - Subtle scale transform
  - Smooth color transitions
- [ ] Card hover effects:
  - Gold border glow
  - Shadow elevation
  - Content reveal animations
- [ ] Input field interactions:
  - Focus states with gold accent
  - Label float animations
  - Error shake animations
- [ ] Navigation link underlines (animated gold bars)
- [ ] Page transition effects

### 5.5 Loading States & Skeletons
- [ ] Page loading spinner (gold animated logo)
- [ ] Skeleton screens for async content
- [ ] Image lazy loading with fade-in
- [ ] Progressive enhancement strategy

---

## 🔒 Phase 6: Security, Testing & Deployment
**Duration Estimate:** QA & launch sprint
**Goal:** Ensure security, performance, and production readiness

### 6.1 Security Hardening
- [ ] HTTPS enforcement (SSL certificates)
- [ ] Content Security Policy (CSP) headers
- [ ] Rate limiting on API endpoints
- [ ] Input sanitization and validation
- [ ] SQL injection prevention (if using database)
- [ ] XSS protection
- [ ] CORS configuration review
- [ ] Environment variable security audit
- [ ] PCI compliance verification for payment portal
- [ ] GDPR compliance review (if applicable)

### 6.2 Performance Optimization
- [ ] Image optimization:
  - WebP format with fallbacks
  - Responsive images (srcset)
  - Lazy loading implementation
- [ ] Code splitting (Next.js automatic + manual)
- [ ] Bundle size analysis (webpack-bundle-analyzer)
- [ ] Tree shaking verification
- [ ] Font loading optimization (font-display: swap)
- [ ] Critical CSS extraction
- [ ] Service worker/PWA consideration
- [ ] CDN setup for static assets
- [ ] Lighthouse audit (target: 90+ scores)

### 6.3 Cross-Browser & Device Testing
- [ ] Browser compatibility testing:
  - Chrome, Firefox, Safari, Edge
  - Mobile browsers (iOS Safari, Chrome Mobile)
- [ ] Responsive design testing:
  - Mobile (320px - 768px)
  - Tablet (768px - 1024px)
  - Desktop (1024px+)
  - Ultra-wide (1920px+)
- [ ] Accessibility audit (WCAG 2.1 AA):
  - Keyboard navigation
  - Screen reader compatibility
  - Color contrast ratios
  - ARIA labels
- [ ] Form testing (all validation scenarios)
- [ ] Payment flow testing (Stripe test mode)

### 6.4 Content & Copy
- [ ] Final copywriting review
- [ ] Professional photography/headshots
- [ ] Logo finalization (all variations)
- [ ] Video testimonials collection
- [ ] Portfolio case studies content
- [ ] Service descriptions refinement
- [ ] SEO optimization:
  - Meta titles and descriptions
  - Open Graph tags
  - Schema markup (Organization, Service)
  - XML sitemap
  - Robots.txt

### 6.5 Deployment
- [ ] Staging environment deployment:
  - Cloud Run staging instance
  - Test domain configuration
  - Full E2E testing
- [ ] Production deployment:
  - Cloud Run production instance
  - Domain DNS configuration (mabaistrategies.com)
  - SSL certificate verification
  - Environment variables configuration
- [ ] Monitoring setup:
  - Cloud Monitoring/Logging
  - Error tracking (Sentry or similar)
  - Uptime monitoring
  - Performance monitoring
- [ ] Backup strategy implementation
- [ ] Rollback procedure documentation

### 6.6 Launch Checklist
- [ ] All forms submit successfully
- [ ] Payment portal tested (real transaction in production)
- [ ] Calendar booking tested
- [ ] All links working (no 404s)
- [ ] Email notifications working
- [ ] Analytics tracking verified
- [ ] Mobile experience polished
- [ ] Performance benchmarks met
- [ ] Security scan passed
- [ ] Client approval obtained
- [ ] Go-live communication plan

---

## 📋 Content Requirements Matrix

### Assets Needed
| Asset Type | Quantity | Description | Status |
|------------|----------|-------------|--------|
| MAB Logo | 3 variants | Full color, white, gold | ⏳ Pending |
| Mark's Headshot | 1 | Professional, high-res | ⏳ Pending |
| Service Icons | 4 | Custom Agents, Automations, Web Apps, Keynote | ⏳ Pending |
| Portfolio Images | 5-10 | Project screenshots/mockups | ⏳ Pending |
| Video Testimonials | 3-5 | Client video testimonials | ⏳ Pending |
| Background Graphics | 2-3 | Starry night, geometric patterns | ⏳ Pending |

### Copy Requirements
| Page | Section | Word Count | Status |
|------|---------|------------|--------|
| Landing | Hero headline | 10-15 words | ⏳ Pending |
| Landing | Subheadline | 20-30 words | ⏳ Pending |
| Services | Custom Agents | 100-150 words | ⏳ Pending |
| Services | Custom Automations | 100-150 words | ⏳ Pending |
| Services | Custom Web Apps | 100-150 words | ⏳ Pending |
| Services | Keynote Coaching | 100-150 words | ⏳ Pending |
| Portfolio | Project descriptions | 50-100 words each | ⏳ Pending |
| About | Mark's bio | 200-300 words | ⏳ Pending |
| About | Company story | 150-200 words | ⏳ Pending |

---

## 🎯 Success Metrics & KPIs

### Technical Performance
- Lighthouse Performance Score: **> 90**
- Lighthouse Accessibility Score: **> 90**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 3.5s**
- Cumulative Layout Shift: **< 0.1**

### Business Metrics
- Contact form submission rate: **> 5%** of visitors
- ROI calculator completion rate: **> 15%** of visitors
- Average session duration: **> 2 minutes**
- Bounce rate: **< 40%**
- Schedule consultation conversion: **> 2%** of visitors

---

## 🚀 Technology Stack Summary

### Frontend
- **Framework:** Next.js 14+ (React 18+)
- **Styling:** Tailwind CSS v3+ with custom configuration
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Language:** TypeScript
- **Fonts:** Google Fonts (Cinzel, Inter)

### Backend
- **Runtime:** Node.js (LTS version)
- **Framework:** Express.js
- **Deployment:** Google Cloud Run
- **Secrets:** Google Secret Manager

### Integrations
- **Payment:** Stripe API
- **Calendar:** Google Calendar API
- **Lead Gen:** Webform3 API
- **Analytics:** Google Analytics 4
- **Email:** (To be determined - SendGrid, Mailgun, or similar)

### Development Tools
- **Version Control:** Git
- **CI/CD:** Google Cloud Build
- **Package Manager:** npm or yarn
- **Code Quality:** ESLint, Prettier
- **Testing:** (Optional) Jest, React Testing Library, Playwright

---

## 📅 Recommended Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Foundation | 1 week | None |
| Phase 2: Core Pages | 2 weeks | Phase 1 complete |
| Phase 3: Interactive Features | 2 weeks | Phase 2 complete |
| Phase 4: Backend Integration | 1.5 weeks | Phase 1, 3 complete |
| Phase 5: Animations & Polish | 1 week | Phase 2, 3 complete |
| Phase 6: Testing & Deployment | 1 week | All phases complete |
| **TOTAL** | **8-9 weeks** | |

*Note: Timeline assumes full-time development. Adjust based on actual resource allocation.*

---

## 🔄 Ongoing Maintenance Plan

### Post-Launch Activities
- [ ] Monitor analytics and user behavior
- [ ] A/B test key conversion points
- [ ] Gather user feedback
- [ ] Update portfolio with new projects
- [ ] Refresh testimonials regularly
- [ ] Blog/content strategy (optional future phase)
- [ ] SEO optimization based on performance data
- [ ] Regular security updates
- [ ] Performance monitoring and optimization

---

## 📞 Decision Points & Questions

### To Clarify Before Starting
1. **CMS vs Hardcoded Content:** Should portfolio/testimonials use a CMS (Contentful, Sanity) or be hardcoded?
2. **Email Service:** Which email service provider for transactional emails?
3. **Database:** Do we need a database for leads/users, or rely solely on third-party APIs?
4. **Blog:** Is a blog/articles section planned for Phase 1 or future iteration?
5. **Multilingual:** Is internationalization required now or later?
6. **Video Hosting:** Self-hosted on Cloud Storage or YouTube/Vimeo embeds?
7. **Authentication:** Do we need user accounts/login, or is it all public with lead capture?

---

## 🎨 Design Mockup Requirements

### Recommended Before Development
- [ ] Landing page desktop mockup (Figma/Adobe XD)
- [ ] Landing page mobile mockup
- [ ] Services page mockup
- [ ] Portfolio modal mockup
- [ ] Component library design (buttons, cards, inputs)
- [ ] Animation specifications document
- [ ] Responsive breakpoint definitions

---

## ✅ Conclusion

This phased plan provides a comprehensive roadmap for building the MAB AI Strategies website with all requested features, interactions, and integrations. Each phase builds logically on the previous, allowing for iterative development and testing.

**Next Steps:**
1. Review and approve this plan
2. Clarify decision points listed above
3. Gather all required assets (logo, photos, copy)
4. Begin Phase 1: Foundation & Infrastructure Setup

**Note:** This plan intentionally avoids writing code, focusing instead on strategy, architecture, and implementation roadmap. Code development will commence upon plan approval.
