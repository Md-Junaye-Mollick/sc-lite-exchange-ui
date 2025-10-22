import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import {
  User, CreditCard, ChevronDown, Maximize2, Minimize2,
  LayoutDashboard, Wallet, FileText, UserCircle, Users,
  Gift, Settings, LogOut, Target, TrendingUp, Repeat2,
  ThumbsUp, Bot, DollarSign, PieChart, FileBarChart, FileCheck
} from 'lucide-react';

const ToggleDropdown = () => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const dropdownRefs = useRef({});

  // Profile dropdown items
  const profileItems = [
    { name: t('dashboard'), icon: LayoutDashboard, path: '/dashboard' },
    { name: t('assets'), icon: Wallet, path: '/assets' },
    { name: t('orders'), icon: FileText, path: '/orders' },
    { name: t('account'), icon: UserCircle, path: '/account' },
    { name: t('referral'), icon: Users, path: '/referral' },
    { name: t('rewardsHub'), icon: Gift, path: '/rewards' },
    { name: t('dropdownsettings'), icon: Settings, path: '/settings' },
    { name: t('logout'), icon: LogOut, path: '/logout', isDanger: true }
  ];

  // Trade dropdown items
  const tradeItems = [
    { name: t('dropdownoverview'), icon: LayoutDashboard, path: '/trade/overview' },
    { name: t('dropdownspot'), icon: Target, path: '/trade/spot' },
    { name: t('margin'), icon: TrendingUp, path: '/trade/margin' },
    { name: t('dropdownfutures'), icon: Repeat2, path: '/trade/futures' },
    { name: t('options'), icon: ThumbsUp, path: '/trade/options' },
    { name: t('dropdowntradingBots'), icon: Bot, path: '/trade/bots' },
    { name: t('dropdownearn'), icon: DollarSign, path: '/trade/earn' },
    { name: t('funding'), icon: PieChart, path: '/trade/funding' },
    { name: t('assetHistory'), icon: FileBarChart, path: '/trade/history' },
    { name: t('accountStatement'), icon: FileBarChart, path: '/trade/statement' },
    { name: t('verification'), icon: FileCheck, path: '/trade/verification' }
  ];

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Fullscreen functionality
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Profile Dropdown */}
      <div className="relative" ref={(el) => (dropdownRefs.current['profile'] = el)}>
        <button
          onClick={() => toggleDropdown('profile')}
          className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-sub-card hover:bg-pre-bg btn-transition text-dispute-color"
          aria-label={t('profileMenu')}
        >
          <User size={18} />
          <ChevronDown 
            size={14} 
            className={`transition-transform duration-200 ${
              activeDropdown === 'profile' ? 'rotate-180' : ''
            }`} 
          />
        </button>
        
        {activeDropdown === 'profile' && (
          <div className="absolute right-0 mt-2 w-56 bg-card rounded-xl border border-custom-border shadow-lg z-50 py-2">
            <div className="px-4 py-3 border-b border-custom-border">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-dispute-color">ju***@gmail.com</p>
                  <p className="text-xs text-secondary-desc">{t('regularUser')}</p>
                </div>
              </div>
            </div>
            
            {profileItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveDropdown(null)}
                  className={`flex items-center space-x-3 px-4 py-2.5 hover:bg-pre-bg-dark btn-transition ${
                    item.isDanger ? 'text-red-500 hover:text-red-400' : 'text-dispute-color'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Trade Dropdown */}
      <div className="relative" ref={(el) => (dropdownRefs.current['trade'] = el)}>
        <button
          onClick={() => toggleDropdown('trade')}
          className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-sub-card hover:bg-pre-bg btn-transition text-dispute-color"
          aria-label={t('tradeMenu')}
        >
          <CreditCard size={18} />
          <ChevronDown 
            size={14} 
            className={`transition-transform duration-200 ${
              activeDropdown === 'trade' ? 'rotate-180' : ''
            }`} 
          />
        </button>
        
        {activeDropdown === 'trade' && (
          <div className="absolute right-0 mt-2 w-64 bg-card rounded-xl border border-custom-border shadow-lg z-50 py-2 max-h-96 overflow-y-auto">
            {tradeItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center space-x-3 px-4 py-2.5 hover:bg-pre-bg-dark btn-transition text-dispute-color"
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Toggle */}
      <button
        onClick={toggleFullscreen}
        className="flex items-center justify-center p-2 rounded-xl bg-sub-card hover:bg-pre-bg btn-transition text-dispute-color"
        aria-label={isFullscreen ? t('exitFullscreen') : t('enterFullscreen')}
      >
        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
      </button>
    </div>
  );
};

export default ToggleDropdown;