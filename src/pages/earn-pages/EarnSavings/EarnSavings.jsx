import React from 'react';
import EarnSavingHero from '../../../components/earn-sections/earn-savings-section/EarnSavingHero';
import StatsSection from '../../../components/earn-sections/earn-savings-section/StatsSection';
import SavingPlan from '../../../components/earn-sections/earn-savings-section/SavingPlan';
import SavingsCalculator from '../../../components/earn-sections/earn-savings-section/SavingsCalculator';
import AvalivleCrypto from '../../../components/earn-sections/earn-savings-section/AvalivleCrypto';
import CTA from '../../../components/landing-sections/CTA';

const Savings = () => {
  return (
    <div>
        <EarnSavingHero/>
        <StatsSection/>
        <SavingPlan/>
        <SavingsCalculator/>
        <AvalivleCrypto/>
        <CTA/>
    </div>
  )
}

export default Savings;