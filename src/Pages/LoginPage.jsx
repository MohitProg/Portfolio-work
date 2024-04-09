import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="min-h-[100vh] flex items-center justify-center bg-blue-200 p-2">
        <form
          action=""
          className=" w-full flex flex-col p-2 sm:p-6 justify-center gap-3 bg-gray-200 sm:w-[60%] lg:w-[40%] min-h-[400px] 
          rounded-lg shadow-lg"
        >
          <h1 className="text-3xl text-center font-semibold">
            WebTech Login here
          </h1>
          <label htmlFor="" className="text-xl ">
            Email
          </label>
          <input
            type="text"
            name="email"
            className="p-2 py-3 ring-1 appearance-none outline-none rounded-lg"
            placeholder="Enter Email here"
            required
          />
          <label htmlFor="" className="text-xl ">
            Password
          </label>
          <input
            type="text"
            name="email"
            className="p-2 py-3 ring-1 appearance-none outline-none rounded-lg"
            placeholder="Enter password here"
          />

          <button className="text-xl px-2  rounded-lg shadow-sm bg-blue-500   mt-3 font-bold text-white w-1/3 py-2 mx-auto">
            Login
          </button>
          <div className="flex items-center justify-between">
            <span className="text-blue-500">
              don't have account ? <Link to="/signup">Signup</Link>
            </span>
            <span className="text-blue-500">forgot Password</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
