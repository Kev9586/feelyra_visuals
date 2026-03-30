import React from 'react';
import { featuredWork as mockFeaturedWork } from '../mock/photographyData';
import { useStrapiData } from '../hooks/useStrapiData';
import { getFeaturedWork } from '../services/strapiService';
import { ArrowUpRight } from 'lucide-react';

const FeaturedWork = () => {
  const { data: featuredWork } = useStrapiData(getFeaturedWork, mockFeaturedWork);

  const gridClasses = [
    'md:col-span-2 md:row-span-2',
    'md:col-span-1 md:row-span-1',
    'md:col-span-1 md:row-span-1',
    'md:col-span-2 md:row-span-1',
  ];

  return (
    <section data-testid="featured-work-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="label-accent block mb-4">Selected Projects</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              FEATURED WORK
            </h2>
          </div>
          <p className="text-neutral-400 text-base font-light max-w-md leading-relaxed">
            A curated selection of my finest work, showcasing the beauty and drama of the natural world.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
          {featuredWork.map((work, index) => (
            <div
              key={work.id}
              data-testid={`featured-work-${index}`}
              className={`group relative overflow-hidden cursor-pointer ${gridClasses[index] || ''}`}
              
            >
              <div className={`relative overflow-hidden ${index === 0 ? 'h-full min-h-[400px]' : 'aspect-[16/10]'}`}>
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="label-accent block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {work.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {work.title}
                </h3>
                <p className="text-neutral-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light">
                  {work.description}
                </p>
                <div className="flex items-center gap-2 text-white/60 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-xs font-semibold uppercase tracking-wider">View Project</span>
                  <ArrowUpRight className="w-4 h-4" />
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
