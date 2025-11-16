import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, TrendingUp, Grid3x3, BookOpen, GitMerge, RefreshCw, DollarSign } from 'lucide-react';

const BotAcademy = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('futuresGrid');

  const tabs = [
    { key: 'tradingEssentials', label: t('botAcademy.tabs.tradingEssentials') },
    { key: 'spotGrid', label: t('botAcademy.tabs.spotGrid') },
    { key: 'futuresGrid', label: t('botAcademy.tabs.futuresGrid') },
    { key: 'futuresDCA', label: t('botAcademy.tabs.futuresDCA') },
    { key: 'arbitrage', label: t('botAcademy.tabs.arbitrage') },
    { key: 'rebalancingBot', label: t('botAcademy.tabs.rebalancingBot') },
    { key: 'spotDCA', label: t('botAcademy.tabs.spotDCA') },
    { key: 'algoOrder', label: t('botAcademy.tabs.algoOrder') }
  ];

  const articlesData = t('botAcademy.articles', { returnObjects: true }) || [];
  const articles = Array.isArray(articlesData) ? articlesData : [];

  const articleIcons = [
    <Grid3x3 className="w-12 h-12 text-yellow-500" />,
    <TrendingUp className="w-12 h-12 text-yellow-500" />,
    <BookOpen className="w-12 h-12 text-yellow-500" />,
    <RefreshCw className="w-12 h-12 text-yellow-500" />,
    <GitMerge className="w-12 h-12 text-yellow-500" />,
    <DollarSign className="w-12 h-12 text-yellow-500" />
  ];

  return (
    <section className="py-16 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h1 className="w-fit text-3xl font-bold text-gradient mb-8">
          {t('botAcademy.title')}
        </h1>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                activeTab === tab.key
                  ? 'text-dispute-color border-b-2 border-yellow-500'
                  : 'text-secondary-desc hover:text-dispute-color'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-sub-card border border-custom-border rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex gap-4 p-4">
                <div className="flex-shrink-0 w-32 h-32 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-custom-border flex items-center justify-center">
                  {articleIcons[index]}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-dispute-color mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-secondary-desc line-clamp-2">
                      {article.description}
                    </p>
                  </div>

                  <button className="flex items-center gap-1 text-sm text-yellow-500 hover:text-yellow-400 transition-colors mt-3 group-hover:gap-2">
                    {t('botAcademy.learnMore')}
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default BotAcademy;