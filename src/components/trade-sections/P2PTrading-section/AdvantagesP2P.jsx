import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, CreditCard, TrendingUp } from 'lucide-react';

const AdvantagesP2P = () => {
  const { t } = useTranslation();
  const advantagesData = t('advantagesP2P.advantages', { returnObjects: true }) || [];
  const advantages = Array.isArray(advantagesData) ? advantagesData : [];

  const getIcon = (index) => {
    const icons = [
      <Globe className="w-8 h-8 sm:w-10 sm:h-10" />,
      <CreditCard className="w-8 h-8 sm:w-10 sm:h-10" />,
      <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
    ];
    return icons[index];
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-8 sm:mb-12">
              {t('advantagesP2P.title')}
            </h2>

            <div className="space-y-8 sm:space-y-10">
              {advantages.map((advantage, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-4 sm:space-x-5">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient rounded-xl flex items-center justify-center text-card group-hover:scale-110 transition-transform duration-300">
                      {getIcon(index)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-dispute-color mb-2 sm:mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-sm sm:text-base text-secondary-desc leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="bg-gradient-to-br from-accent/20 to-transparent rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-accent/20">
                <div className="bg-sub-card rounded-2xl p-6 sm:p-8 border border-custom-border shadow-2xl relative overflow-hidden">
                  <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient rounded-xl flex items-center justify-center transform rotate-12">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-card" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-pre-bg rounded-xl p-4 flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-custom-border rounded-full"></div>
                      <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-card transform rotate-45"></div>
                      </div>
                    </div>
                    <div className="bg-pre-bg rounded-xl p-4 flex items-center justify-center space-x-3">
                      <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-card transform rotate-45"></div>
                      </div>
                      <div className="w-10 h-10 bg-custom-border rounded-full"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-8 left-8 w-20 h-20 sm:w-24 sm:h-24 bg-accent/20 rounded-full flex items-center justify-center border-4 border-accent/30">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <div className="absolute top-1/2 right-12 flex space-x-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-75"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-150"></div>
                  </div>

                  <div className="absolute bottom-1/4 right-8 w-3 h-3 bg-accent rounded-sm transform rotate-45"></div>
                </div>
              </div>

              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesP2P;