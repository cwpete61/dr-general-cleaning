import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import SEOHead from './SEOHead';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="About DR General Cleaning | Professional House Cleaning Allentown PA"
        description="Learn about DR General Cleaning's 10+ years of professional house cleaning services in Allentown, PA and Lehigh Valley. Family-owned, reliable, and eco-friendly cleaning solutions."
        ogUrl="https://drgeneralcleaning.com/about"
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            About DR General Cleaning
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for professional house cleaning services in Allentown, PA and the Lehigh Valley.
            Reliable, thorough, and affordable cleaning solutions for over 10 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Free Quote
            </Link>
            <Link to="/areas-served" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Areas We Serve
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Founded in 2013, DR General Cleaning has been serving the Allentown, PA and Lehigh Valley communities
                  with exceptional house cleaning services. What started as a small family business has grown into the
                  area's most trusted cleaning service provider.
                </p>
                <p>
                  We understand that your home is your sanctuary, and maintaining a clean, healthy environment is essential
                  for your family's well-being. That's why we've dedicated ourselves to providing thorough, reliable, and
                  affordable cleaning services that exceed expectations.
                </p>
                <p>
                  Our team of experienced professionals takes pride in every job, treating your home with the same care
                  and attention we would give our own. We're not just cleaners – we're your neighbors, committed to
                  making your life easier and your home spotless.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about/team-cleaning.jpg"
                alt="DR General Cleaning Team"
                className="rounded-lg shadow-xl"
                onError={(e) => {
                  e.target.src = '/images/hero/hero_01.jpg';
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and ensure we deliver exceptional service every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for perfection in every cleaning job, ensuring your home meets the highest standards of cleanliness.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliability</h3>
              <p className="text-gray-600">
                Count on us to show up on time, every time. We respect your schedule and deliver consistent, dependable service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eco-Friendly</h3>
              <p className="text-gray-600">
                We use environmentally safe cleaning products that are effective yet gentle on your family and pets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Satisfaction</h3>
              <p className="text-gray-600">
                Your happiness is our priority. We're not satisfied until you're completely happy with our service.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600">
                Fully insured and bonded, our vetted team members treat your home with respect and confidentiality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordability</h3>
              <p className="text-gray-600">
                Quality cleaning services shouldn't break the bank. We offer competitive rates with transparent pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DR General Cleaning?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what sets us apart from other cleaning services in the Lehigh Valley.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Local & Family-Owned</h3>
                  <p className="text-gray-600">
                    As a local business, we understand the unique needs of Lehigh Valley homeowners and take pride in serving our community.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Team</h3>
                  <p className="text-gray-600">
                    Our cleaning professionals are thoroughly trained, background-checked, and have years of experience in residential cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    We work around your schedule with weekly, bi-weekly, monthly, or one-time cleaning appointments available.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Customized Service</h3>
                  <p className="text-gray-600">
                    Every home is different. We tailor our cleaning services to meet your specific needs and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600">
                    Not satisfied with our service? We'll return within 24 hours to make it right, at no additional cost.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured & Bonded</h3>
                  <p className="text-gray-600">
                    Your peace of mind is important to us. We carry comprehensive insurance and bonding for your protection.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Estimates</h3>
                  <p className="text-gray-600">
                    Get a no-obligation quote for your cleaning needs. We provide transparent, upfront pricing with no hidden fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Supplies Included</h3>
                  <p className="text-gray-600">
                    We bring all necessary cleaning supplies and equipment. Just sit back and let us handle everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the DR General Cleaning Difference?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied customers in the Lehigh Valley who trust us with their home cleaning needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Your Free Quote
            </Link>
            <a href="tel:(201) 893-6802" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105">
              Call (201) 893-6802
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
