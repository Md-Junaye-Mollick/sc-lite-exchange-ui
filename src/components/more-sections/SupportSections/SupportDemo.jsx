import React, { useState } from 'react';
import { Search, MessageCircle, Book, Shield, CreditCard, TrendingUp, ChevronDown, ChevronUp, Mail, Phone, Clock, HelpCircle, Zap, Lock, Users, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SupportDemo = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'trading', name: 'Trading', icon: TrendingUp },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'deposits', name: 'Deposits & Withdrawals', icon: CreditCard },
    { id: 'account', name: 'Account', icon: Users },
  ];

  const faqs = [
    {
      category: 'trading',
      question: 'How do I place my first trade?',
      answer: 'To place your first trade, navigate to the trading interface, select your desired trading pair, choose between Market or Limit order, enter the amount you want to trade, and click Buy or Sell. Always review your order details before confirming.'
    },
    {
      category: 'trading',
      question: 'What is the difference between Market and Limit orders?',
      answer: 'A Market order executes immediately at the current market price. A Limit order allows you to set a specific price at which you want to buy or sell, and will only execute when the market reaches that price.'
    },
    {
      category: 'security',
      question: 'How do I enable Two-Factor Authentication (2FA)?',
      answer: 'Go to Account Settings > Security > Two-Factor Authentication. Download an authenticator app like Google Authenticator, scan the QR code, and enter the 6-digit code to complete the setup. Always save your backup codes in a secure location.'
    },
    {
      category: 'security',
      question: 'What should I do if I suspect unauthorized access?',
      answer: 'Immediately change your password, enable 2FA if not already active, review your login history and active sessions, and contact our support team. We recommend withdrawing funds to a secure wallet if you suspect a breach.'
    },
    {
      category: 'deposits',
      question: 'How long do deposits take to process?',
      answer: 'Crypto deposits typically require network confirmations and can take 10-60 minutes depending on the blockchain. Bank transfers may take 1-5 business days. You can track your deposit status in the transaction history.'
    },
    {
      category: 'deposits',
      question: 'Are there withdrawal limits?',
      answer: 'Withdrawal limits depend on your verification level. Basic accounts have a 2 BTC daily limit, while fully verified accounts can withdraw up to 100 BTC daily. View your limits in Account Settings.'
    },
    {
      category: 'account',
      question: 'How do I verify my account?',
      answer: 'Complete account verification by providing a government-issued ID, proof of address, and a selfie. Go to Account > Verification and follow the step-by-step process. Verification typically takes 24-48 hours.'
    },
    {
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'No, each user is allowed only one account per platform. Multiple accounts may result in suspension. If you need to change account details, contact support for assistance.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      action: 'Start Chat'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed inquiry',
      availability: 'Response within 24h',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with a specialist',
      availability: 'Mon-Fri, 9AM-6PM EST',
      action: 'Call Now'
    }
  ];

  const quickLinks = [
    { icon: FileText, title: 'Trading Guide', description: 'Learn the basics of crypto trading' },
    { icon: Shield, title: 'Security Best Practices', description: 'Keep your account safe' },
    { icon: CreditCard, title: 'Deposit Methods', description: 'Fund your account easily' },
    { icon: Zap, title: 'Fee Structure', description: 'Understand our competitive fees' },
    { icon: Lock, title: 'Privacy Policy', description: 'How we protect your data' },
    { icon: AlertCircle, title: 'Report an Issue', description: 'Encountered a problem?' }
  ];

  const filteredFaqs = faqs.filter(faq => 
    (selectedCategory === 'all' || faq.category === selectedCategory) &&
    (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
     faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-yellow-500 font-medium">We're Here to Help</span>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Support Center
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Find answers, get support, and learn how to make the most of your trading experience
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </motion.div>
          </div>

          {/* Category Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                      : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-12 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Contact Support
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-gray-900" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm">{channel.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-400">{channel.availability}</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-white hover:text-gray-900 py-2 rounded-lg font-semibold transition-all duration-300"
                  >
                    {channel.action}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Frequently Asked Questions
          </motion.h2>
          
          {filteredFaqs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">No results found. Try different keywords.</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
                >
                  <motion.button
                    whileHover={{ backgroundColor: 'rgba(55, 65, 81, 0.5)' }}
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-semibold pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </motion.div>
                  </motion.button>
                  
                  <AnimatePresence>
                    {expandedFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-gray-700 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-xl rounded-3xl p-12 border border-yellow-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Our dedicated support team is ready to assist you with any questions or concerns
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Support Team
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SupportDemo;