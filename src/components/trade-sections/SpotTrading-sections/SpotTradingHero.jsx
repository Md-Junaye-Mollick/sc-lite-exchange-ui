import React, { useState, useEffect } from 'react';
import { Star, ChevronDown, Search, TrendingUp } from 'lucide-react';
import SpotTradingChart from './SpotTradingChart';

const SpotTradingHero = () => {
  const [price, setPrice] = useState(103437.98);
  const [change, setChange] = useState(-2.52);
  const [orderType, setOrderType] = useState('Limit');
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  const [asks, setAsks] = useState(
    Array.from({length: 25}, (_, i) => ({
      price: 103443.41 - i * 0.2,
      amount: Math.random() * 0.003,
      total: Math.random() * 500
    }))
  );

  const [bids, setBids] = useState(
    Array.from({length: 25}, (_, i) => ({
      price: 103437.98 - i * 0.2,
      amount: Math.random() * 5,
      total: Math.random() * 600
    }))
  );

  const [trades, setTrades] = useState(
    Array.from({length: 20}, (_, i) => ({
      price: 103430 + Math.random() * 10,
      amount: Math.random() * 0.002,
      time: '22:38:33',
      type: Math.random() > 0.5 ? 'buy' : 'sell'
    }))
  );

  const pairs = Array.from({length: 30}, (_, i) => ({
    name: ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'XRPUSDT', 'ADAUSDT', 'DOGEUSDT', 'DOTUSDT', 
           'MATICUSDT', 'LTCUSDT', 'AVAXUSDT', 'LINKUSDT', 'ATOMUSDT', 'UNIUSDT', 'ETCUSDT'][i % 15] + (i > 14 ? '2' : ''),
    price: (Math.random() * 100).toFixed(5),
    change: (Math.random() * 20 - 10).toFixed(2),
    leverage: ['3x', '5x', '10x', '20x'][Math.floor(Math.random() * 4)]
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(prev => {
        const newPrice = prev + (Math.random() - 0.5) * 20;
        setChange((newPrice - 103437.98) / 103437.98 * 100);
        return newPrice;
      });

      setAsks(prev => prev.map(ask => ({
        ...ask,
        amount: Math.max(0.00001, ask.amount + (Math.random() - 0.5) * 0.0001)
      })));

      setBids(prev => prev.map(bid => ({
        ...bid,
        amount: Math.max(0.00001, bid.amount + (Math.random() - 0.5) * 0.0001)
      })));

      if (Math.random() > 0.7) {
        setTrades(prev => [
          {
            price: 103430 + Math.random() * 20,
            amount: Math.random() * 0.001,
            time: new Date().toLocaleTimeString('en-US', { hour12: false }),
            type: Math.random() > 0.5 ? 'buy' : 'sell'
          },
          ...prev.slice(0, 19)
        ]);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const maxTotal = Math.max(...asks.map(a => a.total), ...bids.map(b => b.total));

  return (
    <div className="min-h-screen bg-primary-bg text-secondary-desc">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-sub-card border-b border-custom-border overflow-x-auto">
        <div className="flex items-center gap-3 sm:gap-6 min-w-max">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsFavorite(!isFavorite)}>
              <Star 
                className={`w-4 h-4 ${isFavorite ? 'fill-yellow-500 text-yellow-500' : 'text-secondary-desc'}`}
              />
            </button>
            <span className="text-dispute-color font-medium text-sm">BTC/USDT</span>
            <span className="text-xs text-secondary-desc hidden sm:inline">Bitcoin Price</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 text-xs">
            <div>
              <div className={`text-base sm:text-lg font-bold ${change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                {price.toFixed(2)}
              </div>
              <div className="text-secondary-desc hidden sm:block">${price.toFixed(2)}</div>
            </div>
            
            <div className="hidden md:block">
              <div className="text-secondary-desc">24h Chg</div>
              <div className={change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>
                {change >= 0 ? '+' : ''}{change.toFixed(2)}% -1.92%
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="text-secondary-desc">24h High</div>
              <div>107,500.00</div>
            </div>
            
            <div className="hidden lg:block">
              <div className="text-secondary-desc">24h Low</div>
              <div>103,170.33</div>
            </div>
            
            <div className="hidden xl:block">
              <div className="text-secondary-desc">24h Volume(BTC)</div>
              <div>23,914.43</div>
            </div>
            
            <div className="hidden xl:block">
              <div className="text-secondary-desc">24h Volume(USDT)</div>
              <div>2,514,878,558.32</div>
            </div>

            <div className="hidden xl:block">
              <div className="text-secondary-desc">BTC (₿)</div>
            </div>

            <div className="text-xs flex gap-2 hidden xl:flex">
              <button className="text-blue-400 hover:text-blue-300">POW</button>
              <button className="text-blue-400 hover:text-blue-300">Payments</button>
              <button className="text-blue-400 hover:text-blue-300">Vol</button>
              <button className="text-blue-400 hover:text-blue-300">Hot</button>
              <button className="text-blue-400 hover:text-blue-300">Price Protection</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-auto lg:h-[calc(120vh-60px)]">
        {/* Order Book */}
        <div className="w-full lg:w-64 bg-sub-card border-b lg:border-r border-custom-border flex flex-col max-h-[500px] lg:max-h-none">
          <div className="p-3 border-b border-custom-border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-dispute-color">Order Book</span>
              <div className="flex gap-1">
                <button className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#0ecb81] rounded-sm"></div>
                </button>
                <button className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#f6465d] rounded-sm"></div>
                </button>
                <button className="w-4 h-4 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-sm"></div>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_0.8fr_0.7fr] gap-2 text-[10px] text-secondary-desc">
              <span>Price (USDT)</span>
              <span className="text-right">Amount (BTC)</span>
              <span className="text-right">Total</span>
            </div>
            <button className="text-[10px] text-secondary-desc mt-1 flex items-center gap-1">
              0.01 <ChevronDown className="w-3 h-3" />
            </button>
          </div>
          
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            {/* Asks */}
            <div className="flex-1 overflow-y-auto flex flex-col-reverse">
              {asks.map((ask, i) => (
                <div key={i} className="grid grid-cols-[1fr_0.8fr_0.7fr] gap-2 text-[11px] py-0.5 px-3 hover:bg-sub-card/5 relative">
                  <div className="absolute right-0 h-full bg-[#f6465d]/10" style={{width: `${(ask.total/maxTotal)*100}%`}}></div>
                  <span className="text-[#f6465d] z-10">{ask.price.toFixed(2)}</span>
                  <span className="text-right z-10">{ask.amount.toFixed(5)}</span>
                  <span className="text-right z-10">{ask.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
            
            {/* Current Price */}
            <div className="px-3 py-2 bg-sub-card flex items-center gap-2 flex-shrink-0">
              <span className={`text-lg font-bold ${change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}`}>
                {price.toFixed(2)}
              </span>
              <TrendingUp className={`w-3 h-3 ${change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d] rotate-180'}`} />
              <span className="text-xs">${price.toFixed(2)}</span>
            </div>
            
            {/* Bids */}
            <div className="flex-1 overflow-y-auto">
              {bids.map((bid, i) => (
                <div key={i} className="grid grid-cols-[1fr_0.8fr_0.7fr] gap-2 text-[11px] py-0.5 px-3 hover:bg-sub-card/5 relative">
                  <div className="absolute left-0 h-full bg-[#0ecb81]/10" style={{width: `${(bid.total/maxTotal)*100}%`}}></div>
                  <span className="text-[#0ecb81] z-10">{bid.price.toFixed(2)}</span>
                  <span className="text-right z-10">{bid.amount.toFixed(5)}</span>
                  <span className="text-right z-10">{bid.total.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Area */}
        <div className="flex-1 bg-primary-bg flex flex-col">
          <div className="flex-1">
            <SpotTradingChart/>
          </div>

          {/* Trading Options */}
          <div className="bg-sub-card border-t border-custom-border p-3 sm:p-4">
            <div className="flex gap-2 sm:gap-4 mb-4 text-xs overflow-x-auto">
              <button className="px-3 py-1 rounded bg-accent text-dispute-color whitespace-nowrap">Spot</button>
              <button className="px-3 py-1 rounded text-secondary-desc hover:text-dispute-color whitespace-nowrap">Cross</button>
              <button className="px-3 py-1 rounded text-secondary-desc hover:text-dispute-color whitespace-nowrap">Isolated</button>
              <button className="px-3 py-1 rounded text-secondary-desc hover:text-dispute-color whitespace-nowrap">Grid</button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Buy Panel */}
              <div className="flex-1">
                <div className="flex gap-2 mb-3 text-xs">
                  <button className={`px-3 py-1 ${orderType === 'Limit' ? 'text-dispute-color' : 'text-secondary-desc'}`}>
                    Limit
                  </button>
                  <button className={`px-3 py-1 ${orderType === 'Market' ? 'text-dispute-color' : 'text-secondary-desc'}`}>
                    Market
                  </button>
                  <button className={`px-3 py-1 ${orderType === 'Stop Limit' ? 'text-dispute-color' : 'text-secondary-desc'}`}>
                    Stop Limit
                  </button>
                </div>

                <div className="mb-2">
                  <div className="text-[10px] text-secondary-desc mb-1">Price</div>
                  <div className="flex bg-sub-card border border-custom-border rounded">
                    <input className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-dispute-color" defaultValue="103,552.03" />
                    <button className="px-2 text-secondary-desc text-xs border-l border-custom-border">BBO</button>
                    <span className="px-3 py-2 text-secondary-desc text-sm border-l border-custom-border">USDT</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-[10px] text-secondary-desc mb-1">Amount</div>
                  <div className="flex bg-sub-card border border-custom-border rounded">
                    <input 
                      className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-dispute-color"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                    />
                    <span className="px-3 py-2 text-secondary-desc text-sm border-l border-custom-border">BTC</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs">
                  <input type="checkbox" className="accent-yellow-500" />
                  <span className="text-secondary-desc">TP/SL</span>
                </div>

                <button className="w-full bg-[#0ecb81] hover:bg-[#0eb876] text-white py-2 rounded font-medium">
                  Buy BTC
                </button>
              </div>

              {/* Sell Panel */}
              <div className="flex-1">
                <div className="mb-3 h-6"></div>
                <div className="mb-2">
                  <div className="text-[10px] text-secondary-desc mb-1">Price</div>
                  <div className="flex bg-sub-card border border-custom-border rounded">
                    <input className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-dispute-color" defaultValue="103,552.03" />
                    <button className="px-2 text-secondary-desc text-xs border-l border-custom-border">BBO</button>
                    <span className="px-3 py-2 text-secondary-desc text-sm border-l border-custom-border">USDT</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-[10px] text-secondary-desc mb-1">Amount</div>
                  <div className="flex bg-sub-card border border-custom-border rounded">
                    <input 
                      className="flex-1 bg-transparent px-3 py-2 text-sm outline-none text-dispute-color"
                      value={sellAmount}
                      onChange={(e) => setSellAmount(e.target.value)}
                    />
                    <span className="px-3 py-2 text-secondary-desc text-sm border-l border-custom-border">BTC</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3 text-xs">
                  <input type="checkbox" className="accent-yellow-500" />
                  <span className="text-secondary-desc">TP/SL</span>
                </div>

                <button className="w-full bg-[#f6465d] hover:bg-[#e93d52] text-white py-2 rounded font-medium">
                  Sell BTC
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full lg:w-80 flex flex-col max-h-[600px] lg:max-h-none">
          <div className="bg-sub-card border-l border-b border-custom-border p-3">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary-desc" />
              <input 
                type="text"
                placeholder="Search"
                className="w-full bg-sub-card border border-custom-border rounded pl-9 pr-3 py-2 text-sm outline-none focus:border-yellow-600 text-dispute-color"
              />
            </div>
            <div className="flex items-center justify-between mb-2 overflow-x-auto">
              <div className="flex gap-2 text-xs min-w-max">
                <button className="px-2 py-1 hover:text-dispute-color">New</button>
                <button className="px-2 py-1 hover:text-dispute-color">USDC</button>
                <button className="px-2 py-1 text-yellow-500 border-b-2 border-yellow-500">USDT</button>
                <button className="px-2 py-1 hover:text-dispute-color">FDUSD</button>
                <button className="px-2 py-1 hover:text-dispute-color">BNB</button>
                <button className="px-2 py-1 hover:text-dispute-color">BTC</button>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-secondary-desc">
              <span>Pair ↓</span>
              <span>Last Price / 24h Chg ↓</span>
            </div>
          </div>

          {/* Pairs List */}
          <div className="flex-1 bg-sub-card border-l border-custom-border overflow-auto">
            {pairs.map((pair, i) => (
              <div key={i} className="px-3 py-2 hover:bg-sub-card/5 flex items-center justify-between text-xs border-b border-custom-border">
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-gray-600" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-dispute-color">{pair.name}</span>
                      <span className="text-[10px] text-secondary-desc">{pair.leverage}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-dispute-color">{pair.price}</div>
                  <div className={pair.change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>
                    {pair.change >= 0 ? '+' : ''}{pair.change}%
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Trades */}
          <div className="h-auto lg:h-1/3 bg-sub-card border-l border-t border-custom-border overflow-auto">
            <div className="p-3 border-b border-custom-border flex items-center justify-between">
              <div className="flex gap-3 text-xs">
                <button className="text-dispute-color border-b-2 border-yellow-500 pb-1">Market Trades</button>
                <button className="text-secondary-desc hover:text-dispute-color">My Trades</button>
              </div>
            </div>
            <div className="p-3">
              <div className="grid grid-cols-3 text-[10px] text-secondary-desc mb-2">
                <span>Price (USDT)</span>
                <span className="text-right">Amount (BTC)</span>
                <span className="text-right">Time</span>
              </div>
              {trades.map((trade, i) => (
                <div key={i} className="grid grid-cols-3 text-[11px] py-1 hover:bg-sub-card/5">
                  <span className={trade.type === 'buy' ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>
                    {trade.price.toFixed(2)}
                  </span>
                  <span className="text-right">{trade.amount.toFixed(5)}</span>
                  <span className="text-right text-secondary-desc">{trade.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotTradingHero;