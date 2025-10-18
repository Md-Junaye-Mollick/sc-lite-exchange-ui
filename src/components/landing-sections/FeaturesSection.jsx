import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Shield, Users, Zap } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const icons = [
    <Shield className="w-12 h-12" />,
    <Zap className="w-12 h-12" />,
    <Users className="w-12 h-12" />,
    <Award className="w-12 h-12" />
  ];

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-yellow-500 to-orange-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-emerald-500"
  ];

  const featuresData = t('features.items', { returnObjects: true });
  const featuresArray = Array.isArray(featuresData) ? featuresData : [];

  const features = featuresArray.map((feature, idx) => ({
    icon: icons[idx],
    title: feature.title,
    description: feature.description,
    color: colors[idx]
  }));

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {t('features.heading')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('features.subheading')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;