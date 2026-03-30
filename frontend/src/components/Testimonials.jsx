import React from 'react';
import { testimonials as mockTestimonials } from '../mock/photographyData';
import { useStrapiData } from '../hooks/useStrapiData';
import { getTestimonials } from '../services/strapiService';
import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const { data: testimonials } = useStrapiData(getTestimonials, mockTestimonials);
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            TESTIMONIALS
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            What clients say about working with Horizon Photography.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-neutral-900 border-neutral-800 hover:border-amber-500/50 transition-all duration-500"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              <CardContent className="p-8 space-y-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-amber-500" />

                {/* Quote */}
                <p className="text-neutral-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-800">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <h4 className="text-white font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;