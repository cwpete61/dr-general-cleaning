import React from 'react';

const Services = () => {
  const services = [
    {
      title: "House Cleaning Allentown PA",
      description: "Professional house cleaning services in Allentown, Bethlehem, and Easton. Our experienced cleaners use eco-friendly products for safe, thorough residential cleaning throughout the Lehigh Valley.",
      icon: "🏠",
      badge: "Popular"
    },
    {
      title: "Deep Cleaning Services",
      description: "Expert deep cleaning for homes in Northampton County and surrounding areas. We tackle tough grime, sanitize surfaces, and leave your Pennsylvania home spotless and healthy.",
      icon: "✨",
      badge: "Thorough"
    },
    {
      title: "Move-in/Move-out Cleaning",
      description: "Specialized move-in and move-out cleaning services for renters and homeowners in Emmaus, Macungie, Coopersburg, and throughout Eastern Pennsylvania. Get your full security deposit back!",
      icon: "📦",
      badge: "Guaranteed"
    },
    {
      title: "Regular Maintenance Cleaning",
      description: "Scheduled weekly, bi-weekly, or monthly cleaning services for busy families in the Lehigh Valley. Customizable cleaning plans to keep your Pennsylvania home pristine year-round.",
      icon: "🧹",
      badge: "Flexible"
    },
    {
      title: "Office & Commercial Cleaning",
      description: "Professional office cleaning services for businesses in Allentown, Quakertown, and surrounding areas. Reliable commercial cleaning with flexible scheduling to minimize disruption.",
      icon: "🏢",
      badge: "Business"
    },
    {
      title: "Post-Construction Cleanup",
      description: "Specialized post-construction and renovation cleaning throughout Montgomery and Berks Counties. We remove dust, debris, and construction residue from your newly renovated space.",
      icon: "🔨",
      badge: "Specialized"
    }
  ];

  return (
    <section id="services" className="section-modern py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-modern text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Cleaning Services in Allentown PA & Lehigh Valley
          </h2>
          <p className="subheading-modern text-xl text-gray-600 max-w-3xl mx-auto">
            DR General Cleaning provides expert residential and commercial cleaning services throughout Allentown,
            Bethlehem, Easton, and the entire Lehigh Valley. Licensed, bonded, and insured with 10+ years experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="modern-card p-8 relative overflow-hidden group"
            >
              {service.badge && (
                <div className={`badge-modern badge-modern-${index % 2 === 0 ? 'primary' : 'success'} absolute top-4 right-4`}>
                  {service.badge}
                </div>
              )}
              <div className="text-5xl mb-6 transform transition-all duration-300 group-hover:scale-110">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <div className="w-16 h-1 bg-blue-500 mb-4 transition-all duration-300 group-hover:w-24"></div>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#contact" className="text-blue-600 font-medium flex items-center">
                  Get a Quote
                  <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="btn-modern-primary inline-flex items-center"
          >
            Get a Free Quote
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
