import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, Eye, Server, CheckCircle, AlertTriangle, Users, FileCheck, Key, Smartphone, Database, Activity } from 'lucide-react';

const SecurityHero = () => {
  const { t } = useTranslation();

  const securityStats = [
    { 
      value: t('moresecurity.stats.protectedAssets.value'), 
      label: t('moresecurity.stats.protectedAssets.label')
    },
    { 
      value: t('moresecurity.stats.uptime.value'), 
      label: t('moresecurity.stats.uptime.label')
    },
    { 
      value: t('moresecurity.stats.usersProtected.value'), 
      label: t('moresecurity.stats.usersProtected.label')
    },
    { 
      value: t('moresecurity.stats.securityBreaches.value'), 
      label: t('moresecurity.stats.securityBreaches.label')
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden bg-pre-bg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.05),transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-6 py-2 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm text-accent font-medium">
                  {t('moresecurity.badge')}
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">
                {t('moresecurity.title.gradient')}
              </span>
              <br />
              <span className="text-dispute-color">
                {t('moresecurity.title.normal')}
              </span>
            </h1>
            
            <p className="text-xl text-secondary-desc max-w-3xl mx-auto mb-12">
              {t('moresecurity.description')}
            </p>

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {securityStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-sub-card backdrop-blur-sm rounded-2xl p-6 border border-custom-border hover:scale-105 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-desc">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecurityHero;