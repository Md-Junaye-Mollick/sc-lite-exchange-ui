import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown, Check } from "lucide-react";

const ToggleLanguage = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const availableLanguages = [
    { code: "en", name: "English" },
    { code: "bn", name: "বাংলা" },
  ];

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  const getCurrentLangName = () => {
    const currentLang = availableLanguages.find(
      (lang) => lang.code === i18n.language
    );
    return currentLang ? currentLang.name : "Unknown";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded-xl bg-sub-card btn-transition text-dispute-color"
        aria-label={t("selectLanguage")}
      >
        <Globe size={18} className="mr-0 sm:mr-2" />
        <span className="hidden sm:inline">{getCurrentLangName()}</span>
        {/* <ChevronDown size={16} className={`ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} /> */}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-card rounded-xl shadow-lg space-y-1 z-10 border border-custom-border overflow-hidden">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLangChange(lang.code)}
              className="flex items-center w-full text-left px-4 py-2 hover:text-accent hover:bg-sub-card text-sm btn-transition"
            >
              {lang.name}
              {i18n.language === lang.code && (
                <Check size={16} className="ml-auto text-accent" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToggleLanguage;
