# 📸 Managing Your Photography Portfolio Content with Strapi

## Overview

This guide will show you how to manage all your website content (photos, services, testimonials, bookings) through Strapi CMS.

---

## 🔑 Accessing Strapi Admin Panel

### Local Development:
```
http://localhost:1337/admin
```

### Production (After deploying to Strapi Cloud):
```
https://your-project-name.strapi.io/admin
```

**Login with:**
- Email: (your admin email)
- Password: (your admin password)

---

## 📚 Managing Content

### 1. Portfolio Items (Your Photography)

**Purpose:** Display your photography work in the gallery

**How to Add:**
1. Click **Content Manager** (left sidebar)
2. Click **Portfolio Item**
3. Click **"Create new entry"** button

**Fill in:**
- **Title**: Name of the photo (e.g., "Mountain Sunrise")
- **Description**: Story behind the photo
- **Category**: Choose from:
  - `nature` - Nature photography
  - `travel` - Travel photography
  - `commercial` - Commercial work
  - `event` - Event photography
- **Image**: Click "Add an asset" → Upload your photo
- **Featured**: Toggle ON if you want it in "Featured Work" section
- **Order**: Number for sorting (0, 1, 2...) - lower appears first

**Save & Publish:**
- Click **"Save"** (top right)
- Click **"Publish"** to make it live

**Tips:**
- Use high-quality images (recommended: 1920x1080 or higher)
- Write engaging descriptions
- Use categories to help visitors filter
- Mark your best work as "Featured"

---

### 2. Services (What You Offer)

**Purpose:** Showcase your photography services

**How to Add:**
1. Content Manager → **Service** → **"Create new entry"**

**Fill in:**
- **Title**: Service name (e.g., "Travel Photography")
- **Description**: What this service includes
- **Image**: Representative photo for this service
- **Features**: Click "+ Add an entry to features"
  - Add feature items (e.g., "Destination shoots", "Professional editing")
  - Click "+" to add more features
- **Order**: Display order (0, 1, 2, 3 for the 4 services)

**Save & Publish**

**Current Services to Add:**
1. Travel Photography
2. Nature Photography
3. Commercial Photography
4. Event Photography

---

### 3. Testimonials (Client Reviews)

**Purpose:** Show client feedback and build trust

**How to Add:**
1. Content Manager → **Testimonial** → **"Create new entry"**

**Fill in:**
- **Name**: Client's name (e.g., "Sarah Mitchell")
- **Role**: Client's role/title (e.g., "Adventure Travel Blogger")
- **Quote**: Their testimonial text
- **Image**: Client's photo or profile picture
- **Order**: Display order

**Save & Publish**

**Tips:**
- Ask clients for permission to use their photo
- Keep quotes concise and impactful
- Show variety in client types

---

### 4. Blog Posts (Optional - Content Marketing)

**Purpose:** Share photography tips, stories, behind-the-scenes

**How to Add:**
1. Content Manager → **Blog Post** → **"Create new entry"**

**Fill in:**
- **Title**: Blog post title
- **Excerpt**: Short summary (shows in preview)
- **Content**: Full article (rich text editor)
- **Image**: Featured image for the post
- **Category**: Topic category (e.g., "Photography Tips", "Travel Stories")
- **Published At**: Choose publish date

**Save & Publish**

---

### 5. Managing Submissions

#### Contact Submissions

**View Messages:**
1. Content Manager → **Contact Submission**
2. See all messages from contact form

**For Each Message:**
- Click to open and read
- Change **Status**:
  - `new` - Unread message
  - `read` - You've read it
  - `replied` - You've responded

**Note:** These come from the contact form on your website

#### Booking Requests

**View Bookings:**
1. Content Manager → **Booking Request**
2. See all photography booking requests

**For Each Booking:**
- View client details (name, email, phone)
- See requested service and date
- Read project details
- Update **Status**:
  - `pending` - New request
  - `confirmed` - Booking confirmed
  - `cancelled` - Booking cancelled

**Follow up:**
- Copy email/phone to contact the client
- Confirm availability and pricing
- Update status after confirming

---

## 🎨 Media Library

**Accessing:**
- Click **Media Library** (left sidebar)
- View all uploaded images

