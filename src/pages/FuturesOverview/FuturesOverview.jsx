import React from 'react';
import FuturesHero from '../../components/futures-sections/futures-overview-sections/FuturesHero';
import ContractTypes from '../../components/futures-sections/futures-overview-sections/ContractTypes';
import FuturesMarketData from '../../components/futures-sections/futures-overview-sections/FuturesMarketData';
import FuturesInformation from '../../components/futures-sections/futures-overview-sections/FuturesInformation';

const FuturesOverview = () => {
  return (
    <div>
      <FuturesHero/>
      <ContractTypes/>
      <FuturesMarketData/>
      <FuturesInformation/>
    </div>
  )
}

export default FuturesOverview;