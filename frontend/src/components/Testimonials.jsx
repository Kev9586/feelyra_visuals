import React from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getTestimonials } from '../services/strapiService';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { data: testimonials } = useStrapiData(getTestimonials, []);

  return (
    <section data-testid="testimonials-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="label-accent block mb-4">Client Stories</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            TESTIMONIALS
          </h2>
        </div>

        {/* Glass Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              data-testid={`testimonial-card-${index}`}
              className="glass p-8 space-y-6 hover:border-white/20 transition-all duration-500"
              
            >
              <Quote className="w-8 h-8 text-white/50/60" />
              <p className="text-neutral-300 leading-relaxed font-light italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div>
                  <h4 className="text-white font-semibold text-sm">{t.name}</h4>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
