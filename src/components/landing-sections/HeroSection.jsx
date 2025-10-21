import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Play, Shield, TrendingUp, Lock, TrendingDown } from 'lucide-react';
import VideoTutorialPopup from '../models/VideoTutorialPopup/VideoTutorialPopup';


const CryptoPanel = ({ cryptoData, newsItems, activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  
  const defaultCryptoData = t('hero.defaultCrypto', { returnObjects: true }) || [];
  const defaultNews = t('hero.defaultNews', { returnObjects: true }) || [];

  // Merge translation data with price data
  const data = cryptoData || defaultCryptoData.map((crypto, idx) => ({
    name: crypto.name,
    symbol: crypto.symbol,
    price: ['$67,234.56', '$3,456.78', '$0.5234', '$145.67'][idx],
    change: ['+5.23%', '+3.12%', '-1.45%', '+8.90%'][idx],
    isUp: [true, true, false, true][idx]
  }));

  const news = newsItems || defaultNews;

  return (
    <div className="relative">
      <div className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-custom-border shadow-2xl">
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 border-b border-custom-border overflow-x-auto">
          {['popular', 'gainers', 'news'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 sm:pb-3 px-3 sm:px-4 font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-secondary-desc hover:text-dispute-color'
              }`}
            >
              {t(`hero.tabs.${tab}`)}
            </button>
          ))}
        </div>

        {activeTab === 'news' ? (
          <div className="space-y-3 sm:space-y-4">
            {news.map((item, idx) => (
              <div key={idx} className="bg-pre-bg rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-card transition-colors cursor-pointer">
                <p className="text-dispute-color font-medium mb-1 text-sm sm:text-base">{item.title}</p>
                <p className="text-secondary-desc text-xs sm:text-sm">{item.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {data.map((crypto, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-pre-bg rounded-lg sm:rounded-xl hover:bg-card transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient rounded-full flex items-center justify-center font-bold text-dispute-color text-sm sm:text-base">
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-dispute-color text-sm sm:text-base">{crypto.name}</p>
                    <p className="text-xs sm:text-sm text-secondary-desc">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-dispute-color text-sm sm:text-base">{crypto.price}</p>
                  <p className={`text-xs sm:text-sm flex items-center justify-end ${crypto.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.isUp ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />}
                    {crypto.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const HeroSection = ({ cryptoData, newsItems }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('popular');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);

  const heroSlides = t('hero.slides', { returnObjects: true });
  const slidesArray = Array.isArray(heroSlides) ? heroSlides : [];

  useEffect(() => {
    if (slidesArray.length > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slidesArray.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [slidesArray.length]);

  return (
    <section className="relative sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 order-1 lg:order-1">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2 animate-pulse">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm text-accent font-medium">{t('hero.marketUp')}</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient">
                {heroSlides[currentSlide]?.title}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-secondary-desc mb-6 sm:mb-8 leading-relaxed">
              {heroSlides[currentSlide]?.subtitle}
            </p>

            <div className="bg-sub-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-custom-border">
              <p className="text-xs sm:text-sm text-secondary-desc mb-2 sm:mb-3">{t('hero.estimatedBalance')}</p>
              <div className="flex items-baseline space-x-2 sm:space-x-3 mb-2 sm:mb-3 flex-wrap">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dispute-color">0.00</span>
                <span className="text-secondary-desc text-lg sm:text-xl">BTC</span> 
                <span className="text-secondary-desc text-sm sm:text-base">≈ $0.00</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-secondary-desc">{t('hero.todayPL')}</span>
                <span className="text-green-500 font-medium">$0.00 (0.00%)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="group bg-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gradient-yellow-hover transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover flex items-center justify-center space-x-2 text-sm sm:text-base btn-transition">
                <span>{t('hero.getStarted')}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setIsVideoPopupOpen(true)}
                className="group border-2 border-custom-border px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t('hero.watchTutorial')}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-secondary-desc mb-4 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>{t('hero.secureTrusted')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span>{t('hero.safuProtected')}</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 sm:w-8 bg-accent' : 'w-3 sm:w-4 bg-custom-border'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Crypto Panel */}
          <div className="order-1 lg:order-2">
            <CryptoPanel cryptoData={cryptoData} newsItems={newsItems} activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>

      {/* Video Tutorial Popup */}
      <VideoTutorialPopup 
        isOpen={isVideoPopupOpen} 
        onClose={() => setIsVideoPopupOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;