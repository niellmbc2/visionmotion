'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="https://static.readdy.ai/image/7e876263163b7278e53c31bd2f7c2500/b8e7f01e624c67f408529f317aea63f8.png" 
              alt="Vision & Motion Facades" 
              className="h-10 w-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-3">Vision & Motion Facades</h3>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for all your window and door needs. Professional and top-of-the-line services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Windows Installation</li>
              <li className="text-gray-400">Doors Installation</li>
              <li className="text-gray-400">Glass Tinting</li>
              <li className="text-gray-400">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-blue-400"></i>
                </div>
                <div>
                  <p className="text-gray-400">48d Mclean Avenue</p>
                  <p className="text-gray-400">Papatoetoe, Auckland</p>
                  <p className="text-gray-400">New Zealand 2025</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-blue-400"></i>
                </div>
                <p className="text-gray-400">0277845886</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-blue-400"></i>
                </div>
                <p className="text-gray-400">anthony.dulay@v-mfacades.co.nz</p>
              </div>
            </div>
          </div>
        </div>

        {/* Working Hours */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Working Hours</h4>
              <p className="text-gray-400">Mon-Fri: 8:00 am – 6:00 pm</p>
              <p className="text-gray-400">Sat-Sun: 9:00 am – 5:00 pm</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Vision & Motion Facades Ltd. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}