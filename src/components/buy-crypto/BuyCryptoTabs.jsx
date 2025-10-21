import React, { useState } from "react";
import BuySell from "./Buy&Sell/BuySell";
import Deposit from "./Deposit/Deposit";
import Withdraw from "./Withdraw/Withdraw";
import { FileQuestion, ShoppingBag } from "lucide-react";

const BuyCryptoTabs = () => {
  const [activeTab, setActiveTab] = useState("Buy & Sell");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);` `
  };

  const tabs = ["Buy & Sell", "Deposit", "Withdraw"];

  return (
    <div className="">
      {/* Navigation Bar */}
      <div className="border-b border-custom-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 py-2 gap-4 sm:gap-0">
          {/* Tab Navigation */}
          <div className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide w-full sm:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative py-2 px-1 text-md font-medium transition-colors duration-200 whitespace-nowrap ${
                    activeTab === tab
                    ? "text-dispute-color before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-[2.5px] before:rounded-md before:bg-[linear-gradient(135deg,#fbbf24_0%,#f5940b_100%)]"
                    : "text-gray-500"
                }`}
                >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Right side info - Orders and FAQ */}
          <div className="flex items-center space-x-1 w-full sm:w-auto">
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-dispute-color border border-custom-border hover:text-white hover:bg-accent rounded-md transition-colors">
              <ShoppingBag className="w-4 h-4" />
              <span>Orders</span>
            </button>
            <button className="flex items-center space-x-2 px-3 py-2 text-sm text-dispute-color border border-custom-border hover:text-white hover:bg-accent rounded-md transition-colors">
              <FileQuestion className="w-4 h-4" />
              <span>FAQ</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="">
        {activeTab === "Buy & Sell" && <BuySell />}
        {activeTab === "Deposit" && <Deposit />}
        {activeTab === "Withdraw" && <Withdraw />}
      </div>
    </div>
  );
};

export default BuyCryptoTabs;