import React, { useContext,useState } from "react";
import { StoreContext } from "../context/ContexApi";
import {useNavigate} from "react-router-dom"


function PlaceOrder() {

   const {totalCartAmmount}=useContext(StoreContext)
   console.log(import.meta.env.VITE_KEY_ID);
   const navigate =useNavigate()



  
  return (
    <>
      <div className="w-full  px-2 md:px-40 md:py-20">
        <h1 className="text-3xl px-3 font-[650]">Delivery Information</h1>
        <div className="flex flex-col justify-between md:flex-row w-full mt-10">
          <div className="w-full h-auto flex flex-col gap-5 md:w-[45%] shadow-lg pb-8  px-3">
            <div className="w-full flex justify-between pb-5">
              <input
                type="text"
                placeholder="First name"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black pl-2 focus:outline-none rounded"
              ></input>
              <input
                type="text"
                placeholder="Last name"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <input
                type="email"
                placeholder="Email address"
                className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
              <input
                type="text"
                placeholder="Street"
                className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
               <div className="w-full flex justify-between pb-5">
              <input
                type="text"
                placeholder="City"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
              <input
                type="text"
                placeholder="State"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <div className="w-full flex justify-between pb-5">
              <input
                type="text"
                placeholder="Zip code"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
              <input
                type="text"
                placeholder="Country"
                className="w-[47%] h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>
            </div>
            <input
                type="number"
                placeholder="Phone"
                className="w-full h-10 placeholder:text-black border-[2px] border-gray-400 text-black  pl-2 focus:outline-none rounded"
              ></input>

          </div>
          <div className="w-full h-auto flex flex-col gap-5 md:w-[45%] shadow-lg pb-8  px-3">
          <h1 className="text-3xl font-semibold opacity-85">Cart Totals</h1>
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p>${totalCartAmmount()}</p>
              </div>
              <hr></hr>
              <div className="flex items-center justify-between">
                <p>Deliver fee</p>
                <p>${totalCartAmmount()? 5 : 0}</p>
              </div>
              <hr></hr>
              <div className="flex items-center justify-between h-6 font-semibold">
                <p>Total fee</p>
                <p>${totalCartAmmount()?totalCartAmmount()+5 : 0}</p>
              </div>
              <button 
              
              className="bg-orange-600 w-full md:w-[50%] h-10 rounded-md text-white font-semibold">Proceed to Payment</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrder;
