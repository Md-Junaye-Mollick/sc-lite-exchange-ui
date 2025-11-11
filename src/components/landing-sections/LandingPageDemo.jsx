import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Shield, Lock, Zap, BarChart3, Users, ArrowRight, Play, Menu, X, ChevronDown } from 'lucide-react';

const CryptoTicker = () => {
  const coins = [
    { symbol: 'BTC', price: '$67,234.56', change: '+5.23%', isUp: true },
    { symbol: 'ETH', price: '$3,456.78', change: '+3.12%', isUp: true },
    { symbol: 'SOL', price: '$145.67', change: '+8.90%', isUp: true },
    { symbol: 'DOGE', price: '$0.5234', change: '-1.45%', isUp: false },
  ];

  return (
    <div className="bg-sub-card border-b border-custom-border overflow-hidden py-3">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...coins, ...coins].map((coin, idx) => (
          <div key={idx} className="inline-flex items-center mx-6 space-x-2">
            <span className="text-dispute-color font-semibold">{coin.symbol}</span>
            <span className="text-secondary-desc">{coin.price}</span>
            <span className={`flex items-center ${coin.isUp ? 'text-green-500' : 'text-red-500'}`}>
              {coin.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {coin.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pre-bg/80 backdrop-blur-xl border-b border-custom-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gradient">Delta</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#markets" className="text-secondary-desc hover:text-accent transition-colors">Markets</a>
            <a href="#trading" className="text-secondary-desc hover:text-accent transition-colors">Trading</a>
            <a href="#features" className="text-secondary-desc hover:text-accent transition-colors">Features</a>
            <a href="#about" className="text-secondary-desc hover:text-accent transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-dispute-color hover:text-accent transition-colors">Sign In</button>
            <button className="bg-gradient text-white px-6 py-2 rounded-lg font-semibold hover:bg-gradient-yellow-hover transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-dispute-color" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#markets" className="block text-secondary-desc hover:text-accent">Markets</a>
            <a href="#trading" className="block text-secondary-desc hover:text-accent">Trading</a>
            <a href="#features" className="block text-secondary-desc hover:text-accent">Features</a>
            <a href="#about" className="block text-secondary-desc hover:text-accent">About</a>
            <button className="w-full bg-gradient text-white px-6 py-2 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('popular');
  
  const cryptoData = [
    { name: 'Bitcoin', symbol: 'BTC', price: '$67,234.56', change: '+5.23%', isUp: true },
    { name: 'Ethereum', symbol: 'ETH', price: '$3,456.78', change: '+3.12%', isUp: true },
    { name: 'Dogecoin', symbol: 'DOGE', price: '$0.5234', change: '-1.45%', isUp: false },
    { name: 'Solana', symbol: 'SOL', price: '$145.67', change: '+8.90%', isUp: true },
  ];

  const news = [
    { title: 'Bitcoin reaches new all-time high', time: '2 hours ago' },
    { title: 'Ethereum upgrade scheduled for next month', time: '5 hours ago' },
    { title: 'Major exchange adds new trading pairs', time: '1 day ago' },
  ];

  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="bg-accent/10 border border-accent/30 rounded-full px-4 py-2 flex items-center space-x-2 animate-pulse">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-sm text-accent font-medium">Market is up 12.5% today</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">
                Trade Crypto with Confidence
              </span>
            </h1>
            
            <p className="text-xl text-secondary-desc mb-8 leading-relaxed">
              Access the world's leading cryptocurrency exchange. Trade Bitcoin, Ethereum, and 200+ digital assets with advanced tools and lowest fees.
            </p>

            <div className="bg-sub-card backdrop-blur-sm rounded-2xl p-6 mb-8 border border-custom-border">
              <p className="text-sm text-secondary-desc mb-3">Your Portfolio Value</p>
              <div className="flex items-baseline space-x-3 mb-3 flex-wrap">
                <span className="text-5xl font-bold text-dispute-color">0.00</span>
                <span className="text-secondary-desc text-xl">BTC</span> 
                <span className="text-secondary-desc">≈ $0.00</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-secondary-desc">Today's P&L</span>
                <span className="text-green-500 font-medium">$0.00 (0.00%)</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="group bg-gradient text-white px-8 py-4 rounded-xl font-semibold hover:bg-gradient-yellow-hover transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover flex items-center space-x-2">
                <span>Start Trading Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-custom-border px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center space-x-6 text-sm text-secondary-desc">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-blue-500" />
                <span>SAFU Protected</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-sub-card backdrop-blur-xl rounded-3xl p-8 border border-custom-border shadow-2xl">
              <div className="flex space-x-4 mb-6 border-b border-custom-border">
                {['popular', 'gainers', 'news'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-4 font-semibold capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-accent border-b-2 border-accent'
                        : 'text-secondary-desc hover:text-dispute-color'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'news' ? (
                <div className="space-y-4">
                  {news.map((item, idx) => (
                    <div key={idx} className="bg-pre-bg rounded-xl p-4 hover:bg-card transition-colors cursor-pointer">
                      <p className="text-dispute-color font-medium mb-1">{item.title}</p>
                      <p className="text-secondary-desc text-sm">{item.time}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {cryptoData.map((crypto, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-pre-bg rounded-xl hover:bg-card transition-all duration-300 cursor-pointer group">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gradient rounded-full flex items-center justify-center font-bold text-dispute-color">
                          {crypto.symbol.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-dispute-color">{crypto.name}</p>
                          <p className="text-sm text-secondary-desc">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-dispute-color">{crypto.price}</p>
                        <p className={`text-sm flex items-center justify-end ${crypto.isUp ? 'text-green-500' : 'text-red-500'}`}>
                          {crypto.isUp ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                          {crypto.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Execute trades in milliseconds with our advanced matching engine'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Trading',
      description: 'Multi-layer security with cold storage and 2FA protection'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Advanced Charts',
      description: 'Professional trading tools with real-time market data'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support in multiple languages'
    }
  ];

  return (
    <section id="features" className="py-20 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Why Choose Delta</span>
          </h2>
          <p className="text-xl text-secondary-desc">
            Experience the future of cryptocurrency trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-sub-card rounded-2xl p-6 border border-custom-border hover:border-accent transition-all duration-300 group">
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dispute-color mb-2">{feature.title}</h3>
              <p className="text-secondary-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { value: '$50B+', label: 'Trading Volume' },
    { value: '10M+', label: 'Active Users' },
    { value: '200+', label: 'Cryptocurrencies' },
    { value: '0.1%', label: 'Trading Fees' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-secondary-desc">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-gradient rounded-3xl mx-4 lg:mx-8 my-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Start Trading Today
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join millions of traders worldwide. Sign up now and get $10 bonus credit.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
          Create Free Account
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-pre-bg border-t border-custom-border py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">Delta</span>
            </div>
            <p className="text-secondary-desc text-sm">
              The world's leading cryptocurrency exchange platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-dispute-color mb-4">Products</h4>
            <ul className="space-y-2 text-secondary-desc text-sm">
              <li><a href="#" className="hover:text-accent">Spot Trading</a></li>
              <li><a href="#" className="hover:text-accent">Futures</a></li>
              <li><a href="#" className="hover:text-accent">Staking</a></li>
              <li><a href="#" className="hover:text-accent">NFT</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-dispute-color mb-4">Company</h4>
            <ul className="space-y-2 text-secondary-desc text-sm">
              <li><a href="#" className="hover:text-accent">About Us</a></li>
              <li><a href="#" className="hover:text-accent">Careers</a></li>
              <li><a href="#" className="hover:text-accent">Blog</a></li>
              <li><a href="#" className="hover:text-accent">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-dispute-color mb-4">Support</h4>
            <ul className="space-y-2 text-secondary-desc text-sm">
              <li><a href="#" className="hover:text-accent">Help Center</a></li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent">API Docs</a></li>
              <li><a href="#" className="hover:text-accent">Fees</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-custom-border pt-8 text-center text-secondary-desc text-sm">
          <p>© 2024 Delta Exchange. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const LandingPageDemo = () => {
  return (
    <div className="min-h-screen bg-pre-bg text-dispute-color">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        .bg-pre-bg { background-color: #0a0e17; }
        .bg-sub-card { background-color: #131722; }
        .bg-card { background-color: #1a1f2e; }
        .text-dispute-color { color: #e8eaed; }
        .text-secondary-desc { color: #8b92a7; }
        .border-custom-border { border-color: #1e2433; }
        
        .bg-gradient {
          background: linear-gradient(135deg, #fcd535 0%, #f7931a 100%);
        }
        
        .bg-gradient-yellow-hover {
          background: linear-gradient(135deg, #ffd700 0%, #ffb700 100%);
        }
        
        .text-gradient {
          background: linear-gradient(135deg, #fcd535 0%, #f7931a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-accent { color: #fcd535; }
        .border-accent { border-color: #fcd535; }
        .bg-accent { background-color: #fcd535; }
        
        .shadow-glow {
          box-shadow: 0 4px 20px rgba(252, 213, 53, 0.3);
        }
        
        .shadow-glow-hover {
          box-shadow: 0 8px 30px rgba(252, 213, 53, 0.5);
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <CryptoTicker />
      <Header />
      <HeroSection />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPageDemo;