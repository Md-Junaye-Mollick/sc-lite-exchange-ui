import React from 'react';
import EarnHero from '../../../components/earn-sections/earn-staking-section/EarnHero';
import FeaturesSection from '../../../components/earn-sections/earn-staking-section/FeaturesSection';
import StakingPlan from '../../../components/earn-sections/earn-staking-section/StakingPlan';
import BenefitsSection from '../../../components/earn-sections/earn-staking-section/BenefitsSection';
import EarnFAQ from '../../../components/earn-sections/earn-staking-section/EarnFAQ';
import CTA from '../../../components/landing-sections/CTA';

const EarnStakings = () => {
  return (
    <div>
        <EarnHero/>
        <FeaturesSection/>
        <StakingPlan/>
        <BenefitsSection/>
        <EarnFAQ/>
        <CTA/>
    </div>
  )
}

export default EarnStakings;