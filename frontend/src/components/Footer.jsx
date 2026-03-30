import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    explore: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#works' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' }
    ],
    services: [
      { label: 'Travel Photography', href: '#services' },
      { label: 'Nature Photography', href: '#services' },
      { label: 'Commercial', href: '#services' },
      { label: 'Events', href: '#services' }
    ],
    contact: [
      { label: 'hello@horizonphoto.com', icon: Mail },
      { label: '+1 (555) 123-4567', icon: Phone }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-800">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              HORIZON
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Capturing the natural world's beauty through the lens of adventure and artistry.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-amber-500 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              EXPLORE
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              CONTACT
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-center gap-3 text-neutral-400">
                    <Icon className="w-4 h-4 text-amber-500" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm">
            © {currentYear} Horizon Photography. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-neutral-500 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-neutral-500 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;