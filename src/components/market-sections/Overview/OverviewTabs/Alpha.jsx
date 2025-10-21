import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const Alpha = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('All');
  const [favorites, setFavorites] = useState(new Set());
  const [alphaData, setAlphaData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = ['All', 'Points+', 'BSC 💎', 'Ethereum', 'Solana', 'Base', 'Sonic', 'Sui', 'TRON'];

  useEffect(() => {
    const fetchAlphaData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=2&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        
        // Get coins from page 2 to simulate alpha/emerging projects
        const formattedData = data
          .slice(0, 20)
          .map((coin) => ({
            id: coin.id,
            name: coin.symbol.toUpperCase(),
            fullName: coin.name,
            price: coin.current_price,
            priceUsd: coin.current_price,
            change: coin.price_change_percentage_24h,
            volume: coin.total_volume,
            marketCap: coin.market_cap,
            image: coin.image,
            hasVerified: Math.random() > 0.5,
            hasRocket: Math.random() > 0.7
          }));
        
        setAlphaData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching alpha data:', error);
        setLoading(false);
      }
    };

    fetchAlphaData();
    const interval = setInterval(fetchAlphaData, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  const formatPrice = (price) => {
    if (price >= 1) return price.toFixed(2);
    if (price >= 0.01) return price.toFixed(4);
    if (price >= 0.0001) return price.toFixed(6);
    return price.toFixed(8);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const filteredData = alphaData;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-dispute-color text-xl">{t('marketsalpha.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeTab === tab
                  ? 'bg-gradient text-white border border-custom-border'
                  : 'bg-sub-card text-dispute-color border border-custom-border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">{t('marketsalpha.name')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('marketsalpha.price')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('marketsalpha.change')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('marketsalpha.volume24h')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('marketsalpha.marketCap')}</th>
                  <th className="px-4 py-4 text-center text-xs text-secondary-desc font-semibold">{t('marketsalpha.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-custom-border hover:bg-sub-card/5 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className="text-secondary-desc hover:text-yellow-400 transition-colors"
                        >
                          <Star 
                            className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-yellow-400 text-yellow-400' : ''}`}
                          />
                        </button>
                        <img src={item.image} alt={item.name} className="w-6 h-6 rounded-full" />
                        <div className="flex items-center gap-1">
                          <span className="font-semibold text-dispute-color">{item.name}</span>
                          {item.hasVerified && <span className="text-yellow-400">💎</span>}
                          {item.hasRocket && <span className="text-xs">🚀</span>}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div>
                        <p className="font-semibold text-dispute-color">{formatPrice(item.price)}</p>
                        <p className="text-xs text-secondary-desc">${formatPrice(item.priceUsd)}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className={`flex items-center justify-end gap-1 font-semibold ${
                        item.change >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        <span>
                          {item.change >= 0 ? '+' : ''}{item.change?.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.volume)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.marketCap)}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="text-dispute-color px-3 py-1 rounded text-xs font-medium transition-colors">
                        📊📉
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">←</button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors border ${
                page === 1
                  ? 'bg-gradient text-white border-custom-border'
                  : 'bg-sub-card text-dispute-color border-custom-border'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="text-secondary-desc text-sm">... 34</span>
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
        </div>
      </div>
    </div>
  );
};

export default Alpha;