import React, { useState } from "react";
import { Search } from "lucide-react";

const SpotTradingTable = () => {
  const [activeTab, setActiveTab] = useState("Open Orders");

  const tabs = [
    "Open Orders",
    "Order History",
    "Trade History",
    "Funds",
    "Bots",
  ];

  return (
    <div className="my-10 max-w-7xl mx-auto bg-sub-card border border-custom-border rounded-lg p-3 w-full">

      {/* Tabs */}
      <div className="flex items-center justify-between border-b border-custom-border pb-1">
        
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-2 text-sm font-medium whitespace-nowrap ${
                activeTab === tab
                  ? "text-dispute-color before:content-[''] before:absolute before:left-0 before:right-0 before:-bottom-[1px] before:h-[2px] before:bg-[linear-gradient(135deg,#fbbf24_0%,#f5940b_100%)]"
                  : "text-gray-400"
              }`}
            >
              {tab}
              {tab === "Open Orders" && <span className="ml-1">(0)</span>}
            </button>
          ))}
        </div>

        {/* Right checkbox */}
        <label className="flex items-center space-x-2 text-gray-400 text-xs">
          <input type="checkbox" className="accent-yellow-400" />
          <span>Hide Other Pairs</span>
        </label>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-11 text-[12px] text-gray-400 py-3 border-b border-custom-border mt-1">
        <span>Date</span>
        <span>Pair</span>
        <span>Type</span>
        <span>Side</span>
        <span>Price</span>
        <span>Amount</span>
        <span>Amount per Iceberg Order</span>
        <span>Filled</span>
        <span>Total</span>
        <span>Trigger Conditions</span>
        <span className="text-dispute-color cursor-pointer">Cancel All</span>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center py-16 text-center text-gray-400">
        <Search size={48} className="opacity-40 mb-3" />
        <p className="text-sm">You have no open orders.</p>
      </div>
    </div>
  );
};

export default SpotTradingTable;