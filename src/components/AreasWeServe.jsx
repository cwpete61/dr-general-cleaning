import React from 'react';

const AreasWeServe = () => {
  const allCities = [
    'Allentown', 'Bethlehem', 'Easton', 'Emmaus', 'Northampton', 'Wilson', 'West Easton', 'Bath', 'Nazareth',
    'Macungie', 'Alburtis', 'Coopersburg',
    'Lansdale', 'Perkasie', 'Sellersville', 'Telford', 'Souderton', 'Dublin', 'Chalfont', 'Hatfield',
    'Boyertown', 'Pottstown', 'Kutztown', 'Fleetwood',
    'Quakertown', 'Palmerton', 'Slatington', 'Bangor', 'Pen Argyl'
  ];

  // Split cities into 4 columns for better balance
  const columns = [[], [], [], []];
  allCities.forEach((city, index) => {
    columns[index % 4].push(city);
  });

  return (
    <section className="section-modern py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-modern text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="subheading-modern text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning services across Northampton, Lehigh, Montgomery, and Berks counties
          </p>
        </div>

        {/* Modern Card with Table Layout */}
        <div className="modern-card p-8 lg:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((city, cityIndex) => (
                  <div key={cityIndex} className="flex items-center text-gray-700 group hover:text-blue-600 transition-all duration-200">
                    <svg className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{city}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don't see your area listed? Contact us to see if we can serve your location!
          </p>
          <a
            href="#contact"
            className="btn-modern-primary inline-flex items-center"
          >
            Check Service Availability
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasWeServe;
