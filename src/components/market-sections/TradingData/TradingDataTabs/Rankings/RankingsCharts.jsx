import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts';

const RankingsCharts = () => {
  const [chartData] = useState({
    distribution: [
      { range: '>10%', count: 23, type: 'gain' },
      { range: '7-10%', count: 19, type: 'gain' },
      { range: '5-7%', count: 20, type: 'gain' },
      { range: '3-5%', count: 104, type: 'gain' },
      { range: '0-3%', count: 685, type: 'gain' },
      { range: '0%', count: 68, type: 'neutral' },
      { range: '0-3% (L)', count: 521, type: 'loss' },
      { range: '3-5% (L)', count: 90, type: 'loss' },
      { range: '5-7% (L)', count: 32, type: 'loss' },
      { range: '7-10% (L)', count: 19, type: 'loss' },
      { range: '>10% (L)', count: 15, type: 'loss' },
    ],
    topMovers: [
      { rank: 1, name: 'ADX/BTC', status: 'Pullba...', change: -20.41 },
      { rank: 2, name: 'BEL/USDT', status: 'Pullba...', change: -9.53 },
      { rank: 3, name: 'BEL/BTC', status: 'Pullba...', change: -14.72 },
      { rank: 4, name: 'CHR/BTC', status: 'Pullba...', change: -6.76 },
      { rank: 5, name: 'CHR/USDT', status: 'Pullba...', change: -6.53 },
      { rank: 6, name: 'DASH/USDT', status: 'Pullba...', change: -5.24 },
      { rank: 7, name: 'FLM/USDT', status: 'Pullba...', change: -16.21 },
      { rank: 8, name: 'OM/BTC', status: 'Pullba...', change: -11.93 },
      { rank: 9, name: 'ZEN/USDT', status: 'Pullba...', change: -7.19 },
      { rank: 10, name: 'API3/BTC', status: 'Pullba...', change: -7.41 },
    ],
  });

  const totalGains = 851;
  const totalLosses = 677;

  // Custom colors based on type
  const getBarColor = (type) => {
    switch (type) {
      case 'gain':
        return '#22c55e'; // Tailwind green-500
      case 'loss':
        return '#ef4444'; // Tailwind red-500
      default:
        return '#6b7280'; // Tailwind gray-500
    }
  };

  return (
    <div className="bg-primary-bg p-6 mb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Section */}
        <div className="lg:col-span-2 bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6">
          <h2 className="text-dispute-color font-semibold text-lg mb-6">
            Price Change Distribution
          </h2>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData.distribution}
                margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2e2e2e" />
                <XAxis
                  dataKey="range"
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                  axisLine={{ stroke: '#2e2e2e' }}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: '#9ca3af', fontSize: 10 }}
                  axisLine={{ stroke: '#2e2e2e' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e1e1e',
                    border: '1px solid #333',
                    color: '#fff',
                    borderRadius: '6px',
                  }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {chartData.distribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.type)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-secondary-desc text-xs">Gains</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-500 rounded"></div>
              <span className="text-secondary-desc text-xs">Neutral</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-secondary-desc text-xs">Losses</span>
            </div>
          </div>

          {/* Summary */}
          <div className="flex items-center justify-between text-sm text-secondary-desc">
            <span>
              Price up:{' '}
              <span className="text-dispute-color font-medium">{totalGains}</span>
            </span>
            <span>
              Price down:{' '}
              <span className="text-dispute-color font-medium">{totalLosses}</span>
            </span>
          </div>
        </div>

        {/* Top Movers Table */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border p-6 h-[480px] overflow-scroll scrollbar-hide">
          <h2 className="text-dispute-color font-semibold text-lg mb-4">
            Top Movers
          </h2>

          {/* Header */}
          <div className="grid grid-cols-[40px,1fr,80px,100px] gap-3 text-xs text-secondary-desc pb-3 border-b border-custom-border mb-2">
            <div></div>
            <div>Name</div>
            <div>Status</div>
            <div className="text-right">Change</div>
          </div>

          {/* Rows */}
          <div className="space-y-1">
            {chartData.topMovers.map((mover) => (
              <div
                key={mover.rank}
                className="grid grid-cols-[40px,1fr,80px,100px] gap-3 items-center py-3 hover:bg-sub-card/5 rounded-lg px-2 transition-colors"
              >
                <div className="text-secondary-desc text-xs">{mover.rank}</div>
                <div className="text-dispute-color font-medium text-xs truncate">
                  {mover.name}
                </div>
                <div className="text-secondary-desc text-xs truncate">
                  {mover.status}
                </div>
                <div className="flex items-center justify-end gap-2">
                  <span
                    className={`text-xs font-semibold ${
                      mover.change < 0 ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {mover.change}%
                  </span>
                  <div
                    className={`${
                      mover.change < 0 ? 'bg-red-500' : 'bg-green-500'
                    } text-white text-[10px] px-1.5 py-0.5 rounded font-bold`}
                  >
                    {mover.change < 0 ? '⬇' : '⬆'}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
    </div>
  );
};

export default RankingsCharts;