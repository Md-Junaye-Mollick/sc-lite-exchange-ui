import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Wallet, Lock, Zap, ArrowRight, Shield, Clock, DollarSign, Percent, ChevronRight, Star, PiggyBank, Calculator } from 'lucide-react';

const EarnDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState('flexible');
  const [activeCategory, setActiveCategory] = useState('popular');
  const [depositAmount, setDepositAmount] = useState(1);
  const [calculatedEarnings, setCalculatedEarnings] = useState(0);

  const savingsPlans = [
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

  const stats = [
    { label: 'Total Value Locked', value: '$2.5B+', icon: DollarSign, color: 'text-green-500' },
    { label: 'Active Users', value: '500K+', icon: Star, color: 'text-yellow-500' },
    { label: 'Avg. APY', value: '8.5%', icon: Percent, color: 'text-blue-500' },
    { label: 'Total Earned', value: '$150M+', icon: TrendingUp, color: 'text-purple-500' }
  ];

  const calculateEarnings = (amount, apy, days = 365) => {
    const principal = parseFloat(amount) || 0;
    const rate = parseFloat(apy) / 100;
    return (principal * rate * (days / 365)).toFixed(4);
  };

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const selectedPlanData = savingsPlans.find(plan => plan.id === selectedPlan);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-20 pb-16 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              className="inline-block mb-4"
              variants={itemVariants}
            >
              <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Up to 12% APY</span>
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                Earn With Delta Savings
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Maximize your crypto earnings with Delta's secure savings platform. Choose from flexible or locked savings plans with competitive APYs.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              variants={containerVariants}
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Savings Plans */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
          >
            {savingsPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
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

          {/* Savings Calculator */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700 mb-16"
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
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors"
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

          {/* Available Cryptocurrencies */}
          <motion.div 
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700"
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

          {/* Features Section */}
          <motion.div 
            className="grid md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {[
              { icon: Shield, color: 'green', title: 'Bank-Grade Security', desc: 'Your assets are protected with military-grade encryption and cold storage.' },
              { icon: Clock, color: 'blue', title: 'Daily Payouts', desc: 'Earn interest daily and watch your portfolio grow automatically.' },
              { icon: Zap, color: 'purple', title: 'Instant Deposits', desc: 'Start earning immediately with instant deposit processing.' }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-${feature.color}-500/10 rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-6 h-6 text-${feature.color}-500`} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="mt-16 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Earning?</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of users already earning passive income with Delta's secure savings platform.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-yellow-500/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Account Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default EarnDemo;