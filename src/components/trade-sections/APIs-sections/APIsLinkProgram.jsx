import React from 'react';
import { useTranslation } from 'react-i18next';
import { Scale, Droplet, Key, Users, Percent, ArrowRight } from 'lucide-react';

const APIsLinkProgram = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 sm:py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
              <div className="relative flex-shrink-0">
                <Scale className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient">
                {t('linkProgram.title')}
              </h2>
            </div>

            {/* Description */}
            <p className="text-secondary-desc text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              {t('linkProgram.description')}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center gap-3">
                <Droplet className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc flex-shrink-0" />
                <span className="text-secondary-desc font-medium text-sm sm:text-base">
                  {t('linkProgram.features.liquidity')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Key className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc flex-shrink-0" />
                <span className="text-secondary-desc font-medium text-sm sm:text-base">
                  {t('linkProgram.features.fiatGateway')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc flex-shrink-0" />
                <span className="text-secondary-desc font-medium text-sm sm:text-base">
                  {t('linkProgram.features.linkSubAccount')}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-desc flex-shrink-0" />
                <span className="text-secondary-desc font-medium text-sm sm:text-base">
                  {t('linkProgram.features.rebates')}
                </span>
              </div>
            </div>

            {/* Learn More Link */}
            <a
              href="#"
              className="text-yellow-400 hover:underline font-medium text-base sm:text-lg inline-block"
            >
              {t('linkProgram.learnMore')}
            </a>
          </div>

          {/* Right Side - Flow Diagram */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-none">
              {/* Mobile/Tablet Vertical Layout */}
              <div className="flex flex-col lg:hidden items-center gap-6">
                {/* SC-Lite Ecosystem */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center p-2 relative">
                    <img src="/images/logo.png" alt="" className="w-full" />
                  </div>
                  <span className="text-dispute-color font-bold text-center text-sm sm:text-base">
                    {t('linkProgram.flow.ecosystem')}
                  </span>
                </div>

                {/* Vertical Arrows and Labels */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                    <span className="text-xs sm:text-sm text-secondary-desc text-center max-w-[200px]">
                      {t('linkProgram.flow.liquidityTrading')}
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs sm:text-sm text-secondary-desc text-center max-w-[200px]">
                      {t('linkProgram.flow.rebateVolume')}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 -rotate-90" />
                  </div>
                </div>

                {/* Link Client with Scale */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center">
                    <Scale className="w-full h-full text-accent" />
                  </div>
                  <span className="text-dispute-color font-bold text-base sm:text-xl">
                    {t('linkProgram.flow.linkClient')}
                  </span>
                </div>
              </div>

              {/* Desktop Horizontal Layout */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                {/* SC-Lite Ecosystem */}
                <div className="flex flex-col items-center gap-3">
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center p-2 relative">
                    <img src="/images/logo.png" alt="" className="w-full" />
                  </div>
                  <span className="text-dispute-color font-bold text-center max-w-[120px] text-sm xl:text-base">
                    {t('linkProgram.flow.ecosystem')}
                  </span>
                </div>

                {/* Horizontal Arrows and Labels */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 flex-shrink-0" />
                    <span className="text-xs xl:text-sm text-secondary-desc whitespace-nowrap">
                      {t('linkProgram.flow.liquidityTrading')}
                    </span>
                    <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 flex-shrink-0" />
                  </div>

                  <div className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 rotate-180 flex-shrink-0" />
                    <span className="text-xs xl:text-sm text-secondary-desc whitespace-nowrap">
                      {t('linkProgram.flow.rebateVolume')}
                    </span>
                    <ArrowRight className="w-4 h-4 xl:w-5 xl:h-5 text-gray-400 rotate-180 flex-shrink-0" />
                  </div>
                </div>

                {/* Link Client with Scale */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative w-28 h-28 xl:w-32 xl:h-32 flex items-center justify-center">
                    <Scale className="w-full h-full text-accent" />
                  </div>
                  <span className="text-dispute-color font-bold text-lg xl:text-xl">
                    {t('linkProgram.flow.linkClient')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIsLinkProgram;