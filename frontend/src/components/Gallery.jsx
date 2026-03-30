import React, { useState } from 'react';
import { portfolioImages as mockPortfolioImages } from '../mock/photographyData';
import { useStrapiData } from '../hooks/useStrapiData';
import { getPortfolioItems } from '../services/strapiService';
import { Button } from './ui/button';

const Gallery = () => {
  const { data: portfolioImages } = useStrapiData(getPortfolioItems, mockPortfolioImages);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['all', 'nature', 'travel', 'commercial'];

  const filteredImages = activeFilter === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === activeFilter);

  return (
    <section id="works" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            PORTFOLIO
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl">
            Explore my collection of nature and adventure photography from around the world.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setActiveFilter(category)}
              variant={activeFilter === category ? 'default' : 'outline'}
              className={`capitalize rounded-full px-6 transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black hover:bg-neutral-200'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-white hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.05}s both`
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
                hoveredId === image.id ? 'opacity-90' : 'opacity-0'
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-amber-500 text-xs font-medium tracking-wider uppercase mb-1 block">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
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