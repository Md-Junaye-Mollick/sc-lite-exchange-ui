import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const StakingPlan = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [activeTab, setActiveTab] = useState('flexible');
    const stakingPlans = {
    flexible: [
      { coin: 'Bitcoin', symbol: 'BTC', apy: '5.2%', minAmount: '0.001', period: 'Flexible', risk: 'Low' },
      { coin: 'Ethereum', symbol: 'ETH', apy: '6.8%', minAmount: '0.01', period: 'Flexible', risk: 'Low' },
      { coin: 'Cardano', symbol: 'ADA', apy: '7.5%', minAmount: '100', period: 'Flexible', risk: 'Medium' },
      { coin: 'Solana', symbol: 'SOL', apy: '8.3%', minAmount: '1', period: 'Flexible', risk: 'Medium' }
    ],
    locked: [
      { coin: 'Bitcoin', symbol: 'BTC', apy: '8.5%', minAmount: '0.001', period: '30 Days', risk: 'Low' },
      { coin: 'Ethereum', symbol: 'ETH', apy: '10.2%', minAmount: '0.01', period: '60 Days', risk: 'Low' },
      { coin: 'Cardano', symbol: 'ADA', apy: '12.8%', minAmount: '100', period: '90 Days', risk: 'Medium' },
      { coin: 'Solana', symbol: 'SOL', apy: '15.5%', minAmount: '1', period: '120 Days', risk: 'Medium' }
    ]
  };

      // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div>
            {/* Staking Plans Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Choose Your <span className="text-yellow-500">Staking Plan</span>
          </motion.h2>

          {/* Tabs */}
          <motion.div 
            className="flex justify-center space-x-4 mb-8 border-b border-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['flexible', 'locked'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 px-6 font-semibold text-base transition-all duration-300 relative ${
                  activeTab === tab
                    ? 'text-yellow-500'
                    : 'text-gray-400'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab === 'flexible' ? 'Flexible Staking' : 'Locked Staking'}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Staking Cards */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {stakingPlans[activeTab].map((plan, idx) => (
                <motion.div 
                  key={idx} 
                  className={`bg-sub-card backdrop-blur-sm rounded-2xl p-6 border cursor-pointer ${
                    selectedPlan === idx ? 'border-yellow-500 shadow-lg shadow-yellow-500/30' : 'border-gray-700'
                  }`}
                  variants={scaleIn}
                  onClick={() => setSelectedPlan(idx)}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgba(234, 179, 8, 0.5)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center font-bold text-gray-900"
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.4 }}
                      >
                        {plan.symbol.charAt(0)}
                      </motion.div>
                      <div>
                        <p className="font-semibold">{plan.coin}</p>
                        <p className="text-sm text-gray-400">{plan.symbol}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">APY</span>
                      <motion.span 
                        className="text-yellow-500 font-bold text-xl"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                      >
                        {plan.apy}
                      </motion.span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Min. Amount</span>
                      <span className="font-semibold">{plan.minAmount} {plan.symbol}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Period</span>
                      <span className="font-semibold">{plan.period}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Risk Level</span>
                      <span className={`font-semibold ${plan.risk === 'Low' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {plan.risk}
                      </span>
                    </div>
                  </div>

                  <motion.button 
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-xl font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Stake Now
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}

export default StakingPlan;