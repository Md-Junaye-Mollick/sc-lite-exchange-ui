import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hand, RefreshCw, Percent, CreditCard } from 'lucide-react';

const WhyFcLite = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Hand className="w-12 h-12" />,
      title: t('whyFcLite.accessible.title'),
      description: t('whyFcLite.accessible.description')
    },
    {
      icon: <RefreshCw className="w-12 h-12" />,
      title: t('whyFcLite.convenient.title'),
      description: t('whyFcLite.convenient.description')
    },
    {
      icon: <Percent className="w-12 h-12" />,
      title: t('whyFcLite.lowCost.title'),
      description: t('whyFcLite.lowCost.description')
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: t('whyFcLite.safeSecure.title'),
      description: t('whyFcLite.safeSecure.description')
    }
  ];

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit text-3xl sm:text-4xl font-bold text-gradient py-4">
          {t('whyFcLite.title')}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-2xl p-4 border border-custom-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient rounded-xl flex items-center justify-center text-white">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-dispute-color mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-secondary-desc text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyFcLite;