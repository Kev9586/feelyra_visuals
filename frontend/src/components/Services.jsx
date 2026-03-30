import React from 'react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getServices } from '../services/strapiService';
import { Check, ArrowUpRight } from 'lucide-react';

const Services = () => {
  const { data: services } = useStrapiData(getServices, []);

  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="label-accent block mb-4">What We Offer</span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              SERVICES
            </h2>
          </div>
          <p className="text-neutral-400 text-base font-light max-w-md leading-relaxed">
            Professional photography services tailored to capture your unique vision and story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-testid={`service-card-${index}`}
              className="group bg-neutral-900/50 border border-white/5 hover:border-white/30 transition-all duration-500 overflow-hidden cursor-pointer"
              
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-4 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-300 text-sm font-light">
                      <Check className="w-3 h-3 text-white flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
