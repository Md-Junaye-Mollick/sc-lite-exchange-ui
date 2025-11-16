import React, { useState, useEffect, useRef } from 'react';

const P2PTradingHero = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [currency, setCurrency] = useState('INR');
  const [paymentMethod, setPaymentMethod] = useState('All payment methods');
  const [sortBy, setSortBy] = useState('Price');
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const currencies = ['INR', 'AED', 'AFN', 'ALL', 'AMD', 'AOA', 'ARS', 'AUD'];
  const paymentMethods = [
    { name: 'All payment methods', icon: '🔲' },
    { name: 'Lightning UPI ⚡', icon: '⚡' },
    { name: 'UPI 🔥', icon: '🔥' },
    { name: 'IMPS 🔥', icon: '🔥' },
    { name: 'Bank Transfer (India)', icon: '🔥' },
  ];
  const sortOptions = ['Price', 'Completed order number', 'Completion Rate', 'Rating'];

  const traders = [
    { name: 'Legal_white_money_1', tag: 'New P2P', orders: 6233, completion: 100, time: '15 min', price: '₹88.69', amount: '72.46 USDT', range: '500.00 INR - 2,500.00 INR', payment: 'Lightning UPI ⚡', type: 'buy' },
    { name: 'BabaBitcoin', orders: 529, completion: 99.1, time: '45 min', price: '₹94.90', amount: '29,321.52 USDT', range: '40,000.00 INR - 200,000.00 INR', payment: 'IMPS, UPI', verified: true, type: 'buy' },
    { name: 'choudhary saab 123', orders: 2222, completion: 98.3, time: '30 min', price: '₹95.31', amount: '94.84 USDT', range: '4,999.00 INR - 5,000.00 INR', payment: 'Digital eRupee', type: 'buy' },
    { name: 'Sk50Guy', orders: 4814, completion: 99.9, time: '15 min', price: '₹95.45', amount: '198.06 USDT', range: '200.00 INR - 500.00 INR', payment: 'Lightning UPI ⚡', type: 'buy' },
    { name: 'SAFE_ZONE_', orders: 737, completion: 99.5, time: '15 min', price: '₹95.49', amount: '189.35 USDT', range: '9,000.00 INR - 18,082.00 INR', payment: 'Digital eRupee', type: 'buy' },
    { name: 'LedgerTower', featured: true, orders: 2711, completion: 98.3, time: '60 min', price: '₹88.00', amount: '1,431,358.03 USDT', range: '10,000.00 INR - 37,500,000.00 INR', payment: 'IMPS, UPI, Bank Transfer', type: 'sell' },
    { name: 'HEMANTHAPA', orders: 239, completion: 95.0, time: '15 min', price: '₹94.15', amount: '500.00 USDT', range: '10,000.00 INR - 47,075.00 INR', payment: 'UPI, IMPS, Bank Transfer', type: 'sell' },
    { name: 'DAYA-TRADERS', orders: 186, completion: 91.7, time: '120 min', price: '₹94.13', amount: '718.48 USDT', range: '10,000.00 INR - 67,630.00 INR', payment: 'PhonePe, UPI, Paytm', type: 'sell' },
  ];

  const filteredTraders = traders.filter((t) => t.type === activeTab);

  const currencyRef = useRef(null);
  const paymentRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) setShowCurrencyDropdown(false);
      if (paymentRef.current && !paymentRef.current.contains(event.target)) setShowPaymentDropdown(false);
      if (sortRef.current && !sortRef.current.contains(event.target)) setShowSortDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveTab('buy')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'buy'
                ? 'bg-gradient text-white'
                : 'bg-sub-card text-secondary-desc border border-custom-border hover:bg-sub-card/5 hover:text-dispute-color'
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab('sell')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              activeTab === 'sell'
                ? 'bg-gradient text-white'
                : 'bg-sub-card text-secondary-desc border border-custom-border hover:bg-sub-card/5 hover:text-dispute-color'
            }`}
          >
            Sell
          </button>

          <div className="flex flex-wrap gap-3 mt-2 sm:mt-0 sm:ml-4 items-center">
            {['USDT', 'BTC', 'USDC', 'FDUSD', 'BNB', 'ETH', 'TRX', 'SHIB', 'XRP', 'SOL', 'TON', 'DOGE', 'PEPE'].map((coin) => (
              <button
                key={coin}
                className={`text-xs sm:text-sm transition-colors ${
                  coin === 'USDT' ? 'text-yellow-500 font-semibold' : 'text-secondary-desc hover:text-dispute-color'
                }`}
              >
                {coin}
              </button>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4 items-center">
          <div className="text-sm text-secondary-desc w-full sm:w-auto">Transaction amount</div>

          {/* Currency Dropdown */}
          <div className="relative" ref={currencyRef}>
            <button
              onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
              className="bg-sub-card border border-custom-border rounded-lg px-3 py-2 flex items-center gap-2 text-dispute-color text-sm hover:bg-sub-card/5"
            >
              <span className="text-yellow-500">₹</span>
              <span>{currency}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showCurrencyDropdown && (
              <div className="absolute z-10 mt-2 w-40 sm:w-44 bg-sub-card border border-custom-border rounded-lg shadow-xl max-h-64 overflow-y-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 bg-transparent text-dispute-color border-b border-custom-border focus:outline-none placeholder-secondary-desc"
                />
                {currencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setShowCurrencyDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left text-dispute-color hover:bg-sub-card/5 flex items-center gap-2"
                  >
                    {curr === currency && <span className="text-green-500">✓</span>}
                    <span>{curr}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Payment Dropdown */}
          <div className="relative" ref={paymentRef}>
            <button
              onClick={() => setShowPaymentDropdown(!showPaymentDropdown)}
              className="bg-sub-card border border-custom-border rounded-lg px-3 py-2 text-dispute-color text-sm hover:bg-sub-card/5 flex items-center gap-2"
            >
              <span>{paymentMethod}</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showPaymentDropdown && (
              <div className="absolute z-10 mt-2 w-56 sm:w-64 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-4 py-2 bg-transparent text-dispute-color border-b border-custom-border focus:outline-none placeholder-secondary-desc"
                />
                <div className="py-1">
                  {paymentMethods.map((method, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setPaymentMethod(method.name);
                        setShowPaymentDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-dispute-color hover:bg-sub-card/5 flex items-center gap-2"
                    >
                      <input type="checkbox" className="w-4 h-4" />
                      <span>{method.icon} {method.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative ml-auto" ref={sortRef}>
            <button
              onClick={() => setShowSortDropdown(!showSortDropdown)}
              className="bg-sub-card border border-custom-border rounded-lg px-3 py-2 flex items-center gap-2 text-sm hover:bg-sub-card/5"
            >
              <span className="text-secondary-desc hidden sm:inline">Sort By</span>
              <span className="text-dispute-color">{sortBy}</span>
              <svg className="w-4 h-4 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showSortDropdown && (
              <div className="absolute z-10 right-0 mt-2 w-52 sm:w-64 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setShowSortDropdown(false);
                    }}
                    className="w-full px-4 py-2 text-left text-dispute-color hover:bg-sub-card/5 flex items-center justify-between"
                  >
                    <span>{option}</span>
                    {sortBy === option && <span className="text-green-500">✓</span>}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table Header */}
        <div className="hidden md:flex bg-sub-card rounded-lg mb-2 px-4 py-2 text-xs text-secondary-desc border-b border-custom-border">
          <div className="w-1/5">Advertisers</div>
          <div className="w-1/6 text-center">Price</div>
          <div className="w-1/4 text-center">Available/Order Limit</div>
          <div className="w-1/5 text-center">Payment</div>
          <div className="w-1/6 text-right pr-4">Trade</div>
        </div>

        {/* Trader List */}
        <div className="space-y-3">
          {filteredTraders.map((trader, idx) => (
            <div
              key={idx}
              className={`bg-sub-card border rounded-lg px-4 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-4 items-start md:items-center ${
                trader.featured ? 'border-yellow-500' : 'border-custom-border'
              }`}
            >
              {/* Advertiser */}
              <div className="md:col-span-2">
                {trader.featured && <div className="text-xs text-yellow-500 mb-1">Featured Ad</div>}
                {trader.tag && <span className="inline-block bg-yellow-900 text-yellow-500 text-xs px-2 py-1 rounded mb-1">{trader.tag}</span>}
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                  <span className="text-dispute-color font-medium">{trader.name}</span>
                  {trader.verified && <span className="text-green-500">✓</span>}
                </div>
                <div className="text-xs text-secondary-desc mt-1">{trader.orders} orders | {trader.completion}% completion</div>
                <div className="text-xs text-secondary-desc flex items-center gap-1">
                  <span>✓ {trader.completion}%</span>
                  <span>⏱ {trader.time}</span>
                </div>
              </div>

              {/* Price */}
              <div className="md:col-span-2 text-left md:text-right">
                <div className="text-dispute-color text-lg sm:text-xl font-bold">{trader.price}</div>
              </div>

              {/* Available/Order Limit */}
              <div className="md:col-span-2 text-left md:text-right">
                <div className="text-dispute-color font-semibold">{trader.amount}</div>
                <div className="text-xs text-secondary-desc mt-1">{trader.range}</div>
              </div>

              {/* Payment */}
              <div className="md:col-span-3 text-left md:text-right">
                <div className="text-dispute-color text-sm">{trader.payment}</div>
              </div>

              {/* Trade Button */}
              <div className="md:col-span-2 text-left md:text-right">
                <button
                  className={`px-6 py-2 rounded-lg font-semibold w-full sm:w-auto ${
                    activeTab === 'buy'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-red-500 hover:bg-red-600 text-white'
                  }`}
                >
                  {activeTab === 'buy' ? 'Buy USDT' : 'Sell USDT'}
                </button>
              </div>

              {/* Verification Badge */}
              <div className="md:col-span-1 text-left md:text-right">
                {trader.verified && (
                  <div className="text-xs text-secondary-desc mt-1">Requires Verification</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
          {[1, 2, 3, 4, 5, '...', activeTab === 'buy' ? 12 : 27].map((page, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded text-sm ${
                page === 1
                  ? 'bg-gradient text-white'
                  : 'bg-sub-card text-secondary-desc border border-custom-border hover:border-dispute-color'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="px-3 py-1 rounded bg-sub-card text-secondary-desc border border-custom-border">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2PTradingHero;