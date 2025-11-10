
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Wallet, Lock, Zap, ArrowRight, Shield, Clock, DollarSign, Percent, ChevronRight, Star, Calculator } from 'lucide-react';

// Available Cryptocurrencies Component
const AvalivleCrypto = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  const cryptoOptions = {
    popular: [
      { symbol: 'BTC', name: 'Bitcoin', apy: '5.00', icon: '₿', balance: '0.5234' },
      { symbol: 'ETH', name: 'Ethereum', apy: '4.50', icon: 'Ξ', balance: '2.8901' },
      { symbol: 'USDT', name: 'Tether', apy: '8.00', icon: '₮', balance: '5000' },
      { symbol: 'BNB', name: 'BNB', apy: '6.20', icon: 'B', balance: '12.45' }
    ],
    stablecoins: [
      { symbol: 'USDT', name: 'Tether', apy: '8.00', icon: '₮', balance: '5000' },
      { symbol: 'USDC', name: 'USD Coin', apy: '7.50', icon: '$', balance: '3200' },
      { symbol: 'BUSD', name: 'Binance USD', apy: '7.80', icon: '$', balance: '1500' },
      { symbol: 'DAI', name: 'Dai', apy: '7.20', icon: '◈', balance: '2800' }
    ],
    defi: [
      { symbol: 'UNI', name: 'Uniswap', apy: '9.50', icon: '🦄', balance: '45.2' },
      { symbol: 'AAVE', name: 'Aave', apy: '10.20', icon: 'Ⱥ', balance: '8.7' },
      { symbol: 'LINK', name: 'Chainlink', apy: '8.80', icon: '⬡', balance: '120' },
      { symbol: 'COMP', name: 'Compound', apy: '9.00', icon: 'C', balance: '3.5' }
    ]
  };

  return (
    <motion.div 
      className="bg-pre-bg backdrop-blur-xl rounded-2xl p-8 border border-gray-700 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-white mb-6">Available Cryptocurrencies</h2>
      
      <div className="flex space-x-4 mb-6 border-b border-gray-700 overflow-x-auto">
        {['popular', 'stablecoins', 'defi'].map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`pb-3 px-4 font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
              activeCategory === category
                ? 'text-yellow-500 border-b-2 border-yellow-500'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeCategory}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {cryptoOptions[activeCategory].map((crypto, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-bold text-gray-900">
                    {crypto.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{crypto.name}</p>
                    <p className="text-sm text-gray-400">{crypto.symbol}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-xs text-gray-400 mb-1">APY</p>
                  <p className="text-lg font-bold text-yellow-500">{crypto.apy}%</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-yellow-500 transition-colors" />
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="text-xs text-gray-400">Available Balance</p>
                <p className="text-sm font-medium text-white">{crypto.balance} {crypto.symbol}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default AvalivleCrypto;