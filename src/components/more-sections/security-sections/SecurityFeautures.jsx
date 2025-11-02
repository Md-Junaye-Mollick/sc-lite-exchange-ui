import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle, Users, FileCheck, Key, Smartphone, Database, Activity } from 'lucide-react';

const SecurityFeatures = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: t('securityfeatures.items.encryption.title'),
      description: t('securityfeatures.items.encryption.description'),
      details: t('securityfeatures.items.encryption.details')
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: t('securityfeatures.items.mfa.title'),
      description: t('securityfeatures.items.mfa.description'),
      details: t('securityfeatures.items.mfa.details')
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: t('securityfeatures.items.monitoring.title'),
      description: t('securityfeatures.items.monitoring.description'),
      details: t('securityfeatures.items.monitoring.details')
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: t('securityfeatures.items.coldStorage.title'),
      description: t('securityfeatures.items.coldStorage.description'),
      details: t('securityfeatures.items.coldStorage.details')
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t('securityfeatures.items.safuFund.title'),
      description: t('securityfeatures.items.safuFund.description'),
      details: t('securityfeatures.items.safuFund.details')
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: t('securityfeatures.items.audits.title'),
      description: t('securityfeatures.items.audits.description'),
      details: t('securityfeatures.items.audits.details')
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

  return (
    <div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-dispute-color mb-4">
              {t('securityfeatures.heading')}
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('securityfeatures.subheading')}
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
                className={`bg-sub-card backdrop-blur-xl rounded-3xl p-8 border cursor-pointer transition-all duration-300 ${
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
                
                <h3 className="text-2xl font-bold text-dispute-color mb-3">{feature.title}</h3>
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
                    {t('securityfeatures.activeProtection')}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecurityFeatures;