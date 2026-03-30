# 🚀 Deploying HORIZON Photography Portfolio to Vercel

## Current Status
- ✅ Code on GitHub: https://github.com/Kev9586/feelyra_visuals.git
- ⏳ Need to deploy to Vercel

---

## Method 1: Update Existing Vercel Project

### When to use this:
- You want to replace your old website
- You have an existing Vercel project you want to update

### Steps:

**1. Access Vercel Dashboard**
- Go to: https://vercel.com/dashboard
- Sign in with GitHub

**2. Select Your Project**
- Find your existing project
- Click on it

**3. Disconnect Old Repository**
- Click **Settings** (top navigation)
- Click **Git** (left sidebar)
- Click **"Disconnect"** button
- Confirm disconnection

**4. Connect New Repository**
- Click **"Connect Git Repository"**
- Authorize GitHub if needed
- Search for: `feelyra_visuals`
- Select: `Kev9586/feelyra_visuals`
- Branch: `main`
- Click **"Connect"**

**5. Configure Build Settings**
- Go to **Settings** → **General**
- **Root Directory**: 
  ```
  frontend
  ```
  ⚠️ Click "Edit" and set this!
  
- **Framework Preset**: Create React App (auto-detected)
- **Build Command**: 
  ```
  yarn build
  ```
- **Output Directory**: 
  ```
  build
  ```
- **Install Command**: 
  ```
  yarn install
  ```
- Click **"Save"**

**6. Add Environment Variables**
- Go to **Settings** → **Environment Variables**
- Add these variables:

**Variable 1:**
```
Name: REACT_APP_STRAPI_URL
Value: http://localhost:1337
```
(Change to your Strapi Cloud URL when ready)

**Variable 2 (if using FastAPI):**
```
Name: REACT_APP_BACKEND_URL
Value: https://your-backend-url.com
```

- Select **Production**, **Preview**, **Development**
- Click **"Save"**

**7. Trigger Redeployment**
- Go to **Deployments** tab
- Click **"Redeploy"** (three dots menu → Redeploy)
- Wait 2-3 minutes
- Your site is live! 🎉

**8. Check Your Live Site**
- Click on the deployment URL
- Your HORIZON photography portfolio is now live!

---

## Method 2: Create New Vercel Project

### When to use this:
- You want to keep your old website running
- You want a separate URL for the new site

### Steps:

**1. Create New Project**
- Go to: https://vercel.com/new
- Click **"Add New..."** → **"Project"**

**2. Import Repository**
- Click **"Import Git Repository"**
- Find: `Kev9586/feelyra_visuals`
- Click **"Import"**

**3. Configure Project Settings**

**Project Name:**
```
horizon-photography
```
(or any name you want - this will be in your URL)

**Framework Preset:**
```
Create React App
```

**Root Directory:**
```
frontend
```
⚠️ **CRITICAL**: Click "Edit" and type `frontend`

**Build Command:**
```
yarn build
```

**Output Directory:**
```
build
```

**Install Command:**
```
yarn install
```

**4. Environment Variables**

Click **"Environment Variables"** section:

Add:
```
Key: REACT_APP_STRAPI_URL
Value: http://localhost:1337
```

**5. Deploy!**
- Click **"Deploy"** button
- Wait 2-3 minutes
- Your site will be live at: `https://horizon-photography.vercel.app`
  (or whatever project name you chose)

---

## 📝 After Deployment

### Your Live URLs:

**Website:**
```
https://your-project-name.vercel.app
```

**Vercel Dashboard:**
```
https://vercel.com/your-username/your-project-name
```

### Automatic Deployments:

Every time you push to GitHub:
```bash
git add -A
git commit -m "Update portfolio"
git push origin main
```

Vercel will **automatically redeploy** your site! 🚀

### Custom Domain (Optional):

1. Go to **Settings** → **Domains**
2. Add your domain: `www.yoursite.com`
3. Follow DNS configuration steps
4. Free SSL included!

---

## 🔧 Troubleshooting

### Issue: "Build failed"
**Solution:**
- Check that Root Directory is set to `frontend`
- Check build logs in Vercel dashboard
- Make sure all dependencies are in package.json

### Issue: "Page not found"
**Solution:**
- Output Directory should be `build`
- Framework should be "Create React App"

### Issue: "Environment variables not working"
**Solution:**
- Make sure variables start with `REACT_APP_`
- Redeploy after adding environment variables
- Check they're enabled for Production

### Issue: "Images not loading"
**Solution:**
- Check image URLs in your code
- Strapi images need Strapi to be deployed first

---

## 🎯 Next Steps After Deployment

1. ✅ Website is live on Vercel
2. ⏳ Deploy Strapi to Strapi Cloud
3. ⏳ Update `REACT_APP_STRAPI_URL` in Vercel
4. ⏳ Test all functionality
5. ⏳ Add custom domain (optional)

---

## 📊 Deployment Checklist

- [ ] Vercel account created
- [ ] GitHub repository connected
- [ ] Root directory set to `frontend`
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Deployed successfully
- [ ] Live URL works
- [ ] All pages loading correctly
- [ ] Images displaying
- [ ] Forms working (after Strapi deployed)

---

## 🆘 Need Help?

**Vercel Support:**
- Documentation: https://vercel.com/docs
- Support: https://vercel.com/support

**Your Repository:**
- GitHub: https://github.com/Kev9586/feelyra_visuals

---

**Ready to deploy? Let me know if you need help with any step!** 🚀
