import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const DashboardTable = () => {
  const [activeTab, setActiveTab] = useState('hot');
  
  const tabs = ['Holding', 'Hot', 'New Listing', 'Favorite', 'Top Gainers', '24h Volume'];
  
  const hotCryptos = [
    { id: 1, name: 'Cardano', symbol: 'ADA', price: 0.8099, priceUsd: '$0.87', change: -1.37, color: 'bg-blue-500' },
    { id: 2, name: 'Binance Coin', symbol: 'BNB', price: 1195.2, priceUsd: '$1,195.20', change: -1.75, color: 'bg-yellow-500' },
    { id: 3, name: 'Bitcoin', symbol: 'BTC', price: 14329, priceUsd: '$14,329.52', change: -0.66, color: 'bg-orange-500' },
    { id: 4, name: 'Dogecoin', symbol: 'DOGE', price: 0.2044, priceUsd: '$0.20', change: -1.26, color: 'bg-yellow-400' },
    { id: 5, name: 'Energo', symbol: 'ENGO', price: 1.84, priceUsd: '$1.84', change: -2.82, color: 'bg-gray-600' },
  ];

  const discoverCoins = [
    { symbol: 'ETH', change: '1.41% ~252.32%', status: 'Redible / locked', color: 'bg-purple-500' },
    { symbol: 'USDT', change: '10.10%', status: 'Redible / locked', color: 'bg-green-500' },
    { symbol: 'USDC', change: '0.00%', status: 'Redible / locked', color: 'bg-blue-500' },
    { symbol: 'SOL', change: '1.80% ~253.58%', status: 'Redible / locked', color: 'bg-purple-400' },
  ];

  const topics = [
    { rank: 1, tag: '#WorldGameExpo' },
    { rank: 2, tag: '#MarkFailback' },
    { rank: 3, tag: '#CFFWatch' },
  ];

  return (
    <div className="px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Markets Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-dispute-color">Markets</h2>
            <button className="text-gradient text-sm hover:opacity-80">More →</button>
          </div>
          
          <div className="flex gap-4 mb-6 border-b border-custom-border pb-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.toLowerCase()
                    ? 'text-dispute-color border-b-2 border-accent'
                    : 'text-secondary-desc hover:text-dispute-color'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="hidden md:flex justify-between text-xs text-secondary-desc mb-3 px-2">
            <span>Name</span>
            <div className="flex gap-12">
              <span>24H Change %</span>
              <span>Action</span>
            </div>
          </div>

          <div className="space-y-2">
            {hotCryptos.map((crypto) => (
              <div
                key={crypto.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 rounded-xl hover:bg-card transition-colors cursor-pointer gap-3 md:gap-0"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 ${crypto.color} rounded-full`}></div>
                  <div>
                    <p className="text-dispute-color font-semibold">{crypto.symbol}</p>
                    <p className="text-xs text-secondary-desc">{crypto.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right">
                    <p className="text-dispute-color font-medium">{crypto.price}</p>
                    <p className="text-xs text-secondary-desc">{crypto.priceUsd}</p>
                  </div>
                  
                  <div className={`flex items-center gap-1 ${crypto.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span className="font-medium">{crypto.change}%</span>
                  </div>

                  <button className="text-gradient text-sm hover:opacity-80 font-medium">Trade</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Discover Section */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-dispute-color">Discover</h2>
              <button className="text-gradient text-sm hover:opacity-80">More →</button>
            </div>

            <div className="flex gap-4 mb-6 text-sm border-b border-custom-border pb-2">
              <button className="text-dispute-color border-b-2 border-accent pb-1">Earn</button>
              <button className="text-secondary-desc hover:text-dispute-color">Copy Trading</button>
            </div>

            <p className="text-secondary-desc text-sm mb-4">Simplest & Secure. Search popular coins and start earning.</p>

            <div className="space-y-3">
              <div className="hidden md:grid grid-cols-4 gap-4 text-xs text-secondary-desc px-2">
                <span>Coin ↓</span>
                <span>Est.APR ↓</span>
                <span>Duration</span>
                <span>Action</span>
              </div>

              {discoverCoins.map((coin, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-4 gap-3 md:gap-4 items-start md:items-center p-3 rounded-xl hover:bg-card transition-colors">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 ${coin.color} rounded-full`}></div>
                    <span className="text-dispute-color font-medium">{coin.symbol}</span>
                  </div>
                  <span className="text-green-500 font-medium text-sm">{coin.change}</span>
                  <span className="text-secondary-desc text-sm">{coin.status}</span>
                  <button className="text-gradient text-sm hover:opacity-80 font-medium">Subscribe</button>
                </div>
              ))}
            </div>
          </div>

          {/* Square Section */}
          <div className="space-y-6">
            <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-dispute-color">Square</h2>
                <button className="text-gradient text-sm hover:opacity-80">More →</button>
              </div>

              <div className="flex gap-4 mb-6 text-sm border-b border-custom-border pb-2">
                <button className="text-dispute-color border-b-2 border-accent pb-2">News</button>
                <button className="text-secondary-desc hover:text-dispute-color">Suggested to You</button>
              </div>

              <div className="bg-card rounded-xl p-4 mb-4">
                <h3 className="text-sm text-dispute-color mb-2">Trending topic</h3>
                <div className="flex flex-wrap gap-4">
                  {topics.map((topic) => (
                    <div key={topic.rank} className="flex items-center gap-1 text-secondary-desc text-xs">
                      <span>{topic.rank}</span>
                      <span className="text-blue-400">{topic.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-custom-border pl-4">
                  <p className="text-xs text-secondary-desc mb-2">32 mins ago</p>
                  <p className="text-dispute-color text-sm font-medium mb-2">
                    Binance Alpha to Feature Plaguest (PAGST), Airdrop 38 PAGST Tokens to Eligible Users
                  </p>
                  <p className="text-secondary-desc text-xs">
                    Plaguest is a new gaming project announced by Binance which will feature Plaguest (PAGST) with Airdrop training opening on October 28...
                  </p>
                </div>

                <div className="border-l-2 border-custom-border pl-4">
                  <p className="text-xs text-secondary-desc mb-2">47 mins ago</p>
                  <p className="text-dispute-color text-sm font-medium">
                    BTCUSDT, ETHUSDT and SOLUSDT Lead Binance USD-M Perpetual Futures Market in Trading Vol
                  </p>
                </div>
              </div>
            </div>

            {/* Announcements Section */}
            <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-dispute-color">Announcements</h2>
                <button className="text-gradient text-sm hover:opacity-80">More →</button>
              </div>
              
              <div className="bg-gradient rounded-xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-white font-bold mb-1">EARN TOGETHER</p>
                  <p className="text-black font-semibold text-sm">Unlock Up to 1,000 USDC</p>
                </div>
                <div className="absolute bottom-2 right-2">
                  <div className="w-12 h-12 bg-blue-400/30 rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-300/50 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;