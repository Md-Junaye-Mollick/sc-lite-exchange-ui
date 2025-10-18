import React from 'react';
import { ArrowRight, Play, Shield, TrendingUp } from 'lucide-react';

const HeroSection = ({ cryptoData, newsItems }) => {
  const [activeTab, setActiveTab] = useState('Popular');
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Trade Bitcoin, ETH, and 350+ cryptocurrencies",
      subtitle: "Fast, secure, and trusted by millions worldwide",
    },
    {
      title: "Earn up to 8% APY on your crypto",
      subtitle: "Flexible savings with daily interest payouts",
    },
    {
      title: "Start trading with as little as $10",
      subtitle: "Join the future of finance today",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
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
          <CryptoPanel cryptoData={cryptoData} newsItems={newsItems} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;