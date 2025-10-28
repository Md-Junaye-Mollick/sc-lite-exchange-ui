import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, PieChart, Building2, PlusCircle, ArrowDownToLine, Bot, User, Settings, Shield, Key, FileText } from 'lucide-react';

const mainRoutes = [
  { path: '/SettingPage/Dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { path: '/SettingPage/SubAccounts', name: 'Sub Accounts', icon: Users },
  { path: '/SettingPage/PNLAnalytics', name: 'PNL Analytics', icon: PieChart },
  { path: '/SettingPage/BankDetails', name: 'Bank Details', icon: Building2 },
  { path: '/SettingPage/AddFunds', name: 'Add Funds', icon: PlusCircle },
  { path: '/SettingPage/Withdraw', name: 'Withdraw', icon: ArrowDownToLine },
  { path: '/SettingPage/TradingBot', name: 'Trading Bot', icon: Bot },
  { path: '/SettingPage/Profile', name: 'Profile', icon: User },
  { path: '/SettingPage/Preferences', name: 'Preferences', icon: Settings },
  { path: '/SettingPage/Security', name: 'Security', icon: Shield },
  { path: '/SettingPage/APIKeys', name: 'API Keys', icon: Key },
  { path: '/SettingPage/TrxnLogs', name: 'Trxn. Logs', icon: FileText },
];

const Sidebar = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <aside
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`fixed left-0 top-[65px] h-[calc(100vh-70px)] bg-sub-card border-r border-custom-border shadow-2xl z-40 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-[72px]'
      }`}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      <style jsx>{`
        aside::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Main Menu */}
      <div 
        className="flex-1 overflow-y-auto py-2 px-3 h-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <nav className="space-y-1">
          {mainRoutes.map((route) => {
            const Icon = route.icon;
            return (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-2 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-card-hover text-dispute-color'
                      : 'text-gray-400 hover:bg-card-hover hover:text-dispute-color'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isActive
                          ? 'bg-gradient text-white shadow-lg shadow-[#3a3ef1]/30'
                          : 'backdrop-blur-md bg-white/10 border border-white/20 shadow-lg'
                      }`}
                    >
                      <Icon size={15} />
                    </div>
                    <span
                      className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        isOpen ? 'opacity-100' : 'opacity-0 w-0'
                      }`}
                    >
                      {route.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;