import React, { useState, useMemo } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';

const SpotTradingChart = () => {
  const [timeframe, setTimeframe] = useState('1D');
  const timeframes = ['1s', '15m', '1H', '4H', '1D', '1W'];
  
  const data = useMemo(() => {
    const arr = [];
    let price = 103059;
    for (let i = 0; i < 60; i++) {
      const open = price + (Math.random() - 0.5) * 2000;
      const close = open + (Math.random() - 0.5) * 2500;
      const high = Math.max(open, close) + Math.random() * 800;
      const low = Math.min(open, close) - Math.random() * 800;
      arr.push({
        x: i,
        open, high, low, close,
        vol: 5000 + Math.random() * 50000,
      });
      price = close;
    }
    return arr;
  }, []);

  const chartData = useMemo(() => {
    const ma = (period) => data.map((_, i) => 
      i < period - 1 ? null : data.slice(i - period + 1, i + 1).reduce((s, d) => s + d.close, 0) / period
    );
    return data.map((d, i) => ({ ...d, ma7: ma(7)[i], ma25: ma(25)[i] }));
  }, [data]);

  const latest = data[data.length - 1];
  const change = ((latest.close - data[0].open) / data[0].open * 100).toFixed(2);
  const isPos = change >= 0;

  const Candle = ({ x, y, width, height, payload }) => {
    const { open, close, high, low } = payload;
    const isGreen = close > open;
    const color = isGreen ? '#0ecb81' : '#f6465d';
    const range = high - low;
    const yHigh = y - ((high - Math.max(open, close)) / range) * height;
    const yLow = y + ((Math.min(open, close) - low) / range) * height;
    const bodyH = Math.abs((close - open) / range * height) || 1;
    
    return (
      <g>
        <line x1={x + width / 2} y1={yHigh} x2={x + width / 2} y2={yLow} stroke={color} strokeWidth={1} />
        <rect x={x} y={y - (isGreen ? bodyH : 0)} width={width} height={bodyH} fill={color} />
      </g>
    );
  };

  return (
    <div className="w-full h-full bg-sub-card flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-sub-card border-b border-custom-border gap-2">
        <div className="flex items-center gap-2 text-xs">
          {timeframes.map(tf => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-2 py-1 rounded transition ${timeframe === tf ? 'bg-accent text-white' : 'text-secondary-desc hover:text-dispute-color'}`}
            >
              {tf}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-xs">
          <button className="px-3 py-1 bg-accent text-white rounded">Original</button>
          <button className="text-secondary-desc hover:text-dispute-color hidden sm:block">Trading View</button>
          <button className="text-secondary-desc hover:text-dispute-color hidden sm:block">Depth</button>
        </div>
      </div>
      
      {/* Stats */}
      <div className="px-3 py-2 bg-sub-card border-b border-custom-border">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
          <span className="text-secondary-desc">O: <span className="text-dispute-color">{data[0].open.toFixed(2)}</span></span>
          <span className="text-secondary-desc">H: <span className="text-dispute-color">{Math.max(...data.map(c => c.high)).toFixed(2)}</span></span>
          <span className="text-secondary-desc">L: <span className="text-dispute-color">{Math.min(...data.map(c => c.low)).toFixed(2)}</span></span>
          <span className="text-secondary-desc">C: <span className="text-dispute-color">{latest.close.toFixed(2)}</span></span>
          <span className={isPos ? 'text-[#0ecb81]' : 'text-[#f6465d]'}>{isPos ? '+' : ''}{change}%</span>
        </div>
        
        <div className="flex items-center gap-4 mt-1 text-xs">
          <span className="text-[#f0b90b]">MA7: {chartData[chartData.length - 1].ma7?.toFixed(2)}</span>
          <span className="text-[#e93d52]">MA25: {chartData[chartData.length - 1].ma25?.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Chart */}
      <div className="flex-1 p-2 sm:p-4 min-h-0">
        <ResponsiveContainer width="100%" height="70%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b3139" vertical={false} />
            <XAxis dataKey="x" tick={{ fill: '#848e9c', fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#848e9c', fontSize: 10 }} domain={['auto', 'auto']} axisLine={false} tickLine={false} />
            <Tooltip content={({ active, payload }) => {
              if (active && payload?.length) {
                const d = payload[0].payload;
                return (
                  <div className="bg-[#181a20] border border-[#2b3139] rounded px-3 py-2 text-xs">
                    <div className="text-secondary-desc">O: {d.open.toFixed(2)}</div>
                    <div className="text-secondary-desc">H: {d.high.toFixed(2)}</div>
                    <div className="text-secondary-desc">L: {d.low.toFixed(2)}</div>
                    <div className="text-white font-semibold">C: {d.close.toFixed(2)}</div>
                  </div>
                );
              }
              return null;
            }} />
            <Bar dataKey="close" shape={<Candle />} />
            <Line type="monotone" dataKey="ma7" stroke="#f0b90b" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="ma25" stroke="#e93d52" strokeWidth={1.5} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
        
        <ResponsiveContainer width="100%" height="25%">
          <ComposedChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2b3139" vertical={false} />
            <XAxis dataKey="x" tick={{ fill: '#848e9c', fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#848e9c', fontSize: 10 }} axisLine={false} tickLine={false} />
            <Bar dataKey="vol" fill="#4ba3c3" opacity={0.5} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>  
    </div>
  );
};

export default SpotTradingChart; 