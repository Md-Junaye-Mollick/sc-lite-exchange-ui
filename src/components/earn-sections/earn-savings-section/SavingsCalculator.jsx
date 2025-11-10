
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Wallet, Lock, Zap, ArrowRight, Shield, Clock, DollarSign, Percent, ChevronRight, Star, Calculator } from 'lucide-react';

// Savings Calculator Component
const SavingsCalculator = ({ selectedPlan, setSelectedPlan }) => {
      const [calculatedEarnings, setCalculatedEarnings] = useState(0);
      
  const [depositAmount, setDepositAmount] = useState(1);

  const savingsPlans = [
    { id: 'flexible', apy: '5.00' },
    { id: 'locked30', apy: '8.50' },
    { id: 'locked90', apy: '12.00' }
  ];

  const calculateEarnings = (amount, apy, days = 365) => {
    const principal = parseFloat(amount) || 0;
    const rate = parseFloat(apy) / 100;
    return (principal * rate * (days / 365)).toFixed(4);
  };
  const selectedPlanData = savingsPlans.find(plan => plan.id === selectedPlan);

  return (
    <motion.div 
      className="bg-sub-card backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-3xl font-bold text-white">Savings Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Deposit Amount (BTC)</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            className="w-full bg-sub-card border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
            placeholder="Enter amount"
            step="0.001"
            min="0"
          />
          
          <div className="mt-4">
            <label className="block text-sm text-gray-400 mb-2">Select Plan</label>
            <div className="flex space-x-2">
              {savingsPlans.map((plan) => (
                <motion.button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex-1 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-900/50 text-gray-400 hover:bg-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.apy}%
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Estimated Earnings</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Daily</span>
              <motion.span 
                className="text-xl font-bold text-yellow-500"
                key={`daily-${depositAmount}-${selectedPlan}`}
                initial={{ scale: 1.2, color: "#fbbf24" }}
                animate={{ scale: 1, color: "#eab308" }}
                transition={{ duration: 0.3 }}
              >
                {calculateEarnings(depositAmount, selectedPlanData?.apy, 1)} BTC
              </motion.span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Monthly</span>
              <motion.span 
                className="text-xl font-bold text-yellow-500"
                key={`monthly-${depositAmount}-${selectedPlan}`}
                initial={{ scale: 1.2, color: "#fbbf24" }}
                animate={{ scale: 1, color: "#eab308" }}
                transition={{ duration: 0.3 }}
              >
                {calculateEarnings(depositAmount, selectedPlanData?.apy, 30)} BTC
              </motion.span>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-yellow-500/20">
              <span className="text-gray-400">Yearly</span>
              <motion.span 
                className="text-2xl font-bold text-yellow-500"
                key={`yearly-${depositAmount}-${selectedPlan}`}
                initial={{ scale: 1.2, color: "#fbbf24" }}
                animate={{ scale: 1, color: "#eab308" }}
                transition={{ duration: 0.3 }}
              >
                {calculateEarnings(depositAmount, selectedPlanData?.apy, 365)} BTC
              </motion.span>
            </div>
          </div>

          <motion.button 
            className="w-full mt-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Deposit Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SavingsCalculator;