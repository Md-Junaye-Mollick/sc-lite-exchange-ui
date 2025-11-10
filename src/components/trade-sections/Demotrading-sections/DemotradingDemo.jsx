import React, { useState, useEffect } from 'react';
import { TrendingUp, Shield, Zap, BarChart3, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

export default function DemotradingDemo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPriceChange((Math.random() - 0.5) * 2);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast Execution",
      description: "Execute trades in milliseconds with our advanced infrastructure"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Bank-Grade Security",
      description: "Your assets protected with military-grade encryption"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Real-time charts and indicators to inform your decisions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Trading",
      description: "Follow and copy successful traders automatically"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Award Winning",
      description: "Recognized as the best trading platform of 2024"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Get personalized trading recommendations powered by AI"
    }
  ];

  const stats = [
    { value: "10M+", label: "Active Traders" },
    { value: "$500B+", label: "Trading Volume" },
    { value: "150+", label: "Countries" },
    { value: "0.01s", label: "Avg Execution" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">TradeFlow</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <button className="px-4 py-2 text-sm hover:text-blue-400 transition-colors">Sign In</button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                Start Trading
              </button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block hover:text-blue-400 transition-colors">Features</a>
              <a href="#pricing" className="block hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#about" className="block hover:text-blue-400 transition-colors">About</a>
              <button className="w-full px-4 py-2 text-left hover:text-blue-400 transition-colors">Sign In</button>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                Start Trading
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm">
                <span className="text-blue-400">🚀 New: AI Trading Assistant Available</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Trade Smarter,
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Not Harder</span>
              </h1>
              
              <p className="text-xl text-slate-300">
                Join millions of traders using the world's most advanced trading platform. Start with zero commission and experience the future of trading.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all flex items-center justify-center group">
                  Get Started Free
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800 transition-all">
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-slate-950"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-slate-950"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-slate-950"></div>
                  </div>
                  <span>10M+ traders</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </div>

            {/* Trading Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-slate-400 text-sm">BTC/USD</div>
                    <div className="text-3xl font-bold mt-1">$64,234.50</div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg ${priceChange > 0 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {priceChange > 0 ? '+' : ''}{priceChange.toFixed(2)}%
                  </div>
                </div>

                <div className="h-32 flex items-end space-x-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t opacity-70 hover:opacity-100 transition-opacity"
                      style={{ height: `${30 + Math.random() * 70}%` }}
                    ></div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button className="py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors">
                    Buy
                  </button>
                  <button className="py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors">
                    Sell
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-slate-400">24h High</div>
                    <div className="font-semibold">$65,432.10</div>
                  </div>
                  <div>
                    <div className="text-slate-400">24h Low</div>
                    <div className="font-semibold">$62,123.45</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  {stat.value}
                </div>
                <div className="text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Succeed</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professional-grade tools and features designed for traders of all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Assets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trade Your Favorite
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Assets</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Access thousands of instruments across multiple asset classes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Bitcoin', symbol: 'BTC', price: '$64,234.50', change: '+3.45%', positive: true },
              { name: 'Ethereum', symbol: 'ETH', price: '$3,456.78', change: '+2.12%', positive: true },
              { name: 'Apple', symbol: 'AAPL', price: '$178.23', change: '-0.89%', positive: false },
              { name: 'Tesla', symbol: 'TSLA', price: '$242.84', change: '+5.67%', positive: true },
              { name: 'EUR/USD', symbol: 'EURUSD', price: '1.0823', change: '+0.23%', positive: true },
              { name: 'Gold', symbol: 'XAUUSD', price: '$2,034.50', change: '+1.34%', positive: true },
              { name: 'S&P 500', symbol: 'SPX', price: '5,234.18', change: '-0.45%', positive: false },
              { name: 'Crude Oil', symbol: 'WTI', price: '$78.92', change: '+2.89%', positive: true }
            ].map((asset, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-slate-400 text-sm">{asset.symbol}</div>
                    <div className="font-semibold">{asset.name}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs ${asset.positive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                    {asset.change}
                  </div>
                </div>
                <div className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{asset.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Start Trading in
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> 3 Simple Steps</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get started in minutes with our streamlined onboarding process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Account', description: 'Sign up with your email and verify your identity in minutes' },
              { step: '02', title: 'Fund Your Account', description: 'Deposit funds using bank transfer, card, or crypto' },
              { step: '03', title: 'Start Trading', description: 'Choose your assets and execute your first trade' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-7xl font-bold text-slate-800 mb-4">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Millions</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              See what our traders are saying about us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'Day Trader', content: 'The execution speed is incredible. I\'ve never experienced lag or delays, even during high volatility periods.', rating: 5 },
              { name: 'Michael Chen', role: 'Crypto Investor', content: 'Best platform for crypto trading. The interface is intuitive and the security features give me peace of mind.', rating: 5 },
              { name: 'Emma Williams', role: 'Forex Trader', content: 'I switched from my old broker and never looked back. The spreads are tight and customer support is excellent.', rating: 5 }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-slate-300 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple,
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Transparent Pricing</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                name: 'Basic', 
                price: '$0', 
                period: 'forever',
                features: ['Zero commission trading', 'Real-time data', 'Basic charts', 'Email support', 'Mobile app access'],
                popular: false
              },
              { 
                name: 'Pro', 
                price: '$29', 
                period: 'per month',
                features: ['Everything in Basic', 'Advanced charts', 'Priority support', 'API access', 'Lower spreads', 'Research reports'],
                popular: true
              },
              { 
                name: 'Enterprise', 
                price: 'Custom', 
                period: 'contact us',
                features: ['Everything in Pro', 'Dedicated manager', 'Custom integrations', 'Volume discounts', 'White-label options'],
                popular: false
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-500' : 'bg-slate-900/50 border border-slate-800'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-1">{plan.price}</div>
                  <div className="text-slate-400 text-sm">{plan.period}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50' : 'bg-slate-800 hover:bg-slate-700'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Frequently Asked
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"> Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Is there a minimum deposit required?', a: 'No, you can start trading with any amount. We recommend starting with at least $100 to have a comfortable trading experience.' },
              { q: 'How long does account verification take?', a: 'Most accounts are verified within 24 hours. In some cases, additional documentation may be required which can take up to 3 business days.' },
              { q: 'What payment methods do you accept?', a: 'We accept bank transfers, credit/debit cards, and cryptocurrency deposits. Withdrawals are processed through the same method used for deposit.' },
              { q: 'Is my money safe with TradeFlow?', a: 'Yes, we use bank-grade security and keep client funds in segregated accounts. We\'re also regulated by top-tier financial authorities.' },
              { q: 'Can I trade on mobile?', a: 'Absolutely! Our mobile app is available for both iOS and Android, offering the full trading experience on the go.' }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl hover:border-blue-500/50 transition-all"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Start Trading?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Join 10 million traders and experience the future of trading today
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all">
                Create Free Account
              </button>
              <p className="text-sm text-slate-400 mt-4">No credit card required • Start with $10,000 demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">TradeFlow</span>
              </div>
              <p className="text-slate-400">The world's most advanced trading platform</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-blue-400 cursor-pointer">Features</div>
                <div className="hover:text-blue-400 cursor-pointer">Pricing</div>
                <div className="hover:text-blue-400 cursor-pointer">Security</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-blue-400 cursor-pointer">About</div>
                <div className="hover:text-blue-400 cursor-pointer">Careers</div>
                <div className="hover:text-blue-400 cursor-pointer">Blog</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-blue-400 cursor-pointer">Help Center</div>
                <div className="hover:text-blue-400 cursor-pointer">Contact</div>
                <div className="hover:text-blue-400 cursor-pointer">Status</div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-slate-400">
            <p>&copy; 2025 TradeFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}