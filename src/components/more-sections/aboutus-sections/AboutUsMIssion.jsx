import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Users, Globe, Award, Lock, Zap, Headphones } from 'lucide-react';

const AboutUsMIssion = () => {
      const features = [
    {
      icon: Shield,
      title: 'Bank-Grade Security',
      description: 'Multi-tier and multi-clustered system architecture with advanced encryption to protect your assets.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Trades',
      description: 'Execute trades in milliseconds with our high-performance matching engine handling millions of orders.'
    },
    {
      icon: Lock,
      title: 'SAFU Protected',
      description: 'Secure Asset Fund for Users provides protection and compensation in extreme security scenarios.'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service with multilingual support to assist you whenever needed.'
    }
  ];
  return (
    <div>
            {/* Mission Section */}
      <section className="py-16 bg-pre-bg">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">Our Mission</span>
              </h2>
              <p className="text-lg text-secondary-desc mb-6 leading-relaxed">
                We believe in the power of blockchain technology and cryptocurrency to create a more inclusive financial system. Our goal is to make crypto trading accessible, secure, and efficient for everyone.
              </p>
              <p className="text-lg text-secondary-desc leading-relaxed">
                Through continuous innovation and unwavering commitment to security, we're building the infrastructure that will power the future of global finance.
              </p>
            </div>
            <div className="bg-sub-card rounded-3xl p-8 border border-custom-border">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dispute-color mb-2">Security First</h3>
                    <p className="text-secondary-desc">Protecting your assets with industry-leading security measures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dispute-color mb-2">User-Centric</h3>
                    <p className="text-secondary-desc">Designed for both beginners and professional traders</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dispute-color mb-2">Global Reach</h3>
                    <p className="text-secondary-desc">Serving millions of users across 100+ countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsMIssion;