import React from 'react';
import SupportHero from '../../../components/more-sections/SupportSections/SupportHero';
import SupportContact from '../../../components/more-sections/SupportSections/SupportContact';
import SupportFaq from '../../../components/more-sections/SupportSections/SupportFaq';
import QuickLinks from '../../../components/more-sections/SupportSections/QuickLinks';


const Support = () => {
  return (
    <div>
        <SupportHero/>
        <SupportContact/>
        <SupportFaq/>
        <QuickLinks/>
    </div>
  )
}

export default Support;