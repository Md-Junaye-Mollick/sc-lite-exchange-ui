import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturesSection = () => {
      const features = [
        { icon: Shield, title: 'Secure Platform', desc: 'Bank-grade security with multi-layer protection' },
        { icon: Zap, title: 'Instant Rewards', desc: 'Daily reward distribution to your wallet' },
        { icon: Lock, title: 'Protected Assets', desc: 'SAFU insurance covering 100% of staked assets' },
        { icon: TrendingUp, title: 'High APY', desc: 'Competitive rates up to 15.5% annual returns' }
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
            {/* Features Section */}
      <section className="py-16 bg-pre-bg">
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
                className="bg-sub-card backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
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
    </div>
  )
}

export default FeaturesSection;