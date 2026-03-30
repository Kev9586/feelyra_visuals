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

async function run() {
  // --- PORTFOLIO ---
  const existingP = await api.get('/portfolio-items?pagination[pageSize]=100');
  const pTitles = new Set(existingP.data.data.map(i => i.title));
  console.log(`Existing portfolio: ${pTitles.size}/12`);

  const remainingPortfolio = [
    { title: "Mountain Vista", description: "Panoramic mountain landscape views", category: "nature", featured: false, order: 7 },
    { title: "Foggy Mountain Range", description: "Dramatic mountain ranges in fog", category: "nature", featured: false, order: 8 },
    { title: "Mountain Road", description: "Winding roads through mountains", category: "travel", featured: false, order: 9 },
    { title: "Wilderness Landscape", description: "Untouched wilderness beauty", category: "commercial", featured: false, order: 10 },
    { title: "Starry Night", description: "Night sky over mountain landscapes", category: "travel", featured: false, order: 11 }
  ].filter(i => !pTitles.has(i.title));

  for (const item of remainingPortfolio) {
    await sleep(2000);
    try {
      await api.post('/portfolio-items', { data: { ...item, publishedAt: new Date() } });
      console.log(`  + Portfolio: ${item.title}`);
    } catch (e) { console.error(`  x Portfolio ${item.title}: ${e.message}`); }
  }

  // --- SERVICES ---
  const existingS = await api.get('/services?pagination[pageSize]=100');
  const sTitles = new Set(existingS.data.data.map(i => i.title));
  console.log(`Existing services: ${sTitles.size}/4`);

  const allServices = [
    { title: "Travel Photography", description: "Document your adventures with stunning travel photography that captures the essence of each destination.", features: [{text:"Destination shoots"},{text:"Adventure documentation"},{text:"Cultural photography"}], order: 0 },
    { title: "Nature Photography", description: "Breathtaking landscapes and wildlife photography that showcases the raw beauty of the natural world.", features: [{text:"Landscape photography"},{text:"Wildlife documentation"},{text:"Seasonal captures"}], order: 1 },
    { title: "Commercial Photography", description: "Professional photography services for brands and businesses looking to elevate their visual identity.", features: [{text:"Brand photography"},{text:"Product shoots"},{text:"Marketing content"}], order: 2 },
    { title: "Event Photography", description: "Capture the magic of your special moments with professional event photography services.", features: [{text:"Weddings"},{text:"Corporate events"},{text:"Special occasions"}], order: 3 }
  ].filter(i => !sTitles.has(i.title));

  for (const svc of allServices) {
    await sleep(2000);
    try {
      await api.post('/services', { data: { ...svc, publishedAt: new Date() } });
      console.log(`  + Service: ${svc.title}`);
    } catch (e) { console.error(`  x Service ${svc.title}: ${e.message}`); }
  }

  // --- TESTIMONIALS ---
  const existingT = await api.get('/testimonials?pagination[pageSize]=100');
  const tNames = new Set(existingT.data.data.map(i => i.name));
  console.log(`Existing testimonials: ${tNames.size}/3`);

  const allTestimonials = [
    { name: "Sarah Mitchell", role: "Adventure Travel Blogger", quote: "Working with Horizon was an absolute dream. The attention to detail and artistic vision brought our mountain expedition to life in ways we never imagined.", order: 0 },
    { name: "Marcus Chen", role: "Creative Director", quote: "The quality of work is simply outstanding. Every shot tells a story, and the professionalism is unmatched. Highly recommended for any serious photography project.", order: 1 },
    { name: "David Rodriguez", role: "Brand Manager", quote: "Horizon transformed our brand's visual identity. The commercial photography exceeded all expectations and delivered exceptional results for our campaign.", order: 2 }
  ].filter(i => !tNames.has(i.name));

  for (const t of allTestimonials) {
    await sleep(2000);
    try {
      await api.post('/testimonials', { data: { ...t, publishedAt: new Date() } });
      console.log(`  + Testimonial: ${t.name}`);
    } catch (e) { console.error(`  x Testimonial ${t.name}: ${e.message}`); }
  }

  // Final count
  await sleep(1000);
  const fp = await api.get('/portfolio-items?pagination[pageSize]=1');
  const fs = await api.get('/services?pagination[pageSize]=1');
  const ft = await api.get('/testimonials?pagination[pageSize]=1');
  console.log(`\nFinal counts:`);
  console.log(`  Portfolio items: ${fp.data.meta.pagination.total}`);
  console.log(`  Services: ${fs.data.meta.pagination.total}`);
  console.log(`  Testimonials: ${ft.data.meta.pagination.total}`);
  console.log('\nDone! Add images through the Strapi admin panel.');
}

run().catch(e => console.error(e.message));
