import React, { useEffect, useState } from 'react';

const LoadingOptimizer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-blue-600 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="text-center text-white">
        <div className="mb-4">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
        <h2 className="text-2xl font-bold mb-2">DR General Cleaning</h2>
        <p className="text-blue-100 mb-4">Loading professional cleaning services...</p>
        <div className="w-64 bg-blue-800 rounded-full h-2 mx-auto">
          <div
            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-blue-200 mt-2">{progress}%</p>
      </div>
    </div>
  );
};

// Performance monitoring utility
export const measurePerformance = () => {
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        const connectTime = perfData.responseEnd - perfData.requestStart;
        const renderTime = perfData.domComplete - perfData.domLoading;

        console.log('Performance Metrics:', {
          pageLoadTime: `${pageLoadTime}ms`,
          connectTime: `${connectTime}ms`,
          renderTime: `${renderTime}ms`
        });

        // Send to analytics (placeholder)
        if (window.gtag) {
          window.gtag('event', 'page_performance', {
            page_load_time: pageLoadTime,
            connect_time: connectTime,
            render_time: renderTime
          });
        }
      }, 0);
    });
  }
};

// Image preloading utility
export const preloadImages = (imageUrls) => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }
};

// Mobile-specific optimizations
export const optimizeForMobile = () => {
  // Reduce animation complexity on mobile
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Disable complex animations on mobile for better performance
    document.documentElement.style.setProperty('--animation-duration', '0.3s');

    // Optimize touch events
    document.addEventListener('touchstart', function() {}, { passive: true });
    document.addEventListener('touchmove', function() {}, { passive: true });
  }
};

export default LoadingOptimizer;
