import React from 'react';

const AreasServed = () => {
  const cities = [
    // Core Lehigh Valley Cities
    { name: 'Allentown', category: 'Core', highlight: true },
    { name: 'Bethlehem', category: 'Core', highlight: true },
    { name: 'Easton', category: 'Core', highlight: true },
    { name: 'Emmaus', category: 'Core', highlight: true },

    // Nearby Towns
    { name: 'Macungie', category: 'Nearby' },
    { name: 'Alburtis', category: 'Nearby' },
    { name: 'Coopersburg', category: 'Nearby' },
    { name: 'Northampton', category: 'Nearby' },

    // Extended Service Area
    { name: 'Quakertown', category: 'Extended' },
    { name: 'Palmerton', category: 'Extended' },
    { name: 'Slatington', category: 'Extended' },
    { name: 'Bangor', category: 'Extended' },
    { name: 'Nazareth', category: 'Extended' },
    { name: 'Wilson', category: 'Extended' },
    { name: 'West Easton', category: 'Extended' },
    { name: 'Bath', category: 'Extended' },
    { name: 'Pen Argyl', category: 'Extended' },

    // Montgomery County
    { name: 'Lansdale', category: 'Montgomery' },
    { name: 'Perkasie', category: 'Montgomery' },
    { name: 'Sellersville', category: 'Montgomery' },
    { name: 'Telford', category: 'Montgomery' },
    { name: 'Souderton', category: 'Montgomery' },
    { name: 'Dublin', category: 'Montgomery' },
    { name: 'Chalfont', category: 'Montgomery' },
    { name: 'Hatfield', category: 'Montgomery' },

    // Berks County
    { name: 'Boyertown', category: 'Berks' },
    { name: 'Pottstown', category: 'Berks' },
    { name: 'Kutztown', category: 'Berks' },
    { name: 'Fleetwood', category: 'Berks' }
  ];

  const categories = {
    Core: { color: 'bg-blue-100 text-blue-800 border-blue-200', icon: '🏠' },
    Nearby: { color: 'bg-green-100 text-green-800 border-green-200', icon: '🏘️' },
    Extended: { color: 'bg-purple-100 text-purple-800 border-purple-200', icon: '🏡' },
    Montgomery: { color: 'bg-orange-100 text-orange-800 border-orange-200', icon: '🏙️' },
    Berks: { color: 'bg-red-100 text-red-800 border-red-200', icon: '🌆' }
  };

  const groupedCities = cities.reduce((acc, city) => {
    if (!acc[city.category]) acc[city.category] = [];
    acc[city.category].push(city);
    return acc;
  }, {});

  return (
    <section id="areas-served" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Areas We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DR General Cleaning proudly serves the entire Lehigh Valley region and beyond.
            From our base in Allentown, PA, we provide professional cleaning services to
            homes and businesses across multiple counties in Eastern Pennsylvania.
          </p>
        </div>

        {/* Service Area Map Visualization */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Service Coverage Map
            </h3>

            {/* Interactive Map Representation */}
            <div className="relative bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-8 min-h-96">
              {/* Central Hub - Allentown */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg animate-pulse">
                  🏢 Allentown (Home Base)
                </div>
              </div>

              {/* Surrounding Cities */}
              <div className="absolute top-1/4 left-1/4">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                  Bethlehem
                </div>
              </div>

              <div className="absolute top-1/3 right-1/4">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                  Easton
                </div>
              </div>

              <div className="absolute bottom-1/3 left-1/3">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-md">
                  Emmaus
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-blue-300 transform -translate-y-1/2 -translate-x-16 rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-blue-300 transform -translate-y-1/2 -translate-x-16 -rotate-12"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-blue-300 transform -translate-y-1/2 -translate-x-16 rotate-12"></div>
            </div>
          </div>
        </div>

        {/* Cities by Category */}
        <div className="space-y-12">
          {Object.entries(groupedCities).map(([category, categoryCities]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{categories[category].icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category === 'Core' ? 'Core Lehigh Valley' :
                   category === 'Nearby' ? 'Nearby Communities' :
                   category === 'Extended' ? 'Extended Service Area' :
                   category === 'Montgomery' ? 'Montgomery County' : 'Berks County'}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {categoryCities.map((city, index) => (
                  <div
                    key={city.name}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer ${
                      categories[category].color
                    } ${city.highlight ? 'ring-2 ring-blue-400 shadow-lg' : ''}`}
                  >
                    <div className="text-center">
                      <div className="text-2xl mb-2">
                        {city.highlight ? '🏆' : '📍'}
                      </div>
                      <div className="font-semibold">{city.name}</div>
                      {city.highlight && (
                        <div className="text-xs mt-1 opacity-75">Premium Service</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Service Coverage Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Service Coverage
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">3</div>
              <div className="text-gray-600">Counties Covered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Miles Radius</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Not Sure If We Serve Your Area?
          </h3>
          <p className="text-lg mb-6">
            Contact us today! We're always expanding our service area and would love to help you with your cleaning needs.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasServed;
