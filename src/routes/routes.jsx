import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/layouts/main-layout";
import LandingPage from "../pages/landing-page";
import BuyCrypto from "../pages/buy-crypto";
import SpotTradingPage from "../pages/trading-pages/spot-trading-page";
import SignInPage from "../pages/auth-pages/signin-page";
import SignUpPage from "../pages/auth-pages/signup-page";
import Demo from "../components/demo";

const RoutesPage = () => {
  return (
    <Routes>
      {/* Sign In */}
      <Route path="/" element={<SignInPage />} />
      
      {/* Landing Page */}
      <Route path="/landing" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* Buy Crypto Page */}
      <Route path="/buy-crypto" element={<MainLayout />}>
        <Route index element={<BuyCrypto />} />
      </Route>
      
      {/* Trading pages */}
      <Route path="/trade/*" element={<MainLayout />}>
        <Route path="spot" element={<SpotTradingPage />} />
      </Route>

      {/* Auth */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      <Route path="/Demo" element={<Demo />} />
    </Routes>
  );
};

export default RoutesPage;