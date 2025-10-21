import React from 'react';
import { useTranslation } from 'react-i18next';

const PopularTether = () => {
  const { t } = useTranslation();

  const conversions = [
    { to: 'USD', rate: '1.0003067', icon: '$', color: 'bg-yellow-500' },
    { to: 'TRY', rate: '41.95', icon: '₺', color: 'bg-pink-500' },
    { to: 'RUB', rate: '81.05', icon: '₽', color: 'bg-gray-500' },
    { to: 'EUR', rate: '0.8575629', icon: '€', color: 'bg-blue-500' },
    { to: 'SAR', rate: '3.7511501', icon: '﷼', color: 'bg-green-500' },
    { to: 'AUD', rate: '1.5404723', icon: '$', color: 'bg-blue-600' },
    { to: 'BRL', rate: '5.4316653', icon: 'R$', color: 'bg-green-600' },
    { to: 'VND', rate: '26,346.07', icon: '₫', color: 'bg-pink-600' },
    { to: 'INR', rate: '87.82', icon: '₹', color: 'bg-orange-500' }
  ];

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-3">
            {t('popularTether.title')}
          </h2>
          <p className="text-secondary-desc">{t('popularTether.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {conversions.map((c, i) => (
            <div key={i} className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dispute-color mb-2">USDT to {c.to}</h3>
                  <p className="text-secondary-desc">1 USDT = {c.rate} {c.to}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl">💎</div>
                  <div className={`w-12 h-12 ${c.color} rounded-full flex items-center justify-center text-white text-xl font-bold`}>{c.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center text-sm text-secondary-desc">
          {t('popularTether.disclaimer.text')} <a href="#" className="text-yellow-500 hover:underline">{t('popularTether.disclaimer.privacy')}</a> {t('popularTether.disclaimer.and')} <a href="#" className="text-yellow-500 hover:underline">{t('popularTether.disclaimer.terms')}</a> {t('popularTether.disclaimer.apply')}
        </div>
      </div>
    </section>
  );
};

export default PopularTether;