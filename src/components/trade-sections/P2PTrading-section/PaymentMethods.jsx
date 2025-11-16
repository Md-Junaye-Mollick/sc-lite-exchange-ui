import React from 'react';
import { useTranslation } from 'react-i18next';

const PaymentMethods = () => {
  const { t } = useTranslation();
  const paymentMethodsData = t('paymentMethods.methods', { returnObjects: true }) || [];
  const paymentMethods = Array.isArray(paymentMethodsData) ? paymentMethodsData : [];

  const getBarColor = (color) => {
    const colors = {
      gray: 'bg-gray-400',
      orange: 'bg-orange-500',
      yellow: 'bg-yellow-400',
      blue: 'bg-blue-500',
      purple: 'bg-purple-500'
    };
    return colors[color] || 'bg-gray-400';
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-8 sm:mb-12">
          {t('paymentMethods.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-sm p-6 sm:p-8 border border-custom-border hover:border-accent/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className={`w-1 h-8 rounded-full ${getBarColor(method.color)}`}></div>
                <h3 className="text-base sm:text-lg font-semibold text-dispute-color group-hover:text-accent transition-colors duration-300">
                  {method.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;