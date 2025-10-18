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
    { name: t('mobileApp.platforms.0.name'), icon: '🍎', color: 'from-gray-600 to-gray-700' },
    { name: t('mobileApp.platforms.1.name'), icon: '🪟', color: 'from-blue-600 to-blue-700' },
    { name: t('mobileApp.platforms.2.name'), icon: '🐧', color: 'from-orange-600 to-red-600' }
  ];

  return (
    <div>
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative mx-auto w-72">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 transform hover:rotate-2 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 h-[600px] flex flex-col">
                      <div className="text-center mb-8">
                        <p className="text-4xl font-bold mb-2">$115,191.26</p>
                        <p className="text-green-500 text-sm">+2.45% Today</p>
                      </div>
                      <div className="space-y-4 flex-1">
                        {cryptoData.slice(0, 4).map((crypto, idx) => (
                          <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold">
                                {crypto.icon}
                              </div>
                              <div>
                                <p className="font-bold text-sm">{crypto.name}</p>
                                <p className="text-xs text-gray-400">{crypto.fullName}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold">{crypto.price}</p>
                              <p className={`text-xs ${crypto.isNegative ? 'text-red-500' : 'text-green-500'}`}>
                                {crypto.change}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <Wallet className="w-8 h-8 text-gray-900" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center animate-bounce delay-1000 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                {t('mobileApp.heading1')}<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {t('mobileApp.heading2')}
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {t('mobileApp.description')}
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
                <div className="flex items-start space-x-6">
                  <div className="w-32 h-32 bg-white p-3 rounded-2xl flex-shrink-0">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 rounded-lg">
                      QR Code
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">{t('mobileApp.scanToDownload')}</p>
                    <p className="font-bold text-lg mb-3">{t('mobileApp.iosAndroid')}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ {t('mobileApp.rating')}
                      </span>
                      <span className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
                        {t('mobileApp.downloads')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-4">{t('mobileApp.availableOnDesktop')}</p>
                <div className="flex space-x-4">
                  {platforms.map((platform, idx) => (
                    <div
                      key={idx}
                      className="group text-center cursor-pointer transform hover:scale-110 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:shadow-2xl`}>
                        <span className="text-3xl">{platform.icon}</span>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{platform.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400 flex items-center space-x-2 group">
                <span>⬇ {t('mobileApp.moreDownloadOptions')}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;