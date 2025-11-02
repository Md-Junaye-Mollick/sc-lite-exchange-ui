import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle, Users, FileCheck, Key, Smartphone, Database, Activity } from 'lucide-react';

const SecurityCertifications = () => {
  const { t } = useTranslation();
  const [activeFeature, setActiveFeature] = useState(0);
  
  const certifications = [
    { 
      name: t('certifications.items.iso.name'),
      description: t('certifications.items.iso.description')
    },
    { 
      name: t('certifications.items.soc.name'),
      description: t('certifications.items.soc.description')
    },
    { 
      name: t('certifications.items.pci.name'),
      description: t('certifications.items.pci.description')
    },
    { 
      name: t('certifications.items.gdpr.name'),
      description: t('certifications.items.gdpr.description')
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
      {/* Certifications */}
      <section className="py-20 px-4 bg-pre-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {t('certifications.heading')}
            </h2>
            <p className="text-xl text-gray-400">
              {t('certifications.subheading')}
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
                className="bg-sub-card rounded-2xl p-8 border border-[#2a2a2a] text-center hover:border-[#ffc107]/50 transition-all duration-300"
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
    </div>
  );
};

export default SecurityCertifications;