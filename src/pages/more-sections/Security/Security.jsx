import React from 'react';
import SecurityHero from '../../../components/more-sections/security-sections/SecurityHero';
import SecurityFeautures from '../../../components/more-sections/security-sections/SecurityFeautures';
import SecurityCertifiacates from '../../../components/more-sections/security-sections/SecurityCertifiacates';
import SecurityTips from '../../../components/more-sections/security-sections/SecurityTips';
import CTA from '../../../components/landing-sections/CTA';

const Security = () => {
  return (
    <div>
        <SecurityHero/>
        <SecurityFeautures/>
        <SecurityCertifiacates/>
        <SecurityTips/>
        <CTA/>
    </div>
  )
}

export default Security;