# MAB AI Strategies - Deployment Guide

## 🚀 Deployment Overview

This guide covers deploying the MAB AI Strategies website to production using Google Cloud Run, as specified in the implementation plan.

---

## 📋 Pre-Deployment Checklist

### 1. Environment Variables
Ensure all required environment variables are configured:

```bash
# Google Cloud Platform
GCP_PROJECT_ID=your-project-id
GCP_REGION=us-central1

# Google Calendar API
GOOGLE_CALENDAR_API_KEY=your-api-key
GOOGLE_CALENDAR_ID=your-calendar-id

# Stripe Payment Integration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Webform3 Lead Generation
WEBFORM3_API_KEY=your-api-key
WEBFORM3_ENDPOINT=https://api.webform3.com/v1/submit
WEBFORM3_RECIPIENT_EMAIL=mark@mabaistrategies.com

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Application URL
NEXT_PUBLIC_APP_URL=https://mabaistrategies.com

# Node Environment
NODE_ENV=production
```

### 2. Google Cloud Platform Setup

#### Create GCP Project
```bash
gcloud projects create mab-ai-strategies
gcloud config set project mab-ai-strategies
```

#### Enable Required APIs
```bash
gcloud services enable run.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable secretmanager.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

#### Configure Secret Manager
```bash
# Create secrets for sensitive data
echo -n "your-stripe-secret-key" | gcloud secrets create stripe-secret-key --data-file=-
echo -n "your-webform3-api-key" | gcloud secrets create webform3-api-key --data-file=-
echo -n "your-calendar-api-key" | gcloud secrets create google-calendar-api-key --data-file=-
```

### 3. Build Configuration

#### Create Dockerfile
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build Next.js application
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

#### Create .dockerignore
```
node_modules
.next
.git
.gitignore
.env*.local
README.md
*.md
.DS_Store
npm-debug.log*
```

### 4. Cloud Build Configuration

#### Create cloudbuild.yaml
```yaml
steps:
  # Build the container image
  - name: 'gcr.io/cloud-builders/docker'
    args: ['build', '-t', 'gcr.io/$PROJECT_ID/mab-ai-strategies:$COMMIT_SHA', '.']

  # Push the container image to Container Registry
  - name: 'gcr.io/cloud-builders/docker'
    args: ['push', 'gcr.io/$PROJECT_ID/mab-ai-strategies:$COMMIT_SHA']

  # Deploy to Cloud Run
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: gcloud
    args:
      - 'run'
      - 'deploy'
      - 'mab-ai-strategies'
      - '--image'
      - 'gcr.io/$PROJECT_ID/mab-ai-strategies:$COMMIT_SHA'
      - '--region'
      - 'us-central1'
      - '--platform'
      - 'managed'
      - '--allow-unauthenticated'

images:
  - 'gcr.io/$PROJECT_ID/mab-ai-strategies:$COMMIT_SHA'
```

---

## 🔐 Security Configuration

### SSL/TLS Certificate
Cloud Run automatically provisions SSL certificates for custom domains.

### Custom Domain Setup
```bash
# Map custom domain to Cloud Run service
gcloud run domain-mappings create \
  --service=mab-ai-strategies \
  --domain=mabaistrategies.com \
  --region=us-central1
```

### DNS Configuration
Add these DNS records to your domain:

```
Type: A
Name: @
Value: [Cloud Run IP provided]

Type: AAAA
Name: @
Value: [Cloud Run IPv6 provided]

Type: CNAME
Name: www
Value: mabaistrategies.com
```

---

## 🚀 Deployment Steps

### Option 1: Manual Deployment

```bash
# 1. Build and push Docker image
docker build -t gcr.io/mab-ai-strategies/website:latest .
docker push gcr.io/mab-ai-strategies/website:latest

# 2. Deploy to Cloud Run
gcloud run deploy mab-ai-strategies \
  --image gcr.io/mab-ai-strategies/website:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars="NODE_ENV=production" \
  --set-secrets="STRIPE_SECRET_KEY=stripe-secret-key:latest,WEBFORM3_API_KEY=webform3-api-key:latest"
```

### Option 2: CI/CD with Cloud Build

```bash
# Connect GitHub repository to Cloud Build
gcloud beta builds triggers create github \
  --repo-name=claude-newcomp1 \
  --repo-owner=MABAIStrategies \
  --branch-pattern="^main$" \
  --build-config=cloudbuild.yaml
```

---

## 📊 Monitoring & Logging

### Enable Cloud Logging
```bash
gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=mab-ai-strategies" --limit 50
```

### Set Up Alerts
```bash
# Create uptime check
gcloud monitoring uptime-checks create https \
  --display-name="MAB AI Strategies Uptime" \
  --resource-type=uptime-url \
  --host=mabaistrategies.com \
  --path=/
```

---

## 🔄 Rollback Procedure

```bash
# List revisions
gcloud run revisions list --service=mab-ai-strategies --region=us-central1

# Rollback to previous revision
gcloud run services update-traffic mab-ai-strategies \
  --to-revisions=REVISION_NAME=100 \
  --region=us-central1
```

---

## 📈 Performance Optimization

### Enable Cloud CDN
```bash
gcloud compute backend-services update mab-ai-strategies-backend \
  --enable-cdn \
  --cache-mode=CACHE_ALL_STATIC
```

### Configure Caching Headers
Headers are already configured in `next.config.js`.

---

## 🧪 Testing in Production

### Health Check
```bash
curl https://mabaistrategies.com/api/health
```

### Load Testing
```bash
# Install Apache Bench
ab -n 1000 -c 10 https://mabaistrategies.com/
```

---

## 📝 Post-Deployment Tasks

- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Verify Google Analytics tracking
- [ ] Test ROI Calculator functionality
- [ ] Check mobile responsiveness
- [ ] Verify SSL certificate
- [ ] Test all CTAs and links
- [ ] Monitor error logs for 24 hours
- [ ] Set up backup and disaster recovery

---

## 🆘 Troubleshooting

### Build Failures
```bash
# Check build logs
gcloud builds log [BUILD_ID]
```

### Service Not Starting
```bash
# Check service logs
gcloud run services logs read mab-ai-strategies --region=us-central1
```

### Environment Variables
```bash
# Verify environment variables
gcloud run services describe mab-ai-strategies --region=us-central1 --format="value(spec.template.spec.containers[0].env)"
```

---

## 📞 Support

For deployment issues, contact:
- Mark Anthony Barrameda
- Email: mark@mabaistrategies.com

---

**Deployment Guide Version**: 1.0
**Last Updated**: 2026-01-04
