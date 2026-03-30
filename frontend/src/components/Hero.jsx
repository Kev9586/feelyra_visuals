import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
];

const Hero = ({ onBookingClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section data-testid="hero-section" className="relative h-screen overflow-hidden">
      {/* Background slideshow */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: currentImage === i ? 1 : 0 }}
        >
          <img
            src={img}
            alt={`Landscape ${i + 1}`}
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 lg:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl space-y-6">
            {/* Tagline */}
            <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <span className="inline-block border border-white/20 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
                Photography & Creative Agency
              </span>
            </div>

            {/* Main heading */}
            <h1
              data-testid="hero-heading"
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              Capturing the<br />
              <span className="text-amber-500">World's Beauty</span>
            </h1>

            {/* Subtitle */}
            <p className={`text-neutral-300 text-base lg:text-lg font-light leading-relaxed max-w-lg transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              We turn fleeting moments into timeless visual stories. From mountain peaks to hidden trails — every frame tells a story.
            </p>

            {/* CTAs */}
            <div className={`flex items-center gap-4 pt-2 transition-all duration-1000 delay-900 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <button
                data-testid="hero-book-btn"
                onClick={onBookingClick}
                className="bg-amber-500 text-black font-bold uppercase tracking-wider px-8 py-4 text-xs hover:bg-amber-400 transition-colors inline-flex items-center gap-2"
              >
                Book a Shoot <ArrowRight className="w-4 h-4" />
              </button>
              <button
                data-testid="hero-work-btn"
                onClick={() => document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-white/70 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                View Portfolio <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar at bottom */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 mt-12">
          <div className={`flex gap-12 border-t border-white/10 pt-6 transition-all duration-1000 delay-[1100ms] ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            {[
              { val: '500+', label: 'Projects' },
              { val: '50+', label: 'Countries' },
              { val: '15+', label: 'Awards' },
              { val: '10+', label: 'Years' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Bebas Neue' }}>{s.val}</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-[0.2em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            data-testid={`hero-slide-${i}`}
            onClick={() => setCurrentImage(i)}
            className={`w-1.5 transition-all duration-500 ${currentImage === i ? 'h-8 bg-amber-500' : 'h-3 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
