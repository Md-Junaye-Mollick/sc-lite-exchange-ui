import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-700 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {t('heading')}
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                <span>{t('createAccount')}</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 px-10 py-4 rounded-xl font-bold text-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
                {t('learnMore')}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>{t('bankSecurity')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>{t('users')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>{t('industryLeader')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;