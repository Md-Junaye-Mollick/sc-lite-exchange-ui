import React from 'react';
import BuySellHero from './BuySellHero';
import HowToBuy from './HowToBuy';
import TetherMarkets from './TetherMarkets';
import PopularTether from './PopularTether';

const BuySell = () => {
  return (
    <div>
      <BuySellHero/>
      <HowToBuy/>
      <TetherMarkets/>
      <PopularTether/>
    </div>
  )
}

export default BuySell;