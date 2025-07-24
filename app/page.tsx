'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20building%20facade%20with%20glass%20windows%20and%20doors%2C%20contemporary%20architecture%2C%20clean%20lines%2C%20blue%20and%20white%20color%20scheme%2C%20professional%20lighting%2C%20sleek%20design%2C%20minimalist%20background%2C%20commercial%20building%20exterior&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vision & Motion Facades
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your one-stop destination for all your window and door needs. Professional and top-of-the-line services will leave your home or building looking sleek, modern, and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive window and door solutions for residential and commercial properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Windows',
                description: 'Professional window installation and replacement services',
                icon: 'ri-window-line',
                image: 'https://readdy.ai/api/search-image?query=Modern%20window%20installation%20professional%20service%2C%20clean%20glass%20windows%2C%20residential%20and%20commercial%20building%20windows%2C%20professional%20installation%20work%2C%20high%20quality%20materials%2C%20contemporary%20design&width=400&height=300&seq=windows-service&orientation=landscape'
              },
              {
                title: 'Doors',
                description: 'Quality door installation and repair services',
                icon: 'ri-door-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20door%20installation%20service%2C%20modern%20entry%20doors%2C%20commercial%20and%20residential%20doors%2C%20high%20quality%20door%20systems%2C%20professional%20installation%20work%2C%20contemporary%20design&width=400&height=300&seq=doors-service&orientation=landscape'
              },
              {
                title: 'Glass Tinting',
                description: 'Professional glass tinting for privacy and energy efficiency',
                icon: 'ri-contrast-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20glass%20tinting%20service%2C%20window%20tinting%20application%2C%20privacy%20glass%20installation%2C%20energy%20efficient%20tinting%2C%20professional%20technician%20working%20on%20windows&width=400&height=300&seq=tinting-service&orientation=landscape'
              },
              {
                title: 'Maintenance',
                description: 'Comprehensive maintenance and repair services',
                icon: 'ri-tools-line',
                image: 'https://readdy.ai/api/search-image?query=Professional%20maintenance%20service%20for%20windows%20and%20doors%2C%20repair%20work%2C%20quality%20maintenance%20tools%2C%20skilled%20technician%20working%2C%20professional%20service%20equipment&width=400&height=300&seq=maintenance-service&orientation=landscape'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${service.image}')` }}></div>
                <div className="p-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg mb-4">
                    <i className={`${service.icon} text-2xl text-blue-600`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href="/services" 
                    className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vision & Motion Facades?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional quality and professional service that exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Professional Excellence',
                description: 'Our team of skilled professionals ensures top-quality workmanship on every project',
                icon: 'ri-award-line'
              },
              {
                title: 'Modern Solutions',
                description: 'We use the latest technology and materials to deliver sleek, modern results',
                icon: 'ri-star-line'
              },
              {
                title: 'Secure & Reliable',
                description: 'All our installations prioritize security and long-term reliability',
                icon: 'ri-shield-check-line'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                  <i className={`${feature.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your vision to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/portfolio" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}