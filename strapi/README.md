# Strapi Cloud Deployment

This directory contains the Strapi CMS for HORIZON Photography Portfolio.

## Deployment Instructions

### Prerequisites
- GitHub repository: https://github.com/Kev9586/feelyra_visuals.git
- Strapi Cloud account: https://cloud.strapi.io

### Project Structure
- Base directory: `/strapi`
- Node version: 20.x
- Database: SQLite (local) → PostgreSQL (production)

### Environment Variables (Set in Strapi Cloud Dashboard)
```
NODE_ENV=production
DATABASE_CLIENT=postgres
```

### Deployment Steps
1. Go to https://cloud.strapi.io
2. Sign in / Create account
3. Click "Create Project"
4. Connect GitHub repository
5. Set base directory to: `strapi`
6. Deploy!

## Local Development
```bash
cd /app/strapi
npm run develop
```

## Production Build
```bash
npm run build
npm run start
```
