import React from "react";
import Tesla_logo from "../assets/Tesla_logo.png";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0">
      {/* Banner */}
      <section
        id="banner"
        className="bg-gradient-to-br from-[#3F4F7A] via-[#1E222C] to-[#000000]"
      >
        <div className="max-w-[1440px] mx-auto px-9 py-1 md:px-6 md:py-6  text-[#F7F7F9] text-center">
          <p className="text-[#ffffff]">
            <span className="font-semibold md:text-2xl text-sm">
              $7,500 Federal Tax Credit
            </span>
            <span className="md:text-xl text-sm">
              {" "}
              Available for new Model 3 and Model Y. Reductions to tax credit
              likely after Dec 31.{" "}
            </span>
            <a href="" className="md:text-xl text-sm underline decoration:1">
              See Details
            </a>
          </p>
        </div>
      </section>

      {/* Nav */}
      <section id="nav" className="bg-transparent">
        <div className="max-w-[1440px] mx-auto mt-6 md:mt-4 flex items-center justify-between">
          <div className="px-6 md:px-20 py-2 md:py-4 md:-ml-10 ml:2">
            <img
              src={Tesla_logo}
              alt="Tesla_logo"
              className="md:h-6 md:w-36 h-4 w-20"
            />
          </div>
          <div className="mr-10 hidden md:flex items-center justify-around w-[1000px] list-none text-black md:text-xl">
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Model S
            </li>
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Model 3
            </li>
            <li
              className="px-3 py-1 rounded-lg hover:backdrop-blur-lg
            "
            >
              Model X
            </li>
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Model Y
            </li>
            <li
              className="
              px-3
              py-1
              rounded-lg
              hover:backdrop-blur-lg
            "
            >
              Solar Roof
            </li>
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Solar Panels
            </li>
            <li
              className="
              px-3
              py-1
              rounded-lg
              hover:backdrop-blur-lg
            "
            >
              Powerwall
            </li>
          </div>
          <div className="hidden md:flex items-center justify-around w-[350px] list-none text-black md:text-xl">
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Shop
            </li>
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Account
            </li>
            <li className="px-3 py-1 rounded-lg hover:backdrop-blur-lg">
              Menu
            </li>
          </div>
          <div className="mr-4 md:hidden px-3 py-1 rounded-lg hover:backdrop-blur-lg bg-gray-100 opacity-80 text-black">
            Menu
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
