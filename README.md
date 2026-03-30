# Horizon Photography

A premium photography portfolio and creative agency website built with React and Strapi CMS.

## Architecture

```
/app
├── frontend/          React 19 + Tailwind CSS + Shadcn UI
│   ├── src/
│   │   ├── components/  UI sections (Hero, Gallery, Services, etc.)
│   │   ├── services/    Strapi API integration
│   │   ├── hooks/       Custom React hooks
│   │   └── mock/        Fallback data (used when Strapi is offline)
├── strapi/            Strapi v5 CMS
│   ├── src/api/       Content type schemas
│   └── scripts/       Data migration utilities
```

## Content Types (Strapi)

| Collection       | Fields                                              |
|-----------------|-----------------------------------------------------|
| Portfolio Item   | title, description, category, image, featured, order |
| Service          | title, description, image, features                  |
| Testimonial      | name, role, quote, image, order                      |
| Booking Request  | name, email, phone, service, date, time, details     |
| Contact Submission | name, email, phone, subject, message               |

## Setup

### Frontend (Vercel)
1. Push to GitHub
2. Connect repo to Vercel
3. Set env var: `REACT_APP_STRAPI_URL=https://your-strapi-project.strapiapp.com`
4. Deploy

### Strapi (Strapi Cloud)
1. Connect GitHub repo to Strapi Cloud
2. Set root directory to `/strapi`
3. Deploy — schemas auto-register from `src/api/`
4. Create admin account
5. Set permissions: Public > find/findOne for portfolio-items, services, testimonials
6. Run migration: `cd strapi/scripts && node migrateData.js`

## How It Works

The frontend checks for `REACT_APP_STRAPI_URL`:
- **Set** → Fetches live content from Strapi API
- **Not set** → Uses local mock data as fallback

This means the site works immediately without Strapi, and switches to CMS content once deployed.
