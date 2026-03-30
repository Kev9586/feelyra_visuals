import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onBookingClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingImages = [
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4", delay: 0 },
    { url: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", delay: 0.2 },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e", delay: 0.4 },
    { url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d", delay: 0.6 },
    { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba", delay: 0.8 }
  ];

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight leading-none" style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}>
                HORIZON
              </h1>
              <div className="max-w-lg">
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  Welcome to <span className="text-white font-semibold">HORIZON</span> where nature meets art. Our passion for the outdoors and capturing its beauty has led us on countless adventures and allowed us to develop a unique style of photography that showcases the natural world in all its splendor.
                </p>
              </div>
            </div>

            <div>
              <Button 
                onClick={onBookingClick}
                size="lg"
                className="group bg-white text-black hover:bg-neutral-200 text-base px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Book your adventure today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Content - Photographer with Floating Images */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            {/* Main photographer image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div 
                className="relative w-80 h-[500px]"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1609748629050-129797b86431"
                  alt="Photographer"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            </div>

            {/* Floating gallery images */}
            <div className="absolute inset-0 z-0">
              {floatingImages.map((img, index) => {
                const positions = [
                  { top: '5%', left: '0%', size: 'w-28 h-28' },
                  { top: '45%', left: '-5%', size: 'w-36 h-36' },
                  { bottom: '10%', left: '10%', size: 'w-32 h-32' },
                  { top: '10%', right: '5%', size: 'w-40 h-40' },
                  { bottom: '5%', right: '0%', size: 'w-44 h-44' }
                ];
                const pos = positions[index];
                
                return (
                  <div
                    key={index}
                    className={`absolute ${pos.size} rounded-lg overflow-hidden shadow-2xl opacity-0 animate-float-in border-2 border-white/20`}
                    style={{
                      ...pos,
                      animationDelay: `${img.delay}s`,
                      transform: `translateY(${scrollY * (0.04 * (index + 1))}px)`
                    }}
                  >
                    <img
                      src={img.url}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-neutral-400 text-sm tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-neutral-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;