# Horizon Photography — PRD

## Problem Statement
Build a hybrid platform: Personal photography portfolio + Creative agency website with a premium brand experience optimized for conversions. Dark, cinematic, editorial style with high contrast. Reference: "Photographer X" Webflow template.

## Architecture
- **Frontend**: React 19, Tailwind CSS, Shadcn UI → deployed to Vercel
- **CMS**: Strapi v5 → deployed to Strapi Cloud
- **No custom backend** (Strapi handles content + form submissions)

## What's Been Implemented

### Frontend (Complete)
- [x] Header with nav + mobile menu
- [x] Split hero with parallax floating images
- [x] Featured Work masonry grid
- [x] Services grid with feature lists
- [x] Filterable Gallery (nature/travel/commercial)
- [x] About section with stats
- [x] Testimonials grid
- [x] FAQ accordion
- [x] Contact form
- [x] Booking modal
- [x] Footer with social links
- [x] Strapi service layer (`strapiService.js`) with mock data fallback
- [x] Custom hook (`useStrapiData.js`) for data fetching

### Strapi CMS (Schemas Complete)
- [x] Portfolio Item content type
- [x] Service content type
- [x] Testimonial content type
- [x] Contact Submission content type
- [x] Booking Request content type
- [x] Data migration script (`migrateData.js`)

### Deployment
- [x] GitHub repo: `Kev9586/feelyra_visuals`
- [x] Frontend deployed to Vercel
- [x] Strapi schemas pushed to GitHub

### Cleanup (2026-03-30)
- [x] Deleted legacy FastAPI backend
- [x] Created Strapi API service layer
- [x] Updated all components to use Strapi with mock fallback
- [x] Consolidated 8 markdown docs into README + DEPLOYMENT_GUIDE.md
- [x] Pushed clean codebase to GitHub

## Backlog

### P0 — Deploy Strapi Cloud
- User deploys Strapi to Strapi Cloud from dashboard
- Create admin account & set permissions
- Run migration script to seed content
- Update Vercel env var `REACT_APP_STRAPI_URL`

### P1 — Verify Integration
- Test all components fetch from Strapi API
- Test Contact form submission to Strapi
- Test Booking form submission to Strapi

### P2 — Polish
- SEO meta tags & Open Graph
- Image optimization (lazy loading, WebP)
- Blog section with Strapi content
- Custom domain setup
- Analytics integration
