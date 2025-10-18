import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import {
  ChevronDown,
  X,
  Menu,
  BarChart2,
  DollarSign,
  Wallet,
  Users,
  LayoutDashboard,
  Zap,
  Bot,
  Repeat2,
  HardHat,
  Link as LinkIcon,
  PiggyBank,
  BriefcaseBusiness,
  TrendingUp,
  CandlestickChart,
  CreditCard,
  Gift,
  Handshake,
  ShieldCheck,
  HelpCircle,
  Settings,
  Sun,
} from "lucide-react";
import ToggleLanguage from "./toggle-language";
import ToggleTheme from "./toggle-theme";
import { getNavItems } from "../array/header-options";

const Header = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [activeNavDropdown, setActiveNavDropdown] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navDropdownRefs = useRef({});
  const hideDropdownTimeout = useRef(null);
  const mobileMenuRef = useRef(null);

  const NavItems = getNavItems(t, {
    BarChart2,
    DollarSign,
    Wallet,
    Users,
    LayoutDashboard,
    Zap,
    Bot,
    Repeat2,
    HardHat,
    LinkIcon,
    PiggyBank,
    BriefcaseBusiness,
    TrendingUp,
    CandlestickChart,
    CreditCard,
    Gift,
    Handshake,
    ShieldCheck,
    HelpCircle,
    Settings,
  });

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event) => {
      if (
        activeNavDropdown &&
        navDropdownRefs.current[activeNavDropdown] &&
        !navDropdownRefs.current[activeNavDropdown].contains(event.target)
      ) {
        setActiveNavDropdown(null);
      }

      const mobileToggleBtn = document.getElementById("mobile-menu-toggle");
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        (!mobileToggleBtn || !mobileToggleBtn.contains(event.target))
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeNavDropdown, isMobileMenuOpen]);

  const handleMouseEnter = useCallback((itemName) => {
    if (hideDropdownTimeout.current) {
      clearTimeout(hideDropdownTimeout.current);
    }
    setActiveNavDropdown(itemName);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hideDropdownTimeout.current) {
      clearTimeout(hideDropdownTimeout.current);
    }
    hideDropdownTimeout.current = setTimeout(() => {
      setActiveNavDropdown(null);
    }, 150);
  }, []);

  const DropdownSection = ({ title, items }) => (
    <div className="space-y-2">
      <h3 className="text-xs font-semibold uppercase text-dispute-color text-opacity-70 mb-2">
        {title}
      </h3>
      {items.map((subItem) => {
        const IconComponent = subItem.icon;
        return (
          <a
            key={subItem.name}
            href={subItem.path}
            className="group flex items-start p-2 rounded-lg hover:bg-pre-bg-dark btn-transition"
            onClick={() => setActiveNavDropdown(null)}
          >
            <div
              className="flex-shrink-0 mr-3 mt-1"
              style={{ color: subItem.iconColor }}
            >
              <IconComponent size={20} />
            </div>
            <div>
              <div className="font-medium group-hover:text-white">
                {subItem.name}
              </div>
              <div className="text-xs text-secondary-desc max-w-sm text-ellipsis">
                {subItem.description}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );

  // const NavLinks = ({ onClick }) => (
  //   <>
  //     {NavItems.map((item) => (
  //       <a
  //         href={item.path}
  //         onClick={onClick}
  //         key={item.name}
  //         className="block px-4 py-2 text-dispute-color hover:text-accent btn-transition text-lg md:text-base md:px-0 md:py-0"
  //       >
  //         {item.name}
  //       </a>
  //     ))}
  //   </>
  // );

  if (!mounted) {
    return (
      <header className="bg-card text-dispute-color p-4 flex justify-between items-center shadow-sm text-sm">
        <div className="flex items-center space-x-4">
          <div>
            <img
              src="/images/logo.png"
              className="w-12 h-12"
              alt={t("appName")}
            />
          </div>
          <h1 className="text-xl font-bold text-accent">{t("appName")}</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-xl bg-sub-card btn-transition text-dispute-color">
            <BarChart2 size={18} />
          </button>
          <button className="p-2 rounded-xl bg-sub-card btn-transition text-dispute-color">
            <Sun size={20} />
          </button>
        </div>
      </header>
    );
  }

  return (
    <>
    {activeNavDropdown && (
        <div
          className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-10 z-10"
          onClick={() => setActiveNavDropdown(null)}
        />
      )}
    <header className="bg-card text-dispute-color border-b border-custom-border p-2 px-4 sticky top-0 z-50 text-sm">
      <div className=" w-full flex justify-between items-center h-12">
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt={t("appName")}
              className="w-8 h-8 object-contain"
            />
            <span className="text-lg font-bold text-gradient hidden sm:inline">
              {t("appName")}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 ">
            {NavItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
                ref={(el) => (navDropdownRefs.current[item.name] = el)}
              >
                <a
                  href={item.path}
                  className={`flex items-center px-2 py-1 font-medium hover:text-accent btn-transition ${
                    activeNavDropdown === item.name
                      ? "text-accent"
                      : "text-dispute-color"
                  }`}
                  onClick={(e) => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setActiveNavDropdown(
                        activeNavDropdown === item.name ? null : item.name
                      );
                    }
                  }}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      size={14}
                      className={`ml-1 transition-transform duration-200 ${
                        activeNavDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
                {item.dropdown && activeNavDropdown === item.name && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-[19px] w-[550px] bg-card rounded-b-xl border-b border-custom-border shadow-md p-4 z-20 grid grid-cols-2 gap-4 animate-fade-in-up"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.dropdown.basic && item.dropdown.basic.length > 0 && (
                      <div className="col-span-1 border-r border-custom-border pr-4">
                        <DropdownSection
                          title={t("basic")}
                          items={item.dropdown.basic}
                        />
                      </div>
                    )}
                    {item.dropdown.advanced &&
                      item.dropdown.advanced.length > 0 && (
                        <div className="col-span-1 pl-4">
                          <DropdownSection
                            title={t("advanced")}
                            items={item.dropdown.advanced}
                          />
                        </div>
                      )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <ToggleLanguage />
          <ToggleTheme />

          {/* User/Auth section - example buttons (visible on desktop) */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <a
              href="/signin"
              className="px-4 py-2 rounded-xl bg-gradient text-white hover:bg-gradient-teal-hover btn-transition text-sm font-medium shadow-glow hover:shadow-glow-hover"
            >
              {t("login")}
            </a>
            <a
              href="/signup"
              className="px-4 py-2 rounded-xl border border-accent hover:bg-accent hover:text-white btn-transition text-sm font-medium"
            >
              {t("signup")}
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-sub-card text-dispute-color hover:bg-pre-bg btn-transition"
            aria-label={t("toggleMenu")}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-12 left-0 w-full bg-card border-t border-custom-border shadow-lg transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {NavItems.map((item) => (
            <div key={item.name} className="flex flex-col">
              <a
                href={item.path}
                className={`flex items-center px-2 py-1 font-medium hover:text-accent btn-transition ${
                  activeNavDropdown === item.name
                    ? "text-accent"
                    : "text-dispute-color"
                }`}
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    setActiveNavDropdown(
                      activeNavDropdown === item.name ? null : item.name
                    );
                  }
                }}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={14}
                    className={`ml-1 transition-transform duration-200 ${
                      activeNavDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>
              {item.dropdown && activeNavDropdown === item.name && (
                <div className="pl-4 pt-2 space-y-1 bg-sub-card rounded-lg mt-1 pb-2">
                  {item.dropdown.basic && item.dropdown.basic.length > 0 && (
                    <DropdownSection
                      title={t("basic")}
                      items={item.dropdown.basic}
                    />
                  )}
                  {item.dropdown.advanced &&
                    item.dropdown.advanced.length > 0 && (
                      <DropdownSection
                        title={t("advanced")}
                        items={item.dropdown.advanced}
                      />
                    )}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-custom-border mt-4 flex flex-col space-y-2">
            <ToggleLanguage />
            <ToggleTheme />

            <div className="flex flex-col space-y-2 pt-4 border-t border-custom-border mt-4">
              <a
                href="/signin"
                className="w-full px-4 py-2 rounded-xl bg-accent text-white hover:bg-gradient-teal-hover btn-transition text-lg font-medium shadow-glow hover:shadow-glow-hover"
              >
                {t("login")}
              </a>
              <a
                href="/signup"
                className="w-full px-4 py-2 rounded-xl border border-accent text-accent hover:bg-accent hover:text-white btn-transition text-lg font-medium"
              >
                {t("signup")}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
