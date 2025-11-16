import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff, ChevronLeft, ChevronRight } from 'lucide-react';

const TradingBotsHero = () => {
  const { t } = useTranslation();
  const [showBalance, setShowBalance] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = t('tradingBotsPage.slides', { returnObjects: true });
  const slidesArray = Array.isArray(slides) ? slides : [];

  const nextSlide = () => {
    if (slidesArray.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % slidesArray.length);
    }
  };

  const prevSlide = () => {
    if (slidesArray.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + slidesArray.length) % slidesArray.length);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center sm:items-start lg:items-center sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        
        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="relative z-10 order-1 flex flex-col items-center lg:items-start w-full">
            <h1 className="w-fit text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold py-4 leading-tight text-gradient text-center lg:text-left">
              {t('tradingBotsPage.title')}
            </h1>

            <div className="bg-sub-card backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 mb-6 sm:mb-8 border border-custom-border w-full max-w-md lg:max-w-none">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm text-secondary-desc">
                  {t('tradingBotsPage.totalBalance')}
                </p>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="text-secondary-desc hover:text-dispute-color transition-colors"
                >
                  {showBalance ? (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dispute-color">
                  {showBalance ? '$0' : '****'}
                </span>
              </div>

              <div className="flex items-center space-x-2 text-xs sm:text-sm mb-6">
                <span className="text-secondary-desc">
                  {t('tradingBotsPage.todayPNL')}
                </span>
                <span className="text-dispute-color font-medium">
                  {showBalance ? '$0 (0%)' : '****'}
                </span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-secondary-desc" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group bg-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gradient-yellow-hover transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover flex items-center justify-center space-x-2 text-sm sm:text-base btn-transition">
                  {t('tradingBotsPage.tradeNow')}
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pre-bg rounded-xl font-semibold text-dispute-color hover:bg-accent hover:text-white hover:border-accent hover:shadow-glow transition-all duration-300 text-sm sm:text-base border-2 border-custom-border">
                  {t('tradingBotsPage.botsWallet')}
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Slide Card */}
          <div className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-full">
              <div className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-custom-border shadow-lg min-h-[350px] sm:min-h-[400px] flex flex-col justify-between">

                {/* Slide Content + Icon */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 mb-6">

                  {/* Text */}
                  <div className="flex-grow flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-dispute-color mb-3">
                      {slidesArray[currentSlide]?.title}
                    </h2>

                    {slidesArray[currentSlide]?.description && (
                      <p className="text-base sm:text-lg text-secondary-desc mb-4">
                        {slidesArray[currentSlide]?.description}
                      </p>
                    )}

                    <button className="text-accent font-semibold hover:underline inline-flex items-center justify-center lg:justify-start text-base sm:text-lg">
                      {t('tradingBotsPage.learnMore')}
                    </button>
                  </div>

                  {/* Bot Icon */}
                  <div className="relative flex justify-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient rounded-2xl flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-300">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-card rounded-xl flex flex-col items-center justify-center">
                        <div className="flex space-x-1 mb-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                        </div>
                        <div className="w-6 h-1 sm:w-8 sm:h-1 bg-accent rounded"></div>
                      </div>
                    </div>

                    <div className="absolute -top-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-accent rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xs sm:text-sm text-secondary-desc">
                    {slidesArray.length > 0 ? `${currentSlide + 1} / ${slidesArray.length}` : '1 / 1'}
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-lg bg-pre-bg hover:bg-card transition-colors flex items-center justify-center text-secondary-desc hover:text-dispute-color"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-lg bg-pre-bg hover:bg-card transition-colors flex items-center justify-center text-secondary-desc hover:text-dispute-color"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TradingBotsHero;