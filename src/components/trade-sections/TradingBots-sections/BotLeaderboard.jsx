import React, { useState } from 'react';
import { Info, ChevronLeft, ChevronRight } from 'lucide-react';

const BotLeaderboard = () => {
  const [activeTab, setActiveTab] = useState({ left: 'spot', right: 'spot' });
  const [activeMarket, setActiveMarket] = useState({ left: 'USDT', right: 'USDT' });

  const trendingData = [
    { pair: 'ETHUSDT', type: 'Perp', running: 2582, ratio: '827 : 1438 : 317' },
    { pair: 'SOLUSDT', type: 'Perp', running: 1756, ratio: '499 : 1059 : 198' },
    { pair: 'BNBUSDT', type: 'Perp', running: 1369, ratio: '420 : 803 : 146' },
    { pair: 'ZECUSDT', type: 'Perp', running: 972, ratio: '213 : 188 : 571' },
    { pair: 'XRPUSDT', type: 'Perp', running: 937, ratio: '398 : 379 : 160' },
    { pair: 'ETHUSDC', type: 'Perp', running: 778, ratio: '168 : 484 : 126' },
    { pair: 'DOGEUSDT', type: 'Perp', running: 691, ratio: '274 : 329 : 88' },
    { pair: 'SOLUSDC', type: 'Perp', running: 538, ratio: '142 : 343 : 53' },
    { pair: '币安人生USDT', type: 'Perp', running: 473, ratio: '196 : 244 : 33' },
    { pair: 'BNBUSDC', type: 'Perp', running: 440, ratio: '89 : 294 : 57' }
  ];

  const volatilityData = [
    { pair: 'CUDUSDT', type: 'Perp', volatility: 8.67, price: 0.03863, change: 15.32 },
    { pair: 'HIPPOUSDT', type: 'Perp', volatility: 6.59, price: 0.001194, change: -24.00 },
    { pair: 'AIAUSDT', type: 'Perp', volatility: 6.20, price: 0.8929, change: -11.46 },
    { pair: 'BDXNUSDT', type: 'Perp', volatility: 5.85, price: 0.06152, change: 19.96 },
    { pair: 'GIGGLEUSDT', type: 'Perp', volatility: 5.59, price: 142.14, change: -1.42 },
    { pair: 'COAIUSDT', type: 'Perp', volatility: 4.83, price: 0.85, change: 19.25 },
    { pair: 'SOONUSDT', type: 'Perp', volatility: 4.63, price: 1.823, change: -32.66 },
    { pair: 'PIPPINUSDT', type: 'Perp', volatility: 4.43, price: 0.02975, change: -5.32 },
    { pair: 'SAPIENUSDT', type: 'Perp', volatility: 4.19, price: 0.16655, change: -4.50 },
    { pair: 'EVAAUSDT', type: 'Perp', volatility: 4.04, price: 1.491, change: 22.51 }
  ];

  const Table = ({ title, data, type }) => (
    <div className="bg-sub-card border border-custom-border rounded-xl p-5">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-dispute-color font-semibold text-lg">{title}</h2>
            <Info size={16} className="text-secondary-desc" />
          </div>
          <p className="text-xs text-secondary-desc">Last updated on 2025-11-16 09:56:30.</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab({ ...activeTab, [type]: 'spot' })}
          className={`px-4 py-1.5 text-xs rounded transition-colors ${
            activeTab[type] === 'spot' ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:bg-gradient/5'
          }`}
        >
          Spot Grid
        </button>
        <button
          onClick={() => setActiveTab({ ...activeTab, [type]: 'futures' })}
          className={`px-4 py-1.5 text-xs rounded transition-colors ${
            activeTab[type] === 'futures' ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:bg-gradient/5'
          }`}
        >
          Futures Grid
        </button>
        <div className="ml-auto">
          <select 
            value={activeMarket[type]}
            onChange={(e) => setActiveMarket({ ...activeMarket, [type]: e.target.value })}
            className="bg-sub-card border border-custom-border text-dispute-color text-xs px-3 py-1.5 rounded cursor-pointer hover:bg-gradient/5"
          >
            <option>USDT</option>
            <option>USDC</option>
            <option>BTC</option>
          </select>
        </div>
      </div>

      <div>
        <div className={`grid ${title.includes('Trending') ? 'grid-cols-[2fr,1fr,2fr,auto]' : 'grid-cols-[2fr,1fr,1fr,1fr,auto]'} gap-4 text-xs text-secondary-desc pb-3 border-b border-custom-border px-2`}>
          <div>Market</div>
          {title.includes('Trending') ? (
            <>
              <div className="text-right">Running</div>
              <div className="text-right">Neutral / Long / Short Ratio</div>
            </>
          ) : (
            <>
              <div className="text-right">Volatility</div>
              <div className="text-right">Last Price</div>
              <div className="text-right">24h%</div>
            </>
          )}
          <div className="text-right">Action</div>
        </div>

        <div className="">
          {data.map((item, idx) => (
            <div key={idx} className={`grid ${title.includes('Trending') ? 'grid-cols-[2fr,1fr,2fr,auto]' : 'grid-cols-[2fr,1fr,1fr,1fr,auto]'} gap-4 items-center py-3 px-2 hover:bg-gradient/5 rounded transition-colors`}>
              <div>
                <div className="text-dispute-color text-sm font-medium">{item.pair}</div>
                <div className="text-secondary-desc text-xs">{item.type}</div>
              </div>
              {title.includes('Trending') ? (
                <>
                  <div className="text-dispute-color text-sm text-right">{item.running}</div>
                  <div className="text-dispute-color text-sm text-right font-mono">{item.ratio}</div>
                </>
              ) : (
                <>
                  <div className="text-dispute-color text-sm text-right">{item.volatility}</div>
                  <div className="text-dispute-color text-sm text-right">{item.price}</div>
                  <div className={`text-sm text-right font-semibold ${item.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.change >= 0 ? '+' : ''}{item.change}%
                  </div>
                </>
              )}
              <button className="text-yellow-500 text-sm font-medium hover:text-yellow-400 transition-colors">
                Create
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mt-4 pt-4 border-t border-custom-border">
          <button className="p-1 text-secondary-desc hover:text-dispute-color transition-colors">
            <ChevronLeft size={16} />
          </button>
          {[1, 2, 3, 4, 5, 6].map(num => (
            <button
              key={num}
              className={`w-7 h-7 rounded text-xs transition-colors ${
                num === 1 ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:text-dispute-color'
              }`}
            >
              {num}
            </button>
          ))}
          <button className="p-1 text-secondary-desc hover:text-dispute-color transition-colors">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-bg p-6">
      <h1 className="w-fit text-gradient text-3xl font-bold mb-6">Hot Coin Leaderboard</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 max-w-[1800px]">
        <Table title="Trending Market Top 10" data={trendingData} type="left" />
        <Table title="Volatility Top 10" data={volatilityData} type="right" />
      </div>
    </div>
  );
};

export default BotLeaderboard;