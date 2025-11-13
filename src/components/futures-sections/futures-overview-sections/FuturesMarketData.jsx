import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const FuturesMarketData = () => {
      const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
      const [selectedContract, setSelectedContract] = useState('perpetual');
      const marketData = [
    { pair: 'BTCUSD-PERP', mark: '67,234.56', index: '67,235.12', fundingRate: '0.0123%', nextFunding: '3h 45m', oi: '$2.4B', volume24h: '$8.9B', change: '+5.23%', isUp: true },
    { pair: 'ETHUSD-PERP', mark: '3,456.78', index: '3,456.92', fundingRate: '0.0089%', nextFunding: '3h 45m', oi: '$1.8B', volume24h: '$5.2B', change: '+3.12%', isUp: true },
    { pair: 'SOLUSD-PERP', mark: '145.67', index: '145.71', fundingRate: '0.0156%', nextFunding: '3h 45m', oi: '$890M', volume24h: '$2.1B', change: '+8.90%', isUp: true },
    { pair: 'ADAUSD-PERP', mark: '0.5234', index: '0.5235', fundingRate: '-0.0034%', nextFunding: '3h 45m', oi: '$450M', volume24h: '$890M', change: '-1.45%', isUp: false }
  ];
  return (
    <div>
            {/* Live Market Data Table */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center">
              <Activity className="w-6 h-6 mr-3 text-yellow-400" />
              Live Market Data
            </h3>
            <div className="flex items-center space-x-2">
              {['1D', '1W', '1M', 'ALL'].map((tf) => (
                <button
                  key={tf}
                  onClick={() => setSelectedTimeframe(tf)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedTimeframe === tf 
                      ? 'bg-sub-card text-yellow-400 border border-yellow-500/50' 
                      : 'bg-sub-card text-gray-400 border border-gray-700/50 hover:bg-gray-700/50'
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-8 gap-4 p-4 bg-gray-900/50 border-b border-gray-700/50 text-sm font-semibold text-gray-400">
              <div>Contract</div>
              <div>Mark Price</div>
              <div>Index Price</div>
              <div>24h Change</div>
              <div>Funding Rate</div>
              <div>Next Funding</div>
              <div>Open Interest</div>
              <div>24h Volume</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-700/50">
              {marketData.map((data, idx) => (
                <div key={idx} className="grid grid-cols-8 gap-4 p-4 hover:bg-gray-700/30 transition-colors cursor-pointer">
                  <div className="font-semibold text-white">{data.pair}</div>
                  <div className="text-yellow-400 font-medium">${data.mark}</div>
                  <div className="text-gray-300">${data.index}</div>
                  <div className={`flex items-center ${data.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {data.isUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                    {data.change}
                  </div>
                  <div className={data.fundingRate.startsWith('-') ? 'text-red-400' : 'text-green-400'}>
                    {data.fundingRate}
                  </div>
                  <div className="text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {data.nextFunding}
                  </div>
                  <div className="text-gray-300">{data.oi}</div>
                  <div className="text-gray-300">{data.volume24h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FuturesMarketData;