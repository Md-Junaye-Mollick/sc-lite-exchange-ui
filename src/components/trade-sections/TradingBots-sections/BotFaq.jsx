import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BotFaq = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState(0);
  const faqsData = t('botFaq.questions', { returnObjects: true }) || [];
  const faqs = Array.isArray(faqsData) ? faqsData : [];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-12 bg-primary-bg">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit mx-auto text-3xl sm:text-4xl font-bold text-gradient text-center mb-12">
          {t('botFaq.title')}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-xl border border-custom-border overflow-hidden transition-all duration-300 hover:border-accent/50"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-4 px-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm bg-gradient text-dispute-color border border-custom-border">
                    {index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-dispute-color pr-4">
                    {faq.question}
                  </h3>
                </div>

                <Plus
                  className="flex-shrink-0 w-5 h-5 text-secondary-desc transition-all duration-300"
                  style={{
                    transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              {openFaq === index && (
                <div className="px-6 pb-6">
                  <div className="pl-12">
                    <p className="text-sm sm:text-base leading-relaxed text-secondary-desc">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotFaq;