import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ onBookingClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      data-testid="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-neutral-950/80 backdrop-blur-xl border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white font-bold text-3xl tracking-[0.15em] hover:text-amber-500 transition-colors"
            style={{ fontFamily: 'Bebas Neue, sans-serif' }}
          >
            HORIZON
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.label}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-400 hover:text-white transition-colors text-xs font-semibold tracking-[0.15em] uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              data-testid="header-book-btn"
              onClick={onBookingClick}
              className="bg-amber-500 text-black font-bold uppercase tracking-wider px-6 py-3 text-xs hover:bg-amber-400 transition-colors"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-white/5">
          <nav className="container mx-auto px-6 py-8 space-y-5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-neutral-300 hover:text-white text-lg font-light py-2 tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onBookingClick(); setIsMobileMenuOpen(false); }}
              className="w-full bg-amber-500 text-black font-bold uppercase tracking-wider py-4 text-sm hover:bg-amber-400 transition-colors mt-4"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
