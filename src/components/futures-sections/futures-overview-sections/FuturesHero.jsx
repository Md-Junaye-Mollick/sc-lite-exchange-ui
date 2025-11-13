import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const FuturesHero = () => {
      const keyMetrics = [
        { label: 'Total Open Interest', value: '$5.54B', change: '+12.5%', icon: <Wallet className="w-6 h-6" />, isUp: true },
        { label: 'Avg Funding Rate', value: '0.0092%', change: '+0.0021%', icon: <Percent className="w-6 h-6" />, isUp: true },
        { label: '24h Volume', value: '$17.1B', change: '+8.3%', icon: <BarChart2 className="w-6 h-6" />, isUp: true },
        { label: 'Active Positions', value: '89,432', change: '+5.2%', icon: <Activity className="w-6 h-6" />, isUp: true }
      ];
  return (
    <div>
            {/* Page Title Section */}
      <section className="py-8 px-4 border-b border-gray-700/30 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <LineChart className="w-8 h-8 text-yellow-400" />
            <h2 className="text-4xl font-bold">Futures Overview</h2>
          </div>
          <p className="text-gray-400 text-lg">Real-time market data, contract specifications, and trading insights</p>
        </div>
      </section>

      {/* Key Metrics Dashboard */}
      <section className="py-8 px-4 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric, idx) => (
              <div key={idx} className="bg-sub-card backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all">
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
    </div>
  )
}

export default FuturesHero;