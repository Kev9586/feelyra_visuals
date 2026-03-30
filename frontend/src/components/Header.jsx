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
          ? 'bg-neutral-950/90 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            data-testid="header-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-white hover:opacity-70 transition-opacity"
          >
            <span className="text-2xl italic" style={{ fontFamily: 'Playfair Display, serif' }}>Hz</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => scrollToSection(item.href)}
                className="text-white/60 hover:text-white transition-colors text-[13px] font-normal tracking-wide"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.label}
              </button>
            ))}
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
                className="block w-full text-left text-neutral-300 hover:text-white text-base font-light py-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => { onBookingClick(); setIsMobileMenuOpen(false); }}
              className="w-full border border-white/30 text-white py-3 text-sm mt-4 rounded-full"
            >
              Book your adventure today
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
