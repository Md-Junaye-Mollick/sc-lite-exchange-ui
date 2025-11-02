import React from 'react';

const IdentificationHero = () => {
  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* User Profile Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-20 h-20 bg-gradient rounded-2xl flex items-center justify-center text-4xl">
             <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div>
            <h2 className="text-dispute-color text-xl font-semibold mb-2">User-fd634</h2>
            <div className="flex items-center gap-3">
              <span className="text-secondary-desc text-sm">ID: 1174356513</span>
              <span className="bg-sub-card border border-custom-border px-3 py-1 rounded-md text-secondary-desc text-sm">
                Unverified
              </span>
            </div>
          </div>
        </div>

        {/* Verification Unsuccessful Card */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-8 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-dispute-color text-2xl font-semibold mb-3">Verification Unsuccessful</h3>
              <p className="text-red-500 text-sm flex items-center gap-2">
                <span className="text-red-500">♦</span>
                Your verification seems to be incomplete. Please try again.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <button className="flex-1 min-w-[200px] bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors">
              Try again
            </button>
            <button className="flex-1 min-w-[200px] bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-semibold px-6 py-3 rounded-lg transition-colors">
              Start from Beginning
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <button className="flex items-center gap-2 text-dispute-color hover:text-yellow-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              Need help?
            </button>
            <button className="flex items-center gap-2 text-dispute-color hover:text-yellow-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Identity Verification FAQ
            </button>
          </div>
        </div>

        {/* Account Limits Card */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-8">
          <h3 className="text-dispute-color text-xl font-semibold mb-6">Account Limits After Verification</h3>
          
          <div className="space-y-5">
            <div className="flex items-center justify-between py-3 border-b border-custom-border">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dispute-color">Fiat Deposit & Withdrawal Limits</span>
              </div>
              <span className="text-dispute-color font-medium">50K USD Daily</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-custom-border">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dispute-color">Crypto Deposit Limit</span>
              </div>
              <span className="text-dispute-color font-medium">Unlimited</span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-custom-border">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dispute-color">Crypto Withdrawal Limit</span>
              </div>
              <span className="text-dispute-color font-medium">8M USDT Daily</span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-secondary-desc" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-dispute-color">P2P Transaction Limits</span>
              </div>
              <span className="text-dispute-color font-medium">Unlimited</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentificationHero;