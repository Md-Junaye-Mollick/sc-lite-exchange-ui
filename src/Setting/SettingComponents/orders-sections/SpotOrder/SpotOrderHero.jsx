import React, { useState, useEffect, useRef } from 'react';

const SpotOrderHero = () => {
  const [activeTab, setActiveTab] = useState('open');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [filters, setFilters] = useState({
    filter: 'All',
    pair: 'All',
    direction: 'All'
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
    filter: ['All', 'Limit Order', 'Stop Limit', 'Stop Market', 'Limit-Maker', 'Trailing Stop'],
    pair: ['All', 'BNB/BTC', 'NEO/BTC', 'LINK/BTC', 'IOTA/BTC', 'ETC/BTC', 'KNC/BTC', 'BTC/USDT', 'GAS/BTC', 'QTUM/ETH', 'QTUM/BTC', 'LTC/BTC', 'LINK/ETH', 'ETH/BTC'],
    direction: ['All', 'Buy', 'Sell']
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    if (dropdown !== 'pair') {
      setSearchQuery('');
    }
  };

  const selectOption = (filterKey, value) => {
    setFilters(prev => ({ ...prev, [filterKey]: value }));
    setOpenDropdown(null);
    setSearchQuery('');
  };

  const filteredPairs = dropdownOptions.pair.filter(pair =>
    pair.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab('open')}
            className={`font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'open'
                ? 'text-dispute-color border-custom-border'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            Open Orders
          </button>
          <button
            onClick={() => setActiveTab('order')}
            className={`font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'order'
                ? 'text-dispute-color border-custom-border'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            Order History
          </button>
          <button
            onClick={() => setActiveTab('trade')}
            className={`font-medium pb-2 border-b-2 transition-colors ${
              activeTab === 'trade'
                ? 'text-dispute-color border-custom-border'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            Trade History
          </button>
        </div>

        {/* Filter Section */}
        <div ref={dropdownRef} className="flex flex-wrap items-center gap-4 mb-6">
          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('filter')}
              className="min-w-[220px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Filter</span>
                <span className="text-dispute-color">{filters.filter}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'filter' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'filter' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.filter.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('filter', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors flex items-center justify-between"
                  >
                    <span className="text-dispute-color">{option}</span>
                    {filters.filter === option && (
                      <svg className="w-5 h-5 text-dispute-color" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pair Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('pair')}
              className="min-w-[220px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Pair</span>
                <span className="text-dispute-color">{filters.pair}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'pair' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'pair' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                <div className="p-3">
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sub-card border border-custom-border rounded-lg pl-10 pr-4 py-2 text-dispute-color placeholder-secondary-desc focus:outline-none focus:border-custom-border text-sm"
                    />
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {filteredPairs.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => selectOption('pair', option)}
                      className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors flex items-center justify-between"
                    >
                      <span className="text-dispute-color">{option}</span>
                      {filters.pair === option && (
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

          {/* Direction Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('direction')}
              className="min-w-[220px] bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-secondary-desc text-sm">Direction</span>
                <span className="text-dispute-color">{filters.direction}</span>
              </div>
              <svg className={`w-4 h-4 text-secondary-desc transition-transform ${openDropdown === 'direction' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'direction' && (
              <div className="absolute z-10 w-full mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl overflow-hidden">
                {dropdownOptions.direction.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('direction', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 transition-colors flex items-center justify-between"
                  >
                    <span className="text-dispute-color">{option}</span>
                    {filters.direction === option && (
                      <svg className="w-5 h-5 text-dispute-color" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl shadow-lg border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Date</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Pair</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Type</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Side</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Price</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Amount</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Amount per Iceberg Order</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Filled</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Total</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Trigger Conditions</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">TP/SL</th>
                  <th className="px-4 py-4 text-right text-xs font-medium">
                    <button className="text-yellow-500 hover:text-yellow-400 transition-colors flex items-center gap-1 ml-auto">
                      <span>Cancel All</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="12" className="px-6 py-32">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-4">
                        <svg className="w-20 h-20 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          <circle cx="15" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                          <path d="M17 7 L13 11" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <p className="text-secondary-desc text-base">No records found.</p>
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

export default SpotOrderHero;