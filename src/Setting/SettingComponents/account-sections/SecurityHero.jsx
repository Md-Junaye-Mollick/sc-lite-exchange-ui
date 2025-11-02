import React, { useState } from 'react';

const SecurityHero = () => {
  const [activeTab, setActiveTab] = useState('2fa');

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Security Checkup Header */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-4">Security Checkup</h2>
          
          {/* Tabs */}
          <div className="flex items-center gap-6 mb-6 text-sm border-b border-custom-border pb-4">
            <button
              onClick={() => setActiveTab('2fa')}
              className={`flex items-center gap-2 ${
                activeTab === '2fa' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                activeTab === '2fa' ? 'border-yellow-500' : 'border-secondary-desc'
              }`}>
                {activeTab === '2fa' && <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>}
              </span>
              Two-Factor Authentication (2FA)
            </button>
            <button
              onClick={() => setActiveTab('identity')}
              className={`flex items-center gap-2 ${
                activeTab === 'identity' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                activeTab === 'identity' ? 'border-yellow-500' : 'border-secondary-desc'
              }`}>
                {activeTab === 'identity' && <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>}
              </span>
              Identity Verification
            </button>
            <button
              onClick={() => setActiveTab('anti-phishing')}
              className={`flex items-center gap-2 ${
                activeTab === 'anti-phishing' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                activeTab === 'anti-phishing' ? 'border-yellow-500' : 'border-secondary-desc'
              }`}>
                {activeTab === 'anti-phishing' && <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>}
              </span>
              Anti-Phishing Code
            </button>
            <button
              onClick={() => setActiveTab('whitelist')}
              className={`flex items-center gap-2 ${
                activeTab === 'whitelist' ? 'text-dispute-color' : 'text-secondary-desc'
              }`}
            >
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                activeTab === 'whitelist' ? 'border-yellow-500' : 'border-secondary-desc'
              }`}>
                {activeTab === 'whitelist' && <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>}
              </span>
              Withdrawal Whitelist
            </button>
          </div>

          {/* Account At Risk Alert */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h3 className="text-dispute-color font-semibold mb-1">Account At Risk</h3>
                <p className="text-secondary-desc text-sm">You have not activated a passkey yet. We recommend adding a passkey to protect your account.</p>
              </div>
            </div>
            <button className="bg-gradient transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hoverfont-semibold px-6 py-2 rounded-lg transition-colors whitespace-nowrap ml-4">
              Add Passkey
            </button>
          </div>
        </div>

        {/* Two-Factor Authentication (2FA) */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
          <h3 className="text-dispute-color text-lg font-semibold mb-6">Two-Factor Authentication (2FA)</h3>
          
          <div className="space-y-4">
            {/* Passkeys */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Passkeys (Biometrics)</h4>
                  <p className="text-secondary-desc text-sm mb-1">Protect your account and withdrawals with Passkeys and/or security keys, such as Yubikey.</p>
                  <button className="text-yellow-500 text-sm hover:text-yellow-400">Having trouble?</button>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-secondary-desc"></span>
                  OFF
                </span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Enable
                </button>
              </div>
            </div>

            {/* Authenticator App */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Authenticator App</h4>
                  <p className="text-secondary-desc text-sm">Use Binance/Google Authenticator to protect your account and transactions.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-secondary-desc"></span>
                  OFF
                </span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Manage
                </button>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Email</h4>
                  <p className="text-secondary-desc text-sm">Use your email to protect your account and transactions.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm">OFF</span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Manage
                </button>
              </div>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Phone Number</h4>
                  <p className="text-secondary-desc text-sm">Use your phone number to protect your account and transactions.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-secondary-desc"></span>
                  OFF
                </span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Manage
                </button>
              </div>
            </div>

            {/* Login Password */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Login Password</h4>
                  <p className="text-secondary-desc text-sm">Login password is used to log in to your account.</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Advanced Security */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
          <h3 className="text-dispute-color text-lg font-semibold mb-6">Advanced Security</h3>
          
          <div className="space-y-4">
            {/* Emergency Contact */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Emergency Contact</h4>
                  <p className="text-secondary-desc text-sm">Add emergency contacts for when your account is inactive</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-secondary-desc"></span>
                  OFF
                </span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Manage
                </button>
              </div>
            </div>

            {/* Account Connections */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Account Connections</h4>
                  <p className="text-secondary-desc text-sm">Connect your account with third-party accounts.</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Manage
              </button>
            </div>

            {/* Anti-Phishing Code */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Anti-Phishing Code</h4>
                  <p className="text-secondary-desc text-sm">Protect your account from phishing attempts and ensure that your notification emails are from Binance only.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <span className="text-secondary-desc text-sm flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full border-2 border-secondary-desc"></span>
                  OFF
                </span>
                <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors">
                  Enable
                </button>
              </div>
            </div>

            {/* App Authorization */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V4a1 1 0 00-1-1h-3zm1 2v1h1V5h-1z" clipRule="evenodd" />
                  <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 9a1 1 0 100 2 1 1 0 000-2zM9 13a1 1 0 011-1h1a1 1 0 110 2v2a1 1 0 11-2 0v-3zM7 11a1 1 0 100-2H4a1 1 0 100 2h3zM17 13a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM16 17a1 1 0 100-2h-3a1 1 0 100 2h3z" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">App Authorization</h4>
                  <p className="text-secondary-desc text-sm">You use your Binance Account to sign in to third party sites and apps.</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Manage
              </button>
            </div>

            {/* 2FA Verification Strategy */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">2FA Verification Strategy</h4>
                  <p className="text-secondary-desc text-sm">Customize which 2FA methods are required during security verifications</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Devices and Activities */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6 mb-6">
          <h3 className="text-dispute-color text-lg font-semibold mb-6">Devices and Activities</h3>
          
          <div className="space-y-4">
            {/* My Devices */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">My Devices</h4>
                  <p className="text-secondary-desc text-sm">Manage devices that have login status, and view your device history.</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Manage
              </button>
            </div>

            {/* Account Activity */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Account Activity</h4>
                  <p className="text-secondary-desc text-sm mb-1">Last login</p>
                  <p className="text-secondary-desc text-sm mb-1">Suspicious account activity?</p>
                  <button className="text-yellow-500 text-sm hover:text-yellow-400">Disable Account</button>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                More
              </button>
            </div>
          </div>
        </div>

        {/* Account Management */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h3 className="text-dispute-color text-lg font-semibold mb-6">Account Management</h3>
          
          <div className="space-y-4">
            {/* Disable Account */}
            <div className="flex items-center justify-between py-4 border-b border-custom-border">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Disable Account</h4>
                  <p className="text-secondary-desc text-sm">Once the account is disabled, most of your actions will be restricted, such as logging in and trading. You can choose to unblock the account at any time. This action will not delete your account.</p>
                </div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Disable
              </button>
            </div>

            {/* Delete Account */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-start gap-3 flex-1">
                <svg className="w-5 h-5 text-secondary-desc mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div className="flex-1">
                  <h4 className="text-dispute-color font-medium mb-1">Delete Account</h4>
                  <p className="text-secondary-desc text-sm">Please note that account deletion is irreversible. Once deleted, you will not be able to access your account or view your transaction history.</p>
                </div>
              </div>
              <button className="bg-red-500/20 border border-red-500 hover:bg-red-500/30 text-red-500 font-medium px-6 py-2 rounded-lg transition-colors ml-4">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityHero;