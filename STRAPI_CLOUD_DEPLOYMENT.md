# ☁️ Deploying HORIZON Photography Portfolio to Strapi Cloud

## Overview

This guide will help you deploy your Strapi CMS to Strapi Cloud so you can manage your photography portfolio from anywhere.

---

## 📋 Prerequisites

1. ✅ GitHub repository with Strapi code (already done!)
   - Repository: https://github.com/Kev9586/feelyra_visuals.git
   
2. ✅ Strapi Cloud account
   - Sign up at: https://cloud.strapi.io
   
3. ✅ GitHub account connected to Strapi Cloud

---

## 🚀 Deployment Steps

### Step 1: Create Strapi Cloud Account

1. Go to **https://cloud.strapi.io**
2. Click **"Start for free"** or **"Sign in"**
3. Sign in with:
   - GitHub (Recommended)
   - Email

### Step 2: Create New Project

1. Click **"Create project"** button
2. You'll see the project creation form

### Step 3: Connect GitHub Repository

1. **Choose deployment method**: Select **"Deploy from GitHub"**
2. **Authorize GitHub**: 
   - Click "Connect with GitHub"
   - Authorize Strapi Cloud to access your repositories
   
3. **Select Repository**: 
   - Choose: `Kev9586/feelyra_visuals`
   - Branch: `main`

### Step 4: Configure Project Settings

**IMPORTANT SETTINGS:**

1. **Base directory**: 
   ```
   strapi
   ```
   ⚠️ This is crucial! Set it to `strapi` (not `/backend`)

2. **Region**: 
   - Choose closest to you:
     - US (East) - Virginia
     - Europe (West) - Paris
     - Asia (Southeast) - Singapore

3. **Project name**: 
   ```
   horizon-photography
   ```
   (or any name you prefer)

4. **Deploy on commit**: 
   - ✅ Check this box to auto-deploy on every git push

### Step 5: Environment Variables (Optional)

Strapi Cloud automatically sets up:
- ✅ Database (PostgreSQL)
- ✅ Admin JWT Secret
- ✅ API Keys
- ✅ File storage (S3)

You don't need to add anything manually for basic setup.

### Step 6: Deploy!

1. Review all settings
2. Click **"Create project"**
3. Wait for deployment (5-10 minutes)

---

## 📊 After Deployment

### Access Your Strapi Admin Panel

Once deployed, you'll get a URL like:
```
https://horizon-photography-xxxxxx.strapi.io/admin
```

1. Open this URL
2. Create your admin account
3. Set up content types (same as local setup)
4. Add your photography content

### Update Frontend to Use Cloud URL

Update your frontend `.env` file:

**Local Development:**
```env
REACT_APP_STRAPI_URL=http://localhost:1337
```

**Production (after Strapi Cloud deployment):**
```env
REACT_APP_STRAPI_URL=https://your-project-name.strapi.io
```

---

## 🔧 Common Issues & Solutions

### Issue 1: "Unable to find package.json"
**Solution**: Make sure base directory is set to `strapi` (not `/backend` or empty)

### Issue 2: Build fails
**Solution**: 
1. Check that all dependencies are in `package.json`
2. Ensure Node version is compatible (20.x)
3. Check build logs in Strapi Cloud dashboard

### Issue 3: Database connection errors
**Solution**: Strapi Cloud automatically configures PostgreSQL. No action needed.

---

## 💰 Pricing

**Free Tier Includes:**
- 2 Projects
- PostgreSQL database
- 5GB Assets storage
- 100GB Bandwidth
- Community support

**Pro Tier ($29/month per project):**
- Unlimited projects
- Increased storage & bandwidth
- Priority support
- Custom domains

---

## 🔄 Continuous Deployment

After initial setup:

1. **Make changes locally**
   ```bash
   cd /app
   git add -A
   git commit -m "Update content types"
   git push origin main
   ```

2. **Automatic deployment**
   - Strapi Cloud automatically detects the push
   - Builds and deploys your changes
   - Usually takes 3-5 minutes

---

## 📱 Managing Your Cloud Strapi

### Strapi Cloud Dashboard
- **URL**: https://cloud.strapi.io/projects
- View deployments
- Check logs
- Monitor usage
- Configure settings

### Database Backups
- Automatic daily backups (Pro tier)
- Manual backups available in dashboard

### Custom Domain (Pro tier)
- Add your own domain: `cms.yoursite.com`
- Automatic SSL certificates

---

## 🔗 Integration with Frontend

Once Strapi Cloud is deployed:

### Update Frontend API URL

**File**: `/app/frontend/.env`
```env
REACT_APP_BACKEND_URL=https://your-domain.emergent.sh
REACT_APP_STRAPI_URL=https://your-project.strapi.io
```

### Frontend will fetch from:
```javascript
// Portfolio items
GET https://your-project.strapi.io/api/portfolio-items?populate=*

// Services
GET https://your-project.strapi.io/api/services?populate=deep

// Create booking
POST https://your-project.strapi.io/api/booking-requests
```

---

## 📝 Next Steps After Cloud Deployment

1. ✅ Access Strapi admin panel (cloud URL)
2. ✅ Create admin account
3. ✅ Set up content types (Portfolio, Services, Testimonials)
4. ✅ Configure permissions (Settings → Roles → Public)
5. ✅ Upload your photography content
6. ✅ Update frontend to use cloud Strapi URL
7. ✅ Test everything works
8. ✅ Deploy frontend to production

---

## 🆘 Support

**Strapi Documentation**: https://docs.strapi.io
**Strapi Cloud Docs**: https://docs.strapi.io/cloud
**Community Forum**: https://forum.strapi.io
**Discord**: https://discord.strapi.io

---

## ✅ Deployment Checklist

Before deploying:
- [ ] GitHub repository is up to date
- [ ] Strapi Cloud account created
- [ ] GitHub connected to Strapi Cloud
- [ ] Base directory set to `strapi`
- [ ] Region selected
- [ ] Project name chosen

After deploying:
- [ ] Admin account created
- [ ] Content types set up
- [ ] Permissions configured
- [ ] Sample content added
- [ ] Frontend updated with cloud URL
- [ ] Everything tested

---

**Ready to deploy? Let me know if you need help with any step!** 🚀
