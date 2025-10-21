import React from 'react';
import AboutUsHero from '../../components/aboutus-sections/AboutUsHero';
import AboutUsMIssion from '../../components/aboutus-sections/AboutUsMIssion';
import WhyChoseUs from '../../components/aboutus-sections/WhyChoseUs';
import TimeLine from '../../components/aboutus-sections/TimeLine';
import FAQ from '../../components/landing-sections/FAQ';
import CTA from '../../components/landing-sections/CTA';

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