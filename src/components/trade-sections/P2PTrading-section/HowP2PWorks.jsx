import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FileText, Hand, Wallet, ArrowDownUp, CheckCircle } from 'lucide-react';

const HowP2PWorks = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buy');

  const buyStepsData = t('howP2PWorks.buySteps', { returnObjects: true }) || [];
  const sellStepsData = t('howP2PWorks.sellSteps', { returnObjects: true }) || [];
  
  // Ensure steps are arrays
  const buySteps = Array.isArray(buyStepsData) ? buyStepsData : [];
  const sellSteps = Array.isArray(sellStepsData) ? sellStepsData : [];
  const steps = activeTab === 'buy' ? buySteps : sellSteps;

  const getStepIcon = (index, type) => {
    if (type === 'buy') {
      return [
        <FileText className="w-10 h-10 sm:w-12 sm:h-12" />,
        <Hand className="w-10 h-10 sm:w-12 sm:h-12" />,
        <Wallet className="w-10 h-10 sm:w-12 sm:h-12" />
      ][index];
    } else {
      return [
        <FileText className="w-10 h-10 sm:w-12 sm:h-12" />,
        <ArrowDownUp className="w-10 h-10 sm:w-12 sm:h-12" />,
        <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
      ][index];
    }
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-custom-border shadow-lg mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dispute-color text-center mb-3 sm:mb-4">
            {t('howP2PWorks.title')}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-secondary-desc text-center max-w-4xl mx-auto">
            {t('howP2PWorks.subtitle')}
          </p>
        </div>

        <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
            {t('howP2PWorks.sectionTitle')}
          </h3>
          
          <div className="inline-flex rounded-xl border border-custom-border overflow-hidden bg-sub-card">
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === 'buy'
                  ? 'bg-gradient text-white'
                  : 'text-secondary-desc hover:text-dispute-color'
              }`}
            >
              {t('howP2PWorks.buyCrypto')}
            </button>
            <button
              onClick={() => setActiveTab('sell')}
              className={`px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
                activeTab === 'sell'
                  ? 'bg-gradient text-white'
                  : 'text-secondary-desc hover:text-dispute-color'
              }`}
            >
              {t('howP2PWorks.sellCrypto')}
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-custom-border hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient rounded-2xl flex items-center justify-center text-card group-hover:scale-110 transition-transform duration-300">
                  {getStepIcon(index, activeTab)}
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-dispute-color mb-3 sm:mb-4">
                {step.title}
              </h4>
              <p className="text-sm sm:text-base text-secondary-desc leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowP2PWorks;