import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import Fevorites from "./OverviewTabs/Fevorites";
import Cryptos from "./OverviewTabs/Cryptos";
import Spot from "./OverviewTabs/Spot";
import Futures from "./OverviewTabs/Futures";
import Alpha from "./OverviewTabs/Alpha";
import New from "./OverviewTabs/New";
import Zones from "./OverviewTabs/Zones";

const Overview = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("Cryptos");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = ["Fevorites", "Cryptos", "Spot", "Futures", "Alpha", "New", "Zones"];

  const categories = [
    {
      title: t('overview.hot.title'),
      coins: [
        { name: 'BNB', icon: '🟡', price: '$1.09K', change: '+0.21%', isPositive: true },
        { name: 'BTC', icon: '🟠', price: '$112.31K', change: '+2.07%', isPositive: true },
        { name: 'ETH', icon: '🔵', price: '$4.02K', change: '+2.23%', isPositive: true }
      ]
    },
    {
      title: t('overview.new.title'),
      coins: [
        { name: 'ZBT', icon: '🔵', price: '$0.2947', change: '-6.89%', isPositive: false },
        { name: 'YB', icon: '⚪', price: '$0.3941', change: '-5.49%', isPositive: false },
        { name: 'ENSO', icon: '⚫', price: '$1.75', change: '-7.35%', isPositive: false }
      ]
    },
    {
      title: t('overview.topGainer.title'),
      coins: [
        { name: 'AVNT', icon: '⚪', price: '$0.6957', change: '+28.43%', isPositive: true },
        { name: 'SOPH', icon: '🔵', price: '$0.02831', change: '+20.72%', isPositive: true },
        { name: 'OPEN', icon: '🟠', price: '$0.4046', change: '+19.14%', isPositive: true }
      ]
    },
    {
      title: t('overview.topVolume.title'),
      coins: [
        { name: 'BTC', icon: '🟠', price: '$112.31K', change: '+2.07%', isPositive: true },
        { name: 'ETH', icon: '🔵', price: '$4.02K', change: '+2.23%', isPositive: true },
        { name: 'SOL', icon: '🟣', price: '$195.03', change: '+4.57%', isPositive: true }
      ]
    }
  ];

  return (
    <section className="py-12 bg-pre-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl rounded-xl p-4 border border-custom-border shadow-lg"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-dipute-color">
                  {category.title}
                </h3>
                <button className="flex items-center gap-1 text-secondary-desc hover:text-dipute-color transition-colors">
                  <span className="text-xs">{t('overview.more')}</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>

              {/* Coin List */}
              <div className="space-y-3">
                {category.coins.map((coin, coinIndex) => (
                  <div
                    key={coinIndex}
                    className="flex items-center justify-between hover:bg-sub-card/5 p-1.5 rounded-lg transition-colors cursor-pointer"
                  >
                    {/* Coin Info */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                        {coin.icon}
                      </div>
                      <span className="text-dipute-color font-medium text-sm">{coin.name}</span>
                    </div>

                    {/* Price and Change */}
                    <div className="text-right">
                      <div className="text-dipute-color font-medium text-sm">
                        {coin.price}
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          coin.isPositive ? 'text-green-500' : 'text-red-500'
                        }`}
                      >
                        {coin.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 py-4 gap-4 sm:gap-0">
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative py-2 px-1 text-sm font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab
                    ? "text-dispute-color before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2.5px] before:rounded-md before:bg-[linear-gradient(135deg,#fbbf24_0%,#f5940b_100%)]"
                    : "text-gray-500"
                }`}
                >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="">
            {activeTab === "Fevorites" && <Fevorites />}
            {activeTab === "Cryptos" && <Cryptos />}
            {activeTab === "Spot" && <Spot />}
            {activeTab === "Futures" && <Futures />}
            {activeTab === "Alpha" && <Alpha />}
            {activeTab === "New" && <New />}
            {activeTab === "Zones" && <Zones />}
        </div>
      </div>
    </section>
  );
};

export default Overview;