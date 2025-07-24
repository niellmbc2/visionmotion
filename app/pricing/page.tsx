'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('windows');

  const pricingData = {
    windows: [
      {
        title: 'Basic Window Package',
        price: '$1,200',
        unit: 'per window',
        features: [
          'Standard double glazing',
          'Basic frame material',
          'Standard installation',
          '2-year warranty',
          'Basic hardware'
        ],
        popular: false
      },
      {
        title: 'Premium Window Package',
        price: '$1,800',
        unit: 'per window',
        features: [
          'Energy efficient double glazing',
          'Premium frame material',
          'Professional installation',
          '5-year warranty',
          'Premium hardware',
          'Weather sealing'
        ],
        popular: true
      },
      {
        title: 'Luxury Window Package',
        price: '$2,500',
        unit: 'per window',
        features: [
          'Triple glazing available',
          'Premium materials',
          'Expert installation',
          '10-year warranty',
          'High-end hardware',
          'Advanced weather sealing',
          'Custom sizing'
        ],
        popular: false
      }
    ],
    doors: [
      {
        title: 'Standard Door Package',
        price: '$1,500',
        unit: 'per door',
        features: [
          'Basic entry door',
          'Standard frame',
          'Basic installation',
          '2-year warranty',
          'Standard hardware'
        ],
        popular: false
      },
      {
        title: 'Security Door Package',
        price: '$2,200',
        unit: 'per door',
        features: [
          'Security enhanced door',
          'Reinforced frame',
          'Professional installation',
          '5-year warranty',
          'Security hardware',
          'Multi-point locking'
        ],
        popular: true
      },
      {
        title: 'Premium Door Package',
        price: '$3,000',
        unit: 'per door',
        features: [
          'High-end entry door',
          'Premium materials',
          'Expert installation',
          '10-year warranty',
          'Premium hardware',
          'Advanced security features',
          'Custom design options'
        ],
        popular: false
      }
    ],
    tinting: [
      {
        title: 'Basic Tinting',
        price: '$15',
        unit: 'per sq ft',
        features: [
          'Standard tint film',
          'Basic UV protection',
          'Professional application',
          '3-year warranty',
          'Standard maintenance'
        ],
        popular: false
      },
      {
        title: 'Premium Tinting',
        price: '$25',
        unit: 'per sq ft',
        features: [
          'High-grade tint film',
          'Superior UV protection',
          'Expert application',
          '5-year warranty',
          'Enhanced durability',
          'Heat reduction'
        ],
        popular: true
      },
      {
        title: 'Commercial Tinting',
        price: '$35',
        unit: 'per sq ft',
        features: [
          'Commercial grade film',
          'Maximum UV protection',
          'Professional installation',
          '7-year warranty',
          'Privacy enhancement',
          'Energy efficiency',
          'Custom solutions'
        ],
        popular: false
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transparent pricing for quality window and door solutions. Get the best value for your investment.
          </p>
        </div>
      </section>

      {/* Service Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { key: 'windows', label: 'Windows', icon: 'ri-window-line' },
              { key: 'doors', label: 'Doors', icon: 'ri-door-line' },
              { key: 'tinting', label: 'Glass Tinting', icon: 'ri-contrast-line' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <i className={`${tab.icon} text-lg`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData[activeTab as keyof typeof pricingData].map((package_, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${package_.popular ? 'border-4 border-blue-500 transform scale-105' : ''}`}>
                {package_.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{package_.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{package_.price}</span>
                    <span className="text-gray-600 ml-2">{package_.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {package_.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 flex items-center justify-center">
                          <i className="ri-check-line text-green-600 text-lg"></i>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                      package_.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete solutions for all your window and door needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Emergency Repairs',
                price: '$150',
                unit: 'per hour',
                description: '24/7 emergency repair services',
                icon: 'ri-tools-line'
              },
              {
                title: 'Maintenance Package',
                price: '$200',
                unit: 'per year',
                description: 'Annual maintenance and inspection',
                icon: 'ri-settings-line'
              },
              {
                title: 'Custom Design',
                price: '$500',
                unit: 'consultation',
                description: 'Bespoke window and door design',
                icon: 'ri-pencil-ruler-line'
              },
              {
                title: 'Installation Only',
                price: '$300',
                unit: 'per item',
                description: 'Installation service for your materials',
                icon: 'ri-hammer-line'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-4">
                  <i className={`${service.icon} text-2xl text-blue-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-600 text-sm ml-1">{service.unit}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link 
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Financing Options</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible payment solutions to make your project affordable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cash Payment',
                discount: '5% Discount',
                description: 'Pay in full and receive a 5% discount on your total project cost',
                icon: 'ri-money-dollar-circle-line'
              },
              {
                title: 'Payment Plans',
                discount: '0% Interest',
                description: 'Flexible payment plans with 0% interest for qualified customers',
                icon: 'ri-calendar-line'
              },
              {
                title: 'Project Financing',
                discount: 'Low Rates',
                description: 'Competitive financing rates for larger commercial projects',
                icon: 'ri-bank-line'
              }
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-6">
                  <i className={`${option.icon} text-2xl text-green-600`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <div className="text-green-600 font-semibold mb-4">{option.discount}</div>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'Do you provide free quotes?',
                answer: 'Yes, we provide free, no-obligation quotes for all our services. Our team will assess your needs and provide a detailed estimate.'
              },
              {
                question: 'What factors affect pricing?',
                answer: 'Pricing depends on material quality, size, complexity of installation, location, and any custom requirements. We provide transparent pricing with no hidden costs.'
              },
              {
                question: 'Do you offer warranties?',
                answer: 'Yes, all our packages include warranties ranging from 2 to 10 years depending on the service level. We also provide ongoing maintenance support.'
              },
              {
                question: 'Are there any additional costs?',
                answer: 'Our quotes include all standard installation costs. Additional costs may apply for special access requirements, permits, or unexpected structural modifications.'
              },
              {
                question: 'Do you offer commercial discounts?',
                answer: 'Yes, we offer competitive rates for commercial projects and bulk installations. Contact us for a customized commercial quote.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
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