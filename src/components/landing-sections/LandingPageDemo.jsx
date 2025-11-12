import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Shield, Lock, Zap, BarChart3, Users, ArrowRight, Play, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Wallet,  ChevronRight } from 'lucide-react';
import Testimonials from './Testimonials';
import Header from '../header';
import Footer from '../footer';
import CTA from './CTA';

const CryptoTicker = () => {
  const coins = [
    { symbol: 'BTC', price: '$67,234.56', change: '+5.23%', isUp: true },
    { symbol: 'ETH', price: '$3,456.78', change: '+3.12%', isUp: true },
    { symbol: 'SOL', price: '$145.67', change: '+8.90%', isUp: true },
    { symbol: 'DOGE', price: '$0.5234', change: '-1.45%', isUp: false },
  ];

  return (
    <div className="bg-sub-card border-y border-custom-border py-3 overflow-hidden">
      <style>{`
        @keyframes scroll-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
        }
      `}</style>
      <div className="flex animate-scroll-rtl space-x-8">
        {[...coins, ...coins].map((coin, idx) => (
          <div key={idx} className="flex items-center space-x-3 whitespace-nowrap">
            <span className="font-semibold text-dispute-color">{coin.symbol}</span>
            <span className="text-secondary-desc">{coin.price}</span>
            <span className={`flex items-center ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
              {coin.isUp ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CryptoPanel = ({ activeTab, setActiveTab }) => {
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$67,234.56', change: '+5.23%', isUp: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,456.78', change: '+3.12%', isUp: true },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.5234', change: '-1.45%', isUp: false },
    { name: 'Solana', symbol: 'SOL', price: '$145.67', change: '+8.90%', isUp: true },
  ];

  const news = [
    { title: 'Bitcoin reaches new all-time high', time: '2 hours ago' },
    { title: 'Ethereum upgrade scheduled for next month', time: '5 hours ago' },
    { title: 'Major exchange adds new trading pairs', time: '1 day ago' },
  ];

  return (
    <div className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-custom-border shadow-2xl">
      <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-6 border-b border-custom-border overflow-x-auto">
        {['popular', 'gainers', 'news'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 sm:pb-3 px-3 sm:px-4 font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 capitalize ${
              activeTab === tab ? 'text-accent border-b-2 border-accent' : 'text-secondary-desc hover:text-dispute-color'
            }`}
          >
            {tab}
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
          {cryptoData.map((crypto, idx) => (
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
  );
}; // Assuming these are imported from a library like lucide-react

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('popular');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    { title: 'Trade Crypto with Confidence', subtitle: 'Access the world\'s leading cryptocurrency exchange. Trade Bitcoin, Ethereum, and 200+ digital assets.' },
    { title: 'Secure & Fast Trading', subtitle: 'Bank-grade security with lightning-fast execution. Your assets are always protected.' },
    { title: 'Advanced Trading Tools', subtitle: 'Professional charts, real-time data, and powerful analysis tools for serious traders.' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Define the background style
  const backgroundStyle = {
    backgroundImage: `url('/images/trading-chart-bg.jpg')`, // Path to your trading graph image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="relative sm:pt-6 md:pt-8 pb-12 sm:pb-16 md:pb-20 overflow-hidden mt-16" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10"> {/* Added relative z-10 to ensure content is above background */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          <div className="order-1 lg:order-1">
            <div className="inline-block mb-4 sm:mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 flex items-center space-x-2 animate-pulse">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm text-accent font-medium">Market is up 12.5% today</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient">{heroSlides[currentSlide].title}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-secondary-desc mb-6 sm:mb-8 leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>

            <div className="bg-sub-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-custom-border">
              <p className="text-xs sm:text-sm text-secondary-desc mb-2 sm:mb-3">Your Portfolio Value</p>
              <div className="flex items-baseline space-x-2 sm:space-x-3 mb-2 sm:mb-3 flex-wrap">
                <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-dispute-color">0.00</span>
                <span className="text-secondary-desc text-lg sm:text-xl">BTC</span>
                <span className="text-secondary-desc text-sm sm:text-base">≈ $0.00</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <span className="text-secondary-desc">Today's P&L</span>
                <span className="text-green-500 font-medium">$0.00 (0.00%)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <button className="group bg-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gradient-yellow-hover transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover flex items-center justify-center space-x-2 text-sm sm:text-base">
                <span>Start Trading Now</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-custom-border px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base">
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-secondary-desc mb-4 sm:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span>Bank-Grade Security</span>
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
                    idx === currentSlide ? 'w-6 sm:w-8 bg-accent' : 'w-3 sm:w-4 bg-custom-border'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img src="/images/Mockup-4.png" alt="Phone Mockup" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: Shield, title: 'Secure Trading', description: 'Multi-layer security with cold storage and 2FA protection', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, title: 'Lightning Fast', description: 'Execute trades in milliseconds with our advanced matching engine', color: 'from-accent to-orange-500' },
    { icon: Users, title: '24/7 Support', description: 'Round-the-clock customer support in multiple languages', color: 'from-purple-500 to-pink-500' },
    { icon: BarChart3, title: 'Advanced Charts', description: 'Professional trading tools with real-time market data', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold pb-2 sm:mb-4 text-gradient">Why Choose Delta</h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary-desc max-w-2xl mx-auto">Experience the future of cryptocurrency trading</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map(({ icon: Icon, title, description, color }, idx) => (
            <div key={idx} className="group relative bg-sub-card backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-custom-border hover:border-accent/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className={`inline-flex p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-dispute-color group-hover:text-accent transition-colors">{title}</h3>
              <p className="text-secondary-desc leading-relaxed text-sm sm:text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MobileApp = () => {
  const { t } = useTranslation();

  const cryptoData = [
    { name: 'BTC', fullName: t('mobileApp.cryptoData.0.fullName'), price: '$115,191.26', change: '-1.78%', isNegative: true, icon: '₿' },
    { name: 'ETH', fullName: t('mobileApp.cryptoData.1.fullName'), price: '$4,120.28', change: '-3.53%', isNegative: true, icon: 'Ξ' },
    { name: 'BNB', fullName: t('mobileApp.cryptoData.2.fullName'), price: '$1,224.31', change: '-4.18%', isNegative: true, icon: 'B' },
    { name: 'XRP', fullName: t('mobileApp.cryptoData.3.fullName'), price: '$2.52', change: '-3.78%', isNegative: true, icon: 'X' },
    { name: 'SOL', fullName: t('mobileApp.cryptoData.4.fullName'), price: '$145.32', change: '+2.45%', isNegative: false, icon: 'S' },
    { name: 'ADA', fullName: t('mobileApp.cryptoData.5.fullName'), price: '$0.68', change: '+1.23%', isNegative: false, icon: 'A' },
  ];

  const platforms = [
    { 
      name: t('mobileApp.platforms.0.name'), 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg', 
      color: 'from-gray-600 to-gray-700' 
    },
    { 
      name: t('mobileApp.platforms.1.name'), 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', 
      color: 'from-blue-600 to-blue-700' 
    },
    { 
      name: t('mobileApp.platforms.2.name'), 
      icon: 'images/Linux.png', 
      color: 'from-orange-600 to-red-600' 
    }
  ];

  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-orange-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1 h-30 w-20">
                <img src="images/Mockup-4.png" alt="Phone Mockup" />
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-dispute-color">
                {t('mobileApp.heading1')}<br />
                <span className="text-gradient">
                  {t('mobileApp.heading2')}
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-secondary-desc mb-6 sm:mb-8 leading-relaxed">
                {t('mobileApp.description')}
              </p>

              <div className="bg-sub-card backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-custom-border">
                <div className="flex items-start space-x-4 sm:space-x-6">
                 <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white p-2 sm:p-3 rounded-xl sm:rounded-2xl flex-shrink-0 flex items-center justify-center">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/app-download" 
                      alt="QR Code"
                      className="w-full h-full rounded-lg object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-secondary-desc mb-2">{t('mobileApp.scanToDownload')}</p>
                    <p className="font-bold text-base sm:text-lg text-dispute-color mb-2 sm:mb-3">{t('mobileApp.iosAndroid')}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/20 text-green-500 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                        ⭐ {t('mobileApp.rating')}
                      </span>
                      <span className="bg-blue-500/20 text-blue-500 px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                        {t('mobileApp.downloads')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-xs sm:text-sm text-secondary-desc mb-4">{t('mobileApp.availableOnDesktop')}</p>
                <div className="flex space-x-3 sm:space-x-4">
                  {platforms.map((platform, idx) => (
                    <div
                      key={idx}
                      className="group text-center cursor-pointer transform hover:scale-110 transition-all duration-300"
                    >
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${platform.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:shadow-2xl`}>
                        <img 
                          src={platform.icon} 
                          alt={platform.name} 
                          className="w-6 h-6 sm:w-8 sm:h-8 brightness-0 invert"
                        />
                      </div>
                      <p className="text-xs sm:text-sm text-secondary-desc hover:text-dispute-color transition-colors">{platform.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#" className="text-xs sm:text-sm text-accent hover:text-accent/80 flex items-center space-x-2 group">
                <span>⬇ {t('mobileApp.moreDownloadOptions')}</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: '$50B+', label: 'Trading Volume' },
    { value: '10M+', label: 'Active Users' },
    { value: '200+', label: 'Cryptocurrencies' },
    { value: '0.1%', label: 'Trading Fees' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-secondary-desc">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const LandingPageDemo = () => (
  <div className="min-h-screen bg-card text-dispute-color">
    <Header/>
    <CryptoTicker />
    <HeroSection />
    <Stats />
    <Features />
    <Testimonials/>
    <MobileApp/>
    <CTA />
    <Footer />
  </div>
);

export default LandingPageDemo;