import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search, Plus, ExternalLink } from 'lucide-react';

const currencyIcons = {
  'AED': '🇦🇪',
  'AMD': '🇦🇲',
  'AUD': '🇦🇺',
  'AZN': '🇦🇿',
  'INR': '🇮🇳'
};

const DepositHero = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  const currencies = t('deposit.currencies', { returnObjects: true });
  const faqList = t('deposit.faqList', { returnObjects: true });
  const [selected, setSelected] = useState(currencies[0]);

  const filtered = currencies.filter(c =>
    c.code.toLowerCase().includes(search.toLowerCase()) ||
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="w-fit text-2xl sm:text-3xl font-bold text-gradient mb-6">
          {t('deposit.title')}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border shadow-lg">

            {/* Currency Selector */}
            <div className="mb-6">
              <label className="text-sm text-secondary-desc mb-2 block">
                {t('deposit.currency')}
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full flex items-center justify-between bg-pre-bg border border-custom-border rounded-xl p-4 hover:bg-card transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{currencyIcons[selected.code]}</span>
                    <div className="text-left">
                      <p className="font-semibold text-dispute-color">{selected.code}</p>
                      <p className="text-sm text-secondary-desc">{selected.name}</p>
                    </div>
                  </div>
                  <ChevronDown className="w-5 h-5 text-secondary-desc" />
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute mt-2 w-full bg-card rounded-xl border border-custom-border shadow-2xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-custom-border">
                      <div className="flex items-center gap-2 bg-pre-bg rounded-lg px-3 py-2">
                        <Search className="w-4 h-4 text-secondary-desc" />
                        <input
                          type="text"
                          placeholder={t('deposit.search')}
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="bg-transparent outline-none text-sm flex-1 text-dispute-color"
                        />
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      <p className="text-xs text-secondary-desc px-3 py-2">
                        {t('deposit.recommended')}
                      </p>
                      <button
                        onClick={() => {
                          setSelected(currencies[0]);
                          setShowDropdown(false);
                          setSearch('');
                        }}
                        className="w-full flex items-center gap-3 p-3 transition-colors"
                      >
                        <span className="text-2xl">{currencyIcons[currencies[0].code]}</span>
                        <div className="text-left">
                          <p className="font-semibold text-dispute-color">{currencies[0].code}</p>
                          <p className="text-xs text-secondary-desc">{currencies[0].name}</p>
                        </div>
                      </button>
                      <p className="text-xs text-secondary-desc px-3 py-2 mt-2">
                        {t('deposit.allCurrencies')}
                      </p>
                      {filtered.map((currency) => (
                        <button
                          key={currency.code}
                          onClick={() => {
                            setSelected(currency);
                            setShowDropdown(false);
                            setSearch('');
                          }}
                          className="w-full flex items-center gap-3 p-3 hover:bg-pre-bg transition-colors"
                        >
                          <span className="text-2xl">{currencyIcons[currency.code]}</span>
                          <div className="text-left">
                            <p className="font-semibold text-dispute-color">{currency.code}</p>
                            <p className="text-xs text-secondary-desc">{currency.name}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Pay With */}
            <div className="mb-6">
              <label className="text-sm text-secondary-desc mb-2 block">
                {t('deposit.payWith')}
              </label>
              <div className="bg-pre-bg border border-custom-border rounded-xl p-4 cursor-pointer hover:bg-card transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-card border border-custom-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">👥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dispute-color mb-1">
                      {t('deposit.p2pExpress')}
                    </p>
                    <p className="text-sm text-secondary-desc">
                      {t('deposit.buyOnBinance')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-gradient text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover">
              {t('deposit.continue')}
            </button>
          </div>

          {/* Right Panel - FAQ */}
          <div>
            <h2 className="text-xl font-bold text-dispute-color mb-4">
                {t('deposit.faq')}
            </h2>
            <div className="space-y-3">
                {faqList.map((item) => (
                <div key={item.id}>
                    <div
                    onClick={() =>
                        setExpandedFaq(expandedFaq === item.id ? null : item.id)
                    }
                    className={`bg-sub-card border border-custom-border rounded-xl p-4 flex items-center justify-between hover:bg-card transition-colors cursor-pointer ${
                      expandedFaq === item.id ? 'rounded-b-none' : ''
                    }`}
                    >
                    <div className="flex items-center gap-3 flex-1">
                        <span className="text-secondary-desc font-semibold text-sm">
                        {item.id}
                        </span>
                        <p className="text-dispute-color text-sm">
                        {item.question}
                        </p>
                    </div>
                    {item.isExternal ? (
                        <ExternalLink className="w-5 h-5 text-secondary-desc flex-shrink-0 ml-2" />
                    ) : (
                        <Plus
                        className={`w-5 h-5 text-secondary-desc flex-shrink-0 ml-2 transform transition-transform duration-300 ${
                            expandedFaq === item.id ? 'rotate-45' : ''
                        }`}
                        />
                    )}
                    </div>

                    {/* FAQ Answer (Visible When Expanded) */}
                    {!item.isExternal && expandedFaq === item.id && (
                    <div className="bg-sub-card border border-custom-border border-t-0 rounded-b-xl p-4 text-sm text-secondary-desc">
                        {item.answer}
                    </div>
                    )}
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositHero;