import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Info } from 'lucide-react';

const TetherMarkets = () => {
  const { t } = useTranslation();
  const [timeframe, setTimeframe] = useState('1D');

  const timeframes = ['1D', '7D', '1M', '3M', '1Y'];

  const conversionRates = [
    { usdt: '0.5', inr: '43.91' },
    { usdt: '1', inr: '87.82' },
    { usdt: '5', inr: '439.09' },
    { usdt: '10', inr: '878.19' },
    { usdt: '50', inr: '4,390.95' },
    { usdt: '100', inr: '8,781.90' },
    { usdt: '500', inr: '43,909.49' },
    { usdt: '1000', inr: '87,818.98' }
  ];

  const reverseRates = [
    { inr: '0.5', usdt: '0.0056939' },
    { inr: '1', usdt: '0.0113871' },
    { inr: '5', usdt: '0.0569353' },
    { inr: '10', usdt: '0.1138706' },
    { inr: '50', usdt: '0.569353' },
    { inr: '100', usdt: '1.138706' },
    { inr: '500', usdt: '5.69353' },
    { inr: '1000', usdt: '11.39' }
  ];

  return (
    <section className="py-16 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="w-fit text-3xl font-bold text-gradient py-4 text-center sm:text-left">
          {t('tetherMarkets.title')}
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Left Side - Chart and Info */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Price Header + Chart */}
            <div className="w-full bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-4">
                <div className="flex items-center gap-2 justify-center sm:justify-start mb-3 sm:mb-0">
                  <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center">
                    <span className="text-xl">💎</span>
                  </div>
                  <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center -ml-3">
                    <span className="text-xl">₹</span>
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-dispute-color">{t('tetherMarkets.pair')}</h3>
                  <p className="text-2xl font-bold text-dispute-color">₹ 87.82</p>
                  <p className="text-green-500 text-sm font-semibold">+0%</p>
                </div>
              </div>

              {/* Chart Timeframes */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                {timeframes.map((tf) => (
                  <button
                    key={tf}
                    onClick={() => setTimeframe(tf)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      timeframe === tf
                        ? 'bg-gradient text-white'
                        : 'bg-card text-secondary-desc hover:text-dispute-color'
                    }`}
                  >
                    {tf}
                  </button>
                ))}
              </div>

              {/* Chart Placeholder */}
              <div className="bg-card rounded-xl p-6 border border-custom-border h-64 sm:h-72 md:h-80 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#f59e0b', stopOpacity: 0.3 }} />
                        <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 0 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 150 L 50 140 L 100 145 L 150 130 L 200 135 L 250 125 L 300 120 L 350 115 L 400 110"
                      fill="url(#chartGradient)"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <path
                      d="M 0 150 L 50 140 L 100 145 L 150 130 L 200 135 L 250 125 L 300 120 L 350 115 L 400 110"
                      fill="none"
                      stroke="#f59e0b"
                      strokeWidth="2"
                    />
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#666" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="135" r="4" fill="#f59e0b" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-secondary-desc">3:39 PM</div>
                <div className="absolute bottom-4 right-4 text-xs text-secondary-desc">11:39 PM</div>
              </div>
            </div>

            {/* Markets Info */}
            <div className="w-full bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border">
              <h3 className="text-xl font-bold text-dispute-color mb-4 text-center sm:text-left">
                {t('tetherMarkets.markets')}
              </h3>
              
              <div className="space-y-4">
                {[
                  ['popularity', '#3'],
                  ['marketCap', '₹15,971.36B'],
                  ['volume', '₹11,742.09B'],
                  ['circulatingSupply', '181.87B'],
                ].map(([key, value], idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm sm:text-base">
                    <div className="flex items-center gap-2">
                      <span className="text-secondary-desc">{t(`tetherMarkets.${key}`)}</span>
                      <Info className="w-4 h-4 text-secondary-desc" />
                    </div>
                    <span className="text-dispute-color font-semibold">{value}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-secondary-desc mt-4 leading-relaxed">
                {t('tetherMarkets.description')}
              </p>

              <h3 className="text-xl font-bold text-dispute-color my-4 text-center sm:text-left">
                {t('tetherMarkets.conversionTables')}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-6 mb-4 text-center sm:text-left">
                <div>
                  <p className="text-xs text-secondary-desc mb-1">{t('tetherMarkets.7daysRate')}</p>
                  <p className="text-red-500 font-semibold">-0.02%</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-desc mb-1">{t('tetherMarkets.24hourRate')}</p>
                  <p className="text-green-500 font-semibold">+0%</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-desc mb-1">{t('tetherMarkets.1monthRate')}</p>
                  <p className="text-red-500 font-semibold">-0.03%</p>
                </div>
                <div>
                  <p className="text-xs text-secondary-desc mb-1">{t('tetherMarkets.3monthRate')}</p>
                  <p className="text-secondary-desc font-semibold">0%</p>
                </div>
              </div>

              <p className="text-xs text-secondary-desc mt-4">
                {t('tetherMarkets.rateDisclaimer')}
              </p>
            </div>
          </div>

          {/* Right Side - Conversion Tables */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* USDT to INR */}
            <div className="w-full bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border">
              <h3 className="text-lg font-bold text-dispute-color mb-4 text-center sm:text-left">
                {t('tetherMarkets.usdtToInr')}
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                {conversionRates.map((rate, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-custom-border last:border-0">
                    <span className="text-secondary-desc">{rate.usdt} USDT</span>
                    <span className="text-dispute-color font-semibold">{rate.inr} INR</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INR to USDT */}
            <div className="w-full bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border">
              <h3 className="text-lg font-bold text-dispute-color mb-4 text-center sm:text-left">
                {t('tetherMarkets.inrToUsdt')}
              </h3>
              <div className="space-y-3 text-sm sm:text-base">
                {reverseRates.map((rate, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-custom-border last:border-0">
                    <span className="text-secondary-desc">{rate.inr} INR</span>
                    <span className="text-dispute-color font-semibold">{rate.usdt} USDT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TetherMarkets;