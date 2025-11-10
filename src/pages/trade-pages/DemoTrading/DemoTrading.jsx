import React from 'react';
import DemotradingHero from '../../../components/trade-sections/Demotrading-sections/DemotradingHero';
import DemotrandingStats from '../../../components/trade-sections/Demotrading-sections/DemotrandingStats';
import DemoTradingFeaututes from '../../../components/trade-sections/Demotrading-sections/DemoTradingFeaututes';
import TradingAssests from '../../../components/trade-sections/Demotrading-sections/TradingAssests';
import HowItWorks from '../../../components/trade-sections/Demotrading-sections/HowItWorks';
import CTA from '../../../components/landing-sections/CTA';
import FAQ from '../../../components/landing-sections/FAQ';
import Testimonials from '../../../components/landing-sections/Testimonials';
import Pricing from '../../../components/trade-sections/Demotrading-sections/Pricing';

const DemoTrading = () => {
  return (
    <div>
        <DemotradingHero/>
        <DemotrandingStats/>
        <DemoTradingFeaututes/>
        <TradingAssests/>
        <HowItWorks/>
        <Testimonials/>
        <Pricing/>
        <FAQ/>
        <CTA/>
    </div>
  )
}

export default DemoTrading;