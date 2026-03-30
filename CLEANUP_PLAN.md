# 🧹 Code Cleanup & Optimization Plan

## Current Project Structure

```
/app/
├── frontend/          ✅ Keep - React app (deployed to Vercel)
├── strapi/            ✅ Keep - CMS for content management  
├── backend/           ❌ Remove - Not needed (using Strapi instead)
├── STRAPI_*.md        ✅ Keep - Documentation
└── VERCEL_*.md        ✅ Keep - Documentation
```

---

## 🎯 Cleanup Tasks

### 1. Remove Unused Backend (FastAPI)
**Reason:** Using Strapi CMS instead of custom FastAPI backend

**Files to remove:**
- `/backend/` directory
- `/backend/server.py`
- `/backend/requirements.txt`
- `/backend/.env`
- Supervisor config for backend

### 2. Update Frontend to Use Strapi API
**Changes needed:**
- Remove mock data files
- Create Strapi API service
- Update components to fetch from Strapi
- Add loading states
- Add error handling

### 3. Clean Documentation
- Remove outdated instructions
- Update README with current architecture
- Consolidate guides

---

## 🔄 Frontend Integration with Strapi

### Files to Create:

**1. `/frontend/src/services/strapiService.js`**
- API connection to Strapi
- Data fetching functions
- Error handling

**2. `/frontend/src/hooks/useStrapiData.js`**
- Custom hook for fetching Strapi data
- Loading and error states
- Data caching

### Files to Update:

**Components to connect to Strapi:**
- `Hero.jsx` - Keep as is (static content)
- `FeaturedWork.jsx` - Fetch from Strapi
- `Gallery.jsx` - Fetch portfolio items from Strapi
- `Services.jsx` - Fetch services from Strapi
- `Testimonials.jsx` - Fetch testimonials from Strapi
- `Contact.jsx` - Submit to Strapi API
- `BookingModal.jsx` - Submit to Strapi API

### Files to Remove:
- `/frontend/src/mock/photographyData.js` - Replace with Strapi API calls

---

## ⚙️ Configuration Updates

### Environment Variables

**Frontend `.env`:**
```env
REACT_APP_STRAPI_URL=http://localhost:1337
```

**Production (Vercel):**
```env
REACT_APP_STRAPI_URL=https://your-project.strapi.io
```

---

## 📦 Dependencies

### To Add:
```bash
cd /app/frontend
yarn add axios @tanstack/react-query
```

**Why:**
- `axios` - Already installed, for API calls
- `react-query` - Optional but recommended for data fetching, caching

### To Remove:
None - all current frontend dependencies are needed

---

## 🔍 Implementation Priority

### Phase 1: Essential Cleanup (Now)
1. ✅ Remove backend directory
2. ✅ Create Strapi service file
3. ✅ Update Gallery component
4. ✅ Test with Strapi

### Phase 2: Full Integration (Next)
1. ✅ Update all components
2. ✅ Remove mock data
3. ✅ Add loading states
4. ✅ Add error handling
5. ✅ Test thoroughly

### Phase 3: Polish (Final)
1. ✅ Optimize performance
2. ✅ Add image lazy loading
3. ✅ Update documentation
4. ✅ Deploy to production

---

## 🚀 Ready to Execute?

**Next steps:**
1. I'll remove unused backend code
2. Create Strapi integration service
3. Update frontend components
4. Test everything
5. Commit and push

**Or:**
- Keep current setup working with mock data
- Clean up later

**Your choice! What would you prefer?**
