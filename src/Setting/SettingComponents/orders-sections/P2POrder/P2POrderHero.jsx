import React, { useState, useEffect, useRef } from 'react';

const P2POrderHero = () => {
  const [activeTab, setActiveTab] = useState('processing');
  const [activeStatus, setActiveStatus] = useState('all');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({
    coins: 'All coins',
    currency: 'All',
    orderType: 'All'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [orderSearch, setOrderSearch] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownOptions = {
    coins: ['All coins', 'TRUMP', '1000CHEEMS', 'MIRA', 'MXN', 'PEPE', 'RARE', 'SHIB', 'SOL', 'TON', 'HMSTR'],
    currency: ['All', 'AFN', 'ALL', 'AOA', 'AZN', 'BAM', 'BIF', 'BND', 'BSD', 'BWP', 'BYN'],
    orderType: ['All', 'Buy/Deposit', 'Sell/Withdraw']
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    if (dropdown !== openDropdown) {
      setSearchQuery('');
    }
  };

  const selectOption = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setOpenDropdown(null);
    setSearchQuery('');
  };

  const resetFilters = () => {
    setFilters({
      coins: 'All coins',
      currency: 'All',
      orderType: 'All'
    });
    setOrderSearch('');
    setSearchQuery('');
  };

  const filteredOptions = (type) => {
    return dropdownOptions[type].filter(option =>
      option.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Navigation Tabs */}
        <div className="flex items-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab('processing')}
            className={`font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'processing'
                ? 'text-dispute-color border-yellow-500'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            Processing
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'all'
                ? 'text-dispute-color border-yellow-500'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            All Orders
          </button>
        </div>

        {/* Status Tabs */}
        <div className="bg-sub-card border border-custom-border rounded-lg p-1 mb-6 inline-flex gap-1">
          <button
            onClick={() => setActiveStatus('all')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeStatus === 'all'
                ? 'bg-sub-card text-dispute-color'
                : 'text-secondary-desc hover:text-dispute-color'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveStatus('unpaid')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeStatus === 'unpaid'
                ? 'bg-sub-card text-dispute-color'
                : 'text-secondary-desc hover:text-dispute-color'
            }`}
          >
            Unpaid
          </button>
          <button
            onClick={() => setActiveStatus('paid')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeStatus === 'paid'
                ? 'bg-sub-card text-dispute-color'
                : 'text-secondary-desc hover:text-dispute-color'
            }`}
          >
            Paid
          </button>
          <button
            onClick={() => setActiveStatus('appeal')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeStatus === 'appeal'
                ? 'bg-sub-card text-dispute-color'
                : 'text-secondary-desc hover:text-dispute-color'
            }`}
          >
            Appeal in Progress
          </button>
        </div>

        {/* Filter Section */}
        <div ref={dropdownRef} className="flex flex-wrap items-center gap-4 mb-6">
          {/* Coins Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('coins')}
              className="min-w-[200px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-dispute-color text-sm">Coins</span>
                <span className="text-dispute-color">{filters.coins}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'coins' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'coins' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-3">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="search options"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-2 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-yellow-500 text-sm"
                    />
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredOptions('coins').map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectOption('coins', option)}
                      className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors"
                    >
                      <span className="text-dispute-color">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('currency')}
              className="min-w-[200px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-dispute-color text-sm">Currency</span>
                <span className="text-dispute-color">{filters.currency}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'currency' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'currency' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-3">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="search options"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-2 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-yellow-500 text-sm"
                    />
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredOptions('currency').map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectOption('currency', option)}
                      className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors"
                    >
                      <span className="text-dispute-color">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order Type Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('orderType')}
              className="min-w-[200px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-dispute-color text-sm">Order Type</span>
                <span className="text-dispute-color">{filters.orderType}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'orderType' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'orderType' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.orderType.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('orderType', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors"
                  >
                    <span className="text-dispute-color">{option}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="relative flex-1 min-w-[250px]">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search order no."
              value={orderSearch}
              onChange={(e) => setOrderSearch(e.target.value)}
              className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-3 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-custom-border text-sm"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-6 py-3 text-yellow-500 hover:text-yellow-400 transition-colors font-medium"
          >
            Reset
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Type/Date</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Order number</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Price</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Fiat / Crypto Amount</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Counterparty</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="px-6 py-32">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4">
                        <svg className="w-20 h-20 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          <circle cx="15" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M17 7 L13 11" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <p className="text-secondary-desc text-base">No records</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2POrderHero;