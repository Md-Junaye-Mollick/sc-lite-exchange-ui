import React, { useState } from "react";
import { Link, Save, ChevronDown, Search } from "lucide-react";

const coins = [
  { icon: "🟡", symbol: "BIDR", name: "BIDR" },
  { icon: "🟣", symbol: "0G", name: "0G" },
  { icon: "🟠", symbol: "BTC", name: "Bitcoin" },
  { icon: "🔵", symbol: "ETH", name: "Ethereum" },
];

const TokoCryptoHero = () => {
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [amount, setAmount] = useState("0");
  const [available] = useState("0 BIDR");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCoins = coins.filter(
    (c) =>
      c.symbol.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const percentageButtons = [
    { label: "25%", value: 0.25 },
    { label: "50%", value: 0.5 },
    { label: "75%", value: 0.75 },
    { label: "100%", value: 1 },
  ];

  const handleSelect = (coin) => {
    setSelectedCoin(coin);
    setOpen(false);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <div className="bg-sub-card rounded-3xl p-6 sm:p-8 border border-custom-border shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-gradient text-2xl font-bold">
              Transfer to Tokocrypto
            </h1>
            <div className="flex gap-3">
              <button className="p-2 hover:bg-card rounded-lg transition">
                <Link className="w-6 h-6 text-dispute-color" />
              </button>
              <button className="p-2 hover:bg-card rounded-lg transition">
                <Save className="w-6 h-6 text-dispute-color" />
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary-desc mb-4">
            Trade with Indonesian rupiah. Deposit and withdraw instantly with
            direct bank transfer.
          </p>

          {/* Coin Dropdown */}
          <div className="mb-6 relative">
            <label className="block text-sm font-semibold mb-3">Coin</label>
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between bg-card border border-custom-border rounded-xl px-4 py-4 cursor-pointer transition hover:bg-pre-bg"
            >
              <div className="flex items-center gap-3 font-semibold">
                <span>{selectedCoin.icon}</span> {selectedCoin.symbol}
              </div>
              <ChevronDown
                className={`w-5 h-5 text-secondary-desc transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {open && (
              <div className="absolute mt-1 w-full bg-card border border-custom-border rounded-xl shadow-lg overflow-hidden z-20 animate-fadeSlide">
                <div className="flex items-center gap-2 px-3 py-3 border-b border-custom-border">
                  <Search className="w-4 h-4 text-secondary-desc" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className="bg-transparent w-full text-sm outline-none"
                  />
                </div>
                <div className="max-h-48 overflow-y-auto">
                  {filteredCoins.map((coin) => (
                    <div
                      key={coin.symbol}
                      onClick={() => handleSelect(coin)}
                      className="flex items-center justify-between px-4 py-3 hover:bg-pre-bg transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span>{coin.icon}</span>
                        <div>
                          <div className="font-semibold">{coin.symbol}</div>
                          <div className="text-xs text-secondary-desc">
                            {coin.name}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-secondary-desc">≈ $0.00</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Amount Input */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-semibold">Amount</label>
              <span className="text-sm text-secondary-desc">
                Available: <span className="font-semibold">{available}</span>
              </span>
            </div>
            <div className="relative bg-card border border-custom-border rounded-xl px-4 py-4 flex items-center justify-between">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0"
                className="bg-transparent text-2xl font-semibold outline-none w-full"
              />
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc font-medium">
                  {selectedCoin.symbol}
                </span>
                <button className="text-gradient font-bold hover:opacity-80 transition">
                  MAX
                </button>
              </div>
            </div>
          </div>

          <p className="text-sm text-secondary-desc text-right mb-6">
            24h Withdraw Limit:{" "}
            <span className="font-semibold">0 USDT</span> / 10000 USDT
          </p>

          <div className="grid grid-cols-4 gap-3 mb-8">
            {percentageButtons.map((btn) => (
              <button
                key={btn.label}
                className="py-3 bg-card hover:bg-pre-bg border border-custom-border rounded-xl font-semibold transition"
              >
                {btn.label}
              </button>
            ))}
          </div>

          <button className="w-full py-4 bg-gradient text-white text-lg font-bold rounded-xl hover:opacity-90 transition">
            Connect Tokocrypto
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokoCryptoHero;