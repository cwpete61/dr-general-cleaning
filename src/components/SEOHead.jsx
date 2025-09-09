import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "DR General Cleaning | Professional House Cleaning Services Allentown PA",
  description = "DR General Cleaning offers professional house cleaning services in Allentown, PA and Lehigh Valley. Reliable, affordable cleaning for homes and offices. Free quotes. Call (201) 893-6802.",
  keywords = "house cleaning Allentown PA, cleaning services Lehigh Valley, professional cleaning Bethlehem, Easton cleaning company, Emmaus house cleaners, office cleaning Pennsylvania, deep cleaning services, move in cleaning, move out cleaning, residential cleaning Allentown",
  ogTitle,
  ogDescription,
  ogUrl = "https://drgeneralcleaning.com/",
  ogImage = "https://drgeneralcleaning.com/og-image.jpg",
  twitterTitle,
  twitterDescription,
  twitterImage = "https://drgeneralcleaning.com/twitter-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Primary SEO Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={twitterTitle || title} />
      <meta property="twitter:description" content={twitterDescription || description} />
      <meta property="twitter:image" content={twitterImage} />

      {/* Local Business Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "DR General Cleaning",
          "description": "Professional house cleaning services in Allentown, PA and Lehigh Valley region",
          "url": "https://drgeneralcleaning.com",
          "telephone": "(201) 893-6802",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Allentown",
            "addressRegion": "PA",
            "addressCountry": "US"
          },
          "areaServed": [
            {"@type": "City", "name": "Allentown"},
            {"@type": "City", "name": "Bethlehem"},
            {"@type": "City", "name": "Easton"},
            {"@type": "City", "name": "Emmaus"},
            {"@type": "City", "name": "Macungie"},
            {"@type": "City", "name": "Northampton"}
          ],
          "serviceType": ["House Cleaning", "Office Cleaning", "Deep Cleaning", "Move-in/Move-out Cleaning"],
          "priceRange": "$$",
          "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-16:00"
        })}
      </script>

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="geo.region" content="US-PA" />
      <meta name="geo.placename" content="Allentown" />
      <meta name="geo.position" content="40.6084;-75.4902" />
      <meta name="ICBM" content="40.6084, -75.4902" />

      {/* Canonical URL */}
      <link rel="canonical" href={ogUrl} />

      {/* Mobile Specific */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#2563eb" />

      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="DR General Cleaning" />

      {/* Performance Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
    </Helmet>
  );
};

export default SEOHead;
