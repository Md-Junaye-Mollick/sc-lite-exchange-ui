import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Search, Plus, ExternalLink } from 'lucide-react';

const currencyIcons = {
  'AED': '🇦🇪',
  'AMD': '🇦🇲',
  'AUD': '🇦🇺',
  'AZN': '🇦🇿',
  'INR': '🇮🇳',
};

const WithdrawHero = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [search, setSearch] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const currencies = t('withdraw.currencies', { returnObjects: true });
  const faqList = t('withdraw.faqList', { returnObjects: true });

  const [selected, setSelected] = useState(currencies[0]);

  const filtered = currencies.filter(
    (c) =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="relative pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="w-fit text-2xl sm:text-3xl font-bold text-gradient mb-6">
          {t('withdraw.title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel */}
          <div className="bg-sub-card backdrop-blur-xl rounded-2xl p-6 border border-custom-border shadow-lg">
            {/* Currency Selector */}
            <div className="mb-6">
              <label className="text-sm text-secondary-desc mb-2 block">
                {t('withdraw.currency')}
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
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-secondary-desc">{t('withdraw.balance')}</p>
                      <p className="text-sm text-dispute-color font-medium">₼0.00</p>
                    </div>
                    <ChevronDown className="w-5 h-5 text-secondary-desc" />
                  </div>
                </button>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute mt-2 w-full bg-card rounded-xl border border-custom-border shadow-2xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-custom-border">
                      <div className="flex items-center gap-2 bg-pre-bg rounded-lg px-3 py-2">
                        <Search className="w-4 h-4 text-secondary-desc" />
                        <input
                          type="text"
                          placeholder={t('withdraw.search')}
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="bg-transparent outline-none text-sm flex-1 text-dispute-color"
                        />
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
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

            {/* Receive Method */}
            <div className="mb-6">
              <label className="text-sm text-secondary-desc mb-2 block">
                {t('withdraw.receiveMethod')}
              </label>
              <div className="bg-pre-bg border border-custom-border rounded-xl p-4 cursor-pointer hover:bg-card transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-card border border-custom-border rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-cyan-400">m10</span>
                  </div>
                  <div>
                    <p className="font-semibold text-dispute-color">m10</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <button className="w-full bg-gradient text-white py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-glow hover:shadow-glow-hover">
              {t('withdraw.continue')}
            </button>
          </div>

          {/* Right Panel - FAQ */}
          <div>
            <h2 className="text-xl font-bold text-dispute-color mb-4">
              {t('withdraw.faq')}
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
                      <p className="text-dispute-color text-sm">{item.question}</p>
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

                  {/* FAQ Answer */}
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

export default WithdrawHero;