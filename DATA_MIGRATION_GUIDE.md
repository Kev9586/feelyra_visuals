# 📦 Data Migration: Mock Data to Strapi

## Overview

This guide will help you transfer all your mock data (portfolio items, services, testimonials) to Strapi CMS.

---

## 📊 Current Mock Data

**Location:** `/frontend/src/mock/photographyData.js`

**What we have:**
1. ✅ 12 Portfolio Images
2. ✅ 4 Featured Work Items
3. ✅ 4 Services (Travel, Nature, Commercial, Event)
4. ✅ 3 Testimonials
5. ✅ 3 Blog Posts
6. ✅ About Data (stats, description)
7. ✅ 6 FAQ Items

---

## 🎯 Migration Steps

### Step 1: Set Up Strapi (Choose One)

#### Option A: Deploy to Strapi Cloud First
1. Go to https://cloud.strapi.io
2. Deploy Strapi (follow STRAPI_CLOUD_DEPLOYMENT.md)
3. Access admin at: `https://your-project.strapi.io/admin`

#### Option B: Use Local Strapi
1. Access: http://localhost:1337/admin
2. Create admin account
3. Migrate data locally
4. Deploy to cloud later

**Recommended:** Start with **Option B** (local), test everything, then deploy.

---

### Step 2: Create Content Types in Strapi

Follow **STRAPI_CONTENT_TYPES_GUIDE.md** to create:

1. ✅ Portfolio Item
2. ✅ Service  
3. ✅ Testimonial
4. ✅ Blog Post (optional)
5. ✅ Contact Submission
6. ✅ Booking Request

**Set Permissions:**
- Settings → Users & Permissions → Public Role
- Enable: `find`, `findOne` for Portfolio, Service, Testimonial
- Enable: `create` for Contact, Booking

---

### Step 3: Transfer Data to Strapi

Now manually add your content through Strapi admin panel:

#### A. Portfolio Items (12 items)

**For each portfolio image:**

1. Content Manager → Portfolio Item → Create new entry

**Example 1:**
```
Title: Mountain Peak at Dawn
Description: Capturing the majestic beauty of mountain peaks at sunrise
Category: nature
Image: Upload from URL: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
Featured: Yes (for first 4 items)
Order: 0
```

**Example 2:**
```
Title: Lake Reflection  
Description: Perfect reflections in pristine waters
Category: travel
Image: https://images.unsplash.com/photo-1501594907352-04cda38ebc29
Featured: Yes
Order: 1
```

**All 12 Portfolio Items:**
1. Mountain Peak at Dawn (nature, featured)
2. Lake Reflection (travel, featured)
3. Forest Mysteries (nature, featured)
4. Golden Hour (commercial, featured)
5. Misty Forest Valley (nature)
6. Mountain Trail (nature)
7. Misty Peaks (travel)
8. Mountain Vista (nature)
9. Foggy Mountain Range (nature)
10. Mountain Road (travel)
11. Wilderness Landscape (commercial)
12. Starry Night (travel)

**Click Save & Publish for each!**

---

#### B. Services (4 items)

**Service 1: Travel Photography**
```
Title: Travel Photography
Description: Document your adventures with stunning travel photography that captures the essence of each destination.
Image: https://images.unsplash.com/photo-1501594907352-04cda38ebc29
Features:
  - Destination shoots
  - Adventure documentation  
  - Cultural photography
Order: 0
```

**Service 2: Nature Photography**
```
Title: Nature Photography
Description: Breathtaking landscapes and wildlife photography that showcases the raw beauty of the natural world.
Image: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
Features:
  - Landscape photography
  - Wildlife documentation
  - Seasonal captures
Order: 1
```

**Service 3: Commercial Photography**
```
Title: Commercial Photography
Description: Professional photography services for brands and businesses looking to elevate their visual identity.
Image: https://images.unsplash.com/photo-1447752875215-b2761acb3c5d
Features:
  - Brand photography
  - Product shoots
  - Marketing content
Order: 2
```

