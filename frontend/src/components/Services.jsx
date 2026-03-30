import React from 'react';
import { services as mockServices } from '../mock/photographyData';
import { useStrapiData } from '../hooks/useStrapiData';
import { getServices } from '../services/strapiService';
import { Card, CardContent } from './ui/card';
import { Check } from 'lucide-react';

const Services = () => {
  const { data: services } = useStrapiData(getServices, mockServices);
  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            SERVICES
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Professional photography services tailored to capture your unique vision and story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group bg-neutral-900 border-neutral-800 hover:border-amber-500/50 transition-all duration-500 overflow-hidden cursor-pointer"
              style={{
                animation: `fade-in-up 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-500 transition-colors duration-300" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-neutral-800">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-neutral-300 text-sm">
                      <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;