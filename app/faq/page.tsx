'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'What services does Vision & Motion Facades offer?',
          answer: 'We offer comprehensive window and door solutions including installation, replacement, glass tinting, and maintenance services for both residential and commercial properties.'
        },
        {
          question: 'How long have you been in business?',
          answer: 'Vision & Motion Facades has been serving Auckland and surrounding areas for over 15 years, completing more than 500 successful projects.'
        },
        {
          question: 'Do you provide free quotes?',
          answer: 'Yes, we provide free, no-obligation quotes for all our services. Our team will visit your property to assess your needs and provide a detailed estimate.'
        },
        {
          question: 'Are you licensed and insured?',
          answer: 'Yes, we are fully licensed building practitioners with comprehensive insurance coverage. All our work meets New Zealand building codes and standards.'
        }
      ]
    },
    {
      category: 'Installation & Process',
      questions: [
        {
          question: 'How long does a typical installation take?',
          answer: 'Installation time varies depending on the project size and complexity. A single window typically takes 2-4 hours, while a complete home project may take 2-5 days.'
        },
        {
          question: 'Do you handle permits and approvals?',
          answer: 'Yes, we handle all necessary permits and building approvals as part of our service. We ensure all work complies with local building codes.'
        },
        {
          question: 'What happens if there are unexpected issues during installation?',
          answer: 'Our experienced team can handle most unexpected issues. We will inform you of any additional work needed and provide transparent pricing for any changes.'
        },
        {
          question: 'Do you clean up after installation?',
          answer: 'Yes, we provide complete cleanup service after installation, leaving your property clean and ready to enjoy your new windows and doors.'
        }
      ]
    },
    {
      category: 'Products & Materials',
      questions: [
        {
          question: 'What types of windows do you install?',
          answer: 'We install various window types including sliding, casement, awning, fixed, and double-hung windows. All feature energy-efficient double glazing options.'
        },
        {
          question: 'What door options are available?',
          answer: 'We offer entry doors, sliding doors, French doors, security doors, and commercial doors in various materials including timber, aluminum, and composite.'
        },
        {
          question: 'Do you offer energy-efficient options?',
          answer: 'Yes, all our windows and doors feature energy-efficient designs with double glazing, weather sealing, and thermal breaks to reduce energy costs.'
        },
        {
          question: 'Can you match existing architectural styles?',
          answer: 'Absolutely! We offer custom solutions to match your property\'s architectural style, whether it\'s traditional, modern, or heritage.'
        }
      ]
    },
    {
      category: 'Maintenance & Warranty',
      questions: [
        {
          question: 'What warranty do you provide?',
          answer: 'We offer warranties ranging from 2 to 10 years depending on the service level. Our premium packages include extended warranties and ongoing support.'
        },
        {
          question: 'Do you offer maintenance services?',
          answer: 'Yes, we provide comprehensive maintenance services including cleaning, hardware adjustments, seal replacements, and performance optimization.'
        },
        {
          question: 'What if I have issues after installation?',
          answer: 'We provide ongoing support and will address any issues promptly. Our warranty covers defects in materials and workmanship.'
        },
        {
          question: 'How often should windows and doors be maintained?',
          answer: 'We recommend annual maintenance for optimal performance. Our maintenance packages include regular inspections and preventive care.'
        }
      ]
    },
    {
      category: 'Glass Tinting',
      questions: [
        {
          question: 'What are the benefits of glass tinting?',
          answer: 'Glass tinting provides UV protection, reduces glare, improves privacy, enhances energy efficiency, and can reduce cooling costs by up to 30%.'
        },
        {
          question: 'How long does tinting last?',
          answer: 'Quality tinting typically lasts 5-10 years with proper care. We use high-grade films that resist fading and peeling.'
        },
        {
          question: 'Can tinting be removed?',
          answer: 'Yes, tinting can be professionally removed if needed. We can also replace old tinting with new films for updated performance.'
        },
        {
          question: 'What tinting options are available?',
          answer: 'We offer various tinting levels from light to dark, as well as decorative films, privacy films, and energy-efficient options.'
        }
      ]
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and products.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center">
                <i className="ri-search-line text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const globalIndex = categoryIndex * 100 + questionIndex;
                    return (
                      <div key={questionIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          <span className="font-semibold text-gray-900">{faq.question}</span>
                          <div className="w-6 h-6 flex items-center justify-center">
                            <i className={`ri-${openQuestion === globalIndex ? 'subtract' : 'add'}-line text-blue-600`}></i>
                          </div>
                        </button>
                        {openQuestion === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance with your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a 
                href="tel:0277845886" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                0277845886
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <a 
                href="mailto:anthony.dulay@v-mfacades.co.nz" 
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                anthony.dulay@v-mfacades.co.nz
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mx-auto mb-6">
                <i className="ri-calendar-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Consultation</h3>
              <p className="text-gray-600 mb-4">Book a free consultation</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Tips</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Helpful tips for maintaining your windows and doors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Regular Cleaning',
                tip: 'Clean windows and doors monthly with appropriate cleaning solutions',
                icon: 'ri-brush-line'
              },
              {
                title: 'Check Seals',
                tip: 'Inspect weather seals annually and replace if damaged',
                icon: 'ri-shield-check-line'
              },
              {
                title: 'Lubricate Hardware',
                tip: 'Lubricate hinges and locks every 6 months for smooth operation',
                icon: 'ri-oil-line'
              },
              {
                title: 'Professional Service',
                tip: 'Schedule annual professional maintenance for optimal performance',
                icon: 'ri-tools-line'
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-4">
                  <i className={`${tip.icon} text-2xl text-green-600`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}