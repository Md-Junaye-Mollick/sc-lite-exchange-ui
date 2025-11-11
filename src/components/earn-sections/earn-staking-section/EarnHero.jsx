import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const EarnHero = () => {
      const stats = [
    { label: 'Total Value Staked', value: '$2.5B+' },
    { label: 'Active Stakers', value: '500K+' },
    { label: 'Rewards Distributed', value: '$150M+' },
    { label: 'Supported Assets', value: '50+' }
  ];

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
  return (
    <div>
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
                className="border-2 border-gray-700 px-8 py-4 rounded-xl font-semibold text-dispute-color flex items-center justify-center space-x-2"
                whileHover={{ 
                  backgroundColor: 'rgb(234, 179, 8)',
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
                  className="bg-sub-card backdrop-blur-sm rounded-xl p-6 border border-gray-700"
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
    </div>
  )
}

export default EarnHero;