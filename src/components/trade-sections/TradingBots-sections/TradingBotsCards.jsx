import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TrendingUp, BarChart3, DollarSign, Zap, RefreshCcw, GitBranch, Target, Split, Calendar, FileText } from 'lucide-react';

const TradingBotsCards = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: t('tradingBotsCard.tabs.all') },
    { id: 'algos', label: t('tradingBotsCard.tabs.algos') },
    { id: 'sideways', label: t('tradingBotsCard.tabs.sideways') },
    { id: 'bullish', label: t('tradingBotsCard.tabs.bullish') },
    { id: 'bearish', label: t('tradingBotsCard.tabs.bearish') }
  ];

  const bots = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.spotGrid.title'),
      description: t('tradingBotsCard.bots.spotGrid.description'),
      category: 'algos'
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.futuresGrid.title'),
      description: t('tradingBotsCard.bots.futuresGrid.description'),
      category: 'algos'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.futuresDCA.title'),
      description: t('tradingBotsCard.bots.futuresDCA.description'),
      category: 'bullish'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.arbitrageBot.title'),
      description: t('tradingBotsCard.bots.arbitrageBot.description'),
      category: 'sideways'
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.rebalancingBot.title'),
      description: t('tradingBotsCard.bots.rebalancingBot.description'),
      category: 'sideways'
    },
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.spotDCA.title'),
      description: t('tradingBotsCard.bots.spotDCA.description'),
      category: 'bullish'
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.algoOrder.title'),
      description: t('tradingBotsCard.bots.algoOrder.description'),
      category: 'algos'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.futuresTWAP.title'),
      description: t('tradingBotsCard.bots.futuresTWAP.description'),
      category: 'algos'
    },
    {
      icon: <Split className="w-8 h-8" />,
      title: t('tradingBotsCard.bots.futuresVP.title'),
      description: t('tradingBotsCard.bots.futuresVP.description'),
      category: 'bearish'
    }
  ];

  const filteredBots = activeTab === 'all' 
    ? bots 
    : bots.filter(bot => bot.category === activeTab);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header with Tabs and Daily Picks */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex gap-6 sm:gap-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-dispute-color'
                    : 'text-secondary-desc hover:text-dispute-color'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient" />
                )}
              </button>
            ))}
          </div>

          {/* Daily Picks Button */}
          <div className="flex gap-3">
            <button className="p-2 sm:p-2.5 bg-sub-card border border-custom-border rounded-lg text-secondary-desc hover:text-dispute-color hover:border-accent/50 transition-all">
              <FileText className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 sm:py-2.5 bg-sub-card border border-custom-border rounded-lg text-dispute-color hover:border-accent/50 transition-all">
              <Calendar className="w-5 h-5" />
              <span className="text-sm sm:text-base font-medium">{t('tradingBotsCard.dailyPicks')}</span>
            </button>
          </div>
        </div>

        {/* Bot Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {filteredBots.map((bot, index) => (
            <div
              key={index}
              className="bg-sub-card backdrop-blur-xl border border-custom-border rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4 sm:mb-5">
                <div className="text-secondary-desc group-hover:text-dispute-color transition-colors">
                  {bot.icon}
                </div>
              </div>
              <h3 className="text-dispute-color text-base sm:text-lg font-semibold mb-2 sm:mb-3">
                {bot.title}
              </h3>
              <p className="text-secondary-desc text-xs sm:text-sm leading-relaxed">
                {bot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingBotsCards;