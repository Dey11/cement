import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/register", {
        name,
        email,
        password,
      });
      // console.log(response);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-5 text-center">
        Register to use the model.
      </div>
      <div>
        <form
          className="flex flex-col space-y-4 max-w-[400px] mx-auto bg-[#444645] rounded-md shadow-2xl px-16 py-12"
          onSubmit={handleSubmit}
        >
          <div className="font-bold text-2xl text-center">Registration</div>
          <div>
            <label htmlFor="name" className="text-lg font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-b-2 border-[#868a89] focus:outline-none rounded-md text-[#3c3d3d] font-semibold px-1"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
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
              Register
            </button>
          </div>
          <div>
            <p className="text-center text-lg font-semibold">
              Already have an account?{" "}
              <Link to="/login">
                <span className="inline underline">Login</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
