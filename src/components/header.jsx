import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  ChevronDown, X, Menu, BarChart2, DollarSign, Wallet, Users, LayoutDashboard, 
  Zap, Bot, Repeat2, HardHat, Link as LinkIcon,PiggyBank, BriefcaseBusiness, TrendingUp,
  CandlestickChart, CreditCard, Gift, Handshake, ShieldCheck, HelpCircle, Settings,
} from "lucide-react";
import ToggleLanguage from "./toggle-language";
import ToggleTheme from "./toggle-theme";
import { getNavItems } from "../array/header-options";
import ToggleDropdown from "./toggle-dropdown";

const Header = () => {
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRefs = useRef({});
  const hideTimeout = useRef(null);
  const mobileMenuRef = useRef(null);

  const NavItems = getNavItems(t, {
    BarChart2, DollarSign, Wallet, Users, LayoutDashboard, Zap, Bot, Repeat2,
    HardHat, LinkIcon, PiggyBank, BriefcaseBusiness, TrendingUp, CandlestickChart,
    CreditCard, Gift, Handshake, ShieldCheck, HelpCircle, Settings,
  });

  useEffect(() => {
    const handleClick = (e) => {
      if (activeDropdown && dropdownRefs.current[activeDropdown] && 
          !dropdownRefs.current[activeDropdown].contains(e.target)) {
        setActiveDropdown(null);
      }
      if (isMobileMenuOpen && mobileMenuRef.current && 
          !mobileMenuRef.current.contains(e.target) && 
          !document.getElementById("mobile-menu-toggle")?.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [activeDropdown, isMobileMenuOpen]);

  const handleMouseEnter = useCallback((name) => {
    clearTimeout(hideTimeout.current);
    setActiveDropdown(name);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hideTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  }, []);

  const DropdownSection = ({ title, items, isMobile }) => (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase text-dispute-color text-opacity-70 mb-2">{title}</h3>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <a key={item.name} href={item.path}
            className="group flex items-start p-2 rounded-lg hover:bg-pre-bg-dark btn-transition"
            onClick={() => { setActiveDropdown(null); isMobile && setIsMobileMenuOpen(false); }}>
            <div className="flex-shrink-0 mr-3 mt-1" style={{ color: item.iconColor }}>
              <Icon size={20} />
            </div>
            <div>
              <div className="font-medium group-hover:text-white">{item.name}</div>
              <div className="text-xs text-secondary-desc max-w-sm">{item.description}</div>
            </div>
          </a>
        );
      })}
    </div>
  );

  return (
    <>
      {activeDropdown && !isMobileMenuOpen && (
        <div className="hidden lg:block fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 z-30"
          onClick={() => setActiveDropdown(null)} />
      )}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <header className="bg-card text-dispute-color border-b border-custom-border p-2 sticky top-0 z-50 text-sm">
        <div className="w-full max-w-7xl mx-auto flex justify-between px-6 items-center h-12">
          <div className="flex items-center space-x-6">
            <a href="/landing" className="flex items-center space-x-2">
              <img src="/images/logo2.png" alt={t("appName")} className="w-20 h-8 object-contain" />
              {/* <span className="text-lg font-bold text-gradient">{t("appName")}</span> */}
            </a>

            <nav className="hidden lg:flex items-center space-x-2">
              {NavItems.map((item) => (
                <div key={item.name} className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  ref={(el) => (dropdownRefs.current[item.name] = el)}>
                  <a href={item.path}
                    className={`flex items-center px-2 py-1 font-medium hover:text-accent btn-transition ${
                      activeDropdown === item.name ? "text-accent" : "text-dispute-color"}`}
                    onClick={(e) => {
                      if (item.dropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      }
                    }}>
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown size={14} className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                  </a>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute left-1/2 -translate-x-1/2 mt-[19px] w-[550px] bg-card rounded-b-xl border-b border-custom-border shadow-md p-4 z-20 grid grid-cols-2 gap-4"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}>
                      {item.dropdown.basic?.length > 0 && (
                        <div className="col-span-1 border-r border-custom-border pr-4">
                          <DropdownSection title={t("basic")} items={item.dropdown.basic} />
                        </div>
                      )}
                      {item.dropdown.advanced?.length > 0 && (
                        <div className="col-span-1 pl-4">
                          <DropdownSection title={t("advanced")} items={item.dropdown.advanced} />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <ToggleDropdown/>
              <ToggleLanguage />
              <ToggleTheme />
            </div>
            {/* <div className="hidden lg:flex items-center space-x-2 ml-4">
              <a href="/signin" className="px-4 py-2 rounded-xl bg-gradient text-white hover:bg-gradient-teal-hover btn-transition text-sm font-medium shadow-glow hover:shadow-glow-hover">
                {t("login")}
              </a>
              <a href="/signup" className="px-4 py-2 rounded-xl border border-accent hover:bg-accent hover:text-white btn-transition text-sm font-medium">
                {t("signup")}
              </a>
            </div> */}
            <button id="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-sub-card text-dispute-color hover:bg-pre-bg btn-transition"
              aria-label={t("toggleMenu")}>
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <div ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-80 z-50 bg-sub-card border-l border-custom-border shadow-lg transform transition-transform duration-300 overflow-y-auto ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 h-full flex flex-col">
          <button onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-5 right-6 text-dispute-color hover:text-text-color transition-colors p-2 rounded-md border border-custom-border">
            <X size={18} />
          </button>

          <nav className="flex flex-col space-y-2 flex-1 mt-12">
            {NavItems.map((item) => (
              <div key={item.name} className="flex flex-col border-b border-custom-border">
                <a href={item.path}
                  className={`flex items-center justify-between px-3 py-3 font-medium hover:text-accent btn-transition ${
                    activeDropdown === item.name ? "text-accent" : "text-dispute-color"}`}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === item.name ? null : item.name);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}>
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown size={16} className={`transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180" : ""}`} />
                  )}
                </a>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-4 pt-2 space-y-1 bg-card rounded-lg mt-1 pb-2 mb-2">
                    {item.dropdown.basic?.length > 0 && (
                      <DropdownSection title={t("basic")} items={item.dropdown.basic} isMobile />
                    )}
                    {item.dropdown.advanced?.length > 0 && (
                      <div className="mt-3">
                        <DropdownSection title={t("advanced")} items={item.dropdown.advanced} isMobile />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* <div className="mt-auto space-y-4 pt-4 border-t border-custom-border">
            <div className="flex flex-col space-y-2">
              <a href="/signin" onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 rounded-xl bg-gradient text-white hover:bg-gradient-teal-hover btn-transition text-center font-medium shadow-glow hover:shadow-glow-hover">
                {t("login")}
              </a>
              <a href="/signup" onClick={() => setIsMobileMenuOpen(false)}
                className="w-full px-4 py-3 rounded-xl border border-accent text-dispute-color hover:bg-accent btn-transition text-center font-medium">
                {t("signup")}
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;