import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, ComposedChart, Area } from 'recharts';

const InterestVolume = () => {
  // Strike Price OI - sparse with specific peaks
  const strikeOI = [
    { x: 150, calls: 0, puts: 0 }, { x: 160, calls: 0, puts: 210 },
    { x: 170, calls: 0, puts: 0 }, { x: 180, calls: 0, puts: 0 },
    { x: 190, calls: 0, puts: 0 }, { x: 200, calls: 210, puts: 0 },
    { x: 210, calls: 240, puts: 0 }, { x: 220, calls: 0, puts: 180 },
    { x: 230, calls: 230, puts: 0 }, { x: 240, calls: 0, puts: 0 },
    { x: 250, calls: 0, puts: 0 }, { x: 260, calls: 0, puts: 0 },
    { x: 270, calls: 0, puts: 0 }, { x: 280, calls: 0, puts: 0 },
    { x: 290, calls: 390, puts: 0 }, { x: 300, calls: 0, puts: 0 },
    { x: 310, calls: 0, puts: 0 }, { x: 320, calls: 450, puts: 0 },
    { x: 330, calls: 0, puts: 0 }, { x: 340, calls: 460, puts: 0 },
    { x: 350, calls: 0, puts: 0 }, { x: 360, calls: 0, puts: 0 },
    { x: 370, calls: 0, puts: 0 }, { x: 380, calls: 950, puts: 0 }
  ];

  // Expiration OI
  const expiryOI = [
    { x: '25-11-02', calls: 0, puts: 850 },
    { x: '25-11-03', calls: 0, puts: 0 },
    { x: '25-11-07', calls: 180, puts: 150 },
    { x: '25-11-08', calls: 1850, puts: 0 }
  ];

  // Historical OI - dense overlapping bars
  const histOI = Array.from({length: 45}, (_, i) => ({
    x: `${String(2 + Math.floor(i/6)).padStart(2, '0')}:${String((i * 10) % 60).padStart(2, '0')}`,
    calls: 12000 + Math.sin(i/4) * 8000 + i * 200 + Math.random() * 2000,
    puts: 8000 + Math.sin(i/5) * 5000 + i * 150 + Math.random() * 1500
  }));

  // Strike Price Volume
  const strikeVol = [
    { x: 140, calls: 0, puts: 0 }, { x: 150, calls: 60, puts: 50 },
    { x: 160, calls: 70, puts: 65 }, { x: 170, calls: 620, puts: 0 },
    { x: 180, calls: 0, puts: 0 }, { x: 190, calls: 0, puts: 0 },
    { x: 200, calls: 0, puts: 210 }, { x: 210, calls: 180, puts: 230 },
    { x: 220, calls: 0, puts: 0 }, { x: 230, calls: 240, puts: 0 },
    { x: 240, calls: 0, puts: 0 }, { x: 250, calls: 450, puts: 0 },
    { x: 260, calls: 0, puts: 280 }, { x: 270, calls: 310, puts: 0 },
    { x: 280, calls: 0, puts: 0 }, { x: 290, calls: 360, puts: 290 },
    { x: 300, calls: 0, puts: 0 }, { x: 310, calls: 0, puts: 0 },
    { x: 320, calls: 0, puts: 380 }, { x: 330, calls: 0, puts: 0 },
    { x: 340, calls: 480, puts: 0 }, { x: 350, calls: 520, puts: 0 }
  ];

  // Expiration Volume
  const expiryVol = [
    { x: '25-11-02', calls: 0, puts: 0 }, { x: '25-11-03', calls: 70, puts: 0 },
    { x: '25-11-07', calls: 0, puts: 120 }, { x: '25-11-08', calls: 0, puts: 180 },
    { x: '25-11-09', calls: 180, puts: 0 }, { x: '25-11-10', calls: 0, puts: 250 }
  ];

  // Historical Volume - dense with spike at end
  const histVol = Array.from({length: 50}, (_, i) => ({
    x: `${String(2 + Math.floor(i/6)).padStart(2, '0')}:${String((i * 10) % 60).padStart(2, '0')}`,
    calls: (i > 42 ? 35000 : 0) + Math.random() * 15000 + 3000,
    puts: Math.random() * 12000 + 2000
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-sub-card border border-custom-border border border-[#2a2a2a] rounded px-3 py-2 text-xs">
          {payload.map((p, i) => (
            <div key={i} style={{color: p.fill}}>
              {p.name}: {p.value.toFixed(0)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <div className="space-y-4">
        {/* Strike Price OI */}
        <div className="bg-sub-card border border-custom-border rounded-lg p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-dispute-color font-medium text-sm">Open Interest by Strike Price</h3>
            <button className="text-gray-500 text-xs">⊞</button>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
            <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Expiry All ▼</button>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={strikeOI}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                <Bar dataKey="puts" fill="#ef4444" name="Puts" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
              <span className="text-gray-500 text-xs">Calls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
              <span className="text-gray-500 text-xs">Puts</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-[#1a1a1a] text-xs">
            <div>
              <div className="text-gray-500">Call Open Interest</div>
              <div className="text-dispute-color font-medium mt-1">1,527.00 Cont</div>
            </div>
            <div>
              <div className="text-gray-500">Put Open Interest</div>
              <div className="text-dispute-color font-medium mt-1">740.60 Cont</div>
            </div>
            <div>
              <div className="text-gray-500">Put/Call Ratio</div>
              <div className="text-dispute-color font-medium mt-1">0.48</div>
            </div>
            <div>
              <div className="text-gray-500">Total Open Interest</div>
              <div className="text-dispute-color font-medium mt-1">2,267.60 Cont</div>
            </div>
          </div>
        </div>

        {/* Row: Expiration OI + Historical OI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Expiration OI */}
          <div className="bg-sub-card border border-custom-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-dispute-color font-medium text-sm">Open Interest by Expiration</h3>
              <button className="text-gray-500 text-xs">⊞</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
              <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expiryOI}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                  <Bar dataKey="puts" fill="#ef4444" name="Puts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
                <span className="text-gray-500 text-xs">Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
                <span className="text-gray-500 text-xs">Puts</span>
              </div>
            </div>
          </div>

          {/* Historical OI */}
          <div className="bg-sub-card border border-custom-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-dispute-color font-medium text-sm">Historical Open Interest</h3>
              <button className="text-gray-500 text-xs">⊞</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Period 1d ▼</button>
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
              <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={histOI} barGap={0}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                  <Bar dataKey="puts" fill="#ef4444" name="Puts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
                <span className="text-gray-500 text-xs">Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
                <span className="text-gray-500 text-xs">Puts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strike Volume */}
        <div className="bg-sub-card border border-custom-border rounded-lg p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-dispute-color font-medium text-sm">24hr Volume by Strike Price</h3>
            <button className="text-gray-500 text-xs">⊞</button>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
            <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Expiry All ▼</button>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={strikeVol}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                <Bar dataKey="puts" fill="#ef4444" name="Puts" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-6 mt-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
              <span className="text-gray-500 text-xs">Calls</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
              <span className="text-gray-500 text-xs">Puts</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-3 pt-4 border-t border-[#1a1a1a] text-xs">
            <div>
              <div className="text-gray-500">Call Volume</div>
              <div className="text-dispute-color font-medium mt-1">1,099.70 Cont</div>
            </div>
            <div>
              <div className="text-gray-500">Put Volume</div>
              <div className="text-dispute-color font-medium mt-1">1,458.20 Cont</div>
            </div>
            <div>
              <div className="text-gray-500">Put/Call Ratio</div>
              <div className="text-dispute-color font-medium mt-1">1.41</div>
            </div>
            <div>
              <div className="text-gray-500">Total Volume</div>
              <div className="text-dispute-color font-medium mt-1">2,557.90 Cont</div>
            </div>
          </div>
        </div>

        {/* Row: Expiry Volume + Historical Volume */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Expiry Volume */}
          <div className="bg-sub-card border border-custom-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-dispute-color font-medium text-sm">24hr Volume by Expiration</h3>
              <button className="text-gray-500 text-xs">⊞</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
              <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={expiryVol}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                  <Bar dataKey="puts" fill="#ef4444" name="Puts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
                <span className="text-gray-500 text-xs">Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
                <span className="text-gray-500 text-xs">Puts</span>
              </div>
            </div>
          </div>

          {/* Historical Volume */}
          <div className="bg-sub-card border border-custom-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-dispute-color font-medium text-sm">Historical Trading Volume</h3>
              <button className="text-gray-500 text-xs">⊞</button>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Period 1d ▼</button>
              <button className="text-xs px-2.5 py-1 rounded bg-sub-card border border-custom-border text-dispute-color">Contract</button>
              <button className="text-xs px-2.5 py-1 rounded text-gray-500">Notional</button>
            </div>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={histVol} barGap={0}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
                  <XAxis dataKey="x" tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: '#666', fontSize: 9 }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="calls" fill="#22c55e" name="Calls" />
                  <Bar dataKey="puts" fill="#ef4444" name="Puts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
                <span className="text-gray-500 text-xs">Calls</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
                <span className="text-gray-500 text-xs">Puts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestVolume;