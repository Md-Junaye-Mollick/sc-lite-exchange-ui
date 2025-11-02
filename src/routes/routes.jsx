import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../components/layouts/main-layout";
import LandingPage from "../pages/landing-page";
import BuyCrypto from "../pages/buy-crypto";
import Markets from "../pages/market-page";
import SpotTradingPage from "../pages/trading-pages/spot-trading-page";
import SignInPage from "../pages/auth-pages/signin-page";
import SignUpPage from "../pages/auth-pages/signup-page";
import Demo from "../components/demo";
import SettingLayout from "../Setting/SettingComponents/SettingLayout/SettingLayout";
import Dashboard from "../Setting/SettingPage/Dashboard/Dashboard";
import Overview from "../Setting/SettingPage/AssetsPage/Overview/Overview";
import SettingSpot from "../Setting/SettingPage/AssetsPage/SettingSpot/SettingSpot";
import Margin from "../Setting/SettingPage/AssetsPage/Margin/Margin";
import SCLiteTr from "../Setting/SettingPage/AssetsPage/Wallet/SCLiteTr";
import TokoCrypto from "../Setting/SettingPage/AssetsPage/Wallet/TokoCrypto";
import SCLiteTh from "../Setting/SettingPage/AssetsPage/Wallet/SCLiteTh";
import AssetsHistory from "../Setting/SettingPage/Orders/AssetsHistory/AssetsHistory";
import SpotOrder from "../Setting/SettingPage/Orders/SpotOrder/SpotOrder";
import P2POrder from "../Setting/SettingPage/Orders/P2POrder/P2POrder";
import About from "../pages/more-sections/About/About";
import AboutUsDemo from "../components/more-sections/aboutus-sections/AboutUsDemo";
import SupportDemo from "../components/more-sections/SupportSections/SupportDemo";
import Support from "../pages/more-sections/Support/Support";
import SecurityDemo from "../components/more-sections/security-sections/SecurityDemo";
import Security from "../pages/more-sections/Security/Security";

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

      {/* Markets Page */}
      <Route path="/markets" element={<MainLayout />}>
        <Route index element={<Markets />} />
      </Route>
      
      {/* Trading pages */}
      <Route path="/trade/*" element={<MainLayout />}>
        <Route path="spot" element={<SpotTradingPage />} />
      </Route>
      
      {/* About Page  */}
      <Route path="/AboutUs" element={<MainLayout />}>
        <Route index element={<About />} />
      </Route>

      {/* Security Page  */}
      <Route path="/Security" element={<MainLayout />}>
        <Route index element={<Security />} />
      </Route>

      {/* Support Page  */}
      <Route path="/Support" element={<MainLayout />}>
        <Route index element={<Support />} />
      </Route>

      {/* Auth */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Setting Pages */}
      <Route path="/setting" element={<SettingLayout />}>
        <Route index element={<Dashboard />} />           
        <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="/assets" element={<SettingLayout />}>
        <Route path="overview" element={<Overview />} />
        <Route path="spot" element={<SettingSpot />} />
        <Route path="margin" element={<Margin />} />
        <Route path="wallet/sc-lite-tr" element={<SCLiteTr />} />
        <Route path="wallet/tokocrypto" element={<TokoCrypto />} />
        <Route path="wallet/sc-lite-th" element={<SCLiteTh />} />
      </Route>
      
      <Route path="/orders" element={<SettingLayout />}>
        <Route path="history" element={<AssetsHistory />} />
        <Route path="spot" element={<SpotOrder />} />
        <Route path="p2p" element={<P2POrder />} />
      </Route>

      {/* Demo Pages */}
      <Route path="/Demo" element={<Demo />} />
      <Route path="/AboutUsDemo" element={<AboutUsDemo />} />
      <Route path="/SupportDemo" element={<SupportDemo />} />
      <Route path="/SecurityDemo" element={<SecurityDemo />} />
    </Routes>
  );
};

export default RoutesPage;