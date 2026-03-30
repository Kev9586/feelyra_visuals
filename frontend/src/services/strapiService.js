const STRAPI_URL = process.env.REACT_APP_STRAPI_URL;
const STRAPI_TOKEN = process.env.REACT_APP_STRAPI_TOKEN;

const headers = STRAPI_TOKEN
  ? { 'Authorization': `Bearer ${STRAPI_TOKEN}` }
  : {};

const fetchFromStrapi = async (endpoint, params = '') => {
  if (!STRAPI_URL) return null;
  try {
    const url = `${STRAPI_URL}/api/${endpoint}?populate=*${params ? '&' + params : ''}`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error(`${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Strapi fetch failed for ${endpoint}:`, err.message);
    return null;
  }
};

const postToStrapi = async (endpoint, payload) => {
  if (!STRAPI_URL) return null;
  try {
    const res = await fetch(`${STRAPI_URL}/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', ...headers },
      body: JSON.stringify({ data: payload }),
    });
    if (!res.ok) throw new Error(`${res.status}`);
    return await res.json();
  } catch (err) {
    console.warn(`Strapi post failed for ${endpoint}:`, err.message);
    return null;
  }
};

const resolveImage = (imageField) => {
  if (!imageField) return null;
  if (imageField.url) {
    return imageField.url.startsWith('http') ? imageField.url : `${STRAPI_URL}${imageField.url}`;
  }
  return imageField;
};

export const getPortfolioItems = async () => {
  const data = await fetchFromStrapi('portfolio-items', 'sort=order:asc');
  if (!data?.data) return null;
  return data.data.map(item => ({
    id: item.id,
    url: resolveImage(item.image),
    category: item.category,
    title: item.title,
    description: item.description,
    featured: item.featured,
  }));
};

export const getFeaturedWork = async () => {
  const data = await fetchFromStrapi('portfolio-items', 'filters[featured][$eq]=true&sort=order:asc');
  if (!data?.data) return null;
  return data.data.map(item => ({
    id: item.id,
    image: resolveImage(item.image),
    title: item.title,
    category: item.category,
    description: item.description,
  }));
};

export const getServices = async () => {
  const data = await fetchFromStrapi('services');
  if (!data?.data) return null;
  return data.data.map(item => ({
    id: item.id,
    title: item.title,
    description: item.description,
    image: resolveImage(item.image),
    features: item.features?.map(f => f.text) || [],
  }));
};

export const getTestimonials = async () => {
  const data = await fetchFromStrapi('testimonials', 'sort=order:asc');
  if (!data?.data) return null;
  return data.data.map(item => ({
    id: item.id,
    name: item.name,
    role: item.role,
    image: resolveImage(item.image),
    quote: item.quote,
  }));
};

export const getFaqs = async () => {
  const data = await fetchFromStrapi('faqs', 'sort=order:asc');
  if (!data?.data) return null;
  return data.data.map(item => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  }));
};

export const getAbout = async () => {
  const data = await fetchFromStrapi('about');
  if (!data?.data) return null;
  return {
    title: data.data.title,
    description: data.data.description,
    image: resolveImage(data.data.image),
    stats: (data.data.stats || []).map(s => ({ value: s.value, label: s.label })),
  };
};

export const getHeroImages = async () => {
  const data = await fetchFromStrapi('portfolio-items', 'sort=order:asc&pagination[limit]=8');
  if (!data?.data) return null;
  return data.data.map(item => resolveImage(item.image)).filter(Boolean);
};

export const getSiteSettings = async () => {
  const data = await fetchFromStrapi('site-setting');
  if (!data?.data) return null;
  return {
    brandName: data.data.brandName,
    heroTagline: data.data.heroTagline,
    heroCtaText: data.data.heroCtaText,
    heroImage: resolveImage(data.data.heroImage),
    email: data.data.email,
    phone: data.data.phone,
    location: data.data.location,
    footerDescription: data.data.footerDescription,
    socialLinks: (data.data.socialLinks || []).map(s => ({ platform: s.platform, url: s.url })),
  };
};

export const submitContactForm = async (formData) => {
  return postToStrapi('contact-submissions', formData);
};

export const submitBookingRequest = async (formData) => {
  return postToStrapi('booking-requests', {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    service: formData.service,
    preferredDate: formData.date,
    preferredTime: formData.time,
    details: formData.details,
    status: 'pending',
  });
};
