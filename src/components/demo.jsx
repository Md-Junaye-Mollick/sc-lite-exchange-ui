import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Play, Plus, Minus, TrendingUp, Shield, Zap, Users, Award, Globe, ArrowRight, ChevronRight, Bitcoin, Wallet, BarChart3, Lock } from 'lucide-react';

export default function Demo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Popular');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const cryptoData = [
    { name: 'BTC', fullName: 'Bitcoin', price: '$115,191.26', change: '-1.78%', isNegative: true, icon: '₿' },
    { name: 'ETH', fullName: 'Ethereum', price: '$4,120.28', change: '-3.53%', isNegative: true, icon: 'Ξ' },
    { name: 'BNB', fullName: 'BNB', price: '$1,224.31', change: '-4.18%', isNegative: true, icon: 'B' },
    { name: 'XRP', fullName: 'XRP', price: '$2.52', change: '-3.78%', isNegative: true, icon: 'X' },
    { name: 'SOL', fullName: 'Solana', price: '$145.32', change: '+2.45%', isNegative: false, icon: 'S' },
    { name: 'ADA', fullName: 'Cardano', price: '$0.68', change: '+1.23%', isNegative: false, icon: 'A' },
  ];

  const newsItems = [
    { title: "Ethereum's Fusaka Upgrade Advances with Sepolia Testnet Activation", time: "2h ago", category: "Technology" },
    { title: "Fed Chair Powell Signals Possible Rate Cut Amid Labor Market Concerns", time: "5h ago", category: "Economics" },
    { title: "California Court Hears Dismissal of Charges Against Bitcoin Advocate", time: "8h ago", category: "Legal" },
    { title: "Federal Reserve Chair Powell Discusses Inflation Drivers", time: "12h ago", category: "Policy" },
    { title: "Bitcoin Mining Difficulty Reaches New All-Time High", time: "1d ago", category: "Mining" },
  ];

  const features = [
    { 
      icon: <Shield className="w-12 h-12" />, 
      title: "Secure & Reliable", 
      description: "Industry-leading security practices with multi-tier & multi-cluster system architecture",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Zap className="w-12 h-12" />, 
      title: "Fast Transactions", 
      description: "Lightning-fast order execution with high-performance matching engine",
      color: "from-yellow-500 to-orange-500"
    },
    { 
      icon: <Users className="w-12 h-12" />, 
      title: "120M+ Users", 
      description: "Join millions of traders worldwide in the largest crypto ecosystem",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: <Award className="w-12 h-12" />, 
      title: "Award Winning", 
      description: "Recognized globally as the world's leading cryptocurrency exchange",
      color: "from-green-500 to-emerald-500"
    },
  ];

  const stats = [
    { value: "120M+", label: "Registered Users", icon: <Users className="w-8 h-8" /> },
    { value: "$76B", label: "24h Trading Volume", icon: <BarChart3 className="w-8 h-8" /> },
    { value: "350+", label: "Cryptocurrencies Listed", icon: <Bitcoin className="w-8 h-8" /> },
    { value: "180+", label: "Countries Supported", icon: <Globe className="w-8 h-8" /> },
  ];

  const heroSlides = [
    {
      title: "Trade Bitcoin, ETH, and 350+ cryptocurrencies",
      subtitle: "Fast, secure, and trusted by millions worldwide",
      gradient: "from-yellow-500 via-orange-500 to-red-500"
    },
    {
      title: "Earn up to 8% APY on your crypto",
      subtitle: "Flexible savings with daily interest payouts",
      gradient: "from-blue-500 via-purple-500 to-pink-500"
    },
    {
      title: "Start trading with as little as $10",
      subtitle: "Join the future of finance today",
      gradient: "from-green-500 via-teal-500 to-blue-500"
    }
  ];

  const faqItems = [
    {
      question: "What is a cryptocurrency exchange?",
      answer: "A cryptocurrency exchange is a digital marketplace where traders can buy, sell, and exchange cryptocurrencies. SCLight Exchange is the world's largest cryptocurrency exchange by trading volume, offering spot trading, futures, staking, and more."
    },
    {
      question: "What products does SCLight Exchange provide?",
      answer: "SCLight Exchange offers a comprehensive suite of products including Spot Trading, Futures Trading, Margin Trading, Savings & Staking, NFT Marketplace, SCLight Exchange Pay, SCLight Exchange Card, and educational resources through SCLight Exchange Academy."
    },
    {
      question: "How to buy Bitcoin and other cryptocurrencies on SCLight Exchange",
      answer: "You can buy crypto on SCLight Exchange using credit/debit cards, bank transfers, P2P trading, or third-party payment channels. Simply create an account, complete verification, deposit funds, and start trading."
    },
    {
      question: "How to track cryptocurrency prices",
      answer: "SCLight Exchange provides real-time price tracking through our website and mobile app. You can view live charts, set price alerts, analyze market trends, and access historical data for all listed cryptocurrencies."
    },
    {
      question: "How to trade cryptocurrencies on SCLight Exchange",
      answer: "After funding your account, navigate to the trading interface, select your trading pair, choose between market or limit orders, enter your amount, and execute the trade. We offer spot, margin, and futures trading options."
    },
    {
      question: "How to earn from crypto on SCLight Exchange",
      answer: "SCLight Exchange offers multiple earning opportunities: Flexible Savings (earn interest on idle assets), Locked Staking (higher APY for locked periods), Launchpool (farm new tokens), and Liquidity Farming."
    }
  ];

  const testimonials = [
    { name: "Sarah Johnson", role: "Day Trader", quote: "SCLight Exchange has been my go-to platform for 3 years. The liquidity and speed are unmatched!", rating: 5 },
    { name: "Michael Chen", role: "Crypto Investor", quote: "Best security features and customer support in the industry. Highly recommended!", rating: 5 },
    { name: "Emma Davis", role: "DeFi Enthusiast", quote: "The variety of DeFi products and earning options makes SCLight Exchange stand out from competitors.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 cursor-pointer group">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-black font-bold text-xl">◆</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">SCLight Exchange</span>
              </div>
              <nav className="hidden md:flex space-x-6">
                {['Buy Crypto', 'Markets', 'Trade', 'Futures', 'Earn', 'Square', 'More'].map((item) => (
                  <a key={item} href="#" className="text-gray-300 hover:text-yellow-400 flex items-center transition-colors duration-200 group">
                    {item} <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200">
                <Search className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Log In/Sign Up
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - New Creative Design */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              <div className="inline-block mb-6">
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center space-x-2 animate-pulse">
                  <TrendingUp className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-yellow-500 font-medium">Market is up 12% today</span>
                </div>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent animate-gradient">
                  {heroSlides[currentSlide].title}
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {heroSlides[currentSlide].subtitle}
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
                <p className="text-sm text-gray-400 mb-3">Your Estimated Balance</p>
                <div className="flex items-baseline space-x-3 mb-3">
                  <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">0.00</span>
                  <span className="text-gray-400 text-xl">BTC</span>
                  <span className="text-gray-500">≈ $0.00</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-400">Today's P/L:</span>
                  <span className="text-green-500 font-medium">$0.00 (0.00%)</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <button className="group bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center space-x-2">
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-gray-600 px-8 py-4 rounded-xl font-semibold hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Tutorial</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-blue-500" />
                  <span>SAFU Protected</span>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex space-x-2 mt-6">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-yellow-500' : 'w-4 bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Content - Interactive Crypto Panel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                {/* Tabs */}
                <div className="flex space-x-4 border-b border-gray-700 mb-6">
                  {['Popular', 'New Listing', 'Top Gainers'].map((tab) => (
                    <button
                      key={tab}
                      className={`pb-3 px-2 transition-all duration-300 ${
                        activeTab === tab
                          ? 'text-yellow-500 border-b-2 border-yellow-500 font-semibold'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Crypto List */}
                <div className="space-y-4 mb-8 max-h-96 overflow-y-auto custom-scrollbar">
                  {cryptoData.map((crypto, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center justify-between p-4 hover:bg-gray-700/50 rounded-xl cursor-pointer transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${
                          crypto.isNegative ? 'from-red-500 to-red-700' : 'from-green-500 to-green-700'
                        } rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {crypto.icon}
                        </div>
                        <div>
                          <p className="font-bold text-lg">{crypto.name}</p>
                          <p className="text-sm text-gray-400">{crypto.fullName}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg mb-1">{crypto.price}</p>
                        <div className={`flex items-center space-x-1 ${
                          crypto.isNegative ? 'text-red-500' : 'text-green-500'
                        }`}>
                          <TrendingUp className={`w-4 h-4 ${crypto.isNegative ? 'rotate-180' : ''}`} />
                          <span className="text-sm font-semibold">{crypto.change}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* News Section */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-yellow-500" />
                      <span>Latest News</span>
                    </h3>
                    <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400 flex items-center space-x-1 group">
                      <span>View All</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                  <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar">
                    {newsItems.slice(0, 3).map((news, idx) => (
                      <div key={idx} className="group cursor-pointer hover:bg-gray-700/30 p-3 rounded-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-xs bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">{news.category}</span>
                          <span className="text-xs text-gray-500">{news.time}</span>
                        </div>
                        <p className="text-sm text-gray-300 group-hover:text-white transition-colors line-clamp-2">
                          {news.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl group-hover:from-yellow-500/30 group-hover:to-orange-500/30 transition-all duration-300">
                    <div className="text-yellow-500">{stat.icon}</div>
                  </div>
                </div>
                <p className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Why Choose SCLight Exchange?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The world's leading cryptocurrency platform trusted by millions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/30 to-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Trusted by Traders Worldwide</h2>
            <p className="text-xl text-gray-400">See what our users have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative mx-auto w-72">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-8 border-gray-800 transform hover:rotate-2 transition-transform duration-500">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] overflow-hidden">
                    {/* Phone Screen Content */}
                    <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 h-[600px] flex flex-col">
                      <div className="text-center mb-8">
                        <p className="text-4xl font-bold mb-2">$115,191.26</p>
                        <p className="text-green-500 text-sm">+2.45% Today</p>
                      </div>
                      <div className="space-y-4 flex-1">
                        {cryptoData.slice(0, 4).map((crypto, idx) => (
                          <div key={idx} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 flex justify-between items-center">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold">
                                {crypto.icon}
                              </div>
                              <div>
                                <p className="font-bold text-sm">{crypto.name}</p>
                                <p className="text-xs text-gray-400">{crypto.fullName}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold">{crypto.price}</p>
                              <p className={`text-xs ${crypto.isNegative ? 'text-red-500' : 'text-green-500'}`}>
                                {crypto.change}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center animate-bounce shadow-lg">
                  <Wallet className="w-8 h-8 text-gray-900" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center animate-bounce delay-1000 shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Trade on the go.<br />
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Anywhere, anytime.
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Download the SCLight Exchange app and access your portfolio, trade crypto, and manage your account from anywhere in the world.
              </p>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
                <div className="flex items-start space-x-6">
                  <div className="w-32 h-32 bg-white p-3 rounded-2xl flex-shrink-0">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 rounded-lg">
                      QR Code
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Scan to Download App</p>
                    <p className="font-bold text-lg mb-3">iOS and Android</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-semibold">
                        ⭐ 4.8 Rating
                      </span>
                      <span className="bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full text-xs font-semibold">
                        50M+ Downloads
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-4">Available on desktop</p>
                <div className="flex space-x-4">
                  {[
                    { name: 'MacOS', icon: '🍎', color: 'from-gray-600 to-gray-700' },
                    { name: 'Windows', icon: '🪟', color: 'from-blue-600 to-blue-700' },
                    { name: 'Linux', icon: '🐧', color: 'from-orange-600 to-red-600' }
                  ].map((platform, idx) => (
                    <div
                      key={idx}
                      className="group text-center cursor-pointer transform hover:scale-110 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center mb-2 shadow-lg group-hover:shadow-2xl`}>
                        <span className="text-3xl">{platform.icon}</span>
                      </div>
                      <p className="text-sm text-gray-400 group-hover:text-white transition-colors">{platform.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400 flex items-center space-x-2 group">
                <span>⬇ More Download Options</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/20 to-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Everything you need to know about SCLight Exchange</p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden"
              >
                <button
                  className="w-full p-6 flex items-center justify-between cursor-pointer group"
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="flex items-center space-x-4 text-left">
                    <span className="text-yellow-500 font-bold text-lg w-8">{idx + 1}</span>
                    <span className="font-semibold text-lg group-hover:text-yellow-500 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`transform transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    {expandedFaq === idx ? (
                      <Minus className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-gray-400 group-hover:text-yellow-500" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 ml-12">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-orange-500/10 to-red-500/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-700 shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Start Trading Now
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join millions of traders worldwide and start your crypto journey today. Sign up in minutes and get access to 350+ cryptocurrencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2">
                <span>Create Free Account</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-600 px-10 py-4 rounded-xl font-bold text-lg hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span>120M+ Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>Industry Leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4 text-lg">Community</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span>🐦</span><span>Twitter</span>
                </a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span>📱</span><span>Telegram</span>
                </a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span>💬</span><span>Discord</span>
                </a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors flex items-center space-x-2">
                  <span>📸</span><span>Instagram</span>
                </a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">About Us</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Announcements</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">News</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Legal</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Products</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Exchange</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Buy Crypto</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Pay</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Academy</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Live</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">NFT</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Business</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">P2P Merchant</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">P2P Merchant Application</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Listing Application</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Institutional & VIP</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Labs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">24/7 Chat Support</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Support Center</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Product Feedback</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Fees</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Trading Rules</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">SCLight Exchange Verify</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">◆</span>
                </div>
                <span className="text-sm text-gray-400">© 2025 SCLight Exchange. All rights reserved.</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-yellow-500 transition-colors">Cookie Preferences</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for scrollbar */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      }`}</style>
    </div>
  );
}