import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const RankingsTables = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [data, setData] = useState({
    hotCoins: [],
    topGainers: [],
    topLosers: [],
    topVolume: [],
    usdFutures: [],
    coinFutures: []
  });

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const coinImages = {
    BNB: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
    BTC: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
    ETH: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    SOL: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    XRP: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
    ZEC: 'https://assets.coingecko.com/coins/images/486/small/circle-zcash-color.png',
    SUI: 'https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg',
    ASTER: 'https://assets.coingecko.com/coins/images/22617/small/astr.png',
    DOGE: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png',
    HBAR: 'https://assets.coingecko.com/coins/images/3688/small/hbar.png',
    ASR: 'https://assets.coingecko.com/coins/images/13724/small/ASR.png',
    SOLV: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    AVNT: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
    AIXBT: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
    DEGO: 'https://assets.coingecko.com/coins/images/12465/small/dego.png',
    FTT: 'https://assets.coingecko.com/coins/images/9026/small/F.png',
    API3: 'https://assets.coingecko.com/coins/images/13256/small/api3.jpg',
    WAL: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    LGTY: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
    GIGGLE: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png',
    YB: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    ENSO: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
    '0G': 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png',
    EDEN: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
    NIL: 'https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png',
    FF: 'https://assets.coingecko.com/coins/images/486/small/circle-zcash-color.png',
    JTO: 'https://assets.coingecko.com/coins/images/3688/small/hbar.png',
    FLM: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png',
    FORM: 'https://assets.coingecko.com/coins/images/22617/small/astr.png'
  };

  const generateMockData = () => {
    const coins = ['BNB', 'BTC', 'ETH', 'SOL', 'XRP', 'ZEC', 'SUI', 'ASTER', 'DOGE', 'HBAR'];
    const gainers = ['ASR', 'SOLV', 'AVNT', 'AIXBT', 'DEGO', 'ZEC', 'FTT', 'API3', 'WAL', 'LGTY'];
    const losers = ['GIGGLE', 'YB', 'ENSO', '0G', 'EDEN', 'NIL', 'FF', 'JTO', 'FLM', 'FORM'];
    const futures = ['PIPUSD', 'LABUSD', 'ICNTUSD', 'CCUSDUSD', 'ATEZUSD', 'VELUSD', 'HIPPUSD', 'ZEREBUSD', 'ASRUSD', 'ARCUSD'];
    const coinFut = ['BCHUSD', 'ETCUSD', 'BTCUSD', 'MANAUSD', 'AXSUSD', 'BTCUSD', 'BTCUSD', 'XLMUSD', 'ETHUSD', 'ETHUSD'];
    
    return {
      hotCoins: coins.map((name, i) => ({
        rank: i + 1,
        name,
        image: coinImages[name],
        price: name === 'BTC' ? (Math.random() * 1000 + 51000).toFixed(2) : name === 'ETH' ? (Math.random() * 100 + 4200).toFixed(2) : (Math.random() * 1000 + 0.1).toFixed(2),
        change: (Math.random() * 40 - 20).toFixed(2)
      })),
      topGainers: gainers.map((name, i) => ({
        rank: i + 1,
        name,
        image: coinImages[name],
        price: (Math.random() * 2).toFixed(4),
        change: (Math.random() * 30 + 5).toFixed(2)
      })),
      topLosers: losers.map((name, i) => ({
        rank: i + 1,
        name,
        image: coinImages[name],
        price: (Math.random() * 100).toFixed(4),
        change: -(Math.random() * 15 + 0.5).toFixed(2)
      })),
      topVolume: coins.map((name, i) => ({
        rank: i + 1,
        name,
        image: coinImages[name],
        price: name === 'BTC' ? (Math.random() * 1000 + 51000).toFixed(2) : name === 'ETH' ? (Math.random() * 100 + 4200).toFixed(2) : (Math.random() * 1000 + 0.1).toFixed(2),
        change: (Math.random() * 40 - 20).toFixed(2)
      })),
      usdFutures: futures.map((name, i) => ({
        rank: i + 1,
        name: `${name}Perp...`,
        image: coinImages.BTC,
        price: (Math.random() * 2).toFixed(4),
        change: (Math.random() * 100 + 20).toFixed(2)
      })),
      coinFutures: coinFut.map((name, i) => ({
        rank: i + 1,
        name: `${name} CMp...`,
        image: coinImages[name.includes('BTC') ? 'BTC' : name.includes('ETH') ? 'ETH' : 'BNB'],
        price: name.includes('BTC') ? (Math.random() * 5000 + 110000).toFixed(2) : name.includes('ETH') ? (Math.random() * 500 + 3500).toFixed(2) : (Math.random() * 2000 + 100).toFixed(2),
        change: (Math.random() * 5 + 1).toFixed(2)
      }))
    };
  };

  useEffect(() => {
    const updateData = () => setData(generateMockData());
    updateData();
    const interval = setInterval(updateData, 3000);
    return () => clearInterval(interval);
  }, []);

  const Dropdown = ({ id, options }) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(id)}
        className="flex items-center gap-1 px-3 py-1.5 text-xs rounded-lg border border-custom-border bg-sub-card hover:bg-accent text-dispute-color hover:bg-sub-card/80 transition-colors"
      >
        {options[0]} <ChevronDown size={12} />
      </button>
      {activeDropdown === id && (
        <div className="absolute right-0 mt-1 w-32 bg-sub-card border border-custom-border rounded-lg shadow-lg z-10">
          {options.map((opt, i) => (
            <div key={i} className="px-3 py-2 text-xs text-secondary-desc hover:bg-sub-card/5 cursor-pointer first:rounded-t-lg last:rounded-b-lg">
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // ✅ Modified Table Component
  const Table = ({ title, dropdownId, data, dropdownOptions, showDropdown = true }) => (
    <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-5 flex flex-col h-[520px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-dispute-color font-semibold text-base">{title}</h2>
        {showDropdown && dropdownOptions?.length > 0 && (
          <Dropdown id={dropdownId} options={dropdownOptions} />
        )}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-[40px,1fr,90px,80px] gap-3 text-xs text-secondary-desc pb-3 border-b border-custom-border">
          <div></div>
          <div>Name</div>
          <div className="text-right">Price</div>
          <div className="text-right">24h Change</div>
        </div>
        <div className="overflow-y-auto h-[calc(100%-36px)] scrollbar-hide">
          {data.map((item) => (
            <div key={item.rank} className="grid grid-cols-[40px,1fr,90px,80px] gap-3 items-center py-3 hover:bg-sub-card/5 rounded-lg px-2 transition-colors">
              <div className="text-secondary-desc text-xs">{item.rank}</div>
              <div className="flex items-center gap-2 min-w-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-6 h-6 rounded-full flex-shrink-0"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png';
                  }}
                />
                <span className="text-dispute-color font-medium text-xs truncate">{item.name}</span>
              </div>
              <div className="text-dispute-color text-right text-xs font-medium truncate">${item.price}</div>
              <div className={`text-right text-xs font-semibold ${parseFloat(item.change) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {parseFloat(item.change) >= 0 ? '+' : ''}{item.change}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-bg p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Table title="Hot Coins" dropdownId="hot" data={data.hotCoins} dropdownOptions={['Crypto', 'All Market', 'USDT Market', 'BNB Market', 'BTC Market', 'ETH Market']} />
        <Table title="Top Gainers" dropdownId="gainers" data={data.topGainers} dropdownOptions={['Crypto', 'All Market', 'USDT Market', 'BNB Market', 'BTC Market', 'ETH Market']} />
        <Table title="Top Losers" dropdownId="losers" data={data.topLosers} dropdownOptions={['Crypto', 'All Market', 'USDT Market', 'BNB Market', 'BTC Market', 'ETH Market']} />
        <Table title="Top Volume" dropdownId="volume" data={data.topVolume} dropdownOptions={['Crypto', 'All Market', 'USDT Market', 'BNB Market', 'BTC Market', 'ETH Market']} />
        {/* ✅ No dropdown for these two */}
        <Table title="USD Futures" dropdownId="usd" data={data.usdFutures} showDropdown={false} />
        <Table title="Coin Futures" dropdownId="coin" data={data.coinFutures} showDropdown={false} />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default RankingsTables;