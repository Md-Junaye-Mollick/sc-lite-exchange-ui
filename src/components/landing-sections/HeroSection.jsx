import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Shield, TrendingUp, Lock, TrendingDown } from 'lucide-react';

const CryptoPanel = ({ cryptoData, newsItems, activeTab, setActiveTab }) => {
  const defaultCryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$67,234.56', change: '+5.23%', isUp: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,456.78', change: '+3.12%', isUp: true },
    { name: 'Cardano', symbol: 'ADA', price: '$0.5234', change: '-1.45%', isUp: false },
    { name: 'Solana', symbol: 'SOL', price: '$145.67', change: '+8.90%', isUp: true },
  ];

  const defaultNews = [
    { title: 'Bitcoin reaches new ATH', time: '2h ago' },
    { title: 'Ethereum 2.0 update released', time: '5h ago' },
    { title: 'DeFi market grows 40%', time: '8h ago' },
  ];

  const data = cryptoData || defaultCryptoData;
  const news = newsItems || defaultNews;

  return (
    <div className="relative">
      <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-700 shadow-2xl">
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 border-b border-gray-700 overflow-x-auto">
          {['Popular', 'Gainers', 'News'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 sm:pb-3 px-3 sm:px-4 font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                activeTab === tab
                  ? 'text-yellow-500 border-b-2 border-yellow-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'News' ? (
          <div className="space-y-3 sm:space-y-4">
            {news.map((item, idx) => (
              <div key={idx} className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                <p className="text-white font-medium mb-1 text-sm sm:text-base">{item.title}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{item.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">
            {data.map((crypto, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-gray-800/50 rounded-lg sm:rounded-xl hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm sm:text-base">
                    {crypto.symbol.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">{crypto.name}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{crypto.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-white text-sm sm:text-base">{crypto.price}</p>
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
  const [activeTab, setActiveTab] = useState('Popular');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Trade Bitcoin, ETH, and 350+ cryptocurrencies",
      subtitle: "Fast, secure, and trusted by millions worldwide",
    },
    {
      title: "Earn up to 8% APY on your crypto",
      subtitle: "Flexible savings with daily interest payouts",
    },
    {
      title: "Start trading with as little as $10",
      subtitle: "Join the future of finance today",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10 order-1 lg:order-1">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2 animate-pulse">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                <span className="text-xs sm:text-sm text-yellow-500 font-medium">Market is up 12% today</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                {heroSlides[currentSlide].title}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-gray-700">
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">Your Estimated Balance</p>
              <div className="flex items-baseline space-x-2 sm:space-x-3 mb-2 sm:mb-3 flex-wrap">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">0.00</span>
                <span className="text-gray-400 text-lg sm:text-xl">BTC</span>
                <span className="text-gray-500 text-sm sm:text-base">≈ $0.00</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-gray-400">Today's P/L:</span>
                <span className="text-green-500 font-medium">$0.00 (0.00%)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Tutorial</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400 mb-4 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span>SAFU Protected</span>
              </div>
            </div>

            <div className="flex space-x-2 mt-6">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 sm:w-8 bg-yellow-500' : 'w-3 sm:w-4 bg-gray-600'
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
    </section>
  );
};

export default HeroSection;