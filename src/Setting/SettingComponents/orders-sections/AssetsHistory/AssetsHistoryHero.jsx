import React, { useState, useEffect, useRef } from 'react';

const AssetsHistoryHero = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({
    type: 'Overall',
    time: 'Past 30 days',
    coin: 'All'
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
    type: ['Overall'],
    time: ['Past 7 days', 'Past 30 days', 'Past 90 days', 'Customized'],
    coin: ['All', '0G', '1000CAT', '1000CHEEMS', '1000PEPPER', '1000SATS', '1INCH', '1MBABYDOGE', '2Z', 'A', 'A2Z', 'AAVE', 'ACA']
  };

  const coinIcons = {
    '0G': '⭕',
    '1000CAT': '🐱',
    '1000CHEEMS': '🐕',
    '1000PEPPER': '🌶️',
    '1000SATS': '💰',
    '1INCH': '⬛',
    '1MBABYDOGE': '🐶',
    '2Z': '🎯',
    'A': '🔷',
    'A2Z': '💜',
    'AAVE': '👻',
    'ACA': '🔺'
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const selectOption = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setOpenDropdown(null);
    setSearchQuery('');
  };

  const resetFilters = () => {
    setFilters({
      type: 'Overall',
      time: 'Past 30 days',
      coin: 'All'
    });
    setSearchQuery('');
  };

  const filteredCoins = dropdownOptions.coin.filter(coin =>
    coin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-8 border-b border-custom-border">
          <button className="text-dispute-color font-medium pb-4 border-b-2 border-custom-border">
            Overview
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Deposit
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Withdraw
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Transfer
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Distribution
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Referral
          </button>
          <button className="text-secondary-desc font-medium pb-4 hover:text-dispute-color transition-colors">
            Others
          </button>
          <button className="ml-auto text-secondary-desc pb-4 hover:text-dispute-color transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>

        {/* Filter Section */}
        <div ref={dropdownRef} className="flex flex-wrap items-center gap-4 mb-8">
          {/* Type Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('type')}
              className="min-w-[280px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Type</span>
                <span className="text-dispute-color">{filters.type}</span>
              </div>
              <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'type' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'type' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.type.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('type', option)}
                    className="w-full px-5 py-4 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors flex items-center justify-between"
                  >
                    <span className="text-dispute-color">{option}</span>
                    {filters.type === option && (
                      <svg className="w-5 h-5 text-dispute-color" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('time')}
              className="min-w-[280px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Time</span>
                <span className="text-dispute-color">{filters.time}</span>
              </div>
              <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'time' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'time' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.time.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('time', option)}
                    className={`w-full px-5 py-4 text-left hover:bg-sub-card/5 transition-colors flex items-center justify-between ${
                      filters.time === option ? 'text-dispute-color' : 'text-secondary-desc'
                    }`}
                  >
                    <span>{option}</span>
                    {filters.time === option && (
                      <svg className="w-5 h-5 text-dispute-color" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Coin Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('coin')}
              className="min-w-[280px] bg-sub-card border border-custom-border rounded-lg px-5 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Coin</span>
                <span className="text-dispute-color">{filters.coin}</span>
              </div>
              <svg className={`w-5 h-5 text-secondary-desc transition-transform ${openDropdown === 'coin' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'coin' && (
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
                      className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-2 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-custom-border"
                    />
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredCoins.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectOption('coin', option)}
                      className="w-full px-5 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        {coinIcons[option] && <span className="text-xl">{coinIcons[option]}</span>}
                        <span className="text-dispute-color">{option}</span>
                      </div>
                      {filters.coin === option && (
                        <svg className="w-5 h-5 text-dispute-color" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="px-8 py-3 bg-sub-card border border-custom-border rounded-lg text-dispute-color hover:bg-gradient transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-lg border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Time(UTC+8)</th>
                  <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Type</th>
                  <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Coin</th>
                  <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Amount</th>
                  <th className="px-6 py-4 text-left text-sm text-secondary-desc font-medium">Remark</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="5" className="px-6 py-32">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4">
                        <svg className="w-24 h-24 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          <circle cx="12" cy="12" r="2" fill="currentColor" />
                        </svg>
                      </div>
                      <p className="text-secondary-desc text-lg">No records</p>
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

export default AssetsHistoryHero;