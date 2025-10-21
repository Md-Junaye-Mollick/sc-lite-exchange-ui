import React, { useState, useEffect, useRef } from 'react';
import { Shield, TrendingUp, Users, Globe, Award, Lock, Zap, Headphones } from 'lucide-react';

const AboutUsHero = () => {
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
      const stats = [
        { value: 200, suffix: 'M+', label: 'Registered Users', icon: Users },
        { value: 100, suffix: '+', label: 'Countries Served', icon: Globe },
        { value: 76, suffix: 'B+', prefix: '$', label: 'Daily Trading Volume', icon: TrendingUp },
        { value: 350, suffix: '+', label: 'Cryptocurrencies', icon: Award }
      ];
    
  return (
    <div>
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
    </div>
  )
}

export default AboutUsHero;