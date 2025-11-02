import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const AISelectTable = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [filters, setFilters] = useState({
    trend: '',
    momentum: '',
    volumePrice: '',
    volatility: ''
  });
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
    trend: ['Trend', 'Bearish', 'Downtrend', 'Sideways Movement', 'Uptrend', 'Bullish'],
    momentum: ['Momentum', 'Weak Momentum', 'Soft Momentum', 'Steady Momentum', 'Strong Momentum', 'Overbought'],
    volumePrice: ['Volumen & Price', 'Low Activity', 'Volume Contraction', 'Volume-Price Divergence', 'Accumulation Signal', 'Volume-backed Breakout'],
    volatility: ['Volatility', 'Calm', 'Volatility Contraction', 'Ample Liquidity', 'Volatility Expansion', 'High Price Fluctuation']
  };

  const tableData = [
    { name: 'ARPA/USDT', rank: 2, aiRating: 'Strong Positive', price: '$0.01902', ma50: 'Strong Bullish', adx: 'Moderate Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '🔷' },
    { name: 'SCR/USDT', rank: 3, aiRating: 'Strong Positive', price: '$0.174', ma50: 'Strong Bullish', adx: 'Strong Trend', macd: 'Strong Bullish', rsi: 'Bullish Momentum', icon: '⚪' },
    { name: 'STRK/USDT', rank: 5, aiRating: 'Strong Positive', price: '$0.126', ma50: 'Strong Bullish', adx: 'Strong Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '✓' },
    { name: 'DYM/USDT', rank: 6, aiRating: 'Strong Positive', price: '$0.099', ma50: 'Strong Bullish', adx: 'Moderate Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '❋' },
    { name: 'DASH/USDT', rank: 8, aiRating: 'Strong Positive', price: '$87.40', ma50: 'Strong Bullish', adx: 'Strong Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '◉' },
    { name: 'ROSE/USDT', rank: 9, aiRating: 'Strong Positive', price: '$0.01806', ma50: 'Strong Bullish', adx: 'Strong Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '○' },
    { name: 'XVG/USDT', rank: 10, aiRating: 'Strong Positive', price: '$0.007369', ma50: 'Strong Bullish', adx: 'Moderate Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '◊' },
    { name: 'DUSK/USDT', rank: 11, aiRating: 'Strong Positive', price: '$0.0507', ma50: 'Strong Bullish', adx: 'Moderate Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '○' },
    { name: 'DCR/USDT', rank: 13, aiRating: 'Strong Positive', price: '$19.20', ma50: 'Strong Bullish', adx: 'Moderate Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '⊕' },
    { name: 'KSM/USDT', rank: 14, aiRating: 'Strong Positive', price: '$10.94', ma50: 'Strong Bullish', adx: 'Strong Trend', macd: 'Strong Bullish', rsi: 'Overbought', icon: '✓' }
  ];

  const toggleFavorite = (name) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(name)) {
        newFavorites.delete(name);
      } else {
        newFavorites.add(name);
      }
      return newFavorites;
    });
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
      trend: '',
      momentum: '',
      volumePrice: '',
      volatility: ''
    });
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Filter Section */}
        <div ref={dropdownRef} className="flex flex-wrap items-center gap-4 mb-6">
          {/* Trend Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary-desc text-sm">Trend</span>
              <button className="text-secondary-desc hover:text-dispute-color">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => toggleDropdown('trend')}
              className="w-64 bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <span>{filters.trend || 'Select value'}</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'trend' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'trend' && (
              <div className="absolute z-10 w-64 mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                {dropdownOptions.trend.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('trend', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Momentum Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary-desc text-sm">Momentum</span>
              <button className="text-secondary-desc hover:text-dispute-color">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => toggleDropdown('momentum')}
              className="w-64 bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <span>{filters.momentum || 'Select value'}</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'momentum' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'momentum' && (
              <div className="absolute z-10 w-64 mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                {dropdownOptions.momentum.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('momentum', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Volume & Price Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary-desc text-sm">Volumen & Price</span>
              <button className="text-secondary-desc hover:text-dispute-color">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => toggleDropdown('volumePrice')}
              className="w-64 bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <span>{filters.volumePrice || 'Select value'}</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'volumePrice' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'volumePrice' && (
              <div className="absolute z-10 w-64 mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                {dropdownOptions.volumePrice.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('volumePrice', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Volatility Dropdown */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-secondary-desc text-sm">Volatility</span>
              <button className="text-secondary-desc hover:text-dispute-color">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <button
              onClick={() => toggleDropdown('volatility')}
              className="w-64 bg-sub-card border border-custom-border rounded-lg px-4 py-3 text-left text-secondary-desc flex items-center justify-between hover:border-custom-border transition-colors"
            >
              <span>{filters.volatility || 'Select value'}</span>
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'volatility' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {openDropdown === 'volatility' && (
              <div className="absolute z-10 w-64 mt-2 bg-sub-card border border-custom-border rounded-lg shadow-xl">
                {dropdownOptions.volatility.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectOption('volatility', option)}
                    className="w-full px-4 py-3 text-left text-secondary-desc hover:bg-sub-card/5 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Reset Button */}
          <button
            onClick={resetFilters}
            className="ml-auto bg-sub-card border border-custom-border rounded-lg px-6 py-3 text-dispute-color hover:bg-gradient transition-colors mt-7"
          >
            Reset
          </button>
        </div>

        {/* Table */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium"></th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Name ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Rank ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">AI rating ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">Price ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">MA50/MA200 ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">ADX ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">MACD ↕</th>
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-medium">RSI ↕</th>
                  <th className="px-4 py-4 text-center text-xs text-secondary-desc font-medium">✎</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((item, idx) => (
                  <tr key={idx} className="border-b border-custom-border hover:bg-sub-card/5 transition-colors">
                    <td className="px-4 py-4">
                      <button
                        onClick={() => toggleFavorite(item.name)}
                        className="text-secondary-desc hover:text-yellow-400 transition-colors"
                      >
                        <Star className={`w-4 h-4 ${favorites.has(item.name) ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                      </button>
                    </td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-dispute-color font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-dispute-color">{item.rank}</td>
                    <td className="px-4 py-4 text-sm">
                      <div className="flex items-center gap-1 text-green-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item.aiRating}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-dispute-color font-medium">{item.price}</td>
                    <td className="px-4 py-4 text-sm text-dispute-color">{item.ma50}</td>
                    <td className="px-4 py-4 text-sm text-dispute-color">{item.adx}</td>
                    <td className="px-4 py-4 text-sm text-dispute-color">{item.macd}</td>
                    <td className="px-4 py-4 text-sm text-dispute-color">{item.rsi}</td>
                    <td className="px-4 py-4 text-sm text-center">
                      <button className="bg-sub-card hover:bg-gradient text-dispute-color px-3 py-1 rounded text-sm transition-colors border border-custom-border">
                        ✎
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">←</button>
          {[1, 2, 3, 4, 5].map(page => (
            <button
              key={page}
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium transition-colors border ${
                page === 1
                  ? 'bg-gradient text-white border-custom-border'
                  : 'bg-sub-card text-dispute-color border-custom-border'
              }`}
            >
              {page}
            </button>
          ))}
          <span className="text-secondary-desc text-sm">... 43</span>
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
        </div>
      </div>
    </div>
  );
};

export default AISelectTable;