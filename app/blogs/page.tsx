'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'Energy-Efficient Windows: A Smart Investment for Auckland Homes',
      category: 'tips',
      excerpt: 'Discover how energy-efficient windows can reduce your power bills and improve comfort while adding value to your property.',
      image: 'https://readdy.ai/api/search-image?query=Energy%20efficient%20windows%20in%20modern%20Auckland%20home%2C%20double%20glazing%2C%20natural%20light%2C%20contemporary%20residential%20interior%2C%20comfortable%20living%20space%2C%20modern%20window%20installation&width=600&height=400&seq=energy-windows&orientation=landscape',
      author: 'Anthony Dulay',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Choosing the Right Windows for Your Home',
      category: 'guides',
      excerpt: 'Everything you need to know about selecting the perfect windows for your home, from materials to styles and functionality.',
      image: 'https://readdy.ai/api/search-image?query=Different%20types%20of%20windows%20display%2C%20window%20selection%20guide%2C%20residential%20windows%20comparison%2C%20various%20window%20styles%2C%20modern%20window%20showroom%2C%20professional%20window%20options&width=600&height=400&seq=window-guide&orientation=landscape',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Glass Tinting Benefits: Privacy, Comfort, and Energy Savings',
      category: 'services',
      excerpt: 'Learn about the advantages of professional glass tinting and how it can enhance your home or office environment.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20glass%20tinting%20installation%2C%20window%20tinting%20benefits%2C%20privacy%20glass%2C%20energy%20efficient%20tinting%2C%20modern%20office%20with%20tinted%20windows%2C%20professional%20glazing%20service&width=600&height=400&seq=glass-tinting&orientation=landscape',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Security Doors: Protecting Your Home Without Compromising Style',
      category: 'security',
      excerpt: 'Explore modern security door options that provide excellent protection while maintaining aesthetic appeal.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20security%20door%20installation%2C%20stylish%20security%20doors%2C%20home%20protection%2C%20contemporary%20door%20design%2C%20residential%20security%20solutions%2C%20professional%20door%20installation&width=600&height=400&seq=security-doors&orientation=landscape',
      author: 'Lisa Williams',
      date: '2024-01-05',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Maintaining Your Windows and Doors: A Seasonal Guide',
      category: 'maintenance',
      excerpt: 'Essential maintenance tips to keep your windows and doors in perfect condition throughout the year.',
      image: 'https://readdy.ai/api/search-image?query=Window%20and%20door%20maintenance%2C%20seasonal%20care%2C%20cleaning%20windows%2C%20professional%20maintenance%20service%2C%20home%20maintenance%20tips%2C%20well-maintained%20residential%20property&width=600&height=400&seq=maintenance-guide&orientation=landscape',
      author: 'James Anderson',
      date: '2024-01-03',
      readTime: '4 min read'
    },
    {
      id: 6,
      title: 'Commercial Glazing Solutions for Auckland Businesses',
      category: 'commercial',
      excerpt: 'Professional glazing solutions for commercial properties, from storefronts to office buildings.',
      image: 'https://readdy.ai/api/search-image?query=Commercial%20glazing%20installation%2C%20office%20building%20windows%2C%20storefront%20glass%2C%20professional%20commercial%20glazing%2C%20business%20property%20windows%2C%20contemporary%20commercial%20architecture&width=600&height=400&seq=commercial-glazing&orientation=landscape',
      author: 'Anthony Dulay',
      date: '2024-01-01',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Posts' },
    { key: 'tips', label: 'Tips & Advice' },
    { key: 'guides', label: 'Guides' },
    { key: 'services', label: 'Services' },
    { key: 'security', label: 'Security' },
    { key: 'maintenance', label: 'Maintenance' },
    { key: 'commercial', label: 'Commercial' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Expert insights, tips, and guides for windows, doors, and facade solutions.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-cover bg-center" style={{ backgroundImage: `url('${blogPosts[0].image}')` }}></div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-blue-600"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blogs/${blogPosts[0].id}`}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest insights and professional advice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${post.image}')` }}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      post.category === 'tips' ? 'bg-green-100 text-green-800' :
                      post.category === 'guides' ? 'bg-blue-100 text-blue-800' :
                      post.category === 'services' ? 'bg-purple-100 text-purple-800' :
                      post.category === 'security' ? 'bg-red-100 text-red-800' :
                      post.category === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {categories.find(cat => cat.key === post.category)?.label}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-blue-600 text-sm"></i>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blogs/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm cursor-pointer"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest tips, guides, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Topics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our most popular content categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Window Installation',
                count: '12 Articles',
                description: 'Everything about professional window installation',
                icon: 'ri-window-line'
              },
              {
                title: 'Energy Efficiency',
                count: '8 Articles',
                description: 'Tips for improving your home\'s energy efficiency',
                icon: 'ri-leaf-line'
              },
              {
                title: 'Maintenance Tips',
                count: '15 Articles',
                description: 'Keep your windows and doors in perfect condition',
                icon: 'ri-tools-line'
              },
              {
                title: 'Security Solutions',
                count: '10 Articles',
                description: 'Protect your property with modern security features',
                icon: 'ri-shield-line'
              }
            ].map((topic, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className={`${topic.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{topic.title}</h3>
                <p className="text-blue-600 font-semibold mb-3">{topic.count}</p>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}