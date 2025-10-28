import React, { useState } from 'react';
import { ChevronDown, Menu, X, Rocket, Bell, Search, TrendingUp, Target, Activity, Wrench, Zap, Bot, Database, Brain, Shield, BarChart3, BookOpen, FileText, Video, DollarSign, Users, Gift, Link2, Settings, Grid3X3, PlayCircle, BarChart, RefreshCw, Coins } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ToggleTheme from "../../../Components/Layout/ToggleTheme";

const SettingHeader = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const tradeItems = [
    { title: "Spot", subtitle: "Buy and sell cryptocurrencies instantly", icon: Coins, path: "/Spot" },
    { title: "P2P", subtitle: "Person-to-person crypto trading", icon: Users, path: "/P2P" },
    { title: "Futures", subtitle: "Trade with leverage and hedge positions", icon: TrendingUp, path: "/Futures" },
    { title: "Options", subtitle: "Advanced derivatives trading", icon: Target, path: "/Options" },
    { title: "Trackers", subtitle: "Monitor and track your crypto portfolio", icon: Activity, path: "/Trackers" },
    { title: "Strategy Builder", subtitle: "Create custom trading strategies", icon: Wrench, path: "/StrategyBuilder" }
  ];

  const algohubItems = [
    { title: "APIs", subtitle: "Create API key and Start Trading", icon: Link2, path: "/APIs" },
    { title: "Trading Bot", subtitle: "Automate Bots from TradingView", icon: Bot, path: "/TradingBot" },
    { title: "Trade Data", subtitle: "Download Historical tick by tick data", icon: Database, path: "/TradeData" }
  ];

  const aiToolsItems = [
    { title: "AI Trading Assistant", subtitle: "Smart trading recommendations", icon: Brain, path: "/AITradingAssistant" },
    { title: "AI Risk Analyzer", subtitle: "Intelligent risk assessment", icon: Shield, path: "/AIRiskAnalyzer" },
    { title: "AI Portfolio Optimizer", subtitle: "Optimize your portfolio with AI", icon: BarChart3, path: "/AIPortfolioOptimizer" }
  ];

  const learnItems = [
    { title: "Academy", subtitle: "Comprehensive trading courses", icon: BookOpen, path: "/Academy" },
    { title: "Blogs", subtitle: "Latest market insights and news", icon: FileText, path: "/Blogs" },
    { title: "Tutorials", subtitle: "Step-by-step trading guides", icon: Video, path: "/Tutorials" }
  ];

  const moreItems = [
    { title: "Earn", subtitle: "Generate passive income from your assets", icon: DollarSign, path: "/Earn" },
    { title: "Community", subtitle: "Connect and grow with fellow traders", icon: Users, path: "/Community" },
    { title: "Demo Trading", subtitle: "Simulate real trading without risk", icon: PlayCircle, path: "/DemoTrading" },
    { title: "Analytics", subtitle: "A dashboard to visualize options data", icon: BarChart, path: "/Analytics" },
    { title: "Offers", subtitle: "Claim your Rewards", icon: Gift, path: "/Offers" },
    { title: "Referral Program", subtitle: "Refer Friends and get rewards", icon: RefreshCw, path: "/ReferralProgram" }
  ];

  const navItems = [
    { name: "Markets", hasDropdown: false, path: "/Markets" },
    { name: "Trade", hasDropdown: true, items: tradeItems },
    { name: "AlgoHub", hasDropdown: true, items: algohubItems },
    { name: "AI Tools", hasDropdown: true, items: aiToolsItems },
    { name: "Learn", hasDropdown: true, items: learnItems },
    { name: "About Us", hasDropdown: false, path: "/AboutUs" },
    { name: "Support", hasDropdown: false, path: "/Support" },
    { name: "More", hasDropdown: true, items: moreItems }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <nav className="sticky top-0 z-40 bg-sub-card border-b border-custom-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gradient">
                  Delta Web
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-4 text-sm">
                <Link to="/" className="hover:text-text-color transition-colors flex items-center text-dispute-color">
                  Home
                </Link>
                {navItems.map((item) => (
                  item.hasDropdown ? (
                    <div key={item.name} className="relative">
                      <button
                        onClick={() => handleDropdown(item.name.toLowerCase())}
                        className="hover:text-text-color transition-colors flex items-center text-dispute-color"
                      >
                        {item.name} <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === item.name.toLowerCase() ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.name.toLowerCase() && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-sub-card rounded-lg border border-custom-border shadow-xl transition-all duration-200">
                          <div className="p-4 space-y-3">
                            {item.items.map((subItem, idx) => {
                              const IconComponent = subItem.icon;
                              return (
                                <Link key={idx} to={subItem.path} className="flex items-start space-x-3 p-3 hover:bg-card-hover rounded-lg cursor-pointer transition-colors" onClick={() => setActiveDropdown(null)}>
                                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mt-1">
                                    <IconComponent className="w-4 h-4 text-blue-400" />
                                  </div>
                                  <div>
                                    <div className="text-text-color font-medium">{subItem.title}</div>
                                    <div className="text-dispute-color text-sm">{subItem.subtitle}</div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={item.name} to={item.path} className="hover:text-text-color transition-colors text-dispute-color">
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-3">
              <Search className="hidden sm:block w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
              <Bell className="hidden sm:block w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
              <Settings className="hidden sm:block w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
              <Grid3X3 className="hidden sm:block w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />

              <Link to="/Login" className="hidden sm:flex px-4 py-2 text-sm text-dispute-color hover:text-text-color transition-colors flex justify-center items-center rounded-lg border border-custom-border bg-sub-card">
                Login
              </Link>
              <button onClick={() => {navigate('/SignUp')}} className="hidden sm:flex px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors text-white">
                Sign Up
              </button>
              
              <div className="flex items-center space-x-2">
                <ToggleTheme />

                <button
                  onClick={toggleMenu}
                  className="lg:hidden w-9 h-9 text-dispute-color hover:text-text-color transition-colors flex justify-center items-center rounded-lg border border-custom-border bg-sub-card"
                >
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}

      <div className={`xl:hidden fixed top-0 right-0 h-full w-80 z-50 bg-sub-card border-l border-custom-border transform transition-transform duration-300 overflow-y-auto ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 h-full flex flex-col">
          <button 
            onClick={toggleMenu} 
            className="absolute top-5 right-6 text-dispute-color hover:text-text-color transition-colors p-2 rounded-md border border-custom-border"
          >
            <X size={18} />
          </button>
          
          {/* Mobile Search and Bell */}
          <div className="sm:hidden flex items-center space-x-4 mb-6 pt-4 px-3">
            <Search className="w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
            <Bell className="w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
            <Settings className="w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
            <Grid3X3 className="w-5 h-5 text-gray-400 hover:text-dispute-color cursor-pointer transition-colors" />
          </div>
          
          <nav className="space-y-4 flex-1">
            <Link to="/" className="block text-dispute-color hover:text-text-color rounded-md px-3 text-lg py-3 border-b border-custom-border transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="border-b border-custom-border rounded-md px-3">
                  <button
                    onClick={() => handleDropdown(`mobile-${item.name.toLowerCase()}`)}
                    className="flex items-center justify-between w-full text-dispute-color hover:text-text-color text-lg py-3 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={16} className={`transition-transform ${activeDropdown === `mobile-${item.name.toLowerCase()}` ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === `mobile-${item.name.toLowerCase()}` && (
                    <div className="mt-2 space-y-2 pl-4">
                      {item.items.map((subItem, idx) => {
                        const IconComponent = subItem.icon;
                        return (
                          <Link key={idx} to={subItem.path} className="flex items-center space-x-3 py-2 text-dispute-color hover:text-text-color hover:bg-card-hover px-2 rounded cursor-pointer transition-colors" onClick={toggleMenu}>
                            <div className="w-6 h-6 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded flex items-center justify-center">
                              <IconComponent className="w-3 h-3 text-blue-400" />
                            </div>
                            <span>{subItem.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} to={item.path} className="block text-dispute-color hover:text-text-color rounded-md px-3 text-lg py-3 border-b border-custom-border transition-colors" onClick={toggleMenu}>
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <Link to="/login" className="block w-full text-center text-dispute-color border border-custom-border px-6 py-3 rounded-md hover:bg-pre-bg hover:text-text-color transition-colors" onClick={toggleMenu}>
              Login
            </Link>
            <button onClick={() => {navigate('/SignUp')}} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-md transition-colors hover:from-blue-600 hover:to-purple-700">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {activeDropdown && (
        <div className="fixed inset-0 z-30" onClick={() => setActiveDropdown(null)} />
      )}
    </div>
  );
};

export default SettingHeader;