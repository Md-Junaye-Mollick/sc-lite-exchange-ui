import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const APIsFaq = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(null);

  const faqsData = t('apiFaq.questions', { returnObjects: true }) || [];
  const faqs = Array.isArray(faqsData) ? faqsData : [];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with View More */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient">
            {t('apiFaq.title')}
          </h2>
          <a
            href="#"
            className="text-yellow-400 hover:underline font-medium text-lg"
          >
            {t('apiFaq.viewMore')}
          </a>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-custom-border"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-6 text-left group hover:opacity-80 transition-opacity"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-dispute-color font-medium">
                    {index + 1}.
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-dispute-color pr-4">
                    {faq.question}
                  </h3>
                </div>
                <ChevronRight
                  className="flex-shrink-0 w-6 h-6 text-dispute-color transition-transform duration-300"
                  style={{
                    transform: openFaq === index ? 'rotate(90deg)' : 'rotate(0deg)',
                  }}
                />
              </button>
              {openFaq === index && (
                <div className="pb-6 pl-8">
                  <p className="text-base leading-relaxed text-secondary-desc">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default APIsFaq;