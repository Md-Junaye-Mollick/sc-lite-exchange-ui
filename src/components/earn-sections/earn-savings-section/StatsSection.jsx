import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Wallet, Lock, Zap, ArrowRight, Shield, Clock, DollarSign, Percent, ChevronRight, Star, PiggyBank, Calculator } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { label: 'Total Value Locked', value: '$2.5B+', icon: DollarSign, color: 'text-green-500' },
    { label: 'Active Users', value: '500K+', icon: Star, color: 'text-yellow-500' },
    { label: 'Avg. APY', value: '8.5%', icon: Percent, color: 'text-blue-500' },
    { label: 'Total Earned', value: '$150M+', icon: TrendingUp, color: 'text-purple-500' }
  ];
  // Animation Variants
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

  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12  backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8  " 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx} 
          className="bg-sub-card backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          variants={cardVariants}
          whileHover="hover"
        >
          <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
          <p className="text-2xl font-bold text-dispute-color mb-1">{stat.value}</p>
          <p className="text-sm text-gray-400">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsSection;