import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for mobile performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking a link (mobile)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img
              src="/images/logos/DR-GEneral-Cleaning_Logo_WEB.png"
              alt="DR General Cleaning Logo"
              className="h-8 sm:h-10 md:h-12 w-auto object-contain"
              loading="eager"
            />
          </div>

          {/* Desktop Navigation - Optimized for performance */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">Home</Link>
            <a href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">Services</a>
            <Link to="/areas-served" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">Areas Served</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">About</Link>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm lg:text-base">Contact</a>
          </nav>

          {/* Mobile Menu Button - Optimized for touch */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-lg transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Optimized for mobile performance */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col space-y-1 py-4">
            <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg text-left font-medium">
              Home
            </Link>
            <a href="/#services" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg text-left font-medium">
              Services
            </a>
            <Link to="/areas-served" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg text-left font-medium">
              Areas Served
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg text-left font-medium">
              About
            </Link>
            <a href="/#contact" onClick={handleLinkClick} className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 py-3 px-4 rounded-lg text-left font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
