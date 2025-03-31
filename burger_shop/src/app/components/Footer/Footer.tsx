import React from "react";
import { FaBurger } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-[0.5rem] pb-[3rem] bg-gray-900">
      <div
        className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 opacity-50 mx-auto grid
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem] items-center"
      >
        {/* 1st part */}
        <div>
          {/* LOGO */}
          <div className="flex items-center text-white space-x-2">
            <FaBurger className="w-[1.2rem] h-[1.2rem] sm:w-[1.4rem] sm:h-[1.4rem] text-orange-500" />
            <h1 className="text-[20px] text-white sm:text-[30px] font-semibold">
              BigBiteBurger
            </h1>
          </div>
          <div className="text-white opacity-60 mt-[0.4rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
