import React, { useState } from 'react';
import { Search, MessageCircle, Book, Shield, CreditCard, TrendingUp, ChevronDown, ChevronUp, Mail, Phone, Clock, HelpCircle, Zap, Lock, Users, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuickLinks = () => {
      const quickLinks = [
        { icon: FileText, title: 'Trading Guide', description: 'Learn the basics of crypto trading' },
        { icon: Shield, title: 'Security Best Practices', description: 'Keep your account safe' },
        { icon: CreditCard, title: 'Deposit Methods', description: 'Fund your account easily' },
        { icon: Zap, title: 'Fee Structure', description: 'Understand our competitive fees' },
        { icon: Lock, title: 'Privacy Policy', description: 'How we protect your data' },
        { icon: AlertCircle, title: 'Report an Issue', description: 'Encountered a problem?' }
      ];
    
  return (
    <div>
              {/* Quick Links */}
      <section className="py-16 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Quick Links
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                    <Icon className="w-8 h-8 text-yellow-500 mb-3" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white mb-2">{link.title}</h3>
                  <p className="text-gray-400 text-sm">{link.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuickLinks;