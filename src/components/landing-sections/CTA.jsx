import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Users, Award, ArrowRight } from 'lucide-react';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-orange-500/10 to-red-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-8 sm:p-12 border border-custom-border shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gradient">
              {t('cta.heading')}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-secondary-desc mb-6 sm:mb-8 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
              <button className="group bg-gradient text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gradient-yellow-hover transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover flex items-center justify-center space-x-2">
                <span>{t('cta.createAccount')}</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-custom-border px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                {t('cta.learnMore')}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-secondary-desc">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>{t('cta.bankSecurity')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span>{t('cta.users')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span>{t('cta.industryLeader')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;