import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className=" bg-[#1e1f1f] h-max min-h-screen text-[#d0d1d1]">
      <div className=" p-4 max-w-[1340px] mx-auto h-max min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
