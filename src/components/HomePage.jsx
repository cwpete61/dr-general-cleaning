import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import AreasWeServe from './AreasWeServe';
import LoadingOptimizer, { measurePerformance, optimizeForMobile } from './LoadingOptimizer';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize performance monitoring
    measurePerformance();

    // Apply mobile optimizations
    optimizeForMobile();

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Optimize images on mount
  useEffect(() => {
    if (isLoaded) {
      // Preload critical images
      const criticalImages = [
        '/images/hero/hero_01.jpg',
        '/images/hero/hero_02.jpg',
        '/images/hero/hero_03.jpg'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <LoadingOptimizer />;
  }

  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <AreasWeServe />
    </>
  );
};

export default HomePage;
