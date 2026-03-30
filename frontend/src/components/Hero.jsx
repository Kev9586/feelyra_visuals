import React, { useEffect, useState } from 'react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80", span: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80", span: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=400&q=80", span: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400&q=80", span: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&q=80", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&q=80", span: "row-span-1" },
  { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80", span: "row-span-1" },
];

const Hero = ({ onBookingClick }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

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
              <span className="italic">H</span>ORIZON
            </h1>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
              Welcome to <strong className="text-white font-medium">HORIZON</strong> where nature meets art. Our passion for the outdoors and capturing its beauty has led us on countless adventures and allowed us to develop a unique style of photography that showcases the natural world in all its splendor.
            </p>

            <button
              data-testid="hero-book-btn"
              onClick={onBookingClick}
              className="border border-white/30 text-white text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all mt-2"
            >
              Book your adventure today
            </button>
          </div>

          {/* Right — Photographer */}
          <div className={`relative transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <img
              src="https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/1371892223201b21fa8133730577b4422f9197862abb44c2645f705352e4cba4.png"
              alt="Photographer with camera"
              data-testid="hero-photographer-img"
              className="w-full h-[500px] lg:h-[600px] object-cover object-top"
            />
          </div>
        </div>

        {/* Bottom — Floating Gallery Grid */}
        <div className={`-mt-16 lg:-mt-32 relative z-10 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 auto-rows-[120px] md:auto-rows-[140px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden group cursor-pointer ${img.span}`}
              >
                <img
                  src={img.url}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
