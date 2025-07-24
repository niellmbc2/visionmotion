
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://static.readdy.ai/image/db258c4bf693dead1c7155b2a8b919f5/b8e7f01e624c67f408529f317aea63f8.png"
                alt="VMF Logo"
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vision & Motion Facades</h1>
                <p className="text-sm text-gray-600">VISION & MOTION FACADES LTD.</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-[#4A5FBB] transition-colors cursor-pointer">Home</Link>
              <Link href="#services" className="text-gray-700 hover:text-[#4A5FBB] transition-colors cursor-pointer">Services</Link>
              <Link href="#about" className="text-gray-700 hover:text-[#4A5FBB] transition-colors cursor-pointer">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#4A5FBB] transition-colors cursor-pointer">Contact</Link>
            </nav>
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-[#4A5FBB] cursor-pointer">
                <i className="ri-menu-line text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center" style={{
        backgroundImage: `linear-gradient(rgba(74, 95, 187, 0.6), rgba(74, 95, 187, 0.4)), url('https://readdy.ai/api/search-image?query=Modern%20building%20facade%20with%20large%20glass%20windows%20and%20doors%2C%20professional%20architecture%2C%20clean%20lines%2C%20contemporary%20design%2C%20natural%20lighting%2C%20minimalist%20aesthetic%2C%20high-quality%20construction%20materials%2C%20urban%20setting%2C%20blue%20tinted%20glass%20windows&width=1200&height=800&seq=hero-facade-vmf&orientation=landscape')`
      }}>
        <div className="container mx-auto px-4 w-full">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Window & Door Solutions
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Your one-stop destination for all your window and door needs. Our professional and top-of-the-line services will leave your home or building looking sleek, modern, and secure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#4A5FBB] hover:bg-[#3A4F9B] text-white px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Get Free Quote
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-[#4A5FBB] px-8 py-4 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive window and door solutions with precision and efficiency
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4A5FBB]/10 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-window-line text-[#4A5FBB] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Windows</h3>
              <p className="text-gray-600 mb-6">
                From installation to repairs, our experts will take care of all your window needs with precision and efficiency.
              </p>
              <button className="text-[#4A5FBB] hover:text-[#3A4F9B] font-medium cursor-pointer">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#8BA0E6]/20 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-door-line text-[#4A5FBB] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Doors</h3>
              <p className="text-gray-600 mb-6">
                We offer a wide range of door services, including installation, maintenance, and repairs, to keep your home or building secure and stylish.
              </p>
              <button className="text-[#4A5FBB] hover:text-[#3A4F9B] font-medium cursor-pointer">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#C6D2F5]/30 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-sun-line text-[#4A5FBB] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Glass Tinting</h3>
              <p className="text-gray-600 mb-6">
                Our glass tinting services provide privacy, protection from UV rays, and energy efficiency to your windows.
              </p>
              <button className="text-[#4A5FBB] hover:text-[#3A4F9B] font-medium cursor-pointer">
                Learn More →
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#4A5FBB]/10 rounded-lg flex items-center justify-center mb-6">
                <i className="ri-tools-line text-[#4A5FBB] text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-4">Maintenance</h3>
              <p className="text-gray-600 mb-6">
                Keep your windows and doors in top condition with our maintenance services. Trust us to preserve their functionality and appearance.
              </p>
              <button className="text-[#4A5FBB] hover:text-[#3A4F9B] font-medium cursor-pointer">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Vision & Motion Facades?</h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the industry, we have established ourselves as the leading provider of window and door solutions in Auckland. Our commitment to quality, professionalism, and customer satisfaction sets us apart.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#4A5FBB] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Professional Installation</h4>
                    <p className="text-gray-600">Expert technicians with years of experience</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#4A5FBB] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                    <p className="text-gray-600">Only the finest materials for lasting results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#4A5FBB] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                    <p className="text-gray-600">Fair and transparent pricing with no hidden costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#4A5FBB] rounded-full flex items-center justify-center mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Warranty Coverage</h4>
                    <p className="text-gray-600">Comprehensive warranty on all our work</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20construction%20workers%20installing%20modern%20windows%20and%20doors%2C%20skilled%20technicians%20at%20work%2C%20high-quality%20craftsmanship%2C%20professional%20tools%20and%20equipment%2C%20safety%20gear%2C%20modern%20building%20project%2C%20Auckland%20construction%20site%2C%20blue%20work%20uniforms&width=600&height=400&seq=about-work-vmf&orientation=landscape"
                alt="Professional Installation"
                className="rounded-lg shadow-lg object-cover w-full h-96 object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to transform your space? Contact us for a free consultation
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4A5FBB]/10 rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-[#4A5FBB] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      48d Mclean Avenue<br />
                      Papatoetoe<br />
                      Auckland<br />
                      New Zealand 2025
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#8BA0E6]/20 rounded-lg flex items-center justify-center">
                    <i className="ri-phone-line text-[#4A5FBB] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">0277845886</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#C6D2F5]/30 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-[#4A5FBB] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">anthony.dulay@v-mfacades.co.nz</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#4A5FBB]/10 rounded-lg flex items-center justify-center">
                    <i className="ri-time-line text-[#4A5FBB] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Working Hours</h4>
                    <p className="text-gray-600">
                      Mon-Fri: 8:00 am – 6:00 pm<br />
                      Sat-Sun: 9:00 am – 5:00 pm
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-white rounded-lg shadow-md p-8" id="contact-form">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB]"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB]"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                  <div className="relative">
                    <select 
                      name="service"
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB] appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option value="windows">Windows</option>
                      <option value="doors">Doors</option>
                      <option value="glass-tinting">Glass Tinting</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5FBB] focus:border-[#4A5FBB]"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#4A5FBB] hover:bg-[#3A4F9B] text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://static.readdy.ai/image/db258c4bf693dead1c7155b2a8b919f5/b8e7f01e624c67f408529f317aea63f8.png"
                  alt="VMF Logo"
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">Vision & Motion Facades</h3>
                  <p className="text-xs text-gray-400">VISION & MOTION FACADES LTD.</p>
                </div>
              </div>
              <p className="text-gray-400">
                Your trusted partner for professional window and door solutions in Auckland.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Windows</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Doors</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Glass Tinting</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors cursor-pointer">Maintenance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>48d Mclean Avenue<br />Papatoetoe, Auckland 2025</p>
                <p>Phone: 0277845886</p>
                <p>Email: anthony.dulay@v-mfacades.co.nz</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4A5FBB] transition-colors cursor-pointer">
                  <i className="ri-facebook-fill text-xl"></i>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4A5FBB] transition-colors cursor-pointer">
                  <i className="ri-twitter-fill text-xl"></i>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4A5FBB] transition-colors cursor-pointer">
                  <i className="ri-instagram-fill text-xl"></i>
                </button>
                <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#4A5FBB] transition-colors cursor-pointer">
                  <i className="ri-linkedin-fill text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Vision & Motion Facades. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
