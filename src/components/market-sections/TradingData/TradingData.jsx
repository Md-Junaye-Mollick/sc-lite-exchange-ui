import React, { useState } from "react";
import Rankings from "./TradingDataTabs/Rankings/Rankings";
import USDFutures from "./TradingDataTabs/USDFutures/USDFutures";
import COINFutures from "./TradingDataTabs/COINFutures/COINFutures";
import Options from "./TradingDataTabs/Options/Options";

const TradingData = () => {
  const [activeTab, setActiveTab] = useState("Rankings");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = ["Rankings", "USDⓈ-M Futures", "COIN-M Futures", "Options"];

  return (
    <div className="">
      {/* Navigation Bar */}
      <div className="mt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-2 gap-4 sm:gap-0">
          {/* Tab Navigation */}
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
      </div>

      {/* Content Area */}
      <div className="">
        {activeTab === "Rankings" && <Rankings />}
        {activeTab === "USDⓈ-M Futures" && <USDFutures />}
        {activeTab === "COIN-M Futures" && <COINFutures />}
        {activeTab === "Options" && <Options />}
      </div>
    </div>
  );
};

export default TradingData;