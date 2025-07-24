'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'Anthony Dulay',
      role: 'Founder & CEO',
      description: 'With over 15 years of experience in the facade industry, Anthony leads our team with expertise and passion.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20middle-aged%20man%20in%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20construction%20industry%20executive&width=300&height=400&seq=anthony-portrait&orientation=portrait'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      description: 'Sarah ensures every project runs smoothly from start to finish, coordinating teams and timelines.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20woman%20in%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20project%20management%20professional&width=300&height=400&seq=sarah-portrait&orientation=portrait'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Technician',
      description: 'Michael brings precision and craftsmanship to every installation with his technical expertise.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20man%20in%20work%20attire%2C%20confident%20smile%2C%20construction%20site%20background%2C%20professional%20headshot%20photography%2C%20skilled%20technician&width=300&height=400&seq=michael-portrait&orientation=portrait'
    },
    {
      name: 'Lisa Williams',
      role: 'Design Consultant',
      description: 'Lisa helps clients choose the perfect windows and doors to match their vision and needs.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20woman%20in%20business%20attire%2C%20confident%20smile%2C%20modern%20office%20background%2C%20professional%20headshot%20photography%2C%20design%20consultant&width=300&height=400&seq=lisa-portrait&orientation=portrait'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Leading the industry with professional excellence and innovative solutions for over a decade.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600">
                Vision & Motion Facades was founded with a simple mission: to provide exceptional window and door solutions that transform properties while delivering outstanding customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Modern%20commercial%20building%20with%20beautiful%20glass%20facades%2C%20professional%20construction%20company%20office%2C%20contemporary%20architecture%2C%20skilled%20workers%20on%20site%2C%20quality%20craftsmanship%2C%20clean%20professional%20environment&width=600&height=400&seq=company-story&orientation=landscape"
                  alt="Company Building" 
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">15+ Years of Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Since our establishment, we have been dedicated to delivering top-quality facade solutions across Auckland and beyond. Our commitment to excellence has made us a trusted name in the industry.
                </p>
                <p className="text-gray-600 mb-6">
                  We specialize in windows, doors, glass tinting, and maintenance services, serving both residential and commercial clients with the same level of professionalism and attention to detail.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by our core values, we strive to exceed expectations in every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality, using only the finest materials and employing skilled craftsmen.',
                icon: 'ri-star-line'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions that exceed expectations.',
                icon: 'ri-customer-service-line'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methods to provide cutting-edge solutions for our clients.',
                icon: 'ri-lightbulb-line'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                  <i className={`${value.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced professionals are dedicated to bringing your vision to life with expertise and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-48 h-64 object-cover rounded-lg shadow-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through our certifications and partnerships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Licensed Building Practitioners',
                description: 'All our team members are fully licensed and certified professionals.',
                icon: 'ri-award-line'
              },
              {
                title: 'Quality Assurance',
                description: 'Our work meets and exceeds New Zealand building codes and standards.',
                icon: 'ri-shield-check-line'
              },
              {
                title: 'Insured & Bonded',
                description: 'Comprehensive insurance coverage for your peace of mind.',
                icon: 'ri-secure-payment-line'
              }
            ].map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                  <i className={`${cert.icon} text-3xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the Vision & Motion Facades difference. Let's discuss your project today.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}