import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const FuturesInformation = () => {
      const futuresInfo = [
        { 
          title: 'Mark Price vs Index Price',
          desc: 'Mark Price is used for liquidations and unrealized PNL. Index Price is the spot market reference.',
          icon: <Target className="w-5 h-5" />
        },
        { 
          title: 'Funding Rate Mechanism',
          desc: 'Perpetual contracts use funding rates every 8 hours to keep prices anchored to spot.',
          icon: <Clock className="w-5 h-5" />
        },
        { 
          title: 'Leverage & Margin',
          desc: 'Trade with up to 100x leverage. Initial margin and maintenance margin protect your positions.',
          icon: <Calculator className="w-5 h-5" />
        },
        { 
          title: 'Open Interest Tracking',
          desc: 'Monitor total market exposure and trader sentiment through open interest metrics.',
          icon: <Eye className="w-5 h-5" />
        }
      ];
  return (
    <div>
              {/* Futures Information Grid */}
      <section className="py-8 px-4 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Info className="w-6 h-6 mr-3 text-yellow-400" />
            Understanding Futures Trading
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {futuresInfo.map((info, idx) => (
              <div key={idx} className="bg-sub-card backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-yellow-500/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-400 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{info.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FuturesInformation;