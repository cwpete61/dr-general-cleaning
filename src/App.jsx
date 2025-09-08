import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AreasWeServe from './components/AreasWeServe';
import Footer from './components/Footer';
import LoadingOptimizer, { measurePerformance, optimizeForMobile } from './components/LoadingOptimizer';

function App() {
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <AreasWeServe />
      <Footer />
    </div>
  );
}

export default App;
