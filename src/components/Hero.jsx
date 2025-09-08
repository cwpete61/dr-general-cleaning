import React, { useState, useEffect } from 'react';
import HeroBackgroundSlider from './HeroBackgroundSlider';
import QuoteModal from './QuoteModal';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const heroElement = document.getElementById('home');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <section id="home" className="relative text-white py-16 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Slider - Optimized for mobile */}
      <HeroBackgroundSlider />

      {/* Content with overlay for better text contrast - Mobile optimized */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
          DR General Cleaning Services in Pennsylvania
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional house cleaning services in Allentown, Bethlehem, Easton and throughout the Lehigh Valley.
          Top-tier residential and commercial cleaning with eco-friendly products.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={openQuoteModal}
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm sm:text-base cursor-pointer"
          >
            Get Free Quote
          </button>
          <a
            href="#services"
            className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Our Services
          </a>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
      />
    </section>
  );
};

export default Hero;
