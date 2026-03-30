import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBookingClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gallerySnippets = [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400", delay: 0.3 },
    { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400", delay: 0.6 },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400", delay: 0.9 },
  ];

  return (
    <section data-testid="hero-section" className="relative min-h-screen bg-neutral-950 overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/3 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 min-h-screen flex items-center pt-24">
        <div className="grid lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left — Typography & CTA (5 cols) */}
          <div className={`lg:col-span-5 space-y-8 transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="space-y-6">
              <span className="label-accent block">Photography & Creative Agency</span>
              <h1
                data-testid="hero-heading"
                className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white tracking-tight leading-[0.9]"
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                HORIZON
              </h1>
              <div className="w-16 h-[2px] bg-amber-500" />
              <p className="text-lg text-neutral-400 leading-relaxed max-w-md font-light">
                Where nature meets art. We capture the raw beauty of the world through a lens of adventure, turning fleeting moments into timeless visual stories.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <button
                data-testid="hero-book-btn"
                onClick={onBookingClick}
                className="bg-amber-500 text-black font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-amber-400 transition-colors"
              >
                Book a Shoot
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
              <button
                data-testid="hero-work-btn"
                onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-white/20 text-white font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-white/5 transition-colors"
              >
                View Work
              </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 pt-4">
              {[
                { val: '500+', label: 'Projects' },
                { val: '50+', label: 'Countries' },
                { val: '15+', label: 'Awards' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>{s.val}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photographer + Floating Gallery (7 cols) */}
          <div className={`lg:col-span-7 relative h-[550px] lg:h-[650px] hidden lg:block transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Main photographer image */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[560px] z-10"
              style={{ transform: `translateY(calc(-50% + ${scrollY * 0.04}px))` }}
            >
              <img
                src="https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/ba24d44ec14aeb4783b6bd294d135b081dd81a1ff5f5ccdbe8676beda4d6fb71.png"
                alt="Photographer"
                data-testid="hero-photographer-img"
                className="w-full h-full object-cover"
              />
              {/* Accent border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-amber-500/20 -z-10" />
            </div>

            {/* Floating gallery snippets */}
            {gallerySnippets.map((img, i) => {
              const positions = [
                { top: '5%', left: '0%', w: 'w-44', h: 'h-32' },
                { top: '40%', left: '-5%', w: 'w-40', h: 'h-52' },
                { bottom: '5%', left: '15%', w: 'w-48', h: 'h-36' },
              ];
              const pos = positions[i];
              return (
                <div
                  key={i}
                  className={`absolute ${pos.w} ${pos.h} overflow-hidden opacity-0 animate-float-in animate-gentle-float`}
                  style={{
                    ...pos,
                    animationDelay: `${img.delay}s`,
                    transform: `translateY(${scrollY * (0.02 * (i + 1))}px)`,
                  }}
                >
                  <img src={img.url} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 border border-white/10" />
                </div>
              );
            })}

            {/* Decorative circle */}
            <div className="absolute top-10 right-[450px] w-20 h-20 border border-amber-500/10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <span className="text-neutral-500 text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
