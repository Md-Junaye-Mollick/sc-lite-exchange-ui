import React, { useState } from 'react';
import { TrendingUp, TrendingDown, LineChart, Layers, Calculator, Target, Wallet, RefreshCw, Calendar, Clock, Eye, Percent, DollarSign, BarChart2, Activity, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const ContractTypes = () => {
  const [selectedContract, setSelectedContract] = useState('perpetual');
      const contractTypes = [
        { id: 'perpetual', name: 'Perpetual Contracts', desc: 'No expiry, continuous trading', icon: <RefreshCw className="w-5 h-5" /> },
        { id: 'quarterly', name: 'Quarterly Futures', desc: 'Fixed expiry dates', icon: <Calendar className="w-5 h-5" /> },
        { id: 'inverse', name: 'Inverse Contracts', desc: 'Settled in crypto', icon: <Layers className="w-5 h-5" /> }
      ];
  return (
    <div>
            {/* Contract Types Selection */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Layers className="w-6 h-6 mr-3 text-yellow-400" />
            Contract Types
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {contractTypes.map((type) => (
              <div 
                key={type.id}
                onClick={() => setSelectedContract(type.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedContract === type.id 
                    ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500' 
                    : 'bg-sub-card border-2 border-gray-700/50 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2 rounded-lg ${selectedContract === type.id ? 'bg-yellow-500/20 text-yellow-400' : 'bg-gray-700/50 text-gray-400'}`}>
                    {type.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{type.name}</h4>
                    <p className="text-sm text-gray-400">{type.desc}</p>
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

export default ContractTypes;