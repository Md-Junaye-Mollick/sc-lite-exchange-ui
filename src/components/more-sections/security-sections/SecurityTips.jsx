import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle, Users, FileCheck, Key, Smartphone, Database, Activity } from 'lucide-react';

const SecurityTips = () => {
  const [activeFeature, setActiveFeature] = useState(0);
    const securityTips = [
      {
        icon: <Key className="w-6 h-6" />,
        title: "Use Strong Passwords",
        description: "Create unique, complex passwords for your account"
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Enable 2FA",
        description: "Add an extra layer of security with two-factor authentication"
      },
      {
        icon: <AlertTriangle className="w-6 h-6" />,
        title: "Beware of Phishing",
        description: "Always verify URLs and never share your credentials"
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: "Monitor Activity",
        description: "Regularly check your account for unauthorized transactions"
      }
    ];
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5
        }
      }
    };
  
    const fadeInUpVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut"
        }
      }
    };  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  return (
    <div>
      {/* Security Tips */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleInVariants}
            className="bg-pre-bg backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#2a2a2a]"
          >
            <motion.div
              variants={fadeInUpVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                Best Security Practices
              </h2>
              <p className="text-xl text-gray-400">
                Follow these tips to keep your account secure
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {securityTips.map((tip, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="bg-sub-card rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#ffc107]/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-[#ffc107] to-[#ffeb3b] rounded-xl flex items-center justify-center flex-shrink-0"
                    >
                      <div className="text-black">{tip.icon}</div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
                      <p className="text-gray-400">{tip.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default SecurityTips;