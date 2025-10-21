import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const New = () => {
  const { t } = useTranslation();
  const [newListings, setNewListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const fetchNewListings = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=3&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        
        // Simulate listing dates for new coins
        const formattedData = data.map((coin, idx) => {
          const daysAgo = Math.floor(Math.random() * 30) + 1;
          const listingDate = new Date();
          listingDate.setDate(listingDate.getDate() - daysAgo);
          
          return {
            id: coin.id,
            symbol: coin.symbol.toUpperCase(),
            name: coin.name,
            price: coin.current_price,
            change: coin.price_change_percentage_24h,
            volume: coin.total_volume,
            marketCap: coin.market_cap,
            image: coin.image,
            dateListed: listingDate.toISOString().split('T')[0]
          };
        });
        
        setNewListings(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching new listings:', error);
        setLoading(false);
      }
    };

    fetchNewListings();
    const interval = setInterval(fetchNewListings, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    if (price >= 1) return `$${price.toFixed(4)}`;
    if (price >= 0.01) return `$${price.toFixed(4)}`;
    if (price >= 0.0001) return `$${price.toFixed(6)}`;
    return `$${price.toFixed(8)}`;
  };

  const formatLargeNumber = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-dispute-color text-xl">{t('new.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto">
        {/* Table */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 hover:text-dispute-color transition-colors">
                      {t('new.name')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 ml-auto hover:text-dispute-color transition-colors">
                      {t('new.price')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 ml-auto hover:text-dispute-color transition-colors">
                      {t('new.change')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 ml-auto hover:text-dispute-color transition-colors">
                      {t('new.volume24h')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 ml-auto hover:text-dispute-color transition-colors">
                      {t('new.marketCap')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">
                    <button className="flex items-center gap-1 ml-auto hover:text-dispute-color transition-colors">
                      {t('new.dateListed')}
                      <span className="text-xs">▼</span>
                    </button>
                  </th>
                  <th className="px-4 py-4 text-center text-xs text-secondary-desc font-semibold">{t('new.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {newListings.map((item) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-custom-border hover:bg-sub-card/5 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-semibold text-dispute-color">{item.symbol}</p>
                          <p className="text-xs text-secondary-desc">{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <p className="font-semibold text-dispute-color">{formatPrice(item.price)}</p>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className={`font-semibold ${
                        item.change >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {item.change >= 0 ? '+' : ''}{item.change?.toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.volume)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatLargeNumber(item.marketCap)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {item.dateListed}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="text-dispute-color hover:text-yellow-400 transition-colors">
                          📊
                        </button>
                        <button className="text-dispute-color hover:text-yellow-400 transition-colors">
                          📉
                        </button>
                      </div>
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
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium bg-gradient text-white border border-custom-border">
            1
          </button>
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
        </div>
      </div>
    </div>
  );
};

export default New;