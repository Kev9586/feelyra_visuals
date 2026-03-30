import React, { useEffect, useState } from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getHeroImages, getSiteSettings } from '../services/strapiService';

const rowSpans = ['row-span-1', 'row-span-1', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1'];

const FALLBACK_PHOTOGRAPHER = "https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/1371892223201b21fa8133730577b4422f9197862abb44c2645f705352e4cba4.png";

const Hero = ({ onBookingClick }) => {
  const [loaded, setLoaded] = useState(false);
  const { data: heroImages } = useStrapiData(getHeroImages, []);
  const { data: settings } = useStrapiData(getSiteSettings, null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const brandName = settings?.brandName || 'HORIZON';
  const tagline = settings?.heroTagline || "Welcome to HORIZON where nature meets art. Our passion for the outdoors and capturing its beauty has led us on countless adventures and allowed us to develop a unique style of photography that showcases the natural world in all its splendor.";
  const ctaText = settings?.heroCtaText || 'Book your adventure today';
  const photographerImage = settings?.heroImage || FALLBACK_PHOTOGRAPHER;

  return (
    <section data-testid="hero-section" className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-0">
        {/* Top split: Text + Photographer */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — Text */}
          <div className={`space-y-6 pt-8 lg:pt-16 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1
              data-testid="hero-heading"
              className="text-6xl sm:text-7xl lg:text-8xl text-white leading-[0.95]"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 400 }}
            >
              <span className="italic">{brandName[0]}</span>{brandName.slice(1)}
            </h1>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
              {tagline}
            </p>

            <button
              data-testid="hero-book-btn"
              onClick={onBookingClick}
              className="border border-white/30 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all mt-2"
            >
              {ctaText}
            </button>
          </div>

          {/* Right — Photographer */}
          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src={photographerImage}
              alt="Photographer with camera"
              data-testid="hero-photographer-img"
              className="w-full h-[500px] lg:h-[600px] object-cover object-top"
            />
          </div>
        </div>

        {/* Bottom — Floating Gallery Grid */}
        {heroImages.length > 0 && (
          <div className={`-mt-16 lg:-mt-32 relative z-10 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-[120px] md:auto-rows-[140px]">
              {heroImages.map((url, i) => (
                <div
                  key={i}
                  className={`overflow-hidden group cursor-pointer ${rowSpans[i] || 'row-span-1'}`}
                >
                  <img
                    src={url}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
