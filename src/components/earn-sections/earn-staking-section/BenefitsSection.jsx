import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const BenefitsSection = () => {
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
    <div>
            {/* Benefits Section */}
      <section className="py-16 bg-pre-bg">
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
              className="bg-sub-card backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
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
    </div>
  )
}

export default BenefitsSection;