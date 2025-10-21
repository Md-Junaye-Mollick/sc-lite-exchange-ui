import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, TrendingDown } from 'lucide-react';
  
const Cryptos = () => {
  const { t } = useTranslation();
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        setCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptos();
    const interval = setInterval(fetchCryptos, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price) => {
    if (price >= 1) return `$${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    return `$${price.toFixed(6)}`;
  };

  const formatMarketCap = (cap) => {
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
    return `$${cap.toLocaleString()}`;
  };

  const formatVolume = (vol) => {
    if (vol >= 1e9) return `$${(vol / 1e9).toFixed(2)}B`;
    if (vol >= 1e6) return `$${(vol / 1e6).toFixed(2)}M`;
    return `$${vol.toLocaleString()}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-dispute-color text-xl">{t('cryptos.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="w-fit text-3xl font-bold text-gradient py-2">{t('cryptos.title')}</h1>
        <p className="text-secondary-desc text-sm mb-6">{t('cryptos.description')}</p>
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-sm text-secondary-desc font-semibold">{t('cryptos.name')}</th>
                  <th className="px-4 py-4 text-right text-sm text-secondary-desc font-semibold">{t('cryptos.price')}</th>
                  <th className="px-4 py-4 text-right text-sm text-secondary-desc font-semibold">{t('cryptos.change24h')}</th>
                  <th className="px-4 py-4 text-right text-sm text-secondary-desc font-semibold">{t('cryptos.volume24h')}</th>
                  <th className="px-4 py-4 text-right text-sm text-secondary-desc font-semibold">{t('cryptos.marketCap')}</th>
                </tr>
              </thead>
              <tbody>
                {cryptos.map((crypto, idx) => (
                  <tr 
                    key={crypto.id} 
                    className="border-b border-custom-border hover:bg-sub-card/5 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img src={crypto.image} alt={crypto.name} className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="font-semibold text-dispute-color">{crypto.symbol.toUpperCase()}</p>
                          <p className="text-xs text-secondary-desc">{crypto.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <p className="font-semibold text-dispute-color">{formatPrice(crypto.current_price)}</p>
                      <p className="text-xs text-secondary-desc">{formatPrice(crypto.current_price)}</p>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className={`flex items-center justify-end gap-1 ${crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <span className="font-semibold">
                          {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                          {crypto.price_change_percentage_24h?.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatVolume(crypto.total_volume)}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {formatMarketCap(crypto.market_cap)}
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

export default Cryptos;