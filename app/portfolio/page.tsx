'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: 'Modern Office Building - Auckland CBD',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20office%20building%20with%20large%20glass%20windows%20and%20contemporary%20facade%20design%2C%20professional%20architecture%2C%20Auckland%20city%20skyline%2C%20blue%20and%20white%20color%20scheme%2C%20clean%20lines%2C%20modern%20glass%20installation&width=600&height=400&seq=office-building&orientation=landscape',
      description: 'Complete window and door installation for a 10-story office building featuring energy-efficient double glazing and automated entry systems.'
    },
    {
      title: 'Luxury Residential Home - Remuera',
      category: 'residential',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20residential%20home%20with%20modern%20windows%20and%20doors%2C%20contemporary%20New%20Zealand%20architecture%2C%20beautiful%20landscaping%2C%20high-end%20window%20installation%2C%20elegant%20design%2C%20premium%20materials&width=600&height=400&seq=luxury-home&orientation=landscape',
      description: 'Custom window and door solutions for a high-end residential property including French doors, sliding windows, and security features.'
    },
    {
      title: 'Retail Store Front - Newmarket',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20store%20front%20with%20large%20display%20windows%2C%20contemporary%20commercial%20facade%2C%20professional%20glass%20installation%2C%20shopping%20center%20storefront%2C%20clean%20modern%20design%2C%20commercial%20glazing&width=600&height=400&seq=retail-store&orientation=landscape',
      description: 'Storefront renovation with large display windows and glass entry doors to enhance customer visibility and accessibility.'
    },
    {
      title: 'Apartment Complex - Ponsonby',
      category: 'residential',
      image: 'https://readdy.ai/api/search-image?query=Modern%20apartment%20complex%20with%20contemporary%20windows%20and%20balcony%20doors%2C%20multi-story%20residential%20building%2C%20professional%20window%20installation%2C%20Auckland%20residential%20architecture%2C%20modern%20facade%20design&width=600&height=400&seq=apartment-complex&orientation=landscape',
      description: 'Window replacement project for a 50-unit apartment complex with energy-efficient glazing and modern hardware.'
    },
    {
      title: 'Restaurant Glass Tinting - Parnell',
      category: 'tinting',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20interior%20with%20professional%20window%20tinting%2C%20modern%20dining%20space%2C%20privacy%20glass%20installation%2C%20commercial%20window%20tinting%2C%20elegant%20restaurant%20design%2C%20professional%20glazing%20service&width=600&height=400&seq=restaurant-tinting&orientation=landscape',
      description: 'Professional glass tinting installation for a upscale restaurant to provide privacy and reduce glare while maintaining natural light.'
    },
    {
      title: 'School Building Windows - Mt Eden',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=Modern%20school%20building%20with%20large%20windows%2C%20educational%20facility%20facade%2C%20professional%20window%20installation%2C%20contemporary%20educational%20architecture%2C%20safe%20and%20secure%20window%20systems%2C%20institutional%20building%20design&width=600&height=400&seq=school-building&orientation=landscape',
      description: 'Safety-focused window installation for an educational facility with impact-resistant glass and secure locking systems.'
    },
    {
      title: 'Historic Home Restoration - Devonport',
      category: 'residential',
      image: 'https://readdy.ai/api/search-image?query=Historic%20New%20Zealand%20home%20restoration%20with%20traditional%20windows%20and%20doors%2C%20heritage%20building%20renovation%2C%20classic%20architectural%20features%2C%20professional%20restoration%20work%2C%20traditional%20design%20elements&width=600&height=400&seq=historic-home&orientation=landscape',
      description: 'Careful restoration of windows and doors in a heritage home while maintaining historical authenticity and improving energy efficiency.'
    },
    {
      title: 'Hotel Entrance - Viaduct Harbour',
      category: 'commercial',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20hotel%20entrance%20with%20modern%20glass%20doors%20and%20windows%2C%20contemporary%20hospitality%20design%2C%20professional%20commercial%20glazing%2C%20elegant%20entrance%20design%2C%20high-end%20materials%20and%20finishes&width=600&height=400&seq=hotel-entrance&orientation=landscape',
      description: 'Grand entrance installation for a luxury hotel featuring automated glass doors and floor-to-ceiling windows.'
    },
    {
      title: 'Residential Tinting - Takapuna',
      category: 'tinting',
      image: 'https://readdy.ai/api/search-image?query=Modern%20residential%20home%20with%20professional%20window%20tinting%2C%20privacy%20glass%20installation%2C%20contemporary%20home%20design%2C%20energy%20efficient%20window%20tinting%2C%20residential%20glazing%20service%2C%20clean%20modern%20architecture&width=600&height=400&seq=residential-tinting&orientation=landscape',
      description: 'Comprehensive window tinting for a modern family home to improve energy efficiency and provide UV protection.'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our completed projects showcasing professional craftsmanship and innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'all', label: 'All Projects' },
              { key: 'residential', label: 'Residential' },
              { key: 'commercial', label: 'Commercial' },
              { key: 'tinting', label: 'Glass Tinting' }
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.category === 'residential' 
                        ? 'bg-green-100 text-green-800'
                        : project.category === 'commercial'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {project.category === 'residential' ? 'Residential' : 
                       project.category === 'commercial' ? 'Commercial' : 'Glass Tinting'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Years of dedication and professional excellence reflected in our numbers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '100+', label: 'Commercial Projects' },
              { number: '400+', label: 'Residential Projects' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Before & After</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the transformation we bring to properties through our professional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Building Renovation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Before</h4>
                    <img 
                      src="https://readdy.ai/api/search-image?query=Old%20office%20building%20with%20outdated%20windows%20and%20doors%2C%20worn%20facade%2C%20dated%20commercial%20building%2C%20needs%20renovation%2C%20old%20glass%20installation%2C%20tired%20appearance&width=300&height=200&seq=before-office&orientation=landscape"
                      alt="Before renovation" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">After</h4>
                    <img 
                      src="https://readdy.ai/api/search-image?query=Modern%20renovated%20office%20building%20with%20new%20windows%20and%20doors%2C%20contemporary%20facade%2C%20professional%20renovation%2C%20modern%20glass%20installation%2C%20fresh%20clean%20appearance%2C%20improved%20commercial%20building&width=300&height=200&seq=after-office&orientation=landscape"
                      alt="After renovation" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Residential Home Upgrade</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Before</h4>
                    <img 
                      src="https://readdy.ai/api/search-image?query=Old%20residential%20home%20with%20outdated%20windows%20and%20doors%2C%20traditional%20design%2C%20needs%20window%20replacement%2C%20dated%20home%20exterior%2C%20old%20glass%20installation&width=300&height=200&seq=before-home&orientation=landscape"
                      alt="Before renovation" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">After</h4>
                    <img 
                      src="https://readdy.ai/api/search-image?query=Modern%20residential%20home%20with%20new%20windows%20and%20doors%2C%20contemporary%20design%2C%20professional%20window%20installation%2C%20updated%20home%20exterior%2C%20modern%20glass%20installation%2C%20improved%20appearance&width=300&height=200&seq=after-home&orientation=landscape"
                      alt="After renovation" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and transform your property with professional window and door solutions.
          </p>
          <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            Get Your Free Quote
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}