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
    { label: 'Portfolio', href: '#works' },
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
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-amber-500 flex items-center justify-center">
              <span className="text-amber-500 text-xs font-bold" style={{ fontFamily: 'Bebas Neue' }}>H</span>
            </div>
            <span className="text-white text-lg tracking-[0.15em] font-light group-hover:text-amber-500 transition-colors">
              HORIZON
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => scrollToSection(item.href)}
                className="text-neutral-400 hover:text-white transition-colors text-[11px] font-medium tracking-[0.12em] uppercase"
              >
                {item.label}
              </button>
            ))}
            <div className="w-px h-4 bg-white/10" />
            <button
              data-testid="header-book-btn"
              onClick={onBookingClick}
              className="bg-amber-500 text-black font-bold uppercase tracking-wider px-5 py-2.5 text-[11px] hover:bg-amber-400 transition-colors"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-t border-white/5">
          <nav className="container mx-auto px-6 py-8 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-neutral-300 hover:text-white text-sm font-light py-2"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onBookingClick(); setIsMobileMenuOpen(false); }}
              className="w-full bg-amber-500 text-black font-bold uppercase tracking-wider py-3 text-xs mt-4"
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
