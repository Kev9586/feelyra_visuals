# Deployment Guide

## 1. Deploy Strapi CMS to Strapi Cloud

### Create Project
1. Go to https://cloud.strapi.io and sign in with GitHub
2. Click **Create project** > **Deploy from GitHub**
3. Select repo: `Kev9586/feelyra_visuals`
4. **Base directory**: `strapi`
5. Branch: `main`
6. Click **Create project** and wait 5-10 minutes

### Setup Admin
1. Open `https://your-project.strapi.io/admin`
2. Create your admin account

### Set Permissions
1. Settings > Users & Permissions > Roles > **Public**
2. Enable:
   - Portfolio-item: `find`, `findOne`
   - Service: `find`, `findOne`
   - Testimonial: `find`, `findOne`
   - Contact-submission: `create`
   - Booking-request: `create`
3. Save

### Migrate Data
1. Create an API token: Settings > API Tokens > Create new (Full access, Unlimited)
2. Copy the token, then run:

```bash
cd strapi/scripts
export STRAPI_URL="https://your-project.strapi.io"
export STRAPI_API_TOKEN="your_token_here"
node migrateData.js
```

This auto-populates 12 portfolio items, 4 services, and 3 testimonials.

---

## 2. Deploy Frontend to Vercel

### Connect & Configure
1. Go to https://vercel.com/new
2. Import `Kev9586/feelyra_visuals`
3. Settings:
   - **Root Directory**: `frontend`
   - **Framework**: Create React App
   - **Build Command**: `yarn build`
   - **Output Directory**: `build`

### Environment Variables
Add in Vercel dashboard (Settings > Environment Variables):

```
REACT_APP_STRAPI_URL=https://your-project.strapi.io
```

### Deploy
Click **Deploy**. Vercel auto-redeploys on every push to `main`.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Build failed | Check Root Directory is `frontend` |
| Images missing | Deploy Strapi first, then update STRAPI_URL |
| Migration "Unauthorized" | Regenerate API token with Full access |
| Migration "Connection refused" | Verify Strapi Cloud deployment is complete |
