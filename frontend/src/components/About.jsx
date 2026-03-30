import React from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getAbout } from '../services/strapiService';
import { Camera, Award, MapPin, Calendar } from 'lucide-react';

const iconMap = [Camera, MapPin, Award, Calendar];

const About = () => {
  const { data: aboutData } = useStrapiData(getAbout, null);

  if (!aboutData) return null;

  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <div className="relative group animate-fade-in">
            <div className="relative overflow-hidden">
              <img
                src={aboutData.image || "https://static.prod-images.emergentagent.com/jobs/00252e81-49fc-4819-a1c1-88ff0ad1284e/images/1ca15554e1640971c57ec162139b55be179fa115cf9c32744ce76a0e4b4af887.png"}
                alt="Photographer"
                data-testid="about-photographer-img"
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border border-white/10 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-white/5 -z-10" />
          </div>

          {/* Right — Content */}
          <div className="space-y-8">
            <div>
              <span className="label-accent block mb-4">Who We Are</span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                ABOUT
              </h2>
              <h3 className="text-xl text-white/70 font-semibold mb-4">
                {aboutData.title}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed font-light">
                {aboutData.description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
              {aboutData.stats.map((stat, index) => {
                const Icon = iconMap[index] || Camera;
                return (
                  <div key={index} data-testid={`about-stat-${index}`} className="space-y-2">
                    <Icon className="w-5 h-5 text-white/70 mb-2" />
                    <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-neutral-500 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
