import React from 'react';
import { aboutData } from '../mock/photographyData';
// About section uses static mock data (not CMS-managed)
import { Camera, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const iconMap = {
    0: Camera,
    1: MapPin,
    2: Award,
    3: Calendar
  };

  return (
    <section id="about" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutData.image}
                alt="Photographer"
                className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-amber-500/30 rounded-lg -z-10" />
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                ABOUT
              </h2>
              <h3 className="text-2xl text-amber-500 font-semibold mb-4">
                {aboutData.title}
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {aboutData.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-800">
              {aboutData.stats.map((stat, index) => {
                const Icon = iconMap[index];
                return (
                  <div key={index} className="space-y-2">
                    <Icon className="w-6 h-6 text-amber-500 mb-2" />
                    <div className="text-4xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                      {stat.value}
                    </div>
                    <div className="text-neutral-400 text-sm">
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