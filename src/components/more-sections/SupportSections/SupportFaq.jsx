import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, MessageCircle, Book, Shield, CreditCard, TrendingUp, ChevronDown, ChevronUp, Mail, Phone, Clock, HelpCircle, Zap, Lock, Users, FileText, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Translation files
const translations = {
  en: {
    "faq": {
      "title": "Frequently Asked Questions",
      "noResults": "No results found. Try different keywords.",
      "questions": {
        "trade1": {
          "question": "How do I place my first trade?",
          "answer": "To place your first trade, navigate to the trading interface, select your desired trading pair, choose between Market or Limit order, enter the amount you want to trade, and click Buy or Sell. Always review your order details before confirming."
        },
        "trade2": {
          "question": "What is the difference between Market and Limit orders?",
          "answer": "A Market order executes immediately at the current market price. A Limit order allows you to set a specific price at which you want to buy or sell, and will only execute when the market reaches that price."
        },
        "security1": {
          "question": "How do I enable Two-Factor Authentication (2FA)?",
          "answer": "Go to Account Settings > Security > Two-Factor Authentication. Download an authenticator app like Google Authenticator, scan the QR code, and enter the 6-digit code to complete the setup. Always save your backup codes in a secure location."
        },
        "security2": {
          "question": "What should I do if I suspect unauthorized access?",
          "answer": "Immediately change your password, enable 2FA if not already active, review your login history and active sessions, and contact our support team. We recommend withdrawing funds to a secure wallet if you suspect a breach."
        },
        "deposit1": {
          "question": "How long do deposits take to process?",
          "answer": "Crypto deposits typically require network confirmations and can take 10-60 minutes depending on the blockchain. Bank transfers may take 1-5 business days. You can track your deposit status in the transaction history."
        },
        "deposit2": {
          "question": "Are there withdrawal limits?",
          "answer": "Withdrawal limits depend on your verification level. Basic accounts have a 2 BTC daily limit, while fully verified accounts can withdraw up to 100 BTC daily. View your limits in Account Settings."
        },
        "account1": {
          "question": "How do I verify my account?",
          "answer": "Complete account verification by providing a government-issued ID, proof of address, and a selfie. Go to Account > Verification and follow the step-by-step process. Verification typically takes 24-48 hours."
        },
        "account2": {
          "question": "Can I have multiple accounts?",
          "answer": "No, each user is allowed only one account per platform. Multiple accounts may result in suspension. If you need to change account details, contact support for assistance."
        }
      }
    }
  },
  bn: {
    "faq": {
      "title": "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
      "noResults": "কোন ফলাফল পাওয়া যায়নি। বিভিন্ন কীওয়ার্ড চেষ্টা করুন।",
      "questions": {
        "trade1": {
          "question": "আমি কীভাবে আমার প্রথম ট্রেড করব?",
          "answer": "আপনার প্রথম ট্রেড করতে, ট্রেডিং ইন্টারফেসে নেভিগেট করুন, আপনার পছন্দের ট্রেডিং পেয়ার নির্বাচন করুন, মার্কেট বা লিমিট অর্ডারের মধ্যে বেছে নিন, আপনি যে পরিমাণ ট্রেড করতে চান তা লিখুন এবং কিনুন বা বিক্রয় করুন ক্লিক করুন। নিশ্চিত করার আগে সবসময় আপনার অর্ডার বিবরণ পর্যালোচনা করুন।"
        },
        "trade2": {
          "question": "মার্কেট এবং লিমিট অর্ডারের মধ্যে পার্থক্য কী?",
          "answer": "একটি মার্কেট অর্ডার বর্তমান বাজার মূল্যে অবিলম্বে কার্যকর হয়। একটি লিমিট অর্ডার আপনাকে একটি নির্দিষ্ট মূল্য নির্ধারণ করতে দেয় যেখানে আপনি কিনতে বা বিক্রয় করতে চান এবং শুধুমাত্র তখনই কার্যকর হবে যখন বাজার সেই মূল্যে পৌঁছাবে।"
        },
        "security1": {
          "question": "আমি কীভাবে টু-ফ্যাক্টর অথেন্টিকেশন (2FA) সক্রিয় করব?",
          "answer": "অ্যাকাউন্ট সেটিংস > সিকিউরিটি > টু-ফ্যাক্টর অথেন্টিকেশনে যান। Google Authenticator এর মতো একটি অথেন্টিকেটর অ্যাপ ডাউনলোড করুন, QR কোড স্ক্যান করুন এবং সেটআপ সম্পূর্ণ করতে 6-সংখ্যার কোড লিখুন। সবসময় আপনার ব্যাকআপ কোড একটি নিরাপদ স্থানে সংরক্ষণ করুন।"
        },
        "security2": {
          "question": "যদি আমি অননুমোদিত অ্যাক্সেস সন্দেহ করি তাহলে আমার কী করা উচিত?",
          "answer": "অবিলম্বে আপনার পাসওয়ার্ড পরিবর্তন করুন, 2FA সক্রিয় করুন যদি ইতিমধ্যে সক্রিয় না থাকে, আপনার লগইন ইতিহাস এবং সক্রিয় সেশন পর্যালোচনা করুন এবং আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন। যদি আপনি একটি লঙ্ঘন সন্দেহ করেন তাহলে আমরা একটি নিরাপদ ওয়ালেটে তহবিল উত্তোলনের সুপারিশ করি।"
        },
        "deposit1": {
          "question": "আমানত প্রক্রিয়া করতে কতক্ষণ সময় লাগে?",
          "answer": "ক্রিপ্টো আমানতের জন্য সাধারণত নেটওয়ার্ক নিশ্চিতকরণ প্রয়োজন এবং ব্লকচেইনের উপর নির্ভর করে 10-60 মিনিট সময় লাগতে পারে। ব্যাংক স্থানান্তরে 1-5 কার্যদিবস সময় লাগতে পারে। আপনি লেনদেন ইতিহাসে আপনার আমানতের স্থিতি ট্র্যাক করতে পারেন।"
        },
        "deposit2": {
          "question": "উত্তোলনের সীমা আছে কি?",
          "answer": "উত্তোলনের সীমা আপনার যাচাইকরণ স্তরের উপর নির্ভর করে। বেসিক অ্যাকাউন্টের দৈনিক 2 BTC সীমা রয়েছে, যেখানে সম্পূর্ণ যাচাইকৃত অ্যাকাউন্ট প্রতিদিন 100 BTC পর্যন্ত উত্তোলন করতে পারে। অ্যাকাউন্ট সেটিংসে আপনার সীমা দেখুন।"
        },
        "account1": {
          "question": "আমি কীভাবে আমার অ্যাকাউন্ট যাচাই করব?",
          "answer": "একটি সরকার-প্রদত্ত আইডি, ঠিকানার প্রমাণ এবং একটি সেলফি প্রদান করে অ্যাকাউন্ট যাচাইকরণ সম্পূর্ণ করুন। অ্যাকাউন্ট > যাচাইকরণে যান এবং ধাপে ধাপে প্রক্রিয়া অনুসরণ করুন। যাচাইকরণে সাধারণত 24-48 ঘন্টা সময় লাগে।"
        },
        "account2": {
          "question": "আমি কি একাধিক অ্যাকাউন্ট রাখতে পারি?",
          "answer": "না, প্রতিটি ব্যবহারকারীকে প্রতি প্ল্যাটফর্মে শুধুমাত্র একটি অ্যাকাউন্টের অনুমতি দেওয়া হয়। একাধিক অ্যাকাউন্ট সাসপেনশনের কারণ হতে পারে। যদি আপনার অ্যাকাউন্ট বিবরণ পরিবর্তন করার প্রয়োজন হয়, সহায়তার জন্য সাপোর্টের সাথে যোগাযোগ করুন।"
        }
      }
    }
  }
};

const SupportFaq = () => {
  const { i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currentLanguage = i18n.language || 'en';
  const t = translations[currentLanguage] || translations.en;

  const faqs = [
    {
      category: 'trading',
      questionKey: 'trade1'
    },
    {
      category: 'trading',
      questionKey: 'trade2'
    },
    {
      category: 'security',
      questionKey: 'security1'
    },
    {
      category: 'security',
      questionKey: 'security2'
    },
    {
      category: 'deposits',
      questionKey: 'deposit1'
    },
    {
      category: 'deposits',
      questionKey: 'deposit2'
    },
    {
      category: 'account',
      questionKey: 'account1'
    },
    {
      category: 'account',
      questionKey: 'account2'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const question = t.faq.questions[faq.questionKey].question;
    const answer = t.faq.questions[faq.questionKey].answer;
    return (
      (selectedCategory === 'all' || faq.category === selectedCategory) &&
      (question.toLowerCase().includes(searchQuery.toLowerCase()) ||
       answer.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div>
      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            {t.faq.title}
          </motion.h2>
          
          {filteredFaqs.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">{t.faq.noResults}</p>
            </motion.div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const questionData = t.faq.questions[faq.questionKey];
                return (
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
                      <span className="text-white font-semibold pr-4">{questionData.question}</span>
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
                            {questionData.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SupportFaq;