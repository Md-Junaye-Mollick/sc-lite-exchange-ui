import React, { useState } from 'react';

const PaymentHero = () => {
  const [activeTab, setActiveTab] = useState('p2p');

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-dispute-color text-3xl font-semibold mb-8">Payment</h1>

        {/* Tabs */}
        <div className="flex items-center gap-8 mb-6">
          <button
            onClick={() => setActiveTab('p2p')}
            className={`font-medium pb-3 border-b-2 transition-colors ${
              activeTab === 'p2p'
                ? 'text-dispute-color border-yellow-500'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            P2P
          </button>
          <button
            onClick={() => setActiveTab('buy')}
            className={`font-medium pb-3 border-b-2 transition-colors ${
              activeTab === 'buy'
                ? 'text-dispute-color border-yellow-500'
                : 'text-secondary-desc border-transparent'
            }`}
          >
            Buy Crypto
          </button>
        </div>

        {/* Info Section and Add Button */}
        <div className="flex items-start justify-between mb-8">
          <div className="max-w-3xl">
            <p className="text-secondary-desc text-sm leading-relaxed">
              P2P payment methods: When you sell cryptocurrencies, the payment method added will be displayed to buyer as options to accept payment, please ensure that the account owner's name is consistent with your verified name on Binance. You can add up to 20 payment methods.
            </p>
          </div>
          <button className="bg-gradient text-white py-3 px-6 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover text-sm flex items-center gap-2 whitespace-nowrap ml-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add a payment method
          </button>
        </div>

        {/* Empty State */}
        <div className="bg-sub-card backdrop-blur-xl rounded-2xl border border-custom-border py-32">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-6">
              <svg className="w-24 h-24 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                <circle cx="15" cy="9" r="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M17 7 L13 11" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
            <p className="text-secondary-desc text-base">You have not added any payment methods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHero;