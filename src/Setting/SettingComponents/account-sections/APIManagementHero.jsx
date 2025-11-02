import React, { useState } from 'react';

const APIManagementHero = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-dispute-color text-2xl font-semibold">API Management</h2>
            <div className="flex items-center gap-3">
              <button className="bg-gradient transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover font-semibold px-6 py-2.5 rounded-lg whitespace-nowrap">
                Create API
              </button>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                Create Tax Report API
              </button>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                Delete all API
              </button>
            </div>
          </div>

          {/* Information List */}
          <div className="space-y-2 text-secondary-desc text-sm mb-6">
            <p>1. Each account can create up to 30 API Keys.</p>
            <p>2. Do not disclose your API Key, Secret Key (HMAC) or Private Key (Ed25519, RSA) to anyone to avoid asset losses. You should treat your API Key and your Secret Key (HMAC) or Private Key (Ed25519, RSA) like your passwords.</p>
            <p>3. It is recommended to restrict access to trusted IPs only to increase your account security.</p>
            <p>4. You will not be able to create an API Key if KYC is not completed.</p>
          </div>

          {/* Security Controls Checkbox */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-2 border-secondary-desc checked:bg-yellow-500 checked:border-yellow-500 cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-dispute-color text-sm">
                  By checking this box, all existing API Key(s) on your master account and sub-accounts will be subject to Default Security Controls.
                </p>
                <button className="text-yellow-500 text-sm hover:text-yellow-400 mt-1 flex items-center gap-1">
                  Default Security Controls Details
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </label>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-12 flex flex-col items-center justify-center">
          <div className="mb-6">
            <svg className="w-32 h-32 text-secondary-desc" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v.01M12 16v.01" />
            </svg>
          </div>
          <p className="text-secondary-desc text-center">
            Your Account has not<br />created any API Keys yet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default APIManagementHero;