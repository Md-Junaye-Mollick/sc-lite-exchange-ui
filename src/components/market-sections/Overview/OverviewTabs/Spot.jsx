import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, TrendingDown, Star, Search } from 'lucide-react';

const Spot = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ALL');
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [spotData, setSpotData] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = ['ALL', 'USDC', 'USDT', 'FDUSD', 'BNB', 'BTC', 'ALTS', 'PAT'];

  useEffect(() => {
    const fetchSpotData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        
        const formattedData = data.map((coin, idx) => ({
          id: coin.id,
          pair: `${coin.symbol.toUpperCase()}/USDT`,
          symbol: coin.symbol.toUpperCase(),
          price: coin.current_price,
          change: coin.price_change_percentage_24h,
          high: coin.high_24h,
          low: coin.low_24h,
          volume: coin.total_volume,
          marketCap: coin.market_cap,
          image: coin.image,
          trending: idx < 5 ? (Math.random() > 0.5 ? 'up' : 'down') : null
        }));
        
        setSpotData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching spot data:', error);
        setLoading(false);
      }
    };

    fetchSpotData();
    const interval = setInterval(fetchSpotData, 30000);
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
    if (price >= 1000) return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 1) return price.toFixed(2);
    if (price >= 0.01) return price.toFixed(4);
    return price.toFixed(6);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  const filteredData = spotData.filter(item => {
    const matchesSearch = item.pair.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'ALL' || item.pair.includes(activeTab);
    return matchesSearch && matchesTab;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-dispute-color text-xl">{t('spot.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-lg border border-yellow-500/20">
              <span className="text-yellow-400 font-bold text-sm">{t('spot.title')}</span>
            </div>
            <div className="flex items-center gap-2 bg-sub-card px-3 py-2 rounded-lg border border-custom-border">
              <span className="text-yellow-400 font-semibold text-xs">{t('spot.fee')}</span>
            </div>
          </div>
          <button className="bg-gradient text-white py-4 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm sm:text-base flex items-center gap-2">
            <span>⚡</span>
            {t('spot.createScreener')}
          </button>
        </div>

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

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-desc w-5 h-5" />
            <input
              type="text"
              placeholder={t('spot.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-2.5 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-custom-border"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold"></th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">{t('spot.pair')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.price')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.change')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.high')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.low')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.volume')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('spot.marketCap')}</th>
                  <th className="px-4 py-4 text-center text-xs text-secondary-desc font-semibold">{t('spot.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-custom-border hover:bg-sub-card/5 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="text-secondary-desc hover:text-yellow-400 transition-colors"
                      >
                        <Star 
                          className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-yellow-400 text-yellow-400' : ''}`}
                        />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {item.trending && (
                          <span className="text-xs">
                            {item.trending === 'up' ? '🔥' : '⚡'}
                          </span>
                        )}
                        <span className="font-semibold text-dispute-color">{item.pair}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div>
                        <p className="font-semibold text-dispute-color">{formatPrice(item.price)}</p>
                        <p className="text-xs text-secondary-desc">${formatPrice(item.price)}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className={`flex items-center justify-end gap-1 font-semibold ${
                        item.change >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.change >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span>
                          {item.change >= 0 ? '+' : ''}{item.change?.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatPrice(item.high)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatPrice(item.low)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.volume)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.marketCap)}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <button className="bg-sub-card hover:bg-custom-border text-dispute-color px-3 py-1 rounded text-xs font-medium transition-colors border border-custom-border">
                        📊
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
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
        </div>
      </div>
    </div>
  );
};

export default Spot;