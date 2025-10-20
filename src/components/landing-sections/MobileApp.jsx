import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wallet, TrendingUp, ChevronRight } from 'lucide-react';

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
            <div className="relative order-2 md:order-1">
                <img src="images/PhoneMockup.png" alt="Phone Mockup" />
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

export default MobileApp;