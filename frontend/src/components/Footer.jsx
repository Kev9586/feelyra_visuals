import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { useStrapiData } from '../hooks/useStrapiData';
import { getSiteSettings } from '../services/strapiService';

const socialIcons = { instagram: Instagram, facebook: Facebook, twitter: Twitter, linkedin: Linkedin, youtube: Youtube };

const Footer = () => {
  const year = new Date().getFullYear();
  const { data: settings } = useStrapiData(getSiteSettings, null);

  const brandName = settings?.brandName || 'HORIZON';
  const footerDesc = settings?.footerDescription || "Capturing the natural world's beauty through the lens of adventure and artistry.";
  const email = settings?.email || 'hello@horizonphoto.com';
  const phone = settings?.phone || '+1 (555) 123-4567';
  const socials = settings?.socialLinks || [];

  const links = {
    explore: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#works' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
    services: [
      { label: 'Travel Photography', href: '#services' },
      { label: 'Nature Photography', href: '#services' },
      { label: 'Commercial', href: '#services' },
      { label: 'Events', href: '#services' },
    ],
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer data-testid="footer" className="bg-neutral-950 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-4xl font-bold text-white tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {brandName}
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed font-light">
              {footerDesc}
            </p>
            {socials.length > 0 && (
              <div className="flex gap-2 pt-4">
                {socials.map((s) => {
                  const Icon = socialIcons[s.platform];
                  if (!Icon) return null;
                  return (
                    <a key={s.platform} href={s.url} aria-label={s.platform} target="_blank" rel="noopener noreferrer"
                      data-testid={`social-${s.platform}`}
                      className="w-9 h-9 border border-white/10 flex items-center justify-center text-neutral-500 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} className="text-neutral-500 hover:text-white transition-colors text-sm font-light">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {links.services.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.href)} className="text-neutral-500 hover:text-white transition-colors text-sm font-light">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Mail className="w-3 h-3 text-white/50" />
                <span className="font-light">{email}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-500 text-sm">
                <Phone className="w-3 h-3 text-white/50" />
                <span className="font-light">{phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 text-xs">
            &copy; {year} {brandName} Photography. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <button className="text-neutral-600 hover:text-white transition-colors">Privacy Policy</button>
            <button className="text-neutral-600 hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
