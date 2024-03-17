import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState } from "../state/atoms/authState";
import axios from "axios";

const Header = () => {
  const [isLoggedInState, setIsLoggedInState] = useRecoilState(authState);

  const checkToken = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.post("http://localhost:3000/auth/profile", {
      token,
    });
    // console.log(response.data);
    setIsLoggedInState({
      token: null,
      name: response.data.decode.name,
      email: response.data.decode.email,
    });
  };

  useEffect(() => {
    checkToken();
  }, []);

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
          <Link to="/analyze">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">Analyze</div>
          </Link>
          <Link to="/about">
            <div className=" hover:bg-[#3c3d3d] px-2 rounded py-1">
              About us
            </div>
          </Link>
          <Link to="/register">
            {isLoggedInState.name ? (
              <div className="bg-[#f7f8f7] text-[#1e1f1f] px-2 py-1 rounded-md hover:bg-[#aeb2b2]">
                {isLoggedInState.name}
              </div>
            ) : (
              <div className="bg-[#f7f8f7] text-[#1e1f1f] px-2 py-1 rounded-md hover:bg-[#aeb2b2]">
                Login | Register
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
