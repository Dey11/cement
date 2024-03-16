import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className=" bg-[#1e1f1f] h-max min-h-screen text-[#d0d1d1]">
      <div className=" p-4 max-w-[1340px] mx-auto">
        <Header />
        {/* <div className="text-2xl font-bold">Logo</div> */}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
