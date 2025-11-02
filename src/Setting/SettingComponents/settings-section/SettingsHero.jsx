import React, { useState } from 'react';
import ToggleTheme from '../../../components/toggle-theme';

const SettingsHero = () => {
  const [theme, setTheme] = useState('dark');
  const [withdrawalWhitelist, setWithdrawalWhitelist] = useState(false);
  const [oneStepWithdrawal, setOneStepWithdrawal] = useState(false);

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Profile Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Profile</h2>
          
          {/* Nickname & Avatar */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Nickname & Avatar</h3>
              <p className="text-secondary-desc text-sm">Set up an avatar and nickname. It is suggested not to use your real name or the name of your social accounts as a nickname.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-lg">👑</span>
                </div>
                <span className="text-dispute-color">User-50834</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* C2C Profile */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">C2C Profile</h3>
              <p className="text-secondary-desc text-sm">Edit your C2C nickname, manage your payment methods and the list of users you follow.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  U
                </div>
                <span className="text-dispute-color">User-50834</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Notifications</h2>
          
          {/* Notification Language */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Notification Language</h3>
              <p className="text-secondary-desc text-sm">This will affect the language settings of E-mail and App push.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color">Default</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Notification Preferences</h3>
              <p className="text-secondary-desc text-sm">Once configured, you will receive relevant on-site push notifications within the app and website.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Activities, Trade Notification, Binance News, System Messages</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Manage
              </button>
            </div>
          </div>

          {/* Auto Price Alert */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Auto Price Alert</h3>
              <p className="text-secondary-desc text-sm">Once configured, you will receive alerts on the price changes of major and hosting cryptos.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Notification On, Sound On</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Preferences</h2>
          
          {/* Color Preference */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Color Preference</h3>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <span className="text-green-500">🟢</span>
                <span className="text-dispute-color text-sm">Green Up / Red Down</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* Style Settings */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Style Settings</h3>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <div className="w-4 h-4 bg-pink-500 rounded"></div>
                </div>
                <span className="text-dispute-color text-sm">Fresh</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* UTC Time Zone */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">UTC Time Zone</h3>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Last 24 hours</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* Shortcuts */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Shortcuts</h3>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-dispute-color rounded"></div>
                <div className="w-3 h-3 bg-secondary-desc rounded"></div>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>

          {/* Theme */}
          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-dispute-color font-medium mb-1">Theme</h3>
            </div>
            <div className="border border-custom-border rounded-lg ml-4">
              <ToggleTheme/>
            </div>
          </div>
        </div>

        {/* Withdrawal Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Withdrawal</h2>
          
          {/* Withdrawal Whitelist */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Withdrawal Whitelist</h3>
              <p className="text-secondary-desc text-sm">Once this function is enabled, your account will only be able to withdraw to addresses on your withdrawal whitelist.</p>
              <button className="text-yellow-500 text-sm hover:text-yellow-400 mt-1">Address Management</button>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full border-2 ${withdrawalWhitelist ? 'border-green-500 bg-green-500' : 'border-secondary-desc'}`}></span>
                <span className="text-secondary-desc text-sm">OFF</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Enable
              </button>
            </div>
          </div>

          {/* One-Step Withdrawal */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">One-Step Withdrawal</h3>
              <p className="text-secondary-desc text-sm">When this function is turned on, you can withdraw small amount crypto to whitelisted addresses without passing 2FA verification.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full border-2 ${oneStepWithdrawal ? 'border-green-500 bg-green-500' : 'border-secondary-desc'}`}></span>
                <span className="text-secondary-desc text-sm">OFF</span>
              </div>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Enable
              </button>
            </div>
          </div>

          {/* Withdraw Setting */}
          <div className="flex items-center justify-between py-4">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Withdraw Setting</h3>
              <p className="text-secondary-desc text-sm">Choose to withdraw through on-chain or off-chain transfer for applicable addresses.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Off-chain withdrawal</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Trade Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Trade</h2>
          
          {/* Order Confirmation Reminders */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Order Confirmation Reminders</h3>
              <p className="text-secondary-desc text-sm">If the order reminder function is enabled, it will need to be reconfirmed every time an order is placed.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Spot-Limit Order, Auto Borrow/Repay for Margin</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Manage
              </button>
            </div>
          </div>

          {/* Fee Deduction */}
          <div className="flex items-center justify-between py-4">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Fee Deduction</h3>
              <p className="text-secondary-desc text-sm">Use BNB to pay fees.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Spot fees</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Manage
              </button>
            </div>
          </div>
        </div>

        {/* Link Account Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Link Account</h2>
          
          <div className="flex items-center justify-between py-4">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Link X Account</h3>
              <p className="text-secondary-desc text-sm">Link your X Account to Binance.</p>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <span className="text-dispute-color text-sm">Not Linked</span>
              <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap">
                Link
              </button>
            </div>
          </div>
        </div>

        {/* Privacy Section */}
        <div className="bg-sub-card border border-custom-border rounded-2xl p-6">
          <h2 className="text-dispute-color text-xl font-semibold mb-6">Privacy</h2>
          
          {/* Download Personal Data */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Download Personal Data</h3>
              <p className="text-secondary-desc text-sm">
                The download includes order, withdrawal, deposit, and trading history data, etc. For KYC documents, contact{' '}
                <button className="text-yellow-500 hover:text-yellow-400">DPO team</button>.
              </p>
            </div>
            <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap ml-4">
              Download
            </button>
          </div>

          {/* Export Transaction Records */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Export Transaction Records</h3>
            </div>
            <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap ml-4">
              Export
            </button>
          </div>

          {/* Delete Account */}
          <div className="flex items-center justify-between py-4 border-b border-custom-border">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Delete Account</h3>
            </div>
            <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap ml-4">
              Delete
            </button>
          </div>

          {/* Privacy Portal */}
          <div className="flex items-center justify-between py-4">
            <div className="flex-1">
              <h3 className="text-dispute-color font-medium mb-1">Privacy Portal</h3>
            </div>
            <button className="bg-sub-card border border-custom-border hover:bg-gradient text-dispute-color font-medium px-6 py-2 rounded-lg transition-colors whitespace-nowrap ml-4">
              Enter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHero;