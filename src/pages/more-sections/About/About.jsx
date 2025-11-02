import React from 'react';
import AboutUsHero from '../../../components/more-sections/aboutus-sections/AboutUsHero';
import AboutUsMIssion from '../../../components/more-sections/aboutus-sections/AboutUsMIssion';
import WhyChoseUs from '../../../components/more-sections/aboutus-sections/WhyChoseUs';
import TimeLine from '../../../components/more-sections/aboutus-sections/TimeLine';
import FAQ from '../../../components/landing-sections/FAQ';
import CTA from '../../../components/landing-sections/CTA';

const About = () => {
  return (
    <div>
        <AboutUsHero/>
        <AboutUsMIssion/>
        <WhyChoseUs/>
        <TimeLine/>
        <FAQ/>
        <CTA/>
    </div>
  )
}

export default About;