import React, { useState, useEffect } from 'react';
import './App.css';
import { Toaster } from './components/ui/toaster';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="App">
      <Header onBookingClick={handleBookingClick} />
      <Hero onBookingClick={handleBookingClick} />
      <FeaturedWork />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
      <Toaster />
    </div>
  );
}

export default App;