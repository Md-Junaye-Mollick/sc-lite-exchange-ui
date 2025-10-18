import React from "react";
import { Outlet } from "react-router";
import Header from "../header";
import Footer from "../footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen text-dispute-color ">
      <Header />
      <main className="min-h-screen h-full mx-auto p-4 bg-pre-bg ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
