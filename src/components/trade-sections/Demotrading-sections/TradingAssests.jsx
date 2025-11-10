import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';
const TradingAssests = () => {
  return (
    <div>
            {/* Trading Assets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trade Your Favorite
              <span className="text-gradient"> Assets</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Access thousands of instruments across multiple asset classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Bitcoin', symbol: 'BTC', price: '$64,234.50', change: '+3.45%', positive: true },
              { name: 'Ethereum', symbol: 'ETH', price: '$3,456.78', change: '+2.12%', positive: true },
              { name: 'Apple', symbol: 'AAPL', price: '$178.23', change: '-0.89%', positive: false },
              { name: 'Tesla', symbol: 'TSLA', price: '$242.84', change: '+5.67%', positive: true },
              { name: 'EUR/USD', symbol: 'EURUSD', price: '1.0823', change: '+0.23%', positive: true },
              { name: 'Gold', symbol: 'XAUUSD', price: '$2,034.50', change: '+1.34%', positive: true },
              { name: 'S&P 500', symbol: 'SPX', price: '5,234.18', change: '-0.45%', positive: false },
              { name: 'Crude Oil', symbol: 'WTI', price: '$78.92', change: '+2.89%', positive: true }
            ].map((asset, index) => (
              <div
                key={index}
                className="p-6 bg-sub-card backdrop-blur-xl border border-slate-800 rounded-xl hover:border-yellow-500/50 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-slate-400 text-sm">{asset.symbol}</div>
                    <div className="font-semibold">{asset.name}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${asset.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {asset.change}
                  </div>
                </div>
                <div className="text-2xl font-bold group-hover:text-gradient transition-colors">{asset.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default TradingAssests;