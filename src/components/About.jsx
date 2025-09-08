import React from 'react';

const About = () => {
  const stats = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Happy Customers' },
    { value: '25+', label: 'Cities Served' },
    { value: '100%', label: 'Satisfaction Rate' }
  ];

  const benefits = [
    { text: 'Professional and reliable service', icon: '✓' },
    { text: 'Eco-friendly cleaning products', icon: '✓' },
    { text: 'Flexible scheduling options', icon: '✓' },
    { text: 'Competitive pricing', icon: '✓' },
    { text: '100% satisfaction guarantee', icon: '✓' }
  ];

  return (
    <section id="about" className="section-modern py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-modern text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DR General Cleaning
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="subheading-modern text-xl text-gray-600 max-w-3xl mx-auto">
            Professional cleaning services with a commitment to excellence throughout the Lehigh Valley
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - About Text */}
          <div className="relative">
            <div className="modern-card p-8 lg:p-10">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are DR General Cleaning, a professional cleaning company based in Allentown, PA, dedicated to providing exceptional cleaning services throughout the Lehigh Valley and surrounding areas. With years of experience in the industry, we have built a reputation for reliability, thoroughness, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our team of trained professionals uses eco-friendly products and proven techniques to ensure your space is not only clean but healthy for you and your family.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-lg -z-10"></div>
          </div>

          {/* Right Column - Why Choose Us */}
          <div className="modern-card bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>

            <h3 className="text-2xl font-bold mb-8 relative z-10">Why Choose Us?</h3>

            <ul className="space-y-6 relative z-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-green-300 mr-4">
                    {benefit.icon}
                  </span>
                  <span className="text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 relative z-10">
              <a href="#contact" className="inline-flex items-center text-white border-2 border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                Contact Us
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
