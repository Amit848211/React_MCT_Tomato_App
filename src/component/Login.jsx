import React, { useState } from "react";
import { assets } from "../assets/assets";

function Login({ setlogin }) {
  const [currentState, setcurrentState] = useState("Sign Up");
  return (
    <>
      <div className="flex justify-center mt-10 pt-3 pb-4 absolute z-[1] md:ml-[50%] md:mt-40">
        <div className="w-full md:w-[500px] h-auto pt-5 bg-white px-5 rounded-lg shadow-lg flex flex-col items-center pb-6">
          <div className="w-full flex justify-between items-center md:pl-[45%]">
            <h1 className="text-2xl font-semibold opacity-90">
              {currentState}
            </h1>
            <img
              src={assets.cross_icon}
              onClick={() => setlogin(false)}
              className="w-4 h-4 mt-1 cursor-pointer"
            ></img>
          </div>
          <div className="w-full flex flex-col items-center gap-5 justify-center mt-5">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full md:w-[40%] h-8 text-gray-400 pl-2 focus:outline-none border-[2px] rounded-md"
              ></input>
            )}
            <input
              type="email"
              placeholder="Your email"
              required
              className="w-full md:w-[40%] h-8 text-gray-400 pl-2 focus:outline-none border-[2px] rounded-md"
            ></input>
            <input
              type="password"
              placeholder="password"
              required
              className="w-full md:w-[40%] h-8 text-gray-400 pl-2 focus:outline-none border-[2px] rounded-md"
            ></input>
          </div>
          <button className="w-full md:w-[30%] px-3 py-2 mt-5 flex items-center justify-center rounded-2xl h-8 bg-green-500 text-white">
            {currentState === "Sign Up" ? "Create Acount" : "Login"}
          </button>
          <div className="flex gap-3 items-center justify-center mt-3">
            <input type="checkbox"></input>
            <p>coutinuing, i agree to the terms of use & privacy policy.</p>
          </div>
          <div className="flex flex-col gap-3 mt-3">
            {currentState === "Login" ? (
              <p>
                Create a new account?
                <span
                  className="font-semibold opacity-90 cursor-pointer"
                  onClick={() => setcurrentState("Sign Up")}
                >
                  Click here
                </span>
              </p>
            ) : 
              
            
            <p>
              Already have an account?
              <span
                className="font-semibold opacity-90 cursor-pointer"
                onClick={() => setcurrentState("Login")}
              >
                Login here
              </span>
            </p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