**Features:**
- Upload new photos
- Organize in folders
- View image details
- Replace images
- Delete unused images

**Tips:**
- Keep organized with folders
- Name images descriptively
- Delete unused images to save space
- Optimize images before uploading (max 5MB recommended)

---

## ⚙️ Settings & Configuration

### User Management

**Add Team Members:**
1. Settings → Administration Panel → Users
2. Click "Add new user"
3. Set role: Editor, Author, or Admin
4. They can help manage content

### Permissions

**Already configured for you:**
- **Public role**: Can view content (read-only)
- **Authenticated**: Can create content
- **Admin**: Full control

**To modify:**
- Settings → Users & Permissions plugin → Roles
- Click role to edit permissions

---

## 📊 Content Workflow

### Adding New Photography Project

1. **Upload photos** to Media Library
2. **Create Portfolio Item** for each photo
3. **Set category** (nature, travel, etc.)
4. **Mark featured** if it's your best work
5. **Publish** to make live

### Updating Services

1. **Edit existing service** in Content Manager
2. **Update description** or pricing
3. **Add/remove features**
4. **Save & Republish**

### Managing Client Inquiries

**Daily routine:**
1. Check **Contact Submissions** for new messages
2. Check **Booking Requests** for new bookings
3. Respond to clients via email/phone
4. Update status after handling

---

## 🔧 Common Tasks

### Bulk Actions

**Select multiple items:**
- Check boxes next to items
- Click "Actions" dropdown
- Choose: Publish, Unpublish, or Delete

### Filtering Content

**Use filters:**
- Click filter icon
- Filter by category, status, date
- Search by title

### Sorting

**Change display order:**
- Click column header to sort
- Use "Order" field to control display order on website

---

## 🚀 Going Live Checklist

Before making your site public:

**Content:**
- [ ] Add at least 12-15 portfolio items
- [ ] Add all 4 services
- [ ] Add 3-5 testimonials
- [ ] Write compelling service descriptions
- [ ] Upload high-quality images

**Settings:**
- [ ] Public permissions configured
- [ ] Admin password is strong
- [ ] Media library organized
- [ ] Test contact form submission
- [ ] Test booking form submission

---

## 📱 Mobile Management

**Strapi admin panel is mobile-responsive!**

You can manage content from:
- ✅ Desktop (best experience)
- ✅ Tablet
- ✅ Smartphone (for quick updates)

---

## 🆘 Troubleshooting

### Can't upload images?

**Solution:**
- Check file size (under 10MB recommended)
- Supported formats: JPG, PNG, WebP, GIF
- Check internet connection

### Changes not showing on website?

**Solution:**
- Make sure you clicked "Publish" (not just "Save")
- Frontend might be caching - wait 1-2 minutes
- Clear browser cache (Ctrl+F5)

### Forgot admin password?

**Solution:**
- If local: Check terminal logs for reset link
- If Strapi Cloud: Use "Forgot Password" link

---

## 💡 Best Practices

### Content Quality

- ✅ Use high-resolution images
- ✅ Write descriptive, engaging text
- ✅ Keep descriptions concise
- ✅ Update content regularly

### Organization

- ✅ Use consistent naming
- ✅ Organize media in folders
- ✅ Set proper order numbers
- ✅ Archive old content instead of deleting

### SEO

- ✅ Use descriptive titles
- ✅ Write good descriptions
- ✅ Add alt text to images
- ✅ Keep URLs clean

---

## 📈 Analytics (Future Enhancement)

Consider adding:
- Google Analytics
- Track popular portfolio items
- Monitor booking requests
- Analyze visitor behavior

---

## 🎯 Next Steps

1. ✅ Log in to Strapi admin panel
2. ✅ Create content types (if not done)
3. ✅ Upload your best photography
4. ✅ Add services and testimonials
5. ✅ Test contact and booking forms
6. ✅ Go live!

---

## 📞 Getting Help

**Strapi Resources:**
- Documentation: https://docs.strapi.io
- Forum: https://forum.strapi.io
- Discord: https://discord.strapi.io

**Your Setup:**
- Local: http://localhost:1337/admin
- GitHub: https://github.com/Kev9586/feelyra_visuals

---

**Ready to add your content? Let me know if you need help with any step!** 📸
