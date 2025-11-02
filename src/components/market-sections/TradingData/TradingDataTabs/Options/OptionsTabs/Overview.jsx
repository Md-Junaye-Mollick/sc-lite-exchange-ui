import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, ComposedChart, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, PieChart, Pie, Cell } from 'recharts';

const Overview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const topOpenInterest = [
    { symbol: 'SOL-29112B-290-C', value: 398.30 },
    { symbol: 'SOL-29110Z-175-P', value: 328.40 },
    { symbol: 'SOL-29110Z-183-P', value: 141.70 },
    { symbol: 'SOL-29110Z-180-P', value: 138.00 },
    { symbol: 'SOL-29112B-200-C', value: 137.30 }
  ];

  const topVolume = [
    { symbol: 'SOL-29110Z-162-P', value: 274.00 },
    { symbol: 'SOL-29112B-130-P', value: 233.10 },
    { symbol: 'SOL-29110Z-160-P', value: 203.40 },
    { symbol: 'SOL-29110Z-165-P', value: 200.90 },
    { symbol: 'SOL-29110Z-178-P', value: 184.00 }
  ];

  const oiVolumeData = Array.from({length: 40}, (_, i) => ({
    x: `${10 + Math.floor(i/6)}:${String((i * 10) % 60).padStart(2, '0')}`,
    oi: 20000 + Math.sin(i / 3) * 5000 + Math.random() * 2000,
    vol: Math.random() * 8000 + 2000
  }));

  const putCallRatioData = Array.from({length: 50}, (_, i) => ({
    x: `${10 + Math.floor(i/6)}:${String((i * 10) % 60).padStart(2, '0')}`,
    oi: 0.5 + Math.sin(i / 8) * 0.3 + (i > 45 ? 1 : 0),
    vol: 0.4 + Math.sin(i / 6) * 0.2
  }));

  const strikeData = Array.from({length: 30}, (_, i) => ({
    x: `${i * 5}`,
    oi: Math.random() * 800 + 100,
    vol: Math.random() * 400 + 50
  }));

  const expirationData = Array.from({length: 15}, (_, i) => ({
    x: `25-11-0${i % 3 + 2}`,
    oi: 500 + Math.sin(i / 2) * 800 + (i === 7 ? 800 : 0),
    vol: Math.random() * 800 + 100
  }));

  const takerFlowData = [
    { name: 'Calls Bought', value: 30.90, amount: '737.60 Cont', color: '#22c55e' },
    { name: 'Calls Sold', value: 11.80, amount: '281.70 Cont', color: '#86efac' },
    { name: 'Puts Bought', value: 36.43, amount: '938.30 Cont', color: '#ef4444' },
    { name: 'Puts Sold', value: 21.86, amount: '546.20 Cont', color: '#fca5a5' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-sub-card border border-custom-border rounded px-2 py-1 text-xs">
          {payload.map((p, i) => (
            <div key={i} className="text-dispute-color">
              {typeof p.value === 'number' ? p.value.toFixed(2) : p.value}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Top 5 Open Interest */}
            <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <h3 className="text-dispute-color font-semibold mb-3">Top 5 Open Interest</h3>
            <p className="text-secondary-desc text-xs mb-3">11-02 10:23</p>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-3 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-3 py-1 rounded text-secondary-desc">Notional</button>
            </div>
            <div className="space-y-2">
              {topOpenInterest.map((item, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-secondary-desc">{i + 1} {item.symbol}</span>
                  <span className="text-dispute-color">{item.value}</span>
                </div>
              ))}
            </div>
            </div>

            {/* Top 5 24hr Volume */}
            <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <h3 className="text-dispute-color font-semibold mb-3">Top 5 24hr Volume</h3>
            <p className="text-secondary-desc text-xs mb-3">11-02 10:23</p>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-3 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-3 py-1 rounded text-secondary-desc">Notional</button>
            </div>
            <div className="space-y-2">
              {topVolume.map((item, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <span className="text-secondary-desc">{i + 1} {item.symbol}</span>
                  <span className="text-dispute-color">{item.value}</span>
                </div>
              ))}
            </div>
            </div>
          </div>

          {/* Open Interest: Call vs Put */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-dispute-color font-semibold">Open Interest: Call vs Put</h3>
              <span className="text-secondary-desc text-xs">11-02 10:25</span>
            </div>
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-xs text-secondary-desc">Call</span>
                </div>
                <span className="text-xs text-dispute-color">67.34%</span>
              </div>
              <div className="h-6 bg-gradient-to-r from-green-500 via-green-500 to-red-500 rounded-full relative">
                <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">C</div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-dispute-color">286,821.66 USDT</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-secondary-desc">Put</span>
                  <span className="text-dispute-color">139,082.78 USDT</span>
                </div>
              </div>
            </div>

            <div className="border-t border-custom-border pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-dispute-color font-semibold">24hr Volume: Call vs Put</h3>
                <span className="text-secondary-desc text-xs">11-02 10:27</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-xs text-secondary-desc">Call</span>
                </div>
                <span className="text-xs text-dispute-color">34.53%</span>
              </div>
              <div className="h-6 bg-gradient-to-r from-green-500 via-red-500 to-red-500 rounded-full relative">
                <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>
              </div>
              <div className="flex justify-between mt-2 text-xs">
                <span className="text-dispute-color">786.10 Cont</span>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-secondary-desc">Put</span>
                  <span className="text-dispute-color">1,490.80 Cont</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Row - 2 Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Open Interest & Volume */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-dispute-color font-semibold">Open Interest & Volume</h3>
              <div className="flex gap-2">
                <button className="text-secondary-desc text-xs">⊞</button>
                <button className="text-secondary-desc text-xs">⤢</button>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Period 1d ▼</button>
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-2 py-1 rounded text-secondary-desc">Notional</button>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={oiVolumeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="vol" fill="#eab308" />
                  <Line type="monotone" dataKey="oi" stroke="#fff" strokeWidth={1.5} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-secondary-desc">Open Interest</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-secondary-desc">Trading Volume</span>
              </div>
            </div>
          </div>

          {/* Put/Call Ratio */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-dispute-color font-semibold">Put/Call Ratio</h3>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Period 1d ▼</button>
            </div>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={putCallRatioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="oi" stroke="#eab308" strokeWidth={1.5} dot={false} />
                  <Line type="monotone" dataKey="vol" stroke="#6b7280" strokeWidth={1.5} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-secondary-desc">Open Interest Ratio</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-secondary-desc">Trading Volume Ratio</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - 3 Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Open Interest & 24hr Volume (Strike) */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-dispute-color font-semibold">Open Interest & 24hr Volume</h3>
                <p className="text-secondary-desc text-xs">Group by Strike</p>
              </div>
              <div className="flex gap-2">
                <button className="text-secondary-desc text-xs">⊞</button>
                <button className="text-secondary-desc text-xs">⤢</button>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Type All ▼</button>
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Expiry All ▼</button>
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-2 py-1 rounded text-secondary-desc">Notional</button>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={strikeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="vol" fill="#eab308" />
                  <Line type="monotone" dataKey="oi" stroke="#fff" strokeWidth={1.5} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-secondary-desc">Open Interest</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-secondary-desc">Trading Volume</span>
              </div>
            </div>
          </div>

          {/* Open Interest & 24hr Volume (Expiration) */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h3 className="text-dispute-color font-semibold">Open Interest & 24hr Volume</h3>
                <p className="text-secondary-desc text-xs">Group by Expiration</p>
              </div>
              <div className="flex gap-2">
                <button className="text-secondary-desc text-xs">⊞</button>
                <button className="text-secondary-desc text-xs">⤢</button>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Type All ▼</button>
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-2 py-1 rounded text-secondary-desc">Notional</button>
            </div>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={expirationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1f1f1f" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="vol" fill="#eab308" />
                  <Line type="monotone" dataKey="oi" stroke="#fff" strokeWidth={1.5} dot={false} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-secondary-desc">Open Interest</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-secondary-desc">Trading Volume</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row - 4 Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* 24hr Taker Flow */}
          <div className="bg-sub-card border border-custom-border rounded-xl p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-dispute-color font-semibold">24hr Taker Flow</h3>
              <button className="text-secondary-desc text-xs">⊕</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2 py-1 rounded bg-accent text-dispute-color">Contract</button>
              <button className="text-xs px-2 py-1 rounded text-secondary-desc">Premium</button>
            </div>
<div className="h-40 flex items-center justify-center">
              <div className="relative w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={takerFlowData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                      onMouseEnter={(_, index) => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                    >
                      {takerFlowData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color}
                          opacity={activeIndex === null || activeIndex === index ? 1 : 0.3}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-2 left-2 text-xs">
                  <div className="text-dispute-color font-semibold">{takerFlowData[1].value}%</div>
                  <div className="text-secondary-desc text-[10px]">{takerFlowData[1].amount}</div>
                </div>
                <div className="absolute top-2 right-2 text-xs text-right">
                  <div className="text-dispute-color font-semibold">{takerFlowData[0].value}%</div>
                  <div className="text-secondary-desc text-[10px]">{takerFlowData[0].amount}</div>
                </div>
                <div className="absolute bottom-2 left-2 text-xs">
                  <div className="text-dispute-color font-semibold">{takerFlowData[2].value}%</div>
                  <div className="text-secondary-desc text-[10px]">{takerFlowData[2].amount}</div>
                </div>
                <div className="absolute bottom-2 right-2 text-xs text-right">
                  <div className="text-dispute-color font-semibold">{takerFlowData[3].value}%</div>
                  <div className="text-secondary-desc text-[10px]">{takerFlowData[3].amount}</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
              {takerFlowData.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-sm`} style={{ backgroundColor: item.color }}></div>
                  <span className="text-secondary-desc">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;