import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from '../hooks/use-toast';
import { submitContactForm } from '../services/strapiService';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await submitContactForm(formData);
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you within 24-48 hours." });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@horizonphoto.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'Based in Colorado, USA' },
  ];

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 bg-neutral-950">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <span className="label-accent block mb-4">Get In Touch</span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                LET'S CREATE
              </h2>
              <p className="text-neutral-400 text-base leading-relaxed font-light max-w-md">
                Ready to bring your vision to life? Whether it's a commercial project, travel documentation, or a special event.
              </p>
            </div>

            <div className="space-y-5 pt-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} data-testid={`contact-info-${i}`} className="flex items-center gap-4">
                    <div className="w-10 h-10 glass flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-amber-500" />
                    </div>
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">{item.label}</span>
                      <p className="text-neutral-300 text-sm">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — Form */}
          <div className="glass p-8">
            <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
              {[
                { id: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your full name' },
                { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'your.email@example.com' },
                { id: 'phone', label: 'Phone', type: 'tel', required: false, placeholder: '+1 (555) 123-4567' },
                { id: 'subject', label: 'Subject', type: 'text', required: true, placeholder: 'Project type or inquiry' },
              ].map(field => (
                <div key={field.id} className="space-y-1">
                  <Label htmlFor={field.id} className="text-neutral-400 text-xs uppercase tracking-wider">{field.label}{field.required && ' *'}</Label>
                  <Input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={formData[field.id]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    data-testid={`contact-${field.id}`}
                    className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-amber-500 rounded-none"
                  />
                </div>
              ))}
              <div className="space-y-1">
                <Label htmlFor="message" className="text-neutral-400 text-xs uppercase tracking-wider">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  data-testid="contact-message"
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-600 focus:border-amber-500 rounded-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="contact-submit-btn"
                className="w-full bg-amber-500 text-black font-bold uppercase tracking-wider py-4 text-sm hover:bg-amber-400 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="inline-block ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
