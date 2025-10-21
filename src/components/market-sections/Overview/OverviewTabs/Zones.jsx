import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Zones = () => {
  const { t } = useTranslation();
  const [zones, setZones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchZones = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=24h'
        );
        const data = await response.json();
        
        const formattedData = data.map(coin => ({
          id: coin.id,
          name: coin.name,
          volume: coin.total_volume,
          volumeChange: (Math.random() * 20 - 10).toFixed(2),
          marketCap: coin.market_cap,
          marketCapChange: coin.price_change_percentage_24h,
          topGainer: coin.symbol.toUpperCase(),
          topGainerName: coin.name.split(' ')[0],
          gainChange: coin.price_change_percentage_24h,
          logo: coin.image
        }));
        
        setZones(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchZones();
    const interval = setInterval(fetchZones, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (num) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
    return `$${num.toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-dispute-color text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">
                    {t.name}
                  </th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">
                    {t.tradingVolume}
                  </th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">
                    {t.marketCap}
                  </th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">
                    {t.topGainer}
                  </th>
                </tr>
              </thead>
              <tbody>
                {zones.map((zone) => (
                  <tr key={zone.id} className="border-b border-custom-border hover:bg-sub-card/5 transition-colors">
                    <td className="px-4 py-4">
                      <p className="font-semibold text-dispute-color">{zone.name}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-dispute-color">{formatNum(zone.volume)}</p>
                      <p className={`text-sm ${parseFloat(zone.volumeChange) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {parseFloat(zone.volumeChange) >= 0 ? '+' : ''}{zone.volumeChange}%
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-semibold text-dispute-color">{formatNum(zone.marketCap)}</p>
                      <p className={`text-sm ${zone.marketCapChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {zone.marketCapChange >= 0 ? '+' : ''}{zone.marketCapChange?.toFixed(2)}%
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <img src={zone.logo} alt={zone.topGainer} className="w-6 h-6 rounded-full" />
                        <div>
                          <p className="font-semibold text-dispute-color">{zone.topGainer}</p>
                          <p className="text-xs text-secondary-desc">{zone.topGainerName}</p>
                        </div>
                        <span className={`ml-2 text-sm font-semibold ${zone.gainChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {zone.gainChange >= 0 ? '+' : ''}{zone.gainChange?.toFixed(2)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

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

export default Zones;