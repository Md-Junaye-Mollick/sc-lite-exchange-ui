
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Wallet, Lock, Zap, ArrowRight, Shield, Clock, DollarSign, Percent, ChevronRight, Star, Calculator } from 'lucide-react';

// Savings Plans Component
const SavingPlan = ({ selectedPlan, setSelectedPlan }) => {
    const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
  const SavingPlan = [
    {
      id: 'flexible',
      name: 'Flexible Savings',
      apy: '5.00',
      min: '0.001',
      coin: 'BTC',
      duration: 'Flexible',
      features: ['Withdraw Anytime', 'Daily Interest', 'Auto-compound'],
      color: 'from-blue-500 to-cyan-500',
      icon: Wallet
    },
    {
      id: 'locked30',
      name: '30-Day Locked',
      apy: '8.50',
      min: '0.01',
      coin: 'BTC',
      duration: '30 Days',
      features: ['Higher Returns', 'Guaranteed APY', 'Auto-renew Option'],
      color: 'from-purple-500 to-pink-500',
      icon: Lock
    },
    {
      id: 'locked90',
      name: '90-Day Locked',
      apy: '12.00',
      min: '0.05',
      coin: 'BTC',
      duration: '90 Days',
      features: ['Maximum APY', 'Premium Rewards', 'Priority Support'],
      color: 'from-yellow-500 to-orange-500',
      icon: TrendingUp,
      badge: 'BEST VALUE'
    }
  ];

  return (
    <motion.div 
      className="grid md:grid-cols-3 gap-6 mb-16  backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8  "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {SavingPlan.map((plan, index) => {
        const Icon = plan.icon;
        return (
          <motion.div
            key={plan.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative bg-sub-card backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
              selectedPlan === plan.id
                ? 'border-yellow-500 shadow-xl shadow-yellow-500/20'
                : 'border-gray-700 hover:border-gray-600'
            }`}
          >
            {plan.badge && (
              <motion.div 
                className="absolute -top-3 right-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 text-xs font-bold px-3 py-1 rounded-full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {plan.badge}
              </motion.div>
            )}
            
            <motion.div 
              className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mb-4`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                {plan.apy}%
              </span>
              <span className="text-gray-400 ml-2">APY</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Minimum</span>
                <span className="text-white font-medium">{plan.min} {plan.coin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Duration</span>
                <span className="text-white font-medium">{plan.duration}</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center space-x-2 text-sm text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.button 
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Earning</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SavingPlan;