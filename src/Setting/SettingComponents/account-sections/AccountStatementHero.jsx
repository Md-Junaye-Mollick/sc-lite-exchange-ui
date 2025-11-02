import React, { useState, useEffect, useRef } from 'react';

const AccountStatementHero = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({
    date: '2025/10/31',
    account: 'test******@gmail.com',
    wallet: 'All',
    estimatedValue: 'USDT'
  });
  const [searchQuery, setSearchQuery] = useState('');
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
    wallet: ['All', 'Spot', 'Funding'],
    estimatedValue: ['USDT', 'BTC', 'ETH', 'EUR']
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setOpenDropdown(null);
  };

  const resetFilters = () => {
    setFilters({
      date: '2025/10/31',
      account: 'junayedmollick536@gmail.com',
      wallet: 'All',
      estimatedValue: 'USDT'
    });
  };

  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-gradient text-3xl font-semibold">Account Statement</h1>
          <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export
          </button>
        </div>

        {/* Filter Section */}
        <div ref={dropdownRef} className="flex flex-wrap items-center gap-4 mb-8">
          {/* Date Input */}
          <div className="relative">
            <div className="bg-sub-card border border-custom-border rounded-lg px-5 py-3 flex items-center gap-3 min-w-[200px]">
              <input
                type="text"
                value={filters.date}
                onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                className="bg-transparent text-dispute-color outline-none flex-1"
              />
              <svg className="w-5 h-5 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          {/* Account Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('account')}
              className="min-w-[400px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Account</span>
                <span className="text-dispute-color">{filters.account}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'account' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
            {openDropdown === 'account' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-4">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-10 py-2 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-custom-border"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Wallet Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('wallet')}
              className="min-w-[280px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Wallet</span>
                <span className="text-dispute-color">{filters.wallet}</span>
              </div>
              <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'wallet' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'wallet' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.wallet.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('wallet', option)}
                    className="w-full px-5 py-3 text-left text-dispute-color hover:bg-sub-card/5 transition-colors flex items-center gap-3"
                  >
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                      filters.wallet === option ? 'border-dispute-color bg-dispute-color' : 'border-secondary-desc'
                    }`}>
                      {filters.wallet === option && (
                        <svg className="w-3 h-3 text-sub-card" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span>{option}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Estimated Value Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('estimatedValue')}
              className="min-w-[280px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Estimated Value</span>
                <span className="text-dispute-color">{filters.estimatedValue}</span>
              </div>
              <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'estimatedValue' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'estimatedValue' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.estimatedValue.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('estimatedValue', option)}
                    className="w-full px-5 py-3 text-left text-dispute-color hover:bg-sub-card/5 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="bg-gradient transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover font-semibold px-8 py-3 rounded-lg">
            Search
          </button>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-8 py-3 bg-sub-card border border-custom-border rounded-lg text-dispute-color hover:bg-gradient transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Overview Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-dispute-color text-2xl font-semibold">Overview</h2>
            <span className="text-secondary-desc text-sm">Data refreshes at UTC+0 daily.</span>
          </div>

          <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <p className="text-secondary-desc text-sm mb-2">Date</p>
                <p className="text-dispute-color font-semibold">2025-10-31</p>
              </div>
              <div>
                <p className="text-secondary-desc text-sm mb-2">User ID</p>
                <p className="text-dispute-color font-semibold">1174356513</p>
              </div>
              <div>
                <p className="text-secondary-desc text-sm mb-2">Account Type</p>
                <p className="text-dispute-color font-semibold">Master Account</p>
              </div>
              <div>
                <p className="text-secondary-desc text-sm mb-2">Wallet</p>
                <p className="text-dispute-color font-semibold">All</p>
              </div>
            </div>

            <div className="border-t border-custom-border pt-6">
              <div className="mb-1">
                <p className="text-secondary-desc text-sm mb-2">Rate</p>
                <p className="text-dispute-color text-2xl font-semibold">1 BTC</p>
                <p className="text-secondary-desc text-sm">≈ 109,608 USDT</p>
              </div>
            </div>
          </div>

          {/* Total Value */}
          <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
            <p className="text-secondary-desc text-sm mb-2">Total Value</p>
            <p className="text-dispute-color text-3xl font-bold mb-1">-- BTC</p>
            <p className="text-secondary-desc text-sm">≈ -- USDT</p>

            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="text-secondary-desc text-sm mb-2">Spot</p>
                <p className="text-dispute-color text-xl font-semibold mb-1">-- BTC</p>
                <p className="text-secondary-desc text-sm">≈ -- USDT</p>
              </div>
              <div>
                <p className="text-secondary-desc text-sm mb-2">Funding</p>
                <p className="text-dispute-color text-xl font-semibold mb-1">-- BTC</p>
                <p className="text-secondary-desc text-sm">≈ -- USDT</p>
              </div>
            </div>
          </div>
        </div>

        {/* Spot Section */}
        <div className="mb-8">
          <h3 className="text-dispute-color text-2xl font-semibold mb-6">Spot</h3>
          <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
            <p className="text-secondary-desc text-sm mb-2">Total Balance</p>
            <p className="text-dispute-color text-2xl font-bold mb-1">-- BTC</p>
            <p className="text-secondary-desc text-sm">≈ -- USDT</p>
          </div>

          {/* Table */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-lg border border-custom-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-custom-border">
                    <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Coin</th>
                    <th className="px-6 py-4 text-right text-sm text-secondary-desc font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" className="px-6 py-32">
                      <div className="flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <svg className="w-24 h-24 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <p className="text-secondary-desc text-lg">No records found.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Funding Section */}
        <div className="mb-8">
          <h3 className="text-dispute-color text-2xl font-semibold mb-6">Funding</h3>
          <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
            <p className="text-secondary-desc text-sm mb-2">Total Balance</p>
            <p className="text-dispute-color text-2xl font-bold mb-1">-- BTC</p>
            <p className="text-secondary-desc text-sm">≈ -- USDT</p>
          </div>

          {/* Table */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-lg border border-custom-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-custom-border">
                    <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Coin</th>
                    <th className="px-6 py-4 text-right text-sm text-secondary-desc font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan="2" className="px-6 py-32">
                      <div className="flex flex-col items-center justify-center">
                        <div className="mb-4">
                          <svg className="w-24 h-24 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                        <p className="text-secondary-desc text-lg">No records found.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountStatementHero;