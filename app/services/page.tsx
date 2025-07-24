'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Windows Installation',
      description: 'Professional window installation and replacement services for residential and commercial properties. We offer a wide range of window types including sliding, casement, awning, and fixed windows.',
      features: [
        'Double glazed windows',
        'Energy efficient options',
        'Custom sizing available',
        'Professional installation',
        'Warranty included'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20window%20installation%20service%2C%20modern%20double%20glazed%20windows%2C%20residential%20building%20windows%2C%20skilled%20technician%20installing%20windows%2C%20quality%20materials%2C%20contemporary%20design%20with%20clean%20background&width=600&height=400&seq=windows-detail&orientation=landscape'
    },
    {
      title: 'Doors Installation',
      description: 'Quality door installation and repair services including entry doors, sliding doors, French doors, and security doors. We ensure proper fit, security, and aesthetic appeal.',
      features: [
        'Entry doors',
        'Sliding doors',
        'French doors',
        'Security doors',
        'Custom designs'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20door%20installation%20service%2C%20modern%20entry%20doors%2C%20commercial%20and%20residential%20doors%2C%20skilled%20technician%20installing%20door%2C%20high%20quality%20door%20systems%2C%20contemporary%20design%20with%20clean%20background&width=600&height=400&seq=doors-detail&orientation=landscape'
    },
    {
      title: 'Glass Tinting',
      description: 'Professional glass tinting services for privacy, energy efficiency, and UV protection. Available for both residential and commercial properties with various tint levels.',
      features: [
        'UV protection',
        'Energy savings',
        'Privacy enhancement',
        'Glare reduction',
        'Multiple tint options'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20glass%20tinting%20service%2C%20window%20tinting%20application%2C%20privacy%20glass%20installation%2C%20energy%20efficient%20tinting%2C%20professional%20technician%20applying%20tint%20film%2C%20clean%20modern%20workspace&width=600&height=400&seq=tinting-detail&orientation=landscape'
    },
    {
      title: 'Maintenance Services',
      description: 'Comprehensive maintenance and repair services to keep your windows and doors in optimal condition. Regular maintenance extends the life of your installations.',
      features: [
        'Regular inspections',
        'Cleaning services',
        'Hardware repairs',
        'Seal replacements',
        'Performance optimization'
      ],
      image: 'https://readdy.ai/api/search-image?query=Professional%20maintenance%20service%20for%20windows%20and%20doors%2C%20repair%20work%2C%20quality%20maintenance%20tools%2C%20skilled%20technician%20working%2C%20professional%20service%20equipment%2C%20clean%20workspace%20background&width=600&height=400&seq=maintenance-detail&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional window and door solutions tailored to your needs. Quality workmanship guaranteed.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-check-line text-green-600 text-xl"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap inline-block"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, efficient, and professional - from consultation to completion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We assess your needs and provide expert recommendations',
                icon: 'ri-discuss-line'
              },
              {
                step: '02',
                title: 'Quote',
                description: 'Detailed quote with transparent pricing and timeline',
                icon: 'ri-file-list-line'
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation by our skilled team',
                icon: 'ri-tools-line'
              },
              {
                step: '04',
                title: 'Completion',
                description: 'Final inspection and warranty documentation',
                icon: 'ri-check-double-line'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-blue-600`}></i>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and personalized quote for your project.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Get Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}