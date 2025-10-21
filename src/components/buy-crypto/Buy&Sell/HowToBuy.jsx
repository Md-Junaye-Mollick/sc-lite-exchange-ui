import React from 'react';
import { useTranslation } from 'react-i18next';
import { CreditCard, ShoppingCart, Coins } from 'lucide-react';

const HowToBuy = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: t('howToBuy.step1.title'),
      description: t('howToBuy.step1.description')
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: t('howToBuy.step2.title'),
      description: t('howToBuy.step2.description')
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: t('howToBuy.step3.title'),
      description: t('howToBuy.step3.description')
    }
  ];

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit text-3xl sm:text-4xl font-bold text-gradient mb-12">
          {t('howToBuy.title')}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-2xl p-8 border border-custom-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative">
                <div className="w-16 h-16 bg-gradient rounded-xl flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>
              
              {/* Step Number and Title */}
              <h3 className="text-xl font-bold text-dispute-color mb-4">
                {index + 1}.{step.title}
              </h3>
              
              {/* Description */}
              <p className="text-secondary-desc leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;