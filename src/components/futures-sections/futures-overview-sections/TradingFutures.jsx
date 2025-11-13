import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const TradingFutures = () => {
  return (
    <div>
      
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
    </div>
  )
}

export default TradingFutures;