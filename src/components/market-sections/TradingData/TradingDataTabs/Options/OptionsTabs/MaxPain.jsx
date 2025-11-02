import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';

const MaxPain = () => {
  const [expiry, setExpiry] = useState('25-11-02');
  
  const data = [
    { x: 160, call: 0, put: 10000 },
    { x: 168, call: 0, put: 4000 },
    { x: 178, call: 0, put: 1000 },
    { x: 186, call: 0, put: 500 },
    { x: 188, call: 0, put: 0 },
    { x: 194, call: 0, put: 0 },
    { x: 204, call: 500, put: 0 }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-sub-card border border-custom-border border border-[#2a2a2a] rounded px-3 py-2 text-xs">
          {payload.map((p, i) => (
            <div key={i} style={{color: p.fill}}>
              {p.name}: {p.value.toFixed(2)}K
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="">
      <div className="bg-sub-card border border-custom-border rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-dispute-color font-medium text-sm">Max Pain Price: 188</h3>
          <button className="text-gray-500 text-xs">⊞</button>
        </div>
        
        <div className="mb-4">
          <select 
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="bg-sub-card border border-custom-border text-gray-500 text-xs rounded px-2.5 py-1 outline-none"
          >
            <option value="25-11-02">Expiry 25-11-02</option>
            <option value="25-11-08">Expiry 25-11-08</option>
          </select>
        </div>

        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a1a1a" vertical={false} />
              <XAxis 
                dataKey="x" 
                tick={{ fill: '#666', fontSize: 9 }} 
                axisLine={false} 
                tickLine={false}
              />
              <YAxis 
                tick={{ fill: '#666', fontSize: 9 }} 
                axisLine={false} 
                tickLine={false}
                tickFormatter={(v) => `${(v/1000).toFixed(2)} K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine 
                x={188} 
                stroke="#d97706" 
                strokeWidth={2}
                strokeDasharray="5 5"
                label={{ 
                  value: 'Max Pain Price  188', 
                  position: 'top',
                  fill: '#d97706',
                  fontSize: 12,
                  fontWeight: 500,
                  dy: -10
                }}
              />
              <Bar dataKey="call" fill="#22c55e" name="Call Intrinsic Value" />
              <Bar dataKey="put" fill="#ef4444" name="Put Intrinsic Value" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-center gap-6 mt-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-[#22c55e]"></div>
            <span className="text-gray-500 text-xs">Call Intrinsic Value</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-sm bg-[#ef4444]"></div>
            <span className="text-gray-500 text-xs">Put Intrinsic Value</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxPain;