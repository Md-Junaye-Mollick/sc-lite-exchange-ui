import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search } from 'lucide-react';

const AISelectHero = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('technical');
  const [timeframe, setTimeframe] = useState('1h');
  const [selected, setSelected] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const cryptoData = [
    {
      symbol: "KSM/USDT",
      icon: "🚀",
      price: "$10.71",
      change: "+12.50%",
      score: 9.12,
      trendValue: 9.80,
      volatilityValue: 7.90,
      momentumValue: 8.35,
      volumePriceValue: 10.00,
      trend: "bullish",
      volatility: "volatilityExpansion",
      momentum: "strongMomentum",
      volumePrice: "volumeBackedBreakout"
    },
    {
      symbol: "ZK/USDT",
      icon: "🔄",
      price: "$0.06483",
      change: "+119.99%",
      score: 8.88,
      trendValue: 9.60,
      volatilityValue: 5.90,
      momentumValue: 10.00,
      volumePriceValue: 7.80,
      trend: "bullish",
      volatility: "volatilityExpansion",
      momentum: "overbought",
      volumePrice: "accumulationSignal"
    },
    {
      symbol: "STRK/USDT",
      icon: "⭐",
      price: "$0.1212",
      change: "+15.65%",
      score: 8.77,
      trendValue: 9.00,
      volatilityValue: 7.90,
      momentumValue: 9.70,
      volumePriceValue: 7.60,
      trend: "bullish",
      volatility: "volatilityExpansion",
      momentum: "overbought",
      volumePrice: "accumulationSignal"
    }
  ];

  const toggleSelect = (symbol) => {
    setSelected(prev =>
      prev.includes(symbol) ? prev.filter(s => s !== symbol) : [...prev, symbol]
    );
  };

  const filteredData = cryptoData.filter(c =>
    c.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-8">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-custom-border pb-4">
        {/* Left Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'technical'
                ? 'bg-sub-card border border-custom-border text-dispute-color'
                : 'text-secondary-desc border border-transparent hover:text-dispute-color'
            }`}
          >
            Technical Indicators
          </button>
          <button
            onClick={() => setActiveTab('sentiment')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === 'sentiment'
                ? 'bg-sub-card border border-custom-border text-dispute-color'
                : 'text-secondary-desc border border-transparent hover:text-dispute-color'
            }`}
          >
            Sentiment
          </button>
        </div>

        {/* Timeframes */}
        <div className="flex gap-2">
          <button
            onClick={() => setTimeframe('1h')}
            className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
              timeframe === '1h'
                ? 'bg-sub-card border border-custom-border text-dispute-color'
                : 'text-secondary-desc border border-transparent hover:text-dispute-color'
            }`}
          >
            1H
          </button>
          <button
            onClick={() => setTimeframe('24h')}
            className={`px-4 py-2 text-sm rounded-md font-medium transition-all ${
              timeframe === '24h'
                ? 'bg-sub-card border border-custom-border text-dispute-color'
                : 'text-secondary-desc border border-transparent hover:text-dispute-color'
            }`}
          >
            24H
          </button>
        </div>

        {/* Search + AI Select */}
        <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
          {/* Search Box */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-secondary-desc" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border border-custom-border rounded-md pl-9 pr-3 py-2 text-sm text-dispute-color placeholder:text-secondary-desc focus:outline-none focus:border-yellow-400"
            />
          </div>

          {/* AI Select Count */}
          <div className="flex items-center gap-2 text-yellow-400 text-sm font-medium">
            <span>⭐</span>
            <span>AI Select ({selected.length})</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto mb-6">
        <p className="text-xs text-secondary-desc">
          {t(`disclaimer`)}
        </p>
      </div>

      {/* Crypto Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((crypto, index) => (
          <div
            key={index}
            className="bg-sub-card backdrop-blur-xl border border-custom-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{crypto.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-dispute-color">{crypto.symbol}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-semibold text-dispute-color">{crypto.price}</span>
                    <span className="text-green-500 text-sm font-semibold">
                      {crypto.change}
                    </span>
                  </div>
                </div>
              </div>

              {/* Star Toggle */}
              <button
                onClick={() => toggleSelect(crypto.symbol)}
                className="text-secondary-desc hover:text-yellow-400 transition-colors"
              >
                {selected.includes(crypto.symbol) ? (
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )}
              </button>
            </div>
            {/* Diamond Indicator */}
            <div className="relative mb-6 h-48 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Background diamond */}
                <path
                  d="M 100 20 L 160 100 L 100 180 L 40 100 Z"
                  fill="rgba(16, 185, 129, 0.1)"
                  stroke="rgba(16, 185, 129, 0.3)"
                  strokeWidth="1"
                />
                
                {/* Data diamond */}
                <path
                  d={`M 100 ${120 - crypto.trendValue * 10} L ${100 + crypto.volatilityValue * 6} 100 L 100 ${80 + crypto.volumePriceValue * 10} L ${100 - crypto.momentumValue * 6} 100 Z`}
                  fill="rgba(16, 185, 129, 0.3)"
                  stroke="rgb(16, 185, 129)"
                  strokeWidth="2"
                />

                {/* Labels */}
                <text x="100" y="15" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                  {t('indicators.trend')}
                </text>
                <text x="100" y="25" textAnchor="middle" fill="#6B7280" fontSize="9">
                  {crypto.trendValue.toFixed(2)}
                </text>

                <text x="175" y="105" textAnchor="start" fill="#9CA3AF" fontSize="10">
                  {t('indicators.volatility')}
                </text>
                <text x="165" y="115" textAnchor="end" fill="#6B7280" fontSize="9">
                  {crypto.volatilityValue.toFixed(2)}
                </text>

                <text x="100" y="195" textAnchor="middle" fill="#9CA3AF" fontSize="10">
                  {t('indicators.volumePrice')}
                </text>
                <text x="100" y="188" textAnchor="middle" fill="#6B7280" fontSize="9">
                  {crypto.volumePriceValue.toFixed(2)}
                </text>

                <text x="25" y="105" textAnchor="end" fill="#9CA3AF" fontSize="10">
                  {t('indicators.momentum')}
                </text>
                <text x="35" y="115" textAnchor="start" fill="#6B7280" fontSize="9">
                  {crypto.momentumValue.toFixed(2)}
                </text>

                {/* Center score */}
                <text x="100" y="95" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">
                  {crypto.score}
                </text>
                <text x="100" y="110" textAnchor="middle" fill="rgb(16, 185, 129)" fontSize="12">
                  {t('analysis.strongPositive')}
                </text>
              </svg>
            </div>

            {/* Indicators */}
            <div className="space-y-3 mb-6 border-t border-custom-border pt-4">
              <div className="flex justify-between items-center">
                <span className="text-secondary-desc text-sm">{t('indicators.trend')}</span>
                <span className="font-semibold text-dispute-color">{t(`analysis.${crypto.trend}`)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-desc text-sm">{t('indicators.volatility')}</span>
                <span className="font-semibold text-sm text-dispute-color">{t(`analysis.${crypto.volatility}`)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-desc text-sm">{t('indicators.momentum')}</span>
                <span className="font-semibold text-sm text-dispute-color">{t(`analysis.${crypto.momentum}`)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-secondary-desc text-sm">{t('indicators.volumePrice')}</span>
                <span className="font-semibold text-sm text-dispute-color">{t(`analysis.${crypto.volumePrice}`)}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 items-center justify-between">
              <button className="text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-colors">
                {t('actions.details')}
              </button>
              <button className="bg-gradient text-white font-bold py-2 px-10 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover">
                {t('actions.trade')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISelectHero;