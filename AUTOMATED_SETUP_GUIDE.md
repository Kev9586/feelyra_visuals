# 🚀 AUTOMATED SETUP: Deploy Strapi to Cloud + Auto-Populate Data

## What This Does

✅ Deploy Strapi to Strapi Cloud (5 minutes - you do this)  
✅ Automatically add all 12 portfolio items  
✅ Automatically add all 4 services  
✅ Automatically add all 3 testimonials  
✅ No manual data entry needed!

---

## Step 1: Deploy Strapi to Strapi Cloud (5 minutes)

### 1.1 Go to Strapi Cloud
Open: https://cloud.strapi.io

### 1.2 Sign In
- Click **"Sign in"** or **"Start for free"**
- Sign in with **GitHub** (recommended)

### 1.3 Create New Project
- Click **"Create project"** button
- Choose **"Deploy from GitHub"**

### 1.4 Connect Repository
- Click **"Connect with GitHub"**
- Select: `Kev9586/feelyra_visuals`
- Branch: `main`

### 1.5 Configure Project Settings

**⚠️ CRITICAL SETTINGS:**

**Base directory:**
```
strapi
```

**Project name:**
```
horizon-photography
```
(or any name you want)

**Region:**
- Choose: `US (East)` or closest to you

**Deploy on commit:**
- ✅ Check this box

### 1.6 Deploy!
- Click **"Create project"**
- Wait 5-10 minutes for deployment

### 1.7 Get Your Strapi URL
After deployment, you'll get:
```
https://horizon-photography-xxxxx.strapi.io
```

**Save this URL!** You'll need it next.

---

## Step 2: Create Admin Account (2 minutes)

### 2.1 Access Admin Panel
Open your Strapi URL + `/admin`:
```
https://your-project.strapi.io/admin
```

### 2.2 Register Admin
Fill in the form:
- First Name: Your name
- Last Name: Your last name
- Email: Your email
- Password: Strong password (min 8 characters)

Click **"Let's start"**

---

## Step 3: Create Content Types (10 minutes)

### 3.1 Create Portfolio Item

1. Click **"Content-Type Builder"** (left sidebar)
2. Click **"Create new collection type"**
3. Display name: `Portfolio Item`
4. Click **"Continue"**

**Add these fields:**

**Field 1: title** (Text, Required)  
**Field 2: description** (Rich text - Blocks)  
**Field 3: category** (Enumeration)
- Values: `nature`, `travel`, `commercial`, `event`

**Field 4: image** (Media - Single, Required)  
**Field 5: featured** (Boolean, Default: false)  
**Field 6: order** (Number - integer, Default: 0)

Click **"Save"** (top right)

### 3.2 Create Service

1. Click **"Create new collection type"**
2. Display name: `Service`

**Add these fields:**

**Field 1: title** (Text, Required)  
**Field 2: description** (Rich text - Blocks, Required)  
**Field 3: image** (Media - Single, Required)  
**Field 4: features** (Component - Repeatable)
- Create new component: `Feature Item`
- Category: `service-components`
- Add field: `text` (Text, Required)
- ✅ Repeatable component

**Field 5: order** (Number - integer, Default: 0)

Click **"Save"**

### 3.3 Create Testimonial

1. Click **"Create new collection type"**
2. Display name: `Testimonial`

**Add these fields:**

**Field 1: name** (Text, Required)  
**Field 2: role** (Text, Required)  
**Field 3: quote** (Text - Long text, Required)  
**Field 4: image** (Media - Single, Required)  
**Field 5: order** (Number - integer, Default: 0)

Click **"Save"**

### 3.4 Create Contact Submission

1. Display name: `Contact Submission`

**Fields:**
- name (Text, Required)
- email (Email, Required)
- phone (Text)
- subject (Text, Required)
- message (Text - Long, Required)
- status (Enumeration: `new`, `read`, `replied`, Default: `new`)

Click **"Save"**

### 3.5 Create Booking Request

1. Display name: `Booking Request`

**Fields:**
- name (Text, Required)
- email (Email, Required)
- phone (Text, Required)
- service (Enumeration: `travel`, `nature`, `commercial`, `event`)
- preferredDate (Date, Required)
- preferredTime (Text)
- details (Text - Long, Required)
- status (Enumeration: `pending`, `confirmed`, `cancelled`, Default: `pending`)

Click **"Save"**

---

## Step 4: Set Permissions (5 minutes)

### 4.1 Go to Settings
Click **"Settings"** (left sidebar bottom)

### 4.2 Configure Public Role
- Click **"Users & Permissions plugin"**
- Click **"Roles"**
- Click **"Public"**

### 4.3 Enable Permissions

**Portfolio-item:**
- ✅ find
- ✅ findOne

**Service:**
- ✅ find
- ✅ findOne

**Testimonial:**
- ✅ find
- ✅ findOne

**Contact-submission:**
- ✅ create

**Booking-request:**
- ✅ create

**Upload:**
- ✅ upload (so images can be viewed publicly)

Click **"Save"** (top right)

---

## Step 5: Create API Token (2 minutes)

### 5.1 Go to API Tokens
- Settings → API Tokens
- Click **"Create new API Token"**

### 5.2 Configure Token
- **Name**: `Migration Script`
- **Token duration**: `Unlimited`
- **Token type**: `Full access`

Click **"Save"**

### 5.3 Copy Token
**⚠️ IMPORTANT:** Copy the token NOW! You won't see it again.

```
Save it somewhere safe!
```

---

## Step 6: Run Migration Script (1 minute)

### 6.1 Update Environment Variables

Open terminal and run:

```bash
cd /app/strapi/scripts

# Set your Strapi URL and API Token
export STRAPI_URL="https://your-project.strapi.io"
export STRAPI_API_TOKEN="your_token_here"

# Run migration
node migrateData.js
```

### 6.2 Watch It Work!

You'll see:
```
🚀 Starting Data Migration to Strapi...
📸 Adding Portfolio Items...
  ✅ Created: Mountain Peak at Dawn
  ✅ Created: Lake Serenity
  ...
🎯 Adding Services...
  ✅ Created: Travel Photography
  ...
💬 Adding Testimonials...
  ✅ Created: Sarah Mitchell
  ...
✅ Migration Complete!
```

---

## Step 7: Verify (1 minute)

### 7.1 Check Strapi Admin
Go to **Content Manager**:
- Portfolio Items: Should show 12 items
- Services: Should show 4 items
- Testimonials: Should show 3 items

### 7.2 Check API
Open in browser:
```
https://your-project.strapi.io/api/portfolio-items?populate=*
```

You should see JSON data!

---

## ✅ SUCCESS! Data Migration Complete!

Now tell me: **"Strapi is on cloud with all data!"**

Then I'll:
1. ✅ Remove unused backend code
2. ✅ Connect frontend to your Strapi Cloud
3. ✅ Remove mock data
4. ✅ Test everything
5. ✅ Update Vercel deployment

---

## 🆘 Troubleshooting

### Script Error: "Connection refused"
- Check STRAPI_URL is correct
- Make sure Strapi Cloud deployment is complete

### Script Error: "Unauthorized"
- Check STRAPI_API_TOKEN is correct
- Make sure token has "Full access"

### "Cannot find module 'axios'"
Run:
```bash
cd /app/strapi/scripts
npm install axios form-data
```

### Images not uploading
- Check internet connection
- Unsplash might be rate limiting - wait a minute and retry

---

## 📞 Need Help?

Let me know if you get stuck at any step!

Share:
- Which step you're on
- Any error messages
- Screenshots if helpful

I'm here to help! 🚀
