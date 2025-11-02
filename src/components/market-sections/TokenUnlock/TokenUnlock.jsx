import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TokenUnlock = () => {
  const { t } = useTranslation();

  const unlocks = [
    { name: 'INIT', symbol: 'INIT', image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png', price: 0.1417, change: 2.03, mcap: 24.24, supply: 173.21, unlock: 17.28, unlockValue: 340023, unlockDate: 'NOV 05' },
    { name: 'BABY', symbol: 'BABY', image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png', price: 0.02773, change: -4.94, mcap: 78.61, supply: 2.83, unlock: 21.02, unlockValue: 221424468, unlockDate: 'DEC 02' },
    { name: 'COOKIE', symbol: 'COOKIE', image: 'https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png', price: 0.067, change: -2.14, mcap: 62.43, supply: 717.60, unlock: 71.78, unlockValue: 196772, unlockDate: 'DEC 13' },
    { name: 'SHIT', symbol: 'SHIT', image: 'https://assets.coingecko.com/coins/images/4128/small/solana.png', price: 0.0388, change: 11.86, mcap: 18.70, supply: 482.14, unlock: 48.21, unlockValue: 101313, unlockDate: 'DEC 01' },
    { name: 'RED', symbol: 'RED', image: 'https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png', price: 0.3287, change: 1.56, mcap: 95.38, supply: 290.19, unlock: 29.04, unlockValue: 14222, unlockDate: 'DEC 02' },
    { name: 'SCPH', symbol: 'SCPH', image: 'https://assets.coingecko.com/coins/images/5/small/dogecoin.png', price: 0.0287, change: 5.78, mcap: 67.83, supply: 2.57, unlock: 22.72, unlockValue: 299325, unlockDate: 'DEC 03' },
    { name: 'XTZ', symbol: 'XTZ', image: 'https://assets.coingecko.com/coins/images/976/small/Tezos-logo.png', price: 0.379, change: 0.22, mcap: 610.03, supply: 1.06, unlock: 89.72, unlockValue: 11808, unlockDate: 'DEC 07' },
    { name: '1MBABYDOGE', symbol: '1MBABYDOGE', image: 'https://assets.coingecko.com/coins/images/325/small/Tether.png', price: 0.0009989, change: -1.31, mcap: 183862.34, supply: 189573291.93, unlock: 83.70, unlockValue: 41, unlockDate: 'DEC 14' },
    { name: 'DOT', symbol: 'DOT', image: 'https://assets.coingecko.com/coins/images/12171/small/polkadot.png', price: 3.69, change: 2.81, mcap: 4.88, supply: 1.62, unlock: 67.23, unlockValue: 3448, unlockDate: 'DEC 14' },
    { name: 'WLD', symbol: 'WLD', image: 'https://assets.coingecko.com/coins/images/31069/small/worldcoin.png', price: 0.829, change: 6.25, mcap: 3.49, supply: 4.09, unlock: 40.93, unlockValue: 5319676, unlockDate: 'DEC 14' },
    { name: 'TRUMP', symbol: 'TRUMP', image: 'https://assets.coingecko.com/coins/images/52/small/trump.png', price: 7.51, change: -8.32, mcap: 3.11, supply: 409.62, unlock: 40.96, unlockValue: 858503, unlockDate: 'DEC 14' },
    { name: 'ARB', symbol: 'ARB', image: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg', price: 0.3092, change: 2.29, mcap: 2.52, supply: 8.16, unlock: 48.19, unlockValue: 479088, unlockDate: 'DEC 14' },
    { name: 'FIL', symbol: 'FIL', image: 'https://assets.coingecko.com/coins/images/12817/small/filecoin.png', price: 1.79, change: 11.76, mcap: 1.38, supply: 1.12, unlock: 44.08, unlockValue: 3027, unlockDate: 'DEC 14' },
    { name: 'OP', symbol: 'OP', image: 'https://assets.coingecko.com/coins/images/25244/small/Optimism.png', price: 0.424, change: -3.67, mcap: 1.72, supply: 4.07, unlock: 51.81, unlockValue: 1028760, unlockDate: 'DEC 14' },
    { name: 'MORPHO', symbol: 'MORPHO', image: 'https://assets.coingecko.com/coins/images/34827/small/morpho.png', price: 2.01, change: 0.36, mcap: 1.04, supply: 322.08, unlock: 52.21, unlockValue: 390041, unlockDate: 'DEC 14' },
  ];

  return (
    <div className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-secondary-desc text-sm mb-6">{t('unlock.description')}</p>
        
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-custom-border">
                  <th className="px-4 py-4 text-left text-xs text-secondary-desc font-semibold">{t('unlock.name')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.price')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.marketCap')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.supply')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.totalUnlocked')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.nextUnlock')}</th>
                  <th className="px-4 py-4 text-right text-xs text-secondary-desc font-semibold">{t('unlock.nextUnlockDate')}</th>
                </tr>
              </thead>
              <tbody>
                {unlocks.map((token, idx) => (
                  <tr key={idx} className="border-b border-custom-border hover:bg-sub-card/5 transition-colors">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={token.image} 
                          alt={token.name}
                          className="w-8 h-8 rounded-full"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%239333EA"/%3E%3Ctext x="50" y="50" font-size="40" text-anchor="middle" dy=".3em" fill="white"%3E' + token.name.charAt(0) + '%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        <div>
                          <p className="font-semibold text-dispute-color">{token.symbol}</p>
                          <p className="text-xs text-secondary-desc">{token.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <p className="font-semibold text-dispute-color">${token.price.toFixed(4)}</p>
                      <p className={`text-xs ${token.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {token.change >= 0 ? '+' : ''}{token.change.toFixed(2)}%
                      </p>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      ${token.mcap >= 1000 ? (token.mcap / 1000).toFixed(2) + 'B' : token.mcap.toFixed(2) + 'M'}
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {token.supply >= 1000 ? (token.supply / 1000).toFixed(2) + 'T' : token.supply.toFixed(2) + 'B'}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-24 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                            style={{ width: `${Math.min(token.unlock, 100)}%` }}
                          />
                        </div>
                        <span className="text-dispute-color font-medium text-sm">{token.unlock.toFixed(2)}%</span>
                      </div>
                      <p className="text-xs text-secondary-desc text-right mt-1">
                        ${token.unlockValue.toLocaleString()} ({token.unlock.toFixed(2)}% of total locked)
                      </p>
                    </td>
                    <td className="px-4 py-4 text-right text-dispute-color font-medium">
                      {token.unlockValue.toLocaleString()}{token.symbol}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-medium">
                        {token.unlockDate}
                      </span>
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
          <span className="text-secondary-desc text-sm">... 21</span>
          <button className="px-3 py-1 text-secondary-desc hover:text-dispute-color text-sm">→</button>
        </div>
      </div>
    </div>
  );
};

export default TokenUnlock;