import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqData } from '../mock/photographyData';
// FAQ section uses static mock data (not CMS-managed)

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-neutral-400 text-lg">
            Everything you need to know about working with Horizon Photography.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-neutral-900 border-neutral-800 rounded-lg px-6 hover:border-amber-500/50 transition-all duration-300"
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <AccordionTrigger className="text-white hover:text-amber-500 text-left py-6">
                <span className="font-semibold text-lg">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;