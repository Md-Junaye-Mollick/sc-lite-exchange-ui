import React from 'react'
import TradingBotsHero from '../../../components/trade-sections/TradingBots-sections/TradingBotsHero';
import TradingBotsCards from '../../../components/trade-sections/TradingBots-sections/TradingBotsCards';
import BotMarketplace from '../../../components/trade-sections/TradingBots-sections/BotMarketplace';
import BotLeaderboard from '../../../components/trade-sections/TradingBots-sections/BotLeaderboard';
import BotFeatures from '../../../components/trade-sections/TradingBots-sections/BotFeatures';
import BotAcademy from '../../../components/trade-sections/TradingBots-sections/BotAcademy';
import BotFaq from '../../../components/trade-sections/TradingBots-sections/BotFaq';

const TradingBots = () => {
  return (
    <div>
      <TradingBotsHero/>
      <TradingBotsCards/>
      <BotMarketplace/>
      <BotLeaderboard/>
      <BotFeatures/>
      <BotAcademy/>
      <BotFaq/>
    </div>
  )
}

export default TradingBots;