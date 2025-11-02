import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, ComposedChart, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Area } from 'recharts';
import { List, Grid3x3, ChevronDown, Search } from 'lucide-react';

const USDFutures = () => {
  const [view, setView] = useState('list');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState('BTCUSDT Perpetual');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const symbols = [
    'BTCUSDT Perpetual',
    'ETHUSDT Perpetual',
    'BCHUSDT Perpetual',
    'XRPUSDT Perpetual',
    'LTCUSDT Perpetual',
    'TRXUSDT Perpetual',
    'ETCUSDT Perpetual'
  ];

  const generateData = (length, base, variance) => 
    Array.from({length}, (_, i) => ({
      x: i,
      y: base + Math.sin(i / 3) * variance + Math.random() * variance * 0.3
    }));

  const charts = [
    {
      title: 'Open Interest',
      type: 'combo',
      timeframes: ['5m', 'Single'],
      data: Array.from({length: 30}, (_, i) => ({
        x: i,
        line: 76800 + Math.sin(i / 5) * 100 + Math.random() * 50,
        bar: 8.42 + Math.random() * 0.05
      }))
    },
    {
      title: 'Top Trader Long/Short Ratio (Accounts)',
      type: 'line',
      timeframes: ['5m'],
      data: generateData(25, 2.06, 0.015)
    },
    {
      title: 'Top Trader Long/Short Ratio (Positions)',
      type: 'line',
      timeframes: ['5m'],
      data: generateData(25, 1.92, 0.012)
    },
    {
      title: 'Long/Short Ratio',
      type: 'line',
      timeframes: ['5m'],
      data: generateData(20, 1.88, 0.02)
    },
    {
      title: 'Taker Buy/Sell Volume',
      type: 'volume',
      timeframes: ['5m'],
      data: Array.from({length: 25}, (_, i) => ({
        x: i,
        buy: Math.random() * 150 + 50,
        sell: Math.random() * 150 + 50
      }))
    },
    {
      title: 'Basis',
      type: 'multi',
      timeframes: ['5m'],
      data: Array.from({length: 25}, (_, i) => ({
        x: i,
        futures: 110000 + Math.sin(i / 4) * 300 + Math.random() * 100,
        price: 110100 + Math.sin(i / 4) * 280 + Math.random() * 80,
        basis: (i % 7 - 3) * 20
      }))
    },
    {
      title: 'Funding Rate: 0.008200%',
      subtitle: 'Last 40 Times',
      type: 'line',
      timeframes: ['Last 40 Times'],
      data: Array.from({length: 30}, (_, i) => ({
        x: i,
        y: Math.sin(i / 3) * 0.008 + Math.random() * 0.003
      }))
    },
    {
      title: 'Open Interest to Market Cap Ratio',
      type: 'dual',
      timeframes: ['5m'],
      data: Array.from({length: 25}, (_, i) => ({
        x: i,
        price: 110000 + Math.sin(i / 4) * 400 + Math.random() * 200,
        ratio: 0.386 + Math.sin(i / 5) * 0.001 + Math.random() * 0.0005
      }))
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-sub-card border border-custom-border rounded px-3 py-2 text-xs">
          {payload.map((p, i) => (
            <div key={i} className="text-dispute-color">
              {p.value.toFixed(2)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const Chart = ({ chart }) => (
    <div className="bg-sub-card border border-custom-border rounded-2xl shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-dispute-color font-semibold text-base mb-1">{chart.title}</h3>
          {chart.subtitle && <p className="text-secondary-desc text-xs">{chart.subtitle}</p>}
        </div>
        <button className="text-secondary-desc hover:text-dispute-color text-sm">ⓘ</button>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        {chart.timeframes.map((tf, i) => (
          <button key={i} className={`text-xs px-2.5 py-1 rounded ${i === 0 ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:text-dispute-color'}`}>
            {tf} {i === 0 && '▼'}
          </button>
        ))}
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === 'combo' ? (
            <ComposedChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} hide />
              <YAxis yAxisId="left" tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 50', 'dataMax + 50']} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 0.02', 'dataMax + 0.02']} />
              <Tooltip content={<CustomTooltip />} />
              <Line yAxisId="left" type="monotone" dataKey="line" stroke="#9ca3af" strokeWidth={1.5} dot={false} />
              <Bar yAxisId="right" dataKey="bar" fill="#eab308" radius={[4, 4, 0, 0]} />
            </ComposedChart>
          ) : chart.type === 'volume' ? (
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} hide />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="buy" fill="#22c55e" stackId="a" />
              <Bar dataKey="sell" fill="#ef4444" stackId="a" />
            </BarChart>
          ) : chart.type === 'multi' ? (
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} hide />
              <YAxis yAxisId="left" tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 200', 'dataMax + 200']} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666', fontSize: 10 }} domain={[-60, 60]} />
              <Tooltip content={<CustomTooltip />} />
              <Line yAxisId="left" type="monotone" dataKey="futures" stroke="#eab308" strokeWidth={2} dot={false} />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#f59e0b" strokeWidth={2} dot={false} />
              <Bar yAxisId="right" dataKey="basis" fill="#64748b" />
            </LineChart>
          ) : chart.type === 'dual' ? (
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} hide />
              <YAxis yAxisId="left" tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 200', 'dataMax + 200']} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 0.001', 'dataMax + 0.001']} />
              <Tooltip content={<CustomTooltip />} />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#eab308" strokeWidth={2} dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="ratio" stroke="#9ca3af" strokeWidth={2} dot={false} />
            </LineChart>
          ) : (
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} hide />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} domain={['dataMin - 0.01', 'dataMax + 0.01']} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="y" stroke="#eab308" strokeWidth={2} dot={false} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {chart.type === 'combo' && (
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-secondary-desc">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Open Interest (BTC)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Notional Value of Open Interest (USDT)</span>
          </div>
        </div>
      )}

      {chart.type === 'volume' && (
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-secondary-desc">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Taker Sell Volume (BTC)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Taker Buy Volume (BTC)</span>
          </div>
        </div>
      )}

      {chart.type === 'multi' && (
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-secondary-desc">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Futures Price</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Price Index</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span>Basis</span>
          </div>
        </div>
      )}

      {chart.type === 'dual' && (
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-secondary-desc">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span>Price</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <span>Ratio</span>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-primary-bg p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-4 py-2.5 bg-sub-card border border-custom-border rounded-lg text-dispute-color flex items-center gap-2 hover:bg-gradient transition-colors"
              >
                {selected}
                <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-sub-card border border-custom-border rounded-xl shadow-xl z-50">
                  <div className="p-3 border-b border-custom-border">
                    <div className="relative">
                      <Search
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-desc"
                        size={16}
                      />
                      <input
                        type="text"
                        placeholder="Search Symbol"
                        className="w-full bg-primary-bg border border-custom-border rounded-lg pl-10 pr-4 py-2 text-sm text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-accent"
                      />
                    </div>
                  </div>
                  <div className="max-h-80 overflow-y-auto p-2">
                    {symbols.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelected(s);
                          setShowDropdown(false);
                        }}
                        className={`w-full text-left px-2 py-3 text-sm rounded-lg transition-colors ${
                          selected === s
                            ? "text-dispute-color font-medium"
                            : "text-secondary-desc hover:bg-sub-card/5 hover:text-dispute-color"
                        }`}
                      >
                        <div className="flex items-center gap-2 justify-between">
                          <span>{s}</span>
                          {selected === s && (
                            <span className="text-yellow-500">✓</span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setView('list')} 
              className={`p-2.5 rounded-lg border border-custom-border ${view === 'list' ? 'bg-gradient' : 'bg-sub-card'} transition-colors`}
            >
              <List size={18} className="text-dispute-color" />
            </button>
            <button 
              onClick={() => setView('grid')} 
              className={`p-2.5 rounded-lg border border-custom-border ${view === 'grid' ? 'bg-gradient' : 'bg-sub-card'} transition-colors`}
            >
              <Grid3x3 size={18} className="text-dispute-color" />
            </button>
          </div>
          
          <button className="bg-gradient text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm sm:text-base flex items-center gap-2">
            Trade Futures
            <span>→</span>
          </button>
        </div>

        <div className={view === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' : 'space-y-5'}>
          {charts.map((chart, i) => (
            <Chart key={i} chart={chart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default USDFutures;