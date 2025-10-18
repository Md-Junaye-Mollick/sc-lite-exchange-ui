import React from "react";
import { Route, Routes } from "react-router";
// import LandingPage from "../pages/landing-page";
import MainLayout from "../components/layouts/main-layout";
import SpotTradingPage from "../pages/trading-pages/spot-trading-page";
import SignInPage from "../pages/auth-pages/signin-page";
import SignUpPage from "../pages/auth-pages/signup-page";

const RoutesPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        {/* please add the landing page for "/" path */}
        {/* <Route path="/" element={<LandingPage />} />  */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/trade/*" element={<MainLayout />}>
          <Route path="spot" element={<SpotTradingPage />} />
        </Route>
        {/* <Route path="/market/*" element={<MainLayout />}>
          <Route path="overview" element={}/>
        </Route> */}
      </Routes>
    </>
  );
};

export default RoutesPage;
