import React from 'react';
import { featuredWork } from '../mock/photographyData';
import { ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FEATURED WORK
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            A curated selection of my finest work, showcasing the beauty and drama of the natural world.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredWork.map((work, index) => (
            <div
              key={work.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-amber-500 text-sm font-medium tracking-wider uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {work.category}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {work.title}
                </h3>
                <p className="text-neutral-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {work.description}
                </p>
                <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;