import React from "react";
import HeroSection from "../../components/landing-sections/HeroSection";
import StatsSection from "../../components/landing-sections/StatsSection";
import FeaturesSection from "../../components/landing-sections/FeaturesSection";
import Testimonials from "../../components/landing-sections/Testimonials";
import MobileApp from "../../components/landing-sections/MobileApp";
import FAQ from "../../components/landing-sections/FAQ";
import CTA from "../../components/landing-sections/CTA";

const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <StatsSection/>
      <FeaturesSection/>
      <Testimonials/>
      <MobileApp/>
        <FAQ/>
        <CTA/>
    </>
  );
};

export default LandingPage;