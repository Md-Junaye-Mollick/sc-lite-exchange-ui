import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Book, Shield, CreditCard, TrendingUp, HelpCircle, Users } from 'lucide-react';

const SupportHero = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('supportHero.categories.all'), icon: Book },
    { id: 'trading', name: t('supportHero.categories.trading'), icon: TrendingUp },
    { id: 'security', name: t('supportHero.categories.security'), icon: Shield },
    { id: 'deposits', name: t('supportHero.categories.deposits'), icon: CreditCard },
    { id: 'account', name: t('supportHero.categories.account'), icon: Users },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center space-x-2">
                <HelpCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-yellow-500 font-medium">
                  {t('supportHero.badge')}
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                {t('supportHero.title')}
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('supportHero.subtitle')}
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('supportHero.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-xl border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                      : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportHero;