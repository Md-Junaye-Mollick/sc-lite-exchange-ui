import React from 'react';
import { useTranslation } from 'react-i18next';
import { Settings, TrendingUp, Droplets } from 'lucide-react';

const BotFeatures = () => {
  const { t } = useTranslation();
  const featuresData = t('botfeatures.cards', { returnObjects: true }) || [];
  const features = Array.isArray(featuresData) ? featuresData : [];

  const icons = [
    <Settings className="w-12 h-12 text-yellow-500" />,
    <TrendingUp className="w-12 h-12 text-yellow-500" />,
    <Droplets className="w-12 h-12 text-yellow-500" />
  ];

  return (
    <section className="py-16 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit text-4xl font-bold text-gradient mb-6">
          {t('botfeatures.title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((card, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-2xl p-8 border border-custom-border hover:border-accent/50 shadow-sm transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {icons[index]}
                </div>
              </div>

              <h3 className="text-xl font-bold text-dispute-color mb-4">
                {card.title}
              </h3>
              <p className="text-sm text-secondary-desc leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BotFeatures;