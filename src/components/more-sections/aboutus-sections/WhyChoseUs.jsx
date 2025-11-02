import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Users, Globe, Award, Lock, Zap, Headphones } from 'lucide-react';

const WhyChoseUs = () => {
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
            {/* Features Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Why Choose Us</span>
            </h2>
            <p className="text-lg text-secondary-desc">
              Experience the most trusted and feature-rich crypto trading platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border hover:border-accent/50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="w-14 h-14 bg-gradient rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-dispute-color mb-3">{feature.title}</h3>
                <p className="text-secondary-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyChoseUs;