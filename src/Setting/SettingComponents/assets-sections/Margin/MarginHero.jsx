import React, { useState, useEffect } from 'react';
import { Eye, Search, MoreVertical } from 'lucide-react';

const MarginHero = () => {
  const [activeTab, setActiveTab] = useState('cross');
  const [showBalance, setShowBalance] = useState(true);
  const [hideSmallAccounts, setHideSmallAccounts] = useState(false);
  const [fundsTab, setFundsTab] = useState('funds');
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1'
        );
        const data = await response.json();
        setCoins(data.slice(0, 15).map(coin => ({
          symbol: coin.symbol.toUpperCase(),
          name: coin.name,
          image: coin.image
        })));
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-6 mb-6 border-b border-custom-border">
          <button
            onClick={() => setActiveTab('cross')}
            className={`pb-3 font-semibold transition relative ${
              activeTab === 'cross' ? 'text-dispute-color' : 'text-secondary-desc'
            }`}
          >
            Cross Margin
            {activeTab === 'cross' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>
          <button
            onClick={() => setActiveTab('isolated')}
            className={`pb-3 font-semibold transition ${
              activeTab === 'isolated' ? 'text-dispute-color' : 'text-secondary-desc'
            }`}
          >
            Isolated Margin
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mb-6">
          <button className="px-6 py-2.5 bg-gradient text-white font-semibold rounded-lg hover:opacity-90 transition">
            Borrow
          </button>
          <button className="px-6 py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border">
            Repay
          </button>
          <button className="px-6 py-2.5 bg-card hover:bg-pre-bg rounded-lg font-semibold transition border border-custom-border">
            Transfer
          </button>
          <button className="p-2.5 bg-card hover:bg-pre-bg rounded-lg transition border border-custom-border">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Balance Card */}
        <div className="bg-sub-card rounded-2xl p-6 border border-custom-border mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold">Total balance</h3>
                <Eye className="w-5 h-5 text-secondary-desc cursor-pointer" onClick={() => setShowBalance(!showBalance)} />
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold">{showBalance ? '0.00000000' : '****'}</span>
                <span className="text-xl text-secondary-desc">BTC</span>
                <button className="text-secondary-desc">▼</button>
              </div>
              <p className="text-secondary-desc mb-3">≈ ${showBalance ? '0.00' : '****'}</p>
              <p className="text-secondary-desc text-sm mb-4">Today's PNL ${showBalance ? '0.00' : '****'}(0.00%) ›</p>

              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-secondary-desc text-sm mb-1 border-b border-dotted border-custom-border inline-block">Collateral Value (USDT)</p>
                  <p className="text-xl font-semibold">-</p>
                </div>
                <div>
                  <p className="text-dispute-color font-medium mb-1">Total Debt(BTC)</p>
                  <p className="text-2xl font-bold">{showBalance ? '0.00000000' : '****'}</p>
                  <p className="text-secondary-desc text-sm">≈ ${showBalance ? '0.00' : '****'}</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-lg font-semibold border-b border-dotted border-custom-border inline-block">Margin Level</p>
                  <div className="flex items-center gap-2">
                    <span className="text-gradient bg-gradient text-sm font-semibold">Cross 5x</span>
                    <button className="text-secondary-desc">⊕</button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-gradient flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-sub-card flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <span className="text-4xl font-bold text-green-500">999.00</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-secondary-desc text-sm mb-1 border-b border-dotted border-custom-border inline-block">Collateral Margin Level</p>
                  <p className="text-xl font-semibold">-</p>
                </div>
                <div>
                  <p className="text-dispute-color font-medium mb-1 border-b border-dotted border-custom-border inline-block">Account Equity(BTC)</p>
                  <p className="text-2xl font-bold">{showBalance ? '0.00000000' : '****'}</p>
                  <p className="text-secondary-desc text-sm">≈ ${showBalance ? '0.00' : '****'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Funds Section */}
        <div className="bg-sub-card rounded-2xl p-6 border border-custom-border">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-6 border-b border-custom-border">
              <button
                onClick={() => setFundsTab('funds')}
                className={`pb-3 font-semibold transition relative ${
                  fundsTab === 'funds' ? 'text-dispute-color' : 'text-secondary-desc'
                }`}
              >
                Funds
                {fundsTab === 'funds' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
              </button>
              <button
                onClick={() => setFundsTab('positions')}
                className={`pb-3 font-semibold transition ${
                  fundsTab === 'positions' ? 'text-dispute-color' : 'text-secondary-desc'
                }`}
              >
                Positions
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 text-secondary-desc cursor-pointer" />
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={hideSmallAccounts} onChange={(e) => setHideSmallAccounts(e.target.checked)} className="w-4 h-4" />
                <span className="text-sm text-secondary-desc whitespace-nowrap">Hide small accounts</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-secondary-desc whitespace-nowrap">Only show debts</span>
              </label>
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="text-center py-8 text-secondary-desc">Loading...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-custom-border">
                    <th className="text-left py-3 px-2 text-sm text-secondary-desc font-medium">Coin ↕</th>
                    <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">Total balance ↕</th>
                    <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">Available Balance ↕</th>
                    <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">Borrowed ↕</th>
                    <th className="text-right py-3 px-2 text-sm text-secondary-desc font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin) => (
                    <tr key={coin.symbol} className="border-b border-custom-border hover:bg-pre-bg transition">
                      <td className="py-4 px-2">
                        <div className="flex items-center gap-3">
                          <img src={coin.image} alt={coin.symbol} className="w-8 h-8 rounded-full" />
                          <span className="font-semibold">{coin.symbol}</span>
                        </div>
                      </td>
                      <td className="py-4 px-2 text-right font-medium">{showBalance ? '0.00000000' : '****'}</td>
                      <td className="py-4 px-2 text-right font-medium">{showBalance ? '0.00000000' : '****'}</td>
                      <td className="py-4 px-2 text-right font-medium">{showBalance ? '0.00000000' : '****'}</td>
                      <td className="py-4 px-2 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <button className="text-sm font-semibold text-accent hover:opacity-80 transition">Transfer</button>
                          <button className="text-sm font-semibold text-accent hover:opacity-80 transition">Borrow/Repay</button>
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
          )}

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color">‹</button>
            {[1, 2, 3, 4, 5].map(page => (
              <button
                key={page}
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition border ${
                  page === 1 ? 'bg-gradient text-dispute-color border-custom-border' : 'bg-sub-card text-secondary-desc border-custom-border'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="text-secondary-desc text-sm">... 22</span>
            <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color">›</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarginHero;