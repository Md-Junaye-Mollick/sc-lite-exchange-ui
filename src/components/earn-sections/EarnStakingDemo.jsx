import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const EarnStakingDemo = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeTab, setActiveTab] = useState('flexible');
  const [expandedFaq, setExpandedFaq] = useState(null);

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

  const features = [
    { icon: Shield, title: 'Secure Platform', desc: 'Bank-grade security with multi-layer protection' },
    { icon: Zap, title: 'Instant Rewards', desc: 'Daily reward distribution to your wallet' },
    { icon: Lock, title: 'Protected Assets', desc: 'SAFU insurance covering 100% of staked assets' },
    { icon: TrendingUp, title: 'High APY', desc: 'Competitive rates up to 15.5% annual returns' }
  ];

  const faqs = [
    { q: 'What is crypto staking?', a: 'Staking is the process of holding cryptocurrencies in a wallet to support network operations and earn rewards.' },
    { q: 'How are rewards calculated?', a: 'Rewards are calculated based on your staked amount, APY rate, and staking duration. They are distributed daily.' },
    { q: 'Can I unstake anytime?', a: 'Flexible staking allows instant withdrawal. Locked staking requires you to wait until the period ends.' },
    { q: 'Is my crypto safe?', a: 'Yes, all staked assets are protected by SAFU insurance and stored in cold wallets with multi-signature security.' }
  ];

  const stats = [
    { label: 'Total Value Staked', value: '$2.5B+' },
    { label: 'Active Stakers', value: '500K+' },
    { label: 'Rewards Distributed', value: '$150M+' },
    { label: 'Supported Assets', value: '50+' }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const slideIn = {
    hidden: { x: -60, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-blue-500/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.div 
              className="inline-block mb-6"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center space-x-2"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(234, 179, 8, 0)', '0 0 20px 5px rgba(234, 179, 8, 0.3)', '0 0 0 0 rgba(234, 179, 8, 0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <TrendingUp className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-yellow-500 font-medium">Earn up to 15.5% APY</span>
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
                Earn With Us
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Stake your crypto and earn passive income with industry-leading APY rates. 
              Secure, transparent, and rewarding.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button 
                className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold shadow-lg shadow-yellow-500/50 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Staking Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              <motion.button 
                className="border-2 border-gray-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2"
                whileHover={{ 
                  backgroundColor: 'rgb(234, 179, 8)',
                  color: 'rgb(17, 24, 39)',
                  borderColor: 'rgb(234, 179, 8)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
                  variants={scaleIn}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: 'rgb(234, 179, 8, 0.5)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-yellow-500 mb-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 + 0.9 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Why Stake <span className="text-yellow-500">With Us?</span>
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(234, 179, 8, 0.5)',
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-6 h-6 text-gray-900" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border cursor-pointer ${
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Earning <span className="text-yellow-500">Passive Income</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our staking platform makes it easy to earn rewards on your crypto holdings. 
                With competitive APY rates, flexible terms, and bank-grade security, you can 
                grow your portfolio while maintaining full control.
              </p>
              
              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  'No hidden fees or charges',
                  'Daily reward distribution',
                  'Withdraw anytime (flexible plans)',
                  '24/7 customer support',
                  'Real-time portfolio tracking'
                ].map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    className="flex items-center space-x-3"
                    variants={slideIn}
                  >
                    <motion.div 
                      className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className="w-4 h-4 text-yellow-500" />
                    </motion.div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">Calculate Your Earnings</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Stake Amount</label>
                  <motion.input 
                    type="number" 
                    placeholder="1000" 
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">APY Rate</label>
                  <motion.input 
                    type="number" 
                    placeholder="10.5" 
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Duration (Days)</label>
                  <motion.input 
                    type="number" 
                    placeholder="365" 
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-yellow-500 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
              </div>

              <motion.div 
                className="bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 rounded-xl p-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Estimated Earnings</span>
                  <motion.span 
                    className="text-3xl font-bold text-yellow-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    $105.00
                  </motion.span>
                </div>
                <div className="text-sm text-gray-400">Based on current APY rates</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked <span className="text-yellow-500">Questions</span>
          </motion.h2>

          <motion.div 
            className="space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
                variants={fadeInUp}
              >
                <motion.button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  whileHover={{ backgroundColor: 'rgba(31, 41, 55, 0.3)' }}
                >
                  <span className="font-semibold text-lg">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-yellow-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div 
                      className="px-6 pb-6 text-gray-400 leading-relaxed"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500/10 via-yellow-600/5 to-yellow-500/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start <span className="text-yellow-500">Earning?</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join thousands of users already earning passive income through our staking platform.
          </motion.p>
          
          <motion.button 
            className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-12 py-5 rounded-xl font-bold text-lg shadow-lg shadow-yellow-500/50 inline-flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Started Today</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>

          <motion.div 
            className="flex items-center justify-center space-x-8 mt-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-5 h-5 text-green-500" />
              <span>Secure & Trusted</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.1 }}
            >
              <Lock className="w-5 h-5 text-blue-500" />
              <span>SAFU Protected</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EarnStakingDemo;