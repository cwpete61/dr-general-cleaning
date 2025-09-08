import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const heroImages = [
    {
      src: '/images/hero/hero_01.png',
      alt: 'Professional house cleaning services in Allentown PA',
      title: 'Expert House Cleaning',
      subtitle: 'Transform your home with our professional touch'
    },
    {
      src: '/images/hero/hero_02.png',
      alt: 'Deep cleaning services in Bethlehem PA',
      title: 'Deep Cleaning Specialists',
      subtitle: 'Thorough cleaning for a healthier home'
    },
    {
      src: '/images/hero/hero_03.png',
      alt: 'Office cleaning services in Easton PA',
      title: 'Commercial Cleaning',
      subtitle: 'Professional office cleaning solutions'
    },
    {
      src: '/images/hero/hero_04.png',
      alt: 'Move-in cleaning services in Lehigh Valley',
      title: 'Move-in/Move-out Cleaning',
      subtitle: 'Perfect cleaning for your new beginning'
    },
    {
      src: '/images/hero/hero_05.png',
      alt: 'Eco-friendly cleaning products in Northampton County',
      title: 'Eco-Friendly Cleaning',
      subtitle: 'Safe for your family and the environment'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length]);

  // Manual navigation
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? heroImages.length - 1 : prevSlide - 1
    );
  };

  // Pause on hover
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div
        className="flex slider-transition h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4">
                <h3 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                  {image.title}
                </h3>
                <p className="text-lg md:text-xl mb-8">
                  {image.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 btn-hover-lift"
                  >
                    Get Free Quote
                  </a>
                  <a
                    href="#services"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200 btn-hover-lift"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 slider-nav-button text-white p-3 rounded-full z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 slider-nav-button text-white p-3 rounded-full z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full slide-indicator transition-all duration-200 ${
              index === currentSlide
                ? 'slide-indicator active bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-1000 ease-linear ${
        isPlaying ? 'progress-bar' : ''
      }`} style={{ width: `${((currentSlide + 1) / heroImages.length) * 100}%` }}>
      </div>
    </div>
  );
};

export default HeroSlider;
