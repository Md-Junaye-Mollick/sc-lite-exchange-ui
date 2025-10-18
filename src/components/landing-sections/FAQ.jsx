import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Popular');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get FAQ items from translation
  const faqItems = t('faq.items', { returnObjects: true });
  const faqArray = Array.isArray(faqItems) ? faqItems : [];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-gray-800/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">{t('faq.heading')}</h2>
            <p className="text-xl text-gray-400">{t('faq.subheading')}</p>
          </div>

          <div className="space-y-4">
            {faqArray.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full p-6 flex items-center justify-between cursor-pointer group"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="flex items-center space-x-4 text-left">
                    <span className="text-yellow-500 font-bold text-lg w-8">{idx + 1}</span>
                    <span className="font-semibold text-lg group-hover:text-yellow-500 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    {expandedFaq === idx ? (
                      <Minus className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-yellow-500" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 ml-12">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;