**Service 4: Event Photography**
```
Title: Event Photography
Description: Capture the magic of your special moments with professional event photography services.
Image: https://images.unsplash.com/photo-1519681393784-d120267933ba
Features:
  - Weddings
  - Corporate events
  - Special occasions
Order: 3
```

**Save & Publish each!**

---

#### C. Testimonials (3 items)

**Testimonial 1:**
```
Name: Sarah Mitchell
Role: Adventure Travel Blogger
Quote: Working with Horizon was an absolute dream. The attention to detail and artistic vision brought our mountain expedition to life in ways we never imagined.
Image: https://images.unsplash.com/photo-1573496359142-b8d87734a5a2
Order: 0
```

**Testimonial 2:**
```
Name: Marcus Chen
Role: Creative Director
Quote: The quality of work is simply outstanding. Every shot tells a story, and the professionalism is unmatched. Highly recommended for any serious photography project.
Image: https://images.unsplash.com/photo-1560250097-0b93528c311a
Order: 1
```

**Testimonial 3:**
```
Name: David Rodriguez
Role: Brand Manager
Quote: Horizon transformed our brand's visual identity. The commercial photography exceeded all expectations and delivered exceptional results for our campaign.
Image: https://images.pexels.com/photos/7206246/pexels-photo-7206246.jpeg
Order: 2
```

**Save & Publish each!**

---

#### D. Blog Posts (3 items - Optional)

**Blog Post 1:**
```
Title: The Art of Mountain Photography
Excerpt: Discover the techniques and mindset needed to capture stunning mountain landscapes in challenging conditions.
Content: [Add full article content here]
Image: https://images.unsplash.com/photo-1506905925346-21bda4d32df4
Category: Photography Tips
Published At: 2024-03-15
```

**Blog Post 2:**
```
Title: Chasing the Golden Hour
Excerpt: Learn how to make the most of nature's perfect lighting conditions for breathtaking photography.
Content: [Add full article content]
Image: https://images.unsplash.com/photo-1447752875215-b2761acb3c5d
Category: Techniques
Published At: 2024-03-10
```

**Blog Post 3:**
```
Title: My Journey Through Patagonia
Excerpt: A personal account of photographing one of the world's most dramatic and beautiful wilderness regions.
Content: [Add full article content]
Image: https://images.unsplash.com/photo-1501594907352-04cda38ebc29
Category: Travel Stories
Published At: 2024-03-05
```

**Save & Publish each!**

---

### Step 4: Verify Data in Strapi

**Check that everything is added:**

1. Content Manager → Portfolio Items: Should show 12 items
2. Content Manager → Services: Should show 4 items
3. Content Manager → Testimonials: Should show 3 items
4. Media Library: Should have all uploaded images

---

### Step 5: Test Strapi API

**Test API endpoints:**

Open in browser:
```
http://localhost:1337/api/portfolio-items?populate=*
http://localhost:1337/api/services?populate=deep
http://localhost:1337/api/testimonials?populate=*
```

**You should see JSON data!**

---

## ✅ Migration Checklist

Data Transfer:
- [ ] Created all content types in Strapi
- [ ] Set public permissions
- [ ] Added 12 portfolio items
- [ ] Added 4 services
- [ ] Added 3 testimonials
- [ ] Added blog posts (optional)
- [ ] Verified data in Strapi admin
- [ ] Tested API endpoints
- [ ] All images uploaded successfully

Ready for Cleanup:
- [ ] Data is accessible in Strapi
- [ ] Can edit content through Strapi admin
- [ ] API returns correct data
- [ ] Ready to integrate with frontend

---

## 🚀 After Migration

Once you confirm:
✅ "I can see and manage all my content in Strapi!"

Then we'll proceed with:
1. ✅ Remove mock data files
2. ✅ Create Strapi service in frontend
3. ✅ Update components to fetch from Strapi
4. ✅ Remove unused backend
5. ✅ Test everything
6. ✅ Deploy updates

---

## 📞 Need Help?

Let me know when you've:
- ✅ Set up Strapi content types
- ✅ Started adding data
- ✅ Need help with any step

I'm here to guide you through each step! 📸
