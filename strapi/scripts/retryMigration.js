const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function uploadImageFromUrl(imageUrl, name) {
  try {
    console.log(`  Downloading: ${name}`);
    const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 30000 });
    const buffer = Buffer.from(imageResponse.data);
    const FormData = require('form-data');
    const formData = new FormData();
    formData.append('files', buffer, { filename: `${name.replace(/\s+/g, '_')}.jpg` });
    const uploadResponse = await axios.post(`${STRAPI_URL}/api/upload`, formData, {
      headers: { ...formData.getHeaders(), 'Authorization': `Bearer ${STRAPI_API_TOKEN}` },
      timeout: 60000
    });
    console.log(`  Uploaded: ${name}`);
    return uploadResponse.data[0].id;
  } catch (error) {
    console.error(`  FAILED upload ${name}: ${error.message}`);
    return null;
  }
}

async function run() {
  // Check what's already there
  const existing = await api.get('/portfolio-items?pagination[pageSize]=100');
  const existingTitles = new Set(existing.data.data.map(i => i.title));
  console.log(`Existing portfolio items: ${existingTitles.size}`);

  // Remaining portfolio items
  const remainingPortfolio = [
    { title: "Mountain Vista", description: "Panoramic mountain landscape views", category: "nature", imageUrl: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e", featured: false, order: 7 },
    { title: "Foggy Mountain Range", description: "Dramatic mountain ranges in fog", category: "nature", imageUrl: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5", featured: false, order: 8 },
    { title: "Mountain Road", description: "Winding roads through mountains", category: "travel", imageUrl: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5", featured: false, order: 9 },
    { title: "Wilderness Landscape", description: "Untouched wilderness beauty", category: "commercial", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", featured: false, order: 10 },
    { title: "Starry Night", description: "Night sky over mountain landscapes", category: "travel", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba", featured: false, order: 11 }
  ].filter(i => !existingTitles.has(i.title));

  for (const item of remainingPortfolio) {
    console.log(`\nAdding portfolio: ${item.title}`);
    await sleep(3000);
    const imageId = await uploadImageFromUrl(item.imageUrl, item.title);
    if (!imageId) continue;
    await api.post('/portfolio-items', { data: { title: item.title, description: item.description, category: item.category, image: imageId, featured: item.featured, order: item.order, publishedAt: new Date() } });
    console.log(`  Created: ${item.title}`);
  }

  // Services
  const existingSvc = await api.get('/services?pagination[pageSize]=100');
  const existingSvcTitles = new Set(existingSvc.data.data.map(i => i.title));
  console.log(`\nExisting services: ${existingSvcTitles.size}`);

  const allServices = [
    { title: "Travel Photography", description: "Document your adventures with stunning travel photography.", imageUrl: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", features: [{text:"Destination shoots"},{text:"Adventure documentation"},{text:"Cultural photography"}], order: 0 },
    { title: "Nature Photography", description: "Breathtaking landscapes and wildlife photography.", imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", features: [{text:"Landscape photography"},{text:"Wildlife documentation"},{text:"Seasonal captures"}], order: 1 },
    { title: "Commercial Photography", description: "Professional photography for brands and businesses.", imageUrl: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", features: [{text:"Brand photography"},{text:"Product shoots"},{text:"Marketing content"}], order: 2 },
    { title: "Event Photography", description: "Capture the magic of your special moments.", imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba", features: [{text:"Weddings"},{text:"Corporate events"},{text:"Special occasions"}], order: 3 }
  ].filter(i => !existingSvcTitles.has(i.title));

  for (const svc of allServices) {
    console.log(`\nAdding service: ${svc.title}`);
    await sleep(3000);
    const imageId = await uploadImageFromUrl(svc.imageUrl, svc.title);
    if (!imageId) continue;
    await api.post('/services', { data: { title: svc.title, description: svc.description, image: imageId, features: svc.features, order: svc.order, publishedAt: new Date() } });
    console.log(`  Created: ${svc.title}`);
  }

  // Testimonials
  const existingTest = await api.get('/testimonials?pagination[pageSize]=100');
  const existingTestNames = new Set(existingTest.data.data.map(i => i.name));
  console.log(`\nExisting testimonials: ${existingTestNames.size}`);

  const allTestimonials = [
    { name: "Sarah Mitchell", role: "Adventure Travel Blogger", quote: "Working with Horizon was an absolute dream. The attention to detail and artistic vision brought our mountain expedition to life in ways we never imagined.", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2", order: 0 },
    { name: "Marcus Chen", role: "Creative Director", quote: "The quality of work is simply outstanding. Every shot tells a story, and the professionalism is unmatched.", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a", order: 1 },
    { name: "David Rodriguez", role: "Brand Manager", quote: "Horizon transformed our brand's visual identity. The commercial photography exceeded all expectations.", imageUrl: "https://images.pexels.com/photos/7206246/pexels-photo-7206246.jpeg", order: 2 }
  ].filter(i => !existingTestNames.has(i.name));

  for (const t of allTestimonials) {
    console.log(`\nAdding testimonial: ${t.name}`);
    await sleep(3000);
    const imageId = await uploadImageFromUrl(t.imageUrl, t.name);
    if (!imageId) continue;
    await api.post('/testimonials', { data: { name: t.name, role: t.role, quote: t.quote, image: imageId, order: t.order, publishedAt: new Date() } });
    console.log(`  Created: ${t.name}`);
  }

  console.log('\nDone!');
}

run().catch(e => console.error(e.message));
