import React, { useState, useEffect, useCallback } from 'react';

const HeroBackgroundSlider = () => {
  const heroImages = [
    {
      src: '/images/hero/hero_01.jpg',
      alt: 'Professional house cleaning services in Allentown PA',
      loading: 'lazy'
    },
    {
      src: '/images/hero/hero_02.jpg',
      alt: 'Deep cleaning services in Bethlehem PA',
      loading: 'lazy'
    },
    {
      src: '/images/hero/hero_03.jpg',
      alt: 'Office cleaning services in Easton PA',
      loading: 'lazy'
    },
    {
      src: '/images/hero/hero_04.jpg',
      alt: 'Move-in cleaning services in Lehigh Valley',
      loading: 'lazy'
    },
    {
      src: '/images/hero/hero_05.jpg',
      alt: 'Eco-friendly cleaning products in Northampton County',
      loading: 'lazy'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized auto-slide functionality with mobile considerations
  useEffect(() => {
    if (!isPlaying) return;

    // Longer interval on mobile to save battery
    const intervalTime = isMobile ? 7000 : 5000;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === heroImages.length - 1 ? 0 : prevSlide + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlaying, heroImages.length, isMobile]);

  // Optimized touch/swipe handlers for mobile
  const handleTouchStart = useCallback((e) => {
    setIsPlaying(false);
  }, []);

  const handleTouchEnd = useCallback(() => {
    // Resume after a delay on mobile
    setTimeout(() => setIsPlaying(true), 3000);
  }, []);

  // Pause on hover/touch
  const handleMouseEnter = () => setIsPlaying(false);
  const handleMouseLeave = () => setIsPlaying(true);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container with optimized transitions */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isMobile ? 'transform 0.8s ease-out' : 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {heroImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              loading={image.loading}
              decoding="async"
              className={`w-full h-full object-cover ${isMobile ? 'object-center' : 'object-cover'}`}
              style={{
                // Optimize image rendering
                imageRendering: 'crisp-edges',
                // Prevent layout shift
                contentVisibility: 'auto'
              }}
            />
            {/* Mobile-optimized placeholder while image loads */}
            {index === currentSlide && (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 opacity-20 lg:hidden"></div>
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay for text contrast - 60% transparent black */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Mobile-optimized progress indicator */}
      <div className={`absolute bottom-0 left-0 h-1 bg-blue-400 transition-all ease-linear ${
        isMobile ? 'duration-700' : 'duration-1000'
      }`} style={{ width: `${((currentSlide + 1) / heroImages.length) * 100}%` }}>
      </div>
    </div>
  );
};

export default HeroBackgroundSlider;
