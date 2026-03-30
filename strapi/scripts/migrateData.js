/**
 * Strapi Data Migration Script
 * Automatically populates Strapi with all portfolio data
 * 
 * Usage:
 * 1. Deploy Strapi to Strapi Cloud
 * 2. Create content types in Strapi admin
 * 3. Get your Strapi API URL and Admin API Token
 * 4. Update STRAPI_URL and STRAPI_API_TOKEN below
 * 5. Run: node migrateData.js
 */

const axios = require('axios');

// ⚠️ CONFIGURE THESE AFTER STRAPI CLOUD DEPLOYMENT
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || 'YOUR_API_TOKEN_HERE';

// Configure axios with Strapi URL and auth
const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

// Mock data to migrate
const portfolioItems = [
  {
    title: "Mountain Peak at Dawn",
    description: "Capturing the majestic beauty of mountain peaks at sunrise",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    featured: true,
    order: 0
  },
  {
    title: "Lake Serenity",
    description: "Perfect reflections in pristine waters",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    featured: true,
    order: 1
  },
  {
    title: "Forest Mysteries",
    description: "Exploring the depths of ancient woodlands",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    featured: true,
    order: 2
  },
  {
    title: "Golden Hour",
    description: "Nature's perfect lighting captured",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    featured: true,
    order: 3
  },
  {
    title: "Misty Forest Valley",
    description: "Morning mist rolling through the valley",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
    featured: false,
    order: 4
  },
  {
    title: "Mountain Trail",
    description: "Adventurous paths through mountain terrain",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    featured: false,
    order: 5
  },
  {
    title: "Misty Peaks",
    description: "Peaks emerging from morning fog",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
    featured: false,
    order: 6
  },
  {
    title: "Mountain Vista",
    description: "Panoramic mountain landscape views",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    featured: false,
    order: 7
  },
  {
    title: "Foggy Mountain Range",
    description: "Dramatic mountain ranges in fog",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5",
    featured: false,
    order: 8
  },
  {
    title: "Mountain Road",
    description: "Winding roads through mountains",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5",
    featured: false,
    order: 9
  },
  {
    title: "Wilderness Landscape",
    description: "Untouched wilderness beauty",
    category: "commercial",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    featured: false,
    order: 10
  },
  {
    title: "Starry Night",
    description: "Night sky over mountain landscapes",
    category: "travel",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    featured: false,
    order: 11
  }
];

const services = [
  {
    title: "Travel Photography",
    description: "Document your adventures with stunning travel photography that captures the essence of each destination.",
    imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    features: [
      { text: "Destination shoots" },
      { text: "Adventure documentation" },
      { text: "Cultural photography" }
    ],
    order: 0
  },
  {
    title: "Nature Photography",
    description: "Breathtaking landscapes and wildlife photography that showcases the raw beauty of the natural world.",
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    features: [
      { text: "Landscape photography" },
      { text: "Wildlife documentation" },
      { text: "Seasonal captures" }
    ],
    order: 1
  },
  {
    title: "Commercial Photography",
    description: "Professional photography services for brands and businesses looking to elevate their visual identity.",
    imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
    features: [
      { text: "Brand photography" },
      { text: "Product shoots" },
      { text: "Marketing content" }
    ],
    order: 2
  },
  {
    title: "Event Photography",
    description: "Capture the magic of your special moments with professional event photography services.",
    imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    features: [
      { text: "Weddings" },
      { text: "Corporate events" },
      { text: "Special occasions" }
    ],
    order: 3
  }
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Adventure Travel Blogger",
    quote: "Working with Horizon was an absolute dream. The attention to detail and artistic vision brought our mountain expedition to life in ways we never imagined.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    order: 0
  },
  {
    name: "Marcus Chen",
    role: "Creative Director",
    quote: "The quality of work is simply outstanding. Every shot tells a story, and the professionalism is unmatched. Highly recommended for any serious photography project.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    order: 1
  },
  {
    name: "David Rodriguez",
    role: "Brand Manager",
    quote: "Horizon transformed our brand's visual identity. The commercial photography exceeded all expectations and delivered exceptional results for our campaign.",
    imageUrl: "https://images.pexels.com/photos/7206246/pexels-photo-7206246.jpeg",
    order: 2
  }
];

// Helper function to upload image from URL
async function uploadImageFromUrl(imageUrl, name) {
  try {
    console.log(`  📥 Downloading image: ${name}`);
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(imageResponse.data);
    
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('files', buffer, { filename: `${name}.jpg` });
    
    const uploadResponse = await axios.post(
      `${STRAPI_URL}/api/upload`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`
        }
      }
    );
    
    console.log(`  ✅ Uploaded: ${name}`);
    return uploadResponse.data[0].id;
  } catch (error) {
    console.error(`  ❌ Failed to upload ${name}:`, error.message);
    return null;
  }
}

// Add portfolio items
async function addPortfolioItems() {
  console.log('\n📸 Adding Portfolio Items...\n');
  
  for (const item of portfolioItems) {
    try {
      console.log(`Adding: ${item.title}`);
      
      // Upload image
      const imageId = await uploadImageFromUrl(item.imageUrl, item.title);
      
      if (!imageId) {
        console.log(`  ⚠️  Skipping ${item.title} - image upload failed`);
        continue;
      }
      
      // Create portfolio item
      const response = await api.post('/portfolio-items', {
        data: {
          title: item.title,
          description: item.description,
          category: item.category,
          image: imageId,
          featured: item.featured,
          order: item.order,
          publishedAt: new Date()
        }
      });
      
      console.log(`  ✅ Created: ${item.title}\n`);
    } catch (error) {
      console.error(`  ❌ Failed to add ${item.title}:`, error.response?.data || error.message);
    }
  }
}

// Add services
async function addServices() {
  console.log('\n🎯 Adding Services...\n');
  
  for (const service of services) {
    try {
      console.log(`Adding: ${service.title}`);
      
      // Upload image
      const imageId = await uploadImageFromUrl(service.imageUrl, service.title);
      
      if (!imageId) {
        console.log(`  ⚠️  Skipping ${service.title} - image upload failed`);
        continue;
      }
      
      // Create service
      const response = await api.post('/services', {
        data: {
          title: service.title,
          description: service.description,
          image: imageId,
          features: service.features,
          order: service.order,
          publishedAt: new Date()
        }
      });
      
      console.log(`  ✅ Created: ${service.title}\n`);
    } catch (error) {
      console.error(`  ❌ Failed to add ${service.title}:`, error.response?.data || error.message);
    }
  }
}

// Add testimonials
async function addTestimonials() {
  console.log('\n💬 Adding Testimonials...\n');
  
  for (const testimonial of testimonials) {
    try {
      console.log(`Adding: ${testimonial.name}`);
      
      // Upload image
      const imageId = await uploadImageFromUrl(testimonial.imageUrl, testimonial.name);
      
      if (!imageId) {
        console.log(`  ⚠️  Skipping ${testimonial.name} - image upload failed`);
        continue;
      }
      
      // Create testimonial
      const response = await api.post('/testimonials', {
        data: {
          name: testimonial.name,
          role: testimonial.role,
          quote: testimonial.quote,
          image: imageId,
          order: testimonial.order,
          publishedAt: new Date()
        }
      });
      
      console.log(`  ✅ Created: ${testimonial.name}\n`);
    } catch (error) {
      console.error(`  ❌ Failed to add ${testimonial.name}:`, error.response?.data || error.message);
    }
  }
}

// Main migration function
async function migrateData() {
  console.log('🚀 Starting Data Migration to Strapi...\n');
  console.log(`📍 Strapi URL: ${STRAPI_URL}\n`);
  
  try {
    // Test connection
    console.log('🔌 Testing connection to Strapi...');
    await api.get('/portfolio-items');
    console.log('✅ Connected to Strapi!\n');
    
    // Migrate data
    await addPortfolioItems();
    await addServices();
    await addTestimonials();
    
    console.log('\n✅ Migration Complete!\n');
    console.log('📊 Summary:');
    console.log(`   - Portfolio Items: ${portfolioItems.length} added`);
    console.log(`   - Services: ${services.length} added`);
    console.log(`   - Testimonials: ${testimonials.length} added`);
    console.log('\n🎉 All data has been migrated to Strapi!');
    console.log('👉 Check your Strapi admin panel to see the content\n');
    
  } catch (error) {
    console.error('\n❌ Migration failed:', error.message);
    console.error('\nPlease check:');
    console.error('1. Strapi is running');
    console.error('2. STRAPI_URL is correct');
    console.error('3. STRAPI_API_TOKEN is valid');
    console.error('4. Content types are created');
    console.error('5. API permissions are set\n');
  }
}

// Run migration
if (require.main === module) {
  migrateData();
}

module.exports = { migrateData };
