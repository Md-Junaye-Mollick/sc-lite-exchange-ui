import React from 'react'
import P2PTradingHero from '../../../components/trade-sections/P2PTrading-section/P2PTradingHero';
import HowP2PWorks from '../../../components/trade-sections/P2PTrading-section/HowP2PWorks';
import AdvantagesP2P from '../../../components/trade-sections/P2PTrading-section/AdvantagesP2P';
import P2PBlog from '../../../components/trade-sections/P2PTrading-section/P2PBlog';
import PaymentMethods from '../../../components/trade-sections/P2PTrading-section/PaymentMethods';
import P2PFaqs from '../../../components/trade-sections/P2PTrading-section/P2PFaqs';

const P2PTrading = () => {
  return (
    <div>
      <P2PTradingHero/>
      <HowP2PWorks/>
      <AdvantagesP2P/>
      <P2PBlog/>
      <PaymentMethods/>
      <P2PFaqs/>
    </div>
  )
}

export default P2PTrading;