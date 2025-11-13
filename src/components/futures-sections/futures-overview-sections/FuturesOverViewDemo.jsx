import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const FuturesOverviewDemo = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1D');
  const [selectedContract, setSelectedContract] = useState('perpetual');

  const marketData = [
    { pair: 'BTCUSD-PERP', mark: '67,234.56', index: '67,235.12', fundingRate: '0.0123%', nextFunding: '3h 45m', oi: '$2.4B', volume24h: '$8.9B', change: '+5.23%', isUp: true },
    { pair: 'ETHUSD-PERP', mark: '3,456.78', index: '3,456.92', fundingRate: '0.0089%', nextFunding: '3h 45m', oi: '$1.8B', volume24h: '$5.2B', change: '+3.12%', isUp: true },
    { pair: 'SOLUSD-PERP', mark: '145.67', index: '145.71', fundingRate: '0.0156%', nextFunding: '3h 45m', oi: '$890M', volume24h: '$2.1B', change: '+8.90%', isUp: true },
    { pair: 'ADAUSD-PERP', mark: '0.5234', index: '0.5235', fundingRate: '-0.0034%', nextFunding: '3h 45m', oi: '$450M', volume24h: '$890M', change: '-1.45%', isUp: false }
  ];

  const contractTypes = [
    { id: 'perpetual', name: 'Perpetual Contracts', desc: 'No expiry, continuous trading', icon: <RefreshCw className="w-5 h-5" /> },
    { id: 'quarterly', name: 'Quarterly Futures', desc: 'Fixed expiry dates', icon: <Calendar className="w-5 h-5" /> },
    { id: 'inverse', name: 'Inverse Contracts', desc: 'Settled in crypto', icon: <Layers className="w-5 h-5" /> }
  ];

  const keyMetrics = [
    { label: 'Total Open Interest', value: '$5.54B', change: '+12.5%', icon: <Wallet className="w-6 h-6" />, isUp: true },
    { label: 'Avg Funding Rate', value: '0.0092%', change: '+0.0021%', icon: <Percent className="w-6 h-6" />, isUp: true },
    { label: '24h Volume', value: '$17.1B', change: '+8.3%', icon: <BarChart2 className="w-6 h-6" />, isUp: true },
    { label: 'Active Positions', value: '89,432', change: '+5.2%', icon: <Activity className="w-6 h-6" />, isUp: true }
  ];

  const futuresInfo = [
    { 
      title: 'Mark Price vs Index Price',
      desc: 'Mark Price is used for liquidations and unrealized PNL. Index Price is the spot market reference.',
      icon: <Target className="w-5 h-5" />
    },
    { 
      title: 'Funding Rate Mechanism',
      desc: 'Perpetual contracts use funding rates every 8 hours to keep prices anchored to spot.',
      icon: <Clock className="w-5 h-5" />
    },
    { 
      title: 'Leverage & Margin',
      desc: 'Trade with up to 100x leverage. Initial margin and maintenance margin protect your positions.',
      icon: <Calculator className="w-5 h-5" />
    },
    { 
      title: 'Open Interest Tracking',
      desc: 'Monitor total market exposure and trader sentiment through open interest metrics.',
      icon: <Eye className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Delta Exchange
              </h1>
              <nav className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
                <a href="#" className="px-4 py-2 rounded-md text-gray-400 hover:text-white transition-colors">Spot</a>
                <a href="#" className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-md font-medium">Futures</a>
                <a href="#" className="px-4 py-2 rounded-md text-gray-400 hover:text-white transition-colors">Options</a>
              </nav>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg font-semibold text-gray-900 hover:from-yellow-500 hover:to-yellow-700 transition-all">
              Trade Now
            </button>
          </div>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="py-8 px-4 border-b border-gray-700/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <LineChart className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold">Futures Overview</h2>
          </div>
          <p className="text-gray-400 text-lg">Real-time market data, contract specifications, and trading insights</p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-8 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-yellow-400">{metric.icon}</div>
                  <span className={`text-sm font-medium ${metric.isUp ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
                <div className="text-3xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Types Selection */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Layers className="w-6 h-6 mr-3 text-yellow-400" />
            Contract Types
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {contractTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => setSelectedContract(type.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedContract === type.id 
                    ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500' 
                    : 'bg-gray-800/50 border-2 border-gray-700/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${selectedContract === type.id ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-700/50 text-gray-400'}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{type.name}</h4>
                    <p className="text-sm text-gray-400">{type.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                      ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' 
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700/50 hover:bg-gray-700/50'
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

      {/* Futures Information Grid */}
      <section className="py-8 px-4 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Info className="w-6 h-6 mr-3 text-yellow-400" />
            Understanding Futures Trading
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futuresInfo.map((info, idx) => (
              <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{info.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Features */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Advanced Futures Trading Features
                </h3>
                <p className="text-gray-400 mb-6 text-lg">
                  Professional-grade tools designed for serious traders. Execute complex strategies with precision and confidence.
                </p>
                <div className="space-y-4">
                  {[
                    'Cross & Isolated Margin Modes',
                    'Post-Only & Reduce-Only Orders',
                    'Real-time Mark Price Calculation',
                    'Auto-Deleveraging Protection',
                    'Insurance Fund Coverage'
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700/50">
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-3 text-yellow-400" />
                  Position Calculator
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Contract Size</label>
                    <input type="text" placeholder="1 BTC" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Leverage</label>
                    <input type="text" placeholder="10x" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Entry Price</label>
                    <input type="text" placeholder="$67,234.56" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-yellow-500 transition-colors" />
                  </div>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all">
                    Calculate PNL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="py-8 px-4 bg-orange-500/5 border-y border-orange-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-orange-400 mb-2">Risk Warning</h4>
              <p className="text-gray-400 leading-relaxed">
                Trading futures and derivatives involves substantial risk of loss. Leverage can amplify both gains and losses. Only trade with capital you can afford to lose. Past performance is not indicative of future results. Please review our risk disclosure before trading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700/50 bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm">© 2024 Delta Exchange. Advanced cryptocurrency derivatives trading platform.</p>
        </div>
      </footer>
    </div>
  );
};

export default FuturesOverviewDemo;