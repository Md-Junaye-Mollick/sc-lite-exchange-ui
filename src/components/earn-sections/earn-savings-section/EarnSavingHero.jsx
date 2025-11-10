import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp,} from 'lucide-react';

// Hero Banner Component
const EarnSavingHero = () => {
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
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
  return (
    <motion.div 
      className="text-center mb-12 mt-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
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
    </motion.div>
  );
};

export default EarnSavingHero;