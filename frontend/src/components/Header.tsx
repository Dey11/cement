import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center text-lg font-semibold">
        <Link to="/">
          <div className="text-2xl font-bold">Logo</div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">Home</div>
          </Link>
          <Link to="/abstract">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">
              Abstract
            </div>
          </Link>
          <Link to="/model">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">Analyze</div>
          </Link>
          <Link to="/about">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">
              About us
            </div>
          </Link>
          <Link to="/register">
            <div className="bg-[#f7f8f7] text-[#1e1f1f] px-2 py-1 rounded-md hover:bg-[#aeb2b2]">
              Register
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
