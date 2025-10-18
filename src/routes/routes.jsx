import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/layouts/main-layout";
import SpotTradingPage from "../pages/trading-pages/spot-trading-page";
import SignInPage from "../pages/auth-pages/signin-page";
import SignUpPage from "../pages/auth-pages/signup-page";
import LandingPage from "../pages/landing-page";

const RoutesPage = () => {
  return (
    <Routes>
      {/* Sign In */}
      <Route path="/" element={<SignInPage />} />
      
      {/* Landing page wrapped with layout */}
      <Route path="/landing" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
      
      {/* Auth */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Trading pages */}
      <Route path="/trade/*" element={<MainLayout />}>
        <Route path="spot" element={<SpotTradingPage />} />
      </Route>
    </Routes>
  );
};

export default RoutesPage;