import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Get FAQ items from translation
  const faqItems = t('faq.items', { returnObjects: true });
  const faqArray = Array.isArray(faqItems) ? faqItems : [];

  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-3 text-gradient">
              {t('faq.heading')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-desc">
              {t('faq.subheading')}
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqArray.map((faq, idx) => (
              <div
                key={idx}
                className="bg-sub-card backdrop-blur-sm rounded-xl sm:rounded-2xl border border-custom-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full p-4 sm:p-6 flex items-center justify-between cursor-pointer group"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 text-left">
                    <span className="text-accent font-bold text-base sm:text-lg w-6 sm:w-8 flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-semibold text-sm sm:text-base lg:text-lg text-dispute-color group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform duration-300 flex-shrink-0 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    {expandedFaq === idx ? (
                      <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    ) : (
                      <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc group-hover:text-accent" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 ml-9 sm:ml-12">
                    <p className="text-secondary-desc leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
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