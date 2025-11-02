import React, { useState } from 'react';
import { Eye, Search } from 'lucide-react';

const OverviewHero = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [hideSmallAssets, setHideSmallAssets] = useState(false);
  const [activeTab, setActiveTab] = useState('coin');

  const coins = [
    {
      symbol: 'BNB',
      name: 'BNB',
      icon: '🟡',
      amount: '0.00',
      usdValue: '$0.00',
      price: '$1,086.06'
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: '🟠',
      amount: '0.00',
      usdValue: '$0.00',
      price: '$110,944.81'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: '🔵',
      amount: '0.00',
      usdValue: '$0.00',
      price: '$3,882.70'
    },
    {
      symbol: 'USDT',
      name: 'TetherUS',
      icon: '🟢',
      amount: '0.00',
      usdValue: '$0.00',
      price: '$1.00'
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Estimated Balance Section */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-lg sm:text-xl font-semibold">Estimated Balance</h3>
                <Eye
                  className="w-5 h-5 text-secondary-desc cursor-pointer"
                  onClick={() => setShowBalance(!showBalance)}
                />
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-bold">{showBalance ? '0.00' : '****'}</span>
                <span className="text-lg sm:text-xl text-secondary-desc">BTC</span>
                <button className="text-secondary-desc text-lg sm:text-xl">▼</button>
              </div>
              <p className="text-secondary-desc">≈ ${showBalance ? '0.00' : '****'}</p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-3 w-full lg:w-auto">
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Deposit
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Withdraw
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                Transfer
              </button>
              <button className="px-5 sm:px-6 py-2 sm:py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border w-full sm:w-auto">
                History
              </button>
            </div>
          </div>

          {/* Expandable Section */}
          <div className="mt-4 pt-4 border-t border-custom-border">
            <button className="flex items-center justify-center w-full text-secondary-desc hover:text-dispute-color transition">
              <span className="text-xl">▼</span>
            </button>
          </div>
        </div>

        {/* My Assets Section */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">My Assets</h2>
            <button className="text-sm text-accent hover:text-accent/80 transition">
              View All 350+ Coins ›
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mb-6 border-b border-custom-border">
            <button
              onClick={() => setActiveTab('coin')}
              className={`pb-3 font-semibold transition relative ${
                activeTab === 'coin' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              Coin View
              {activeTab === 'coin' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('account')}
              className={`pb-3 font-semibold transition ${
                activeTab === 'account' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              Account View
            </button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-desc" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-custom-border rounded-lg focus:outline-none focus:border-accent transition"
              />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hideSmallAssets}
                onChange={(e) => setHideSmallAssets(e.target.checked)}
                className="w-4 h-4 rounded border-custom-border"
              />
              <span className="text-sm text-secondary-desc">Hide assets &lt;1 USD</span>
            </label>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="text-left py-3 px-2 text-sm text-secondary-desc font-semibold">
                    Coin ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-semibold">
                    Amount ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-semibold">
                    Coin Price ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.symbol} className="border-b border-custom-border hover:bg-pre-bg transition">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient flex items-center justify-center text-lg">
                          {coin.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{coin.symbol}</p>
                          <p className="text-sm text-secondary-desc">{coin.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <p className="font-semibold">{showBalance ? coin.amount : '****'}</p>
                      <p className="text-sm text-secondary-desc">{showBalance ? coin.usdValue : '****'}</p>
                    </td>
                    <td className="py-4 px-2 text-right font-semibold">
                      {showBalance ? coin.price : '****'}
                    </td>
                    <td className="py-4 px-2 text-right">
                      <button className="text-sm font-semibold text-dispute-color hover:text-accent transition underline">
                        Cash In
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Recent Transactions</h2>
            <button className="text-sm text-accent hover:text-accent/80 transition">
              More ›
            </button>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-6xl mb-4 opacity-50">🔍📄</div>
            <p className="text-secondary-desc">No records</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewHero;