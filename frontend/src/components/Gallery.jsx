import React, { useState } from 'react';
import { portfolioImages as mockPortfolioImages } from '../mock/photographyData';
import { useStrapiData } from '../hooks/useStrapiData';
import { getPortfolioItems } from '../services/strapiService';

const Gallery = () => {
  const { data: portfolioImages } = useStrapiData(getPortfolioItems, mockPortfolioImages);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['all', 'nature', 'travel', 'commercial'];
  const filteredImages = activeFilter === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeFilter);

  return (
    <section id="works" data-testid="gallery-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-12">
          <span className="label-accent block mb-4">Our Work</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            PORTFOLIO
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              data-testid={`filter-${cat}`}
              onClick={() => setActiveFilter(cat)}
              className={`capitalize px-6 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-white text-black'
                  : 'bg-transparent text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              data-testid={`gallery-item-${index}`}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${
                hoveredId === image.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="label-accent block mb-1">{image.category}</span>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
