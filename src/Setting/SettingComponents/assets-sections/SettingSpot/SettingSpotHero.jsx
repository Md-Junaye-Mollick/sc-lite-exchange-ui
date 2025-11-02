import React, { useState } from 'react';
import { Eye, Search, MoreVertical } from 'lucide-react';

const SettingSpotHero = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [hideSmallAssets, setHideSmallAssets] = useState(false);

  const coins = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      icon: '🟠',
      amount: '0.00',
      usdValue: '$00.00',
      available: '0.00'
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      icon: '🔵',
      amount: '0.00',
      usdValue: '$00.00',
      available: '0.00'
    },
    {
      symbol: 'BNB',
      name: 'BNB',
      icon: '🟡',
      amount: '0.00',
      usdValue: '$00.00',
      available: '0.00'
    },
    {
      symbol: 'USDT',
      name: 'TetherUS',
      icon: '🟢',
      amount: '0.00',
      usdValue: '$00.00',
      available: '0.00'
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Estimated Balance Section */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            <div className="w-full lg:w-auto">
              <div className="flex items-center gap-3 mb-3">
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
              <p className="text-secondary-desc mb-3">≈ ${showBalance ? '0.00' : '****'}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-secondary-desc">Today's PnL</span>
                <button className="w-4 h-4 rounded-full border border-secondary-desc text-secondary-desc flex items-center justify-center text-xs">
                  ⓘ
                </button>
                <span className="text-secondary-desc">+ ${showBalance ? '0.00' : '****'}(0.00%)</span>
                <span className="text-secondary-desc">›</span>
              </div>
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
              <button className="p-2 sm:p-2.5 bg-card hover:bg-pre-bg rounded-lg transition border border-custom-border">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Spot Section */}
        <div className="bg-sub-card rounded-2xl p-4 sm:p-6 border border-custom-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl sm:text-2xl font-bold">Spot</h2>
            
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button className="p-2 bg-card hover:bg-pre-bg rounded-lg transition border border-custom-border">
                <Search className="w-5 h-5 text-secondary-desc" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-card hover:bg-pre-bg rounded-lg transition border border-custom-border">
                <span className="text-sm font-medium">Small Amount Exchange</span>
                <svg className="w-4 h-4 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hideSmallAssets}
                  onChange={(e) => setHideSmallAssets(e.target.checked)}
                  className="w-4 h-4 rounded border-custom-border"
                />
                <span className="text-sm text-secondary-desc whitespace-nowrap">Hide assets &lt;1 USD</span>
              </label>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="text-left py-3 px-2 text-sm text-secondary-desc font-medium">
                    Coin ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">
                    Amount ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">
                    Available ↕
                  </th>
                  <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin) => (
                  <tr key={coin.symbol} className="border-b border-custom-border hover:bg-pre-bg transition">
                    <td className="py-4 px-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient flex items-center justify-center text-lg">
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
                    <td className="py-4 px-2 text-right">
                      <p className="font-semibold">{showBalance ? coin.available : '****'}</p>
                    </td>
                    <td className="py-4 px-2 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-sm font-semibold hover:text-accent transition underline">
                          Convert
                        </button>
                        <button className="text-sm font-semibold hover:text-accent transition underline">
                          Earn
                        </button>
                        <button className="p-1 hover:bg-card rounded transition">
                          <MoreVertical className="w-4 h-4 text-secondary-desc" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingSpotHero;