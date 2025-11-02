import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, ComposedChart, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Area } from 'recharts';
import { List, Grid3x3, ChevronDown, Search } from 'lucide-react';

const COINFutures = () => {
  const [view, setView] = useState('list');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState('BTCUSD CM');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setShowDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const symbols = ['BTCUSD CM', 'ETHUSD CM', 'LINKUSD CM', 'BNBUSD CM', 'TRXUSD CM', 'DOTUSD CM', 'ADAUSD CM'];

  const genLine = (len, base, variance) => 
    Array.from({length: len}, (_, i) => ({
      x: `${7 + Math.floor(i/12)}:${String(i % 60).padStart(2, '0')}`,
      y: base + Math.sin(i / 3) * variance + Math.random() * variance * 0.3
    }));

  const charts = [
    {
      title: 'Open Interest',
      type: 'bar',
      tf: ['5m', 'BTC', 'All', 'Single'],
      data: Array.from({length: 45}, (_, i) => ({
        x: `${7 + Math.floor(i/12)}:${String((i * 5) % 60).padStart(2, '0')}`,
        value: 25800 + Math.random() * 100
      })),
      domain: [25800, 25960],
      legend: [{ color: 'bg-yellow-500', label: 'Open Interest (BTC)' }]
    },
    {
      title: 'Top Trader Long/Short Ratio (Accounts)',
      type: 'line',
      tf: ['5m'],
      data: genLine(40, 2.03, 0.02),
      domain: [2.02, 2.05]
    },
    {
      title: 'Top Trader Long/Short Ratio (Positions)',
      type: 'line',
      tf: ['5m'],
      data: genLine(40, 1.73, 0.015),
      domain: [1.72, 1.74]
    },
    {
      title: 'Long/Short Ratio',
      type: 'line',
      tf: ['5m'],
      data: genLine(40, 2.70, 0.01),
      domain: [2.69, 2.71]
    },
    {
      title: 'Taker Buy/Sell Volume',
      type: 'volume',
      tf: ['5m', 'BTC', 'All'],
      data: Array.from({length: 40}, (_, i) => ({
        x: `${7 + Math.floor(i/12)}:${String((i * 5) % 60).padStart(2, '0')}`,
        sell: Math.random() * 20 + 2,
        buy: Math.random() * 20 + 2
      })),
      domain: [0, 32],
      legend: [
        { color: 'bg-red-500', label: 'Taker Sell Volume (BTC)' },
        { color: 'bg-green-500', label: 'Taker Buy Volume (BTC)' }
      ]
    },
    {
      title: 'Basis',
      type: 'multi',
      tf: ['5m', 'Perpetual'],
      data: Array.from({length: 40}, (_, i) => ({
        x: `${7 + Math.floor(i/12)}:${String((i * 5) % 60).padStart(2, '0')}`,
        futures: 110000 + Math.sin(i / 4) * 300 + Math.random() * 100,
        price: 110100 + Math.sin(i / 4) * 280 + Math.random() * 80,
        basis: (i % 7 - 3) * 20
      })),
      domain: [109500, 110500],
      legend: [
        { color: 'bg-yellow-500', label: 'Futures Price' },
        { color: 'bg-orange-500', label: 'Price Index' },
        { color: 'bg-gray-500', label: 'Basis' }
      ]
    },
    {
      title: 'Funding Rate: 0.010000%',
      subtitle: 'Last 40 Times',
      type: 'line',
      tf: ['Last 40 Times'],
      data: Array.from({length: 50}, (_, i) => ({
        x: `${String(i).padStart(2, '0')}:00`,
        y: 0.006 + Math.sin(i / 3) * 0.005 + Math.random() * 0.001
      })),
      domain: [0, 0.012]
    }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-sub-card border border-custom-border rounded px-3 py-2 text-xs">
          {payload.map((p, i) => (
            <div key={i} className="text-dispute-color">
              {typeof p.value === 'number' ? p.value.toFixed(p.value < 10 ? 4 : 0) : p.value}
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
        {chart.tf.map((tf, i) => (
          <button key={i} className={`text-xs px-2.5 py-1 rounded ${i === 0 ? 'bg-accent text-dispute-color' : 'text-secondary-desc hover:text-dispute-color'}`}>
            {tf} {i === 0 && '▼'}
          </button>
        ))}
      </div>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === 'bar' ? (
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} domain={chart.domain} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="#eab308" radius={[2, 2, 0, 0]} />
            </BarChart>
          ) : chart.type === 'volume' ? (
            <BarChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} domain={chart.domain} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="sell" fill="#ef4444" stackId="a" />
              <Bar dataKey="buy" fill="#22c55e" stackId="a" />
            </BarChart>
          ) : chart.type === 'multi' ? (
            <ComposedChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis yAxisId="left" tick={{ fill: '#666', fontSize: 10 }} domain={chart.domain} axisLine={false} tickLine={false} />
              <YAxis yAxisId="right" orientation="right" tick={{ fill: '#666', fontSize: 10 }} domain={[-60, 0]} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Area yAxisId="right" type="monotone" dataKey="basis" fill="#6b7280" fillOpacity={0.3} stroke="none" />
              <Line yAxisId="left" type="monotone" dataKey="futures" stroke="#eab308" strokeWidth={1.5} dot={false} />
              <Line yAxisId="left" type="monotone" dataKey="price" stroke="#f59e0b" strokeWidth={1.5} dot={false} />
            </ComposedChart>
          ) : (
            <LineChart data={chart.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
              <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: '#666', fontSize: 10 }} domain={chart.domain} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="y" stroke="#eab308" strokeWidth={1.5} dot={false} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {chart.legend && (
        <div className="flex items-center justify-center gap-4 mt-3 text-xs text-secondary-desc">
          {chart.legend.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 ${item.color} rounded-full`}></div>
              <span>{item.label}</span>
            </div>
          ))}
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
              <button onClick={() => setShowDropdown(!showDropdown)} className="px-4 py-2.5 bg-sub-card border border-custom-border rounded-lg text-dispute-color flex items-center gap-2 hover:bg-gradient transition-colors">
                {selected}
                <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-sub-card border border-custom-border rounded-xl shadow-xl z-50 w-[11rem]">
                  <div className="p-3 border-b border-custom-border">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-desc" size={16} />
                      <input type="text" placeholder="Search Symbol" className="w-full bg-primary-bg border border-custom-border rounded-lg pl-10 pr-4 py-2 text-sm text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-accent" />
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

            <button onClick={() => setView('list')} className={`p-2.5 rounded-lg border border-custom-border ${view === 'list' ? 'bg-gradient' : 'bg-sub-card'} transition-colors`}>
              <List size={18} className="text-dispute-color" />
            </button>
            <button onClick={() => setView('grid')} className={`p-2.5 rounded-lg border border-custom-border ${view === 'grid' ? 'bg-gradient' : 'bg-sub-card'} transition-colors`}>
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

export default COINFutures;