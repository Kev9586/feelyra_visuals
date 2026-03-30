# 📸 Strapi Content Types Setup for HORIZON Photography Portfolio

## How to Create Content Types

### Navigation:
**Content-Type Builder** → Click **"Create new collection type"**

---

## 1️⃣ Portfolio Item

### Create Collection Type:
1. Click **"Create new collection type"**
2. Display name: `Portfolio Item`
3. Click **Continue**

### Add Fields:

**Field 1: Title**
- Type: **Text** (Short text)
- Name: `title`
- ✅ Required field
- Click **Finish**

**Field 2: Description**
- Click **"Add another field"**
- Type: **Rich text** (Blocks)
- Name: `description`
- Click **Finish**

**Field 3: Category**
- Click **"Add another field"**
- Type: **Enumeration**
- Name: `category`
- Values (add one by one):
  - `nature`
  - `travel`
  - `commercial`
  - `event`
- Click **Finish**

**Field 4: Image**
- Click **"Add another field"**
- Type: **Media** (Single media)
- Name: `image`
- ✅ Required field
- Click **Finish**

**Field 5: Featured**
- Click **"Add another field"**
- Type: **Boolean**
- Name: `featured`
- Default value: `false`
- Click **Finish**

**Field 6: Order**
- Click **"Add another field"**
- Type: **Number** (integer)
- Name: `order`
- Default value: `0`
- Click **Finish**

Click **"Save"** (top right)

---

## 2️⃣ Service

### Create Collection Type:
1. Click **"Create new collection type"**
2. Display name: `Service`
3. Click **Continue**

### Add Fields:

**Field 1: Title**
- Type: **Text**
- Name: `title`
- ✅ Required field

**Field 2: Description**
- Type: **Rich text** (Blocks)
- Name: `description`
- ✅ Required field

**Field 3: Image**
- Type: **Media** (Single media)
- Name: `image`
- ✅ Required field

**Field 4: Features** (Component - Repeatable)
- Type: **Component**
- Name: `features`
- Select: **"Create a new component"**
- Display name: `Feature Item`
- Category: `service-components`
- Add field to component:
  - Type: **Text**
  - Name: `text`
  - ✅ Required
- ✅ Repeatable component

**Field 5: Order**
- Type: **Number** (integer)
- Name: `order`
- Default value: `0`

Click **"Save"**

---

## 3️⃣ Testimonial

### Create Collection Type:
1. Display name: `Testimonial`

### Add Fields:

**Field 1: Name**
- Type: **Text**
- Name: `name`
- ✅ Required

**Field 2: Role**
- Type: **Text**
- Name: `role`
- ✅ Required

**Field 3: Quote**
- Type: **Text** (Long text)
- Name: `quote`
- ✅ Required

**Field 4: Image**
- Type: **Media** (Single media)
- Name: `image`
- ✅ Required

**Field 5: Order**
- Type: **Number**
- Name: `order`
- Default: `0`

Click **"Save"**

---

## 4️⃣ Contact Submission

### Create Collection Type:
1. Display name: `Contact Submission`

### Add Fields:

**Field 1: Name**
- Type: **Text**
- ✅ Required

**Field 2: Email**
- Type: **Email**
- ✅ Required

**Field 3: Phone**
- Type: **Text**

**Field 4: Subject**
- Type: **Text**
- ✅ Required

**Field 5: Message**
- Type: **Text** (Long text)
- ✅ Required

**Field 6: Status**
- Type: **Enumeration**
- Values: `new`, `read`, `replied`
- Default: `new`

Click **"Save"**

---

## 5️⃣ Booking Request

### Create Collection Type:
1. Display name: `Booking Request`

### Add Fields:

**Field 1: Name**
- Type: **Text**
- ✅ Required

**Field 2: Email**
- Type: **Email**
- ✅ Required

**Field 3: Phone**
- Type: **Text**
- ✅ Required

**Field 4: Service**
- Type: **Enumeration**
- Values: `travel`, `nature`, `commercial`, `event`

**Field 5: Preferred Date**
- Type: **Date**
- Name: `preferredDate`
- ✅ Required

**Field 6: Preferred Time**
- Type: **Text**
- Name: `preferredTime`

**Field 7: Details**
- Type: **Text** (Long text)
- ✅ Required

**Field 8: Status**
- Type: **Enumeration**
- Values: `pending`, `confirmed`, `cancelled`
- Default: `pending`

Click **"Save"**

---

## 6️⃣ Configure Permissions (IMPORTANT!)

### Settings → Users & Permissions plugin → Roles → Public

Enable these permissions:

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

Click **"Save"** (top right)

---

## 7️⃣ Add Sample Content

Now go to **Content Manager** and add your photography content!

### Add Portfolio Items:
1. Content Manager → Portfolio Items → **Create new entry**
2. Fill in title, description, category
3. Upload image
4. Click **Save** then **Publish**

### Add Services:
1. Content Manager → Services → **Create new entry**
2. Fill in title, description
3. Upload image
4. Add features (click "+ Add an entry to features")
5. Click **Save** then **Publish**

### Add Testimonials:
1. Content Manager → Testimonials → **Create new entry**
2. Fill in name, role, quote
3. Upload image
4. Click **Save** then **Publish**

---

## 🎉 Done!

Your Strapi CMS is now ready with all content types!

Next step: Update the React frontend to fetch data from Strapi API.
