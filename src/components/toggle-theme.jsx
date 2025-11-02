import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { Sun, Moon, MoonStar, Check } from "lucide-react";
 
const ToggleTheme = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  const getCurrentThemeIcon = () => {
    if (!mounted) return <Sun size={20} />;
    switch (theme) {
      case "light":
        return <Sun size={20} />;
      case "dark":
        return <Moon size={20} />;
      case "dim":
        return <MoonStar size={20} />;
      default:
        return <Sun size={20} />;
    }
  };

  if (!mounted) {
    return (
      <button className="flex items-center p-2 rounded-xl bg-sub-card btn-transition text-dispute-color">
        <Sun size={20} />
      </button>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded-xl bg-sub-card btn-transition text-dispute-color"
        aria-label={t("selectTheme")}
      >
        {getCurrentThemeIcon()}
        {/* <ChevronDown
          size={16}
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        /> */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-card rounded-xl shadow-lg space-y-1 z-10 border border-custom-border overflow-hidden">
          <button
            onClick={() => handleThemeChange("light")}
            className="flex items-center w-full text-left px-4 py-2 hover:text-accent hover:bg-sub-card text-sm btn-transition"
          >
            <Sun size={18} className="mr-2" /> Light
            {theme === "light" && (
              <Check size={16} className="ml-auto text-accent" />
            )}
          </button>
          <button
            onClick={() => handleThemeChange("dark")}
            className="flex items-center w-full text-left px-4 py-2 hover:text-accent hover:bg-sub-card text-sm btn-transition"
          >
            <Moon size={18} className="mr-2" /> Dark
            {theme === "dark" && (
              <Check size={16} className="ml-auto text-accent" />
            )}
          </button>
          <button
            onClick={() => handleThemeChange("dim")}
            className="flex items-center w-full text-left px-4 py-2 hover:text-accent hover:bg-sub-card text-sm btn-transition"
          >
            <MoonStar size={18} className="mr-2" /> Dim
            {theme === "dim" && (
              <Check size={16} className="ml-auto text-accent" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;
