'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Homeowner',
      location: 'Remuera, Auckland',
      rating: 5,
      text: 'Vision & Motion Facades transformed our home with beautiful new windows and doors. The team was professional, punctual, and the quality exceeded our expectations. Highly recommend their services!',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20happy%20female%20homeowner%20in%20her%2040s%2C%20satisfied%20customer%2C%20friendly%20smile%2C%20residential%20setting%2C%20natural%20lighting%2C%20professional%20headshot&width=100&height=100&seq=sarah-testimonial&orientation=squarish'
    },
    {
      name: 'Michael Thompson',
      role: 'Business Owner',
      location: 'Auckland CBD',
      rating: 5,
      text: 'Excellent work on our office building renovation. The new windows and glass doors have completely transformed our workspace. The team handled everything professionally and on time.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20businessman%20in%20his%2050s%2C%20satisfied%20customer%2C%20business%20attire%2C%20office%20setting%2C%20confident%20smile%2C%20professional%20headshot&width=100&height=100&seq=michael-testimonial&orientation=squarish'
    },
    {
      name: 'Emma Wilson',
      role: 'Property Manager',
      location: 'Ponsonby, Auckland',
      rating: 5,
      text: 'We use Vision & Motion Facades for all our residential properties. Their maintenance services are top-notch and their response time is excellent. Reliable and professional every time.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20female%20property%20manager%20in%20her%2030s%2C%20satisfied%20customer%2C%20professional%20attire%2C%20modern%20office%2C%20confident%20smile%2C%20professional%20headshot&width=100&height=100&seq=emma-testimonial&orientation=squarish'
    },
    {
      name: 'David Lee',
      role: 'Homeowner',
      location: 'Takapuna, Auckland',
      rating: 5,
      text: 'The glass tinting service was fantastic. It has significantly reduced the heat in our home and provides great privacy. The installation was clean and efficient. Very satisfied with the results.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20male%20homeowner%20in%20his%2040s%2C%20satisfied%20customer%2C%20casual%20attire%2C%20residential%20setting%2C%20happy%20expression%2C%20professional%20headshot&width=100&height=100&seq=david-testimonial&orientation=squarish'
    },
    {
      name: 'Rachel Green',
      role: 'Restaurant Owner',
      location: 'Parnell, Auckland',
      rating: 5,
      text: 'Outstanding service from start to finish. The new storefront windows have increased visibility and customer traffic. The team worked around our business hours with minimal disruption.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20female%20restaurant%20owner%20in%20her%2030s%2C%20satisfied%20customer%2C%20modern%20restaurant%20setting%2C%20friendly%20smile%2C%20professional%20headshot&width=100&height=100&seq=rachel-testimonial&orientation=squarish'
    },
    {
      name: 'James Anderson',
      role: 'Facility Manager',
      location: 'Mt Eden, Auckland',
      rating: 5,
      text: 'Professional installation of security doors and windows for our school. The team was thorough, safety-conscious, and delivered exactly what we needed. Excellent communication throughout.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20male%20facility%20manager%20in%20his%2040s%2C%20satisfied%20customer%2C%20business%20attire%2C%20school%20setting%2C%20professional%20smile%2C%20professional%20headshot&width=100&height=100&seq=james-testimonial&orientation=squarish'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Client Testimonials</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Hear what our satisfied clients have to say about our professional services and quality workmanship.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 relative">
              <div className="text-center mb-8">
                <img 
                  src={testimonials[currentSlide].image} 
                  alt={testimonials[currentSlide].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400"></i>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-gray-600 italic mb-6">"{testimonials[currentSlide].text}"</p>
                <h3 className="text-xl font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
                <p className="text-gray-600">{testimonials[currentSlide].role}</p>
                <p className="text-gray-500 text-sm">{testimonials[currentSlide].location}</p>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-left-line text-blue-600"></i>
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 flex items-center justify-center bg-blue-100 hover:bg-blue-200 rounded-full transition-colors cursor-pointer"
                >
                  <i className="ri-arrow-right-line text-blue-600"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read more reviews from our satisfied customers across Auckland
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-4 h-4 flex items-center justify-center">
                      <i className="ri-star-fill text-yellow-400 text-sm"></i>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Customer Satisfaction</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence reflected in customer feedback
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '5.0', label: 'Average Rating', icon: 'ri-star-fill' },
              { number: '98%', label: 'Customer Satisfaction', icon: 'ri-thumb-up-fill' },
              { number: '150+', label: 'Happy Clients', icon: 'ri-user-smile-fill' },
              { number: '95%', label: 'Repeat Customers', icon: 'ri-repeat-fill' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className={`${stat.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Experience</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you worked with us? We'd love to hear about your experience and share it with future clients.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Leave a Review
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}