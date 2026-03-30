# Strapi CMS Setup Guide for HORIZON Photography Portfolio

## 🚀 Strapi is Installed and Running!

**Strapi Admin Panel**: http://localhost:1337/admin (in development)
**Strapi API**: http://localhost:1337/api

## Architecture

```
Frontend (React)     → Port 3000
Strapi (CMS)        → Port 1337
FastAPI (Custom)    → Port 8001
MongoDB             → Port 27017
```

## Initial Setup Steps

### 1. Create Admin User
1. Open http://localhost:1337/admin
2. Fill in the registration form to create your first admin user:
   - First Name
   - Last Name
   - Email
   - Password (minimum 8 characters)

### 2. Content Types to Create

After logging in, create these content types:

#### A. Portfolio Item
**Collection Type**: `portfolio-item`

Fields:
- `title` (Text, Required)
- `description` (Rich Text)
- `category` (Enumeration: nature, travel, commercial, event)
- `image` (Media, Single image, Required)
- `featured` (Boolean, Default: false)
- `order` (Number, Default: 0)

#### B. Service
**Collection Type**: `service`

Fields:
- `title` (Text, Required)
- `description` (Rich Text, Required)
- `image` (Media, Single image, Required)
- `features` (Component, Repeatable)
  - Component name: `feature-item`
  - Fields:
    - `text` (Text, Required)
- `order` (Number, Default: 0)

#### C. Testimonial
**Collection Type**: `testimonial`

Fields:
- `name` (Text, Required)
- `role` (Text, Required)
- `quote` (Text, Required)
- `image` (Media, Single image, Required)
- `order` (Number, Default: 0)

#### D. Blog Post (Optional)
**Collection Type**: `blog-post`

Fields:
- `title` (Text, Required)
- `excerpt` (Text, Required)
- `content` (Rich Text, Required)
- `image` (Media, Single image, Required)
- `category` (Text)
- `publishedAt` (Date)

#### E. Contact Submission
**Collection Type**: `contact-submission`

Fields:
- `name` (Text, Required)
- `email` (Email, Required)
- `phone` (Text)
- `subject` (Text, Required)
- `message` (Text, Required)
- `status` (Enumeration: new, read, replied)

#### F. Booking Request
**Collection Type**: `booking-request`

Fields:
- `name` (Text, Required)
- `email` (Email, Required)
- `phone` (Text, Required)
- `service` (Enumeration: travel, nature, commercial, event)
- `date` (Date, Required)
- `time` (Time)
- `details` (Text, Required)
- `status` (Enumeration: pending, confirmed, cancelled)

### 3. Configure Permissions

Settings → Users & Permissions Plugin → Roles → Public

Enable these permissions for public access:
- `portfolio-item`: find, findOne
- `service`: find, findOne
- `testimonial`: find, findOne
- `blog-post`: find, findOne
- `contact-submission`: create
- `booking-request`: create

### 4. Add Sample Data

Use the Strapi admin panel to add your photography content.

## Frontend Integration

### API Endpoints

```javascript
// Strapi API Base URL
const STRAPI_URL = 'http://localhost:1337/api';

// Get all portfolio items
GET /api/portfolio-items?populate=*

// Get filtered portfolio items
GET /api/portfolio-items?filters[category][$eq]=nature&populate=*

// Get all services
GET /api/services?populate=deep

// Get all testimonials
GET /api/testimonials?populate=*

// Create contact submission
POST /api/contact-submissions
Body: { data: { name, email, subject, message } }

// Create booking request
POST /api/booking-requests
Body: { data: { name, email, phone, service, date, time, details } }
```

### Environment Variables

Add to `/app/frontend/.env`:
```
REACT_APP_STRAPI_URL=http://localhost:1337
```

For production deployment on Strapi Cloud:
```
REACT_APP_STRAPI_URL=https://your-project-name.strapi.io
```

## Development Commands

```bash
# Start Strapi
cd /app/strapi
npm run develop

# Build Strapi for production
npm run build

# Start Strapi in production mode
npm run start

# Check Strapi status via supervisor
sudo supervisorctl status strapi

# Restart Strapi
sudo supervisorctl restart strapi

# View Strapi logs
tail -f /var/log/supervisor/strapi.out.log
```

## Deploying to Strapi Cloud

1. Go to https://cloud.strapi.io
2. Create new project
3. Connect your GitHub repository: https://github.com/Kev9586/feelyra_visuals.git
4. Set base directory to: `/strapi`
5. Choose region
6. Deploy!

## Next Steps

1. ✅ Create admin user
2. ✅ Set up content types
3. ✅ Configure permissions
4. ✅ Add sample content
5. ✅ Update frontend to use Strapi API
6. ✅ Test all functionality
7. ✅ Deploy to Strapi Cloud

## Notes

- Database: SQLite (for development) - change to PostgreSQL for production
- Media files are stored in `/app/strapi/public/uploads`
- Admin panel is only accessible in development mode locally
- For production, configure proper database and storage
