import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authState } from "../state/atoms/authState";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const [isLoggedInState, setIsLoggedInState] = useRecoilState(authState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });

      // console.log(response);
      setIsLoggedInState({
        token: response.data.newToken,
        name: response.data.name,
        email: response.data.email,
      });
      localStorage.setItem("token", response.data.newToken);

      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (error) {
      setErr(true);
      setEmail("");
      setPassword("");
      // console.log(error);
    }
  };

  useEffect(() => {}, [err]);

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div className="text-2xl font-semibold mb-5 text-center">
        Login to use the model.
      </div>
      <div>
        <form
          className="flex flex-col space-y-4 max-w-[400px] mx-auto bg-[#444645] rounded-md shadow-2xl px-16 py-12"
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-2xl text-center">Login</div>
          <div>
            <label htmlFor="email" className="text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-b-2 border-[#868a89] focus:outline-none rounded-md text-[#3c3d3d] font-semibold px-1"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-lg font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-b-2 border-[#868a89] focus:outline-none rounded-md text-[#3c3d3d] font-semibold px-1"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="">
            <button className="bg-[#e6e7e7] text-[#1e1f1f] py-1 my-4 font-semibold shadow-xl rounded-md hover:bg-[#868a89] min-w-full">
              Login
            </button>
          </div>
          {err && (
            <div className="text-center text-lg font-semibold text-red-500">
              Invalid email or password
            </div>
          )}
          <div>
            <p className="text-center text-lg font-semibold">
              Don't have an account?{" "}
              <Link to="/register">
                <span className="underline">Register</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
