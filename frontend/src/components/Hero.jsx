import React, { useEffect, useState } from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getHeroImages, getSiteSettings } from '../services/strapiService';

const FALLBACK_PHOTOGRAPHER = "https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/1371892223201b21fa8133730577b4422f9197862abb44c2645f705352e4cba4.png";

// Span pattern for 8 gallery images — fills a 6-col dense grid cleanly
const GALLERY_SPANS = [
  'col-span-2 row-span-2', // 0 — big
  'col-span-1 row-span-1', // 1
  'col-span-1 row-span-1', // 2
  'col-span-2 row-span-1', // 3 — wide
  'col-span-1 row-span-2', // 4 — tall
  'col-span-1 row-span-1', // 5
  'col-span-2 row-span-1', // 6 — wide
  'col-span-1 row-span-1', // 7
];

const Hero = ({ onBookingClick }) => {
  const [loaded, setLoaded] = useState(false);
  const { data: heroImages } = useStrapiData(getHeroImages, []);
  const { data: settings }   = useStrapiData(getSiteSettings, null);

  useEffect(() => { setLoaded(true); }, []);

  const brandName  = settings?.brandName  || 'FEELYRA VISUALS';
  const tagline    = settings?.heroTagline || 'Welcome to FEELYRA VISUALS where nature meets art. Our passion for the outdoors and capturing its beauty has led us on countless adventures.';
  const ctaText    = settings?.heroCtaText || 'Book your adventure today';
  const photo      = settings?.heroImage  || FALLBACK_PHOTOGRAPHER;
  const brandWords = brandName.split(' ');

  return (
    <section data-testid="hero-section" className="relative bg-[#0a0a0a] overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* ── Photographer — right side, anchored to top so face is visible ── */}
      <div
        className={`absolute top-0 right-0 h-full w-[62%] transition-opacity duration-1000 delay-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <img
          src={photo}
          alt="Photographer"
          data-testid="hero-photographer-img"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center top' }}
        />
        {/* Fade image into dark bg on the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/55 to-transparent pointer-events-none" />
        {/* Subtle bottom fade so gallery blends in */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      </div>

      {/* ── Text block — lower-left, in front of image ── */}
      <div className="relative z-10 flex flex-col" style={{ minHeight: '100vh' }}>
        <div className="flex-1" />
        <div
          className={`px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 max-w-xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h1
            data-testid="hero-heading"
            className="text-white leading-[0.88] mb-6"
            style={{
              fontFamily: 'Playfair Display, Cormorant Garamond, serif',
              fontWeight: 400,
              fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
            }}
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

      {/* ── Bottom gallery — dense CSS grid, no gaps ── */}
      {heroImages.length > 0 && (
        <div
          className={`relative z-10 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gridAutoRows: '130px',
            gridAutoFlow: 'row dense',
            gap: '4px',
          }}
        >
          {heroImages.map((url, i) => (
            <div
              key={i}
              className="overflow-hidden group cursor-pointer"
              style={{ gridColumn: `span ${GALLERY_SPANS[i]?.match(/col-span-(\d)/)?.[1] || 1}`, gridRow: `span ${GALLERY_SPANS[i]?.match(/row-span-(\d)/)?.[1] || 1}` }}
            >
              <img
                src={url}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;
