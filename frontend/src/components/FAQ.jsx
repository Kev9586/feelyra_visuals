import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqData } from '../mock/photographyData';

const FAQ = () => {
  return (
    <section id="faq" data-testid="faq-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 max-w-4xl">
        <div className="mb-16 text-center">
          <span className="label-accent block mb-4">Common Questions</span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            FAQ
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              data-testid={`faq-item-${index}`}
              className="glass px-6 hover:border-amber-500/20 transition-all duration-300"
              
            >
              <AccordionTrigger className="text-white hover:text-amber-500 text-left py-5">
                <span className="font-semibold text-base">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 pb-5 leading-relaxed font-light text-sm">
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
