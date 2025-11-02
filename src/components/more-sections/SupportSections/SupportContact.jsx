import React from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Mail, Phone, Clock, FileText, Shield, CreditCard, Zap, Lock, AlertCircle } from 'lucide-react';

const SupportContact = () => {
  const { t } = useTranslation();

  const supportChannels = [
    {
      icon: MessageCircle,
      title: t('supportContact.channels.liveChat.title'),
      description: t('supportContact.channels.liveChat.description'),
      availability: t('supportContact.channels.liveChat.availability'),
      action: t('supportContact.channels.liveChat.action')
    },
    {
      icon: Mail,
      title: t('supportContact.channels.email.title'),
      description: t('supportContact.channels.email.description'),
      availability: t('supportContact.channels.email.availability'),
      action: t('supportContact.channels.email.action')
    },
    {
      icon: Phone,
      title: t('supportContact.channels.phone.title'),
      description: t('supportContact.channels.phone.description'),
      availability: t('supportContact.channels.phone.availability'),
      action: t('supportContact.channels.phone.action')
    }
  ];

  const quickLinks = [
    { 
      icon: FileText, 
      title: t('supportContact.quickLinks.tradingGuide.title'), 
      description: t('supportContact.quickLinks.tradingGuide.description')
    },
    { 
      icon: Shield, 
      title: t('supportContact.quickLinks.security.title'), 
      description: t('supportContact.quickLinks.security.description')
    },
    { 
      icon: CreditCard, 
      title: t('supportContact.quickLinks.deposit.title'), 
      description: t('supportContact.quickLinks.deposit.description')
    },
    { 
      icon: Zap, 
      title: t('supportContact.quickLinks.fees.title'), 
      description: t('supportContact.quickLinks.fees.description')
    },
    { 
      icon: Lock, 
      title: t('supportContact.quickLinks.privacy.title'), 
      description: t('supportContact.quickLinks.privacy.description')
    },
    { 
      icon: AlertCircle, 
      title: t('supportContact.quickLinks.report.title'), 
      description: t('supportContact.quickLinks.report.description')
    }
  ];
      
  return (
    <div>
      {/* Support Channels */}
      <section className="py-12 bg-pre-bg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-yellow-500 mb-8 text-center">
            {t('supportContact.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supportChannels.map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer group hover:scale-102 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-360 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-400 mb-3 text-sm">{channel.description}</p>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-400">{channel.availability}</span>
                  </div>
                  <button className="w-full bg-gray-700 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500 text-white hover:text-gray-900 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                    {channel.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportContact;