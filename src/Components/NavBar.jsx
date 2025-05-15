import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <p className=" w-full h-10 flex justify-center items-center font-medium text-sm bg-blue-200 px-4 sm:px-6 lg:px-8">
        Get free delivery on orders over $100{" "}
      </p>

      <div className="flex items-center justify-between py-5 font-medium">

        <img className="w-36" src={assets.logo} alt="" />

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700 ">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>Collection</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img className="w-5 cursor-pointer" src={assets.search_icon} alt="" />

          <div className="group relative">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />

            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>
          <Link to="/cart" className="relative">
            <img className="w-5 min-w-5" src={assets.cart_icon} alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              5
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </div>

        {/* side  bar menu for smaller screen  */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          } `}
        ></div>
      </div>
    </>
  );
};

export default NavBar;
