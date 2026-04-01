import React, { useEffect, useState } from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getHeroImages, getSiteSettings } from '../services/strapiService';

const rowSpans = ['row-span-1', 'row-span-1', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-2', 'row-span-1', 'row-span-1'];

const FALLBACK_PHOTOGRAPHER = "https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/1371892223201b21fa8133730577b4422f9197862abb44c2645f705352e4cba4.png";

const Hero = ({ onBookingClick }) => {
  const [loaded, setLoaded] = useState(false);
  const { data: heroImages } = useStrapiData(getHeroImages, []);
  const { data: settings } = useStrapiData(getSiteSettings, null);

  useEffect(() => { setLoaded(true); }, []);

  const brandName   = settings?.brandName   || 'FEELYRA VISUALS';
  const tagline     = settings?.heroTagline  || 'Welcome to FEELYRA VISUALS where nature meets art. Our passion for the outdoors and capturing its beauty has led us on countless adventures.';
  const ctaText     = settings?.heroCtaText  || 'Book your adventure today';
  const photographerImage = settings?.heroImage || FALLBACK_PHOTOGRAPHER;
  const brandWords  = brandName.split(' ');

  return (
    <section data-testid="hero-section" className="relative bg-[#0a0a0a] overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* ── Photographer image — right side, full height ── */}
      <div className={`absolute top-0 right-0 h-full w-[58%] transition-opacity duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <img
          src={photographerImage}
          alt="Photographer with camera"
          data-testid="hero-photographer-img"
          className="w-full h-full object-cover object-center"
        />
        {/* Left-edge gradient so text stays readable over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Text block — lower-left, in front of image ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: '100vh' }}>
        <div className="flex-1" />

        <div className={`px-6 md:px-12 lg:px-16 pb-12 lg:pb-20 max-w-2xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1
            data-testid="hero-heading"
            className="text-white leading-[0.88] mb-7"
            style={{ fontFamily: 'Playfair Display, Cormorant Garamond, serif', fontWeight: 400, fontSize: 'clamp(4rem, 10vw, 8rem)' }}
          >
            {brandWords.map((word, i) => (
              <span key={i} className="block">
                <em style={{ fontStyle: 'italic' }}>{word[0]}</em>{word.slice(1)}
              </span>
            ))}
          </h1>

          <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light mb-8">
            {tagline}
          </p>

          <button
            data-testid="hero-book-btn"
            onClick={onBookingClick}
            className="border border-white/30 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all"
          >
            {ctaText}
          </button>
        </div>
      </div>

      {/* ── Bottom gallery grid ── */}
      {heroImages.length > 0 && (
        <div className={`relative z-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-[120px] md:auto-rows-[140px]">
            {heroImages.map((url, i) => (
              <div key={i} className={`overflow-hidden group cursor-pointer ${rowSpans[i] || 'row-span-1'}`}>
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
    </section>
  );
};

export default Hero;
