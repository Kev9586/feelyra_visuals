/**
 * Seed FAQ and About content in Strapi
 * Run after deploying the updated Strapi with FAQ and About content types.
 *
 * Usage:
 *   STRAPI_URL=https://your-strapi.strapiapp.com STRAPI_API_TOKEN=your_token node seedFaqAbout.js
 */

const axios = require('axios');

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

const api = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

const faqs = [
  {
    question: "What is your photography style?",
    answer: "My photography style focuses on capturing the raw, cinematic beauty of nature and landscapes. I specialize in dramatic compositions with rich contrast and moody atmospheres that tell compelling visual stories.",
    order: 0,
  },
  {
    question: "How do I book a photography session?",
    answer: "You can book a session by filling out the contact form on this website or by reaching out directly via email. I'll respond within 24-48 hours to discuss your project requirements, availability, and pricing.",
    order: 1,
  },
  {
    question: "What equipment do you use?",
    answer: "I work with professional-grade Canon and Sony cameras, along with a selection of prime and zoom lenses. For aerial shots, I use high-end drones, and all my gear is weather-sealed for challenging outdoor conditions.",
    order: 2,
  },
  {
    question: "Do you offer post-processing services?",
    answer: "Yes, professional post-processing is included in all my photography packages. This includes color grading, exposure adjustments, and artistic enhancements to ensure your images look their absolute best.",
    order: 3,
  },
  {
    question: "What is your turnaround time?",
    answer: "Typical turnaround time for edited photos is 2-3 weeks for standard projects. Rush services are available for an additional fee if you need your images sooner.",
    order: 4,
  },
  {
    question: "Do you travel for shoots?",
    answer: "Absolutely! I love traveling for photography projects. Whether it's a local shoot or an international adventure, I'm always excited to explore new locations and capture their unique beauty.",
    order: 5,
  },
];

const aboutContent = {
  title: "Capturing Nature's Essence",
  description:
    "With over a decade of experience in nature and adventure photography, I've dedicated my life to capturing the raw beauty of our planet. From misty mountain peaks to serene forest trails, each photograph tells a unique story of the natural world.",
  stats: [
    { value: "500+", label: "Projects Completed" },
    { value: "50+", label: "Countries Visited" },
    { value: "15+", label: "Awards Won" },
    { value: "10+", label: "Years Experience" },
  ],
};

async function seedFaqs() {
  console.log('Seeding FAQs...');
  for (const faq of faqs) {
    try {
      await api.post('/faqs', { data: faq });
      console.log(`  ✓ Created: "${faq.question}"`);
    } catch (err) {
      console.error(`  ✗ Failed: "${faq.question}" — ${err.response?.data?.error?.message || err.message}`);
    }
  }
}

async function seedAbout() {
  console.log('Seeding About...');
  try {
    // Single type — PUT to update or create
    await api.put('/about', { data: aboutContent });
    console.log('  ✓ About content saved');
  } catch (err) {
    console.error(`  ✗ Failed to save About — ${err.response?.data?.error?.message || err.message}`);
  }
}

(async () => {
  await seedFaqs();
  await seedAbout();
  console.log('\nDone.');
})();
