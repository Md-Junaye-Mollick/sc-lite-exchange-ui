import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, ChevronDown, Search } from 'lucide-react';

const currencies = [
  { code: 'INR', name: 'Indian Rupee', icon: '₹' },
  { code: 'AMD', name: 'Armenian Dram', icon: '֏' },
  { code: 'AOA', name: 'Angolan Kwanza', icon: 'Kz' },
  { code: 'ARS', name: 'Argentine Peso', icon: '$' },
  { code: 'AUD', name: 'Australian Dollar', icon: '$' }
];

const cryptos = [
  { code: 'USDT', name: 'TetherUS', apr: '10.21%', icon: '💎' },
  { code: 'BNB', name: 'BNB', apr: '0.16%', icon: '🟡' },
  { code: 'BTC', name: 'Bitcoin', apr: '0.27%', icon: '🟠' },
  { code: 'ETH', name: 'Ethereum', apr: '1.36%', icon: '🔵' }
];

const BuySellHero = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('buy');
  const [showFiatDropdown, setShowFiatDropdown] = useState(false);
  const [showCryptoDropdown, setShowCryptoDropdown] = useState(false);
  const [selectedFiat, setSelectedFiat] = useState(currencies[0]);
  const [selectedCrypto, setSelectedCrypto] = useState(cryptos[0]);
  const [fiatSearch, setFiatSearch] = useState('');
  const [cryptoSearch, setCryptoSearch] = useState('');

  const cryptoData = t('buySell.cryptoList', { returnObjects: true });

  const filteredCurrencies = currencies.filter(c =>
    c.code.toLowerCase().includes(fiatSearch.toLowerCase()) ||
    c.name.toLowerCase().includes(fiatSearch.toLowerCase())
  );

  const filteredCryptos = cryptos.filter(c =>
    c.code.toLowerCase().includes(cryptoSearch.toLowerCase()) ||
    c.name.toLowerCase().includes(cryptoSearch.toLowerCase())
  );

  return (
    <section className="relative pt-8 pb-20 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side */}
          <div className="relative">
            <h1 className="w-fit text-3xl sm:text-4xl lg:text-4xl font-bold py-3 text-gradient">
              {activeTab === 'buy' ? t('buySell.title') : t('buySell.sellTitle')}
            </h1>

            {/* Hot Cryptos Panel */}
            <div className="bg-sub-card backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-custom-border shadow-lg">
              <h3 className="text-lg font-semibold text-dispute-color mb-4">{t('buySell.hotCryptos')}</h3>
              <div className="space-y-2">
                {cryptoData.map((crypto, idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap sm:flex-nowrap items-center justify-between p-2 px-3 bg-pre-bg rounded-xl hover:bg-card shadow-sm hover:shadow transition-all cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 mb-2 sm:mb-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient rounded-full flex items-center justify-center text-lg sm:text-xl">
                        {crypto.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-dispute-color">{crypto.symbol}</p>
                        <p className="text-xs text-secondary-desc">{crypto.apr}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-dispute-color text-sm sm:text-base">{crypto.price}</p>
                      <p className="text-xs sm:text-sm text-green-500 flex items-center justify-end">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {crypto.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Buy/Sell Panel */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-sub-card backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-custom-border shadow-lg">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 bg-pre-bg border border-custom-border p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`flex-1 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                    activeTab === 'buy'
                      ? 'bg-gradient text-white shadow-lg'
                      : 'text-secondary-desc hover:text-dispute-color'
                  }`}
                >
                  {t('buySell.buy')}
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={`flex-1 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                    activeTab === 'sell'
                      ? 'bg-gradient text-white shadow-lg'
                      : 'text-secondary-desc hover:text-dispute-color'
                  }`}
                >
                  {t('buySell.sell')}
                </button>
              </div>

              {activeTab === 'buy' ? (
                <div className="space-y-4">
                  {/* Spend Input */}
                  <div className="bg-pre-bg rounded-2xl p-4 border border-custom-border">
                    <label className="text-sm text-secondary-desc mb-2 block">{t('buySell.spend')}</label>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <input
                        type="number"
                        placeholder="2,500 - 19,999"
                        className="bg-transparent text-xl sm:text-2xl font-semibold text-dispute-color outline-none flex-1 w-full"
                      />
                      <div className="relative w-full sm:w-auto">
                        <button
                          onClick={() => setShowFiatDropdown(!showFiatDropdown)}
                          className="flex items-center justify-between sm:justify-start gap-2 bg-card px-4 py-2 border border-custom-border rounded-lg w-full sm:w-auto hover:bg-sub-card transition-colors"
                        >
                          <span className="text-lg sm:text-xl">{selectedFiat.icon}</span>
                          <span className="font-semibold text-dispute-color">{selectedFiat.code}</span>
                          <ChevronDown className="w-4 h-4 text-secondary-desc ml-auto sm:ml-0" />
                        </button>

                        {/* Fiat Dropdown */}
                        {showFiatDropdown && (
                          <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-card rounded-xl border border-custom-border shadow-2xl z-50 max-h-80 overflow-hidden">
                            <div className="p-3 border-b border-custom-border">
                              <div className="flex items-center gap-2 bg-pre-bg rounded-lg px-3 py-2">
                                <Search className="w-4 h-4 text-secondary-desc" />
                                <input
                                  type="text"
                                  placeholder="Search"
                                  value={fiatSearch}
                                  onChange={(e) => setFiatSearch(e.target.value)}
                                  className="bg-transparent outline-none text-sm flex-1 text-dispute-color"
                                />
                              </div>
                            </div>
                            <div className="overflow-y-auto max-h-64">
                              {filteredCurrencies.map((currency) => (
                                <button
                                  key={currency.code}
                                  onClick={() => {
                                    setSelectedFiat(currency);
                                    setShowFiatDropdown(false);
                                    setFiatSearch('');
                                  }}
                                  className="w-full flex items-center gap-3 p-3 transition-colors hover:bg-pre-bg"
                                >
                                  <span className="text-2xl w-8">{currency.icon}</span>
                                  <div className="text-left">
                                    <p className="font-semibold text-dispute-color">{currency.code}</p>
                                    <p className="text-xs text-secondary-desc">{currency.name}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Receive Input */}
                  <div className="bg-pre-bg rounded-2xl p-4 border border-custom-border">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm text-secondary-desc">{t('buySell.receive')}</label>
                      <span className="text-xs text-green-500">{selectedCrypto.apr} APR</span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <input
                        type="number"
                        placeholder="0"
                        className="bg-transparent text-xl sm:text-2xl font-semibold text-dispute-color outline-none flex-1 w-full"
                      />
                      <div className="relative w-full sm:w-auto">
                        <button
                          onClick={() => setShowCryptoDropdown(!showCryptoDropdown)}
                          className="flex items-center justify-between sm:justify-start gap-2 bg-card px-4 py-2 border border-custom-border rounded-lg w-full sm:w-auto hover:bg-sub-card transition-colors"
                        >
                          <span className="text-lg sm:text-xl">{selectedCrypto.icon}</span>
                          <span className="font-semibold text-dispute-color">{selectedCrypto.code}</span>
                          <ChevronDown className="w-4 h-4 text-secondary-desc ml-auto sm:ml-0" />
                        </button>

                        {/* Crypto Dropdown */}
                        {showCryptoDropdown && (
                          <div className="absolute right-0 mt-2 w-64 sm:w-72 bg-card rounded-xl border border-custom-border shadow-2xl z-50 max-h-80 overflow-hidden">
                            <div className="p-3 border-b border-custom-border">
                              <div className="flex items-center gap-2 bg-pre-bg rounded-lg px-3 py-2">
                                <Search className="w-4 h-4 text-secondary-desc" />
                                <input
                                  type="text"
                                  placeholder="Search"
                                  value={cryptoSearch}
                                  onChange={(e) => setCryptoSearch(e.target.value)}
                                  className="bg-transparent outline-none text-sm flex-1 text-dispute-color"
                                />
                              </div>
                            </div>
                            <div className="overflow-y-auto max-h-64">
                              {filteredCryptos.map((crypto) => (
                                <button
                                  key={crypto.code}
                                  onClick={() => {
                                    setSelectedCrypto(crypto);
                                    setShowCryptoDropdown(false);
                                    setCryptoSearch('');
                                  }}
                                  className="w-full flex items-center justify-between p-3 transition-colors hover:bg-pre-bg"
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-2xl w-8">{crypto.icon}</span>
                                    <div className="text-left">
                                      <p className="font-semibold text-dispute-color">{crypto.code}</p>
                                      <p className="text-xs text-secondary-desc">{crypto.name}</p>
                                    </div>
                                  </div>
                                  <span className="text-xs text-secondary-desc">{crypto.apr} APR</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <button className="w-full bg-gradient text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm sm:text-base">
                    {t('buySell.verifyIdentity')}
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-card rounded-full flex items-center justify-center mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient rounded-full flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">⚠️</span>
                    </div>
                  </div>
                  <p className="text-secondary-desc mb-6 text-sm sm:text-base">{t('buySell.insufficientAssets')}</p>
                  <button className="bg-gradient text-white px-6 sm:px-8 py-3 rounded-xl font-semibold mb-3 transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm sm:text-base">
                    {t('buySell.buyCrypto')}
                  </button>
                  <button className="text-accent font-semibold hover:underline text-sm sm:text-base">
                    {t('buySell.depositCrypto')}
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuySellHero;