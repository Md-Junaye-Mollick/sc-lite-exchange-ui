import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Users, Globe, Award, Lock, Zap, Headphones } from 'lucide-react';

const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

const AboutUsDemo = () => {
  const stats = [
    { value: 200, suffix: 'M+', label: 'Registered Users', icon: Users },
    { value: 100, suffix: '+', label: 'Countries Served', icon: Globe },
    { value: 76, suffix: 'B+', prefix: '$', label: 'Daily Trading Volume', icon: TrendingUp },
    { value: 350, suffix: '+', label: 'Cryptocurrencies', icon: Award }
  ];

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

  const milestones = [
    { year: '2017', event: 'Founded with a vision to revolutionize crypto trading' },
    { year: '2018', event: 'Reached 10 million users milestone' },
    { year: '2020', event: 'Launched futures and derivatives trading' },
    { year: '2023', event: "Became the world's largest crypto exchange by volume" }
  ];

  return (
    <div className="bg-pre-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">World's Leading Crypto Exchange</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">About Our Platform</span>
            </h1>
            
            <p className="text-xl text-secondary-desc max-w-3xl mx-auto leading-relaxed">
              We're on a mission to increase the freedom of money globally. Our platform empowers millions of users worldwide to access the future of finance.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border hover:border-accent/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                    <CountUp 
                      end={stat.value} 
                      duration={2500}
                      suffix={stat.suffix}
                      prefix={stat.prefix || ''}
                    />
                  </h3>
                  <p className="text-secondary-desc text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-card">
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

      {/* Timeline Section */}
      <section className="py-16 bg-card">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Our Journey</span>
            </h2>
            <p className="text-lg text-secondary-desc">
              Key milestones in our path to becoming the world's leading exchange
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient opacity-30 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`flex items-center group ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="relative bg-sub-card rounded-2xl p-8 border border-custom-border hover:border-accent transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                      <div className="absolute inset-0 bg-gradient opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="inline-block bg-accent/10 px-4 py-2 rounded-full mb-4">
                          <div className="text-2xl md:text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300 inline-block">{milestone.year}</div>
                        </div>
                        <p className="text-dispute-color text-lg md:text-xl font-medium leading-relaxed group-hover:text-accent transition-colors duration-300">{milestone.event}</p>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-accent/5 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center relative z-20">
                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-card shadow-lg group-hover:scale-150 group-hover:shadow-glow transition-all duration-500 relative">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                    </div>
                  </div>
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join millions of users and experience the future of cryptocurrency trading today
            </p>
            <button className="bg-white text-dispute-color px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Create Free Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsDemo;