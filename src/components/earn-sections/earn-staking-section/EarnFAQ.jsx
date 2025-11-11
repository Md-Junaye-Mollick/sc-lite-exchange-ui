import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Lock, Shield, Zap, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

const EarnFAQ = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);
      const faqs = [
    { q: 'What is crypto staking?', a: 'Staking is the process of holding cryptocurrencies in a wallet to support network operations and earn rewards.' },
    { q: 'How are rewards calculated?', a: 'Rewards are calculated based on your staked amount, APY rate, and staking duration. They are distributed daily.' },
    { q: 'Can I unstake anytime?', a: 'Flexible staking allows instant withdrawal. Locked staking requires you to wait until the period ends.' },
    { q: 'Is my crypto safe?', a: 'Yes, all staked assets are protected by SAFU insurance and stored in cold wallets with multi-signature security.' }
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
    <div>
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
                className="bg-sub-card backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden"
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
    </div>
  )
}

export default EarnFAQ;