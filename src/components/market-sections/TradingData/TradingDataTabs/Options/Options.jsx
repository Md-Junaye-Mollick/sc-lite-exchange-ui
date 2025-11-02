import React, { useState } from 'react';
import Overview from './OptionsTabs/Overview';
import InterestVolume from './OptionsTabs/InterestVolume';
import MaxPain from './OptionsTabs/MaxPain';
import ExerciedHistory from './OptionsTabs/ExerciedHistory';

const Options = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    "Overview",
    "Open Interest & Volume",
    "Max Pain",
    "Exercised History"
  ];

  const cryptoTicker = [
    { symbol: "BTC", price: "$110,488.1", icon: "₿", color: "text-orange-500" },
    { symbol: "ETH", price: "$3,900.9", icon: "Ξ", color: "text-blue-500" },
    { symbol: "BNB", price: "$1,092.2", icon: "◆", color: "text-yellow-500" },
    { symbol: "SOL", price: "$187.2081", icon: "◎", color: "text-purple-500" },
    { symbol: "XRP", price: "$2.518", icon: "✕", color: "text-gray-400" },
    { symbol: "DOGE", price: "$0.1875", icon: "Ð", color: "text-yellow-600" }
  ];

  return (
    <div className="min-h-screen bg-primary-bg">
      {/* Header with Crypto Ticker and Tabs */}
      <div className="mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Tab Navigation */}
          <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 px-4 rounded-lg border border-custom-border text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                  activeTab === tab
                    ? "text-white bg-gradient"
                    : "bg-sub-card text-secondary-desc hover:text-dispute-color"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Crypto Ticker Row */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-6 overflow-x-auto scrollbar-hide flex-1">
              <button className="text-secondary-desc hover:text-dispute-color">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {cryptoTicker.map((crypto, index) => (
                <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                  <span className={`text-lg font-semibold ${crypto.color}`}>{crypto.icon}</span>
                  <span className="text-secondary-desc text-sm font-medium">{crypto.symbol}</span>
                  <span className="text-dispute-color text-sm font-semibold">{crypto.price}</span>
                </div>
              ))}
            </div>
            
            <button className="ml-4 bg-gradient text-white py-2.5 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm whitespace-nowrap">
              Trade Options
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === "Overview" && <Overview /> }
        {activeTab === "Open Interest & Volume" && <InterestVolume /> }
        {activeTab === "Max Pain" && <MaxPain /> }
        {activeTab === "Exercised History" && <ExerciedHistory /> }
      </div>
    </div>
  );
};

export default Options;