import React, { useState } from 'react';
import { Plus, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const P2PFaqs = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('beginner');
  const [openFaq, setOpenFaq] = useState(null);

  const tabsData = t('p2pFaqs.tabs', { returnObjects: true }) || [];
  const tabs = Array.isArray(tabsData) ? tabsData : [];
  
  const faqsData = t(`p2pFaqs.${activeTab}`, { returnObjects: true }) || [];
  const faqs = Array.isArray(faqsData) ? faqsData : [];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
            {t('p2pFaqs.title')}
          </h2>

          <div className="inline-flex rounded-xl border border-custom-border overflow-hidden bg-sub-card">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient text-white'
                    : 'text-secondary-desc hover:text-dispute-color'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-sm  border border-custom-border overflow-hidden transition-all duration-300 hover:border-accent/50"
            >
              <button
                onClick={() => faq.type === 'expandable' ? toggleFaq(index) : null}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm sm:text-base bg-gradient text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-dispute-color pr-4 transition-colors duration-300">
                    {faq.question}
                  </h3>
                </div>

                {faq.type === 'link' ? (
                  <ExternalLink className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc transition-colors duration-300" />
                ) : (
                  <Plus
                    className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc transition-all duration-300"
                    style={{
                      transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  />
                )}
              </button>

              {/* FAQ Answer */}
              {faq.type !== 'link' && openFaq === index && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="pl-12 sm:pl-14">
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-line text-secondary-desc">
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

export default P2PFaqs;