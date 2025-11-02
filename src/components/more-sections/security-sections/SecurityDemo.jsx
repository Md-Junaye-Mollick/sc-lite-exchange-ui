import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle, Users, FileCheck, Key, Smartphone, Database, Activity } from 'lucide-react';

const SecurityDemo = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Grade Encryption",
      description: "256-bit SSL encryption protects all your data transmissions",
      details: "Military-grade AES-256 encryption ensures your sensitive information remains secure at all times."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Add extra layers of security to your account",
      details: "Enable 2FA, biometric authentication, and hardware security keys for maximum protection."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "24/7 threat detection and prevention",
      details: "Advanced AI-powered systems monitor for suspicious activities and unauthorized access attempts."
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cold Storage",
      description: "95% of assets stored offline",
      details: "The majority of digital assets are kept in secure cold storage vaults, protected from online threats."
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "SAFU Fund",
      description: "Insurance fund protecting user assets",
      details: "A dedicated insurance fund ensures asset protection in the event of security breaches."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Regular Audits",
      description: "Third-party security assessments",
      details: "Independent security firms regularly audit our systems and smart contracts for vulnerabilities."
    }
  ];

  const certifications = [
    { name: "ISO 27001", description: "Information Security" },
    { name: "SOC 2 Type II", description: "Data Protection" },
    { name: "PCI DSS", description: "Payment Security" },
    { name: "GDPR", description: "Privacy Compliant" }
  ];

  const securityStats = [
    { value: "$2B+", label: "Protected Assets" },
    { value: "99.99%", label: "Uptime" },
    { value: "50M+", label: "Users Protected" },
    { value: "0", label: "Security Breaches" }
  ];

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
  };

  const scaleInVariants = {
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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="bg-[#ffc107]/10 border border-[#ffc107]/30 rounded-full px-6 py-2 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-[#ffc107]" />
                <span className="text-sm text-[#ffc107] font-medium">Security First Approach</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-[#ffc107] via-[#ffeb3b] to-[#ffc107] text-transparent bg-clip-text">
                Your Security
              </span>
              <br />
              <span className="text-white">Is Our Priority</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Trade with confidence on Delta Exchange. We employ industry-leading security measures to protect your digital assets and personal information.
            </motion.p>

            {/* Security Stats */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {securityStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#2a2a2a]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-[#ffc107] mb-2"
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

      {/* Main Security Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Multi-Layered Security Architecture
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Multiple layers of protection working together to keep your assets safe
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFeature(idx)}
                className={`bg-[#1a1a1a]/50 backdrop-blur-xl rounded-3xl p-8 border cursor-pointer transition-all duration-300 ${
                  activeFeature === idx
                    ? 'border-[#ffc107] shadow-[0_0_30px_rgba(255,193,7,0.3)]'
                    : 'border-[#2a2a2a] hover:border-[#ffc107]/50'
                }`}
              >
                <motion.div
                  animate={{
                    scale: activeFeature === idx ? [1, 1.1, 1] : 1,
                    rotate: activeFeature === idx ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    activeFeature === idx ? 'bg-gradient-to-br from-[#ffc107] to-[#ffeb3b]' : 'bg-[#2a2a2a]'
                  }`}
                >
                  <div className={activeFeature === idx ? 'text-black' : 'text-[#ffc107]'}>
                    {feature.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <p className="text-sm text-gray-500">{feature.details}</p>
                
                {activeFeature === idx && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 flex items-center text-[#ffc107] text-sm font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Active Protection
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-400">
              Recognized and certified by leading security organizations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a] text-center hover:border-[#ffc107]/50 transition-all duration-300"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="w-16 h-16 bg-gradient-to-br from-[#ffc107] to-[#ffeb3b] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FileCheck className="w-8 h-8 text-black" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Tips */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={scaleInVariants}
            className="bg-[#1a1a1a]/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-[#2a2a2a]"
          >
            <motion.div
              variants={fadeInUpVariants}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
                  className="bg-[#0f0f0f] rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#ffc107]/50 transition-all duration-300"
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={scaleInVariants}
            className="bg-gradient-to-br from-[#ffc107] to-[#ffeb3b] rounded-3xl p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-black mb-6"
            >
              Start Trading Securely Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-black/80 mb-8"
            >
              Join millions of users who trust Delta Exchange with their digital assets
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-black/90 transition-all duration-300"
              >
                Create Account
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm text-black px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border-2 border-black/20"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-12 px-4 border-t border-[#2a2a2a]"
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            © 2025 Delta Exchange. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-400">
            <Shield className="w-4 h-4 text-[#ffc107]" />
            <span>Protected by industry-leading security measures</span>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default SecurityDemo;