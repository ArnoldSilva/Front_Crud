import React from "react";
import { useNavigate } from "react-router-dom";

import Heart from "../img/heart.svg";
import Lupa from "../img/search.svg";
import Cart from "../img/shopping-bag.svg";
import User from "../img/profile-circle.svg";

import Menubar from "./MenuBar";
import { useState } from "react";

function Header() {
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const toggleProfileMenu = () => {
      setProfileMenuOpen(!isProfileMenuOpen);
    };
  
    const openProfileMenu = () => {
      setProfileMenuOpen(true);
    };
  
    const closeProfileMenu = () => {
      setProfileMenuOpen(false);
    };

  const Search = () => {
    console.log("Searching...");
  };

  const navigate = useNavigate();

  const Cart_Page = () => {
    navigate("/cart");
  };

  
  const Favorites_Page = () => {
    navigate("/favorites");
  };

  const Home_Page = () => {
    navigate("/");
  };

  return (
    <div className="w-full">
      <div className="flex justify-between bg-stone-900  p-3 ">
        <div className=" flex justify-between items-center w-full ">
          <div
            onClick={Home_Page}
            className="flex justify-between cursor-pointer ml-3 sm:ml-10 "
          >
            <div className="text-white text-base sm:text-3xl font-bold leading-10 tracking-tighter self-center">
              sneaker house
            </div>
          </div>

          <div className="relative flex justify-center ">
            <div className="relative">
              <input
                type="text"
                className="rounded-xl drop-shadow-xl text-slate-500 text-sm  px-8 h-7 sm:h-10 w-32 sm:w-72 border border-slate-4200 focus:outline-none focus:border-cyan-500"
                placeholder="Search"
              />
              <img
                loading="lazy"
                src={Lupa}
                className="absolute top-1/2 transform -translate-y-1/2 w-5 h-4 ml-2 cursor-pointer opacity-50"
                alt="Search"
                onClick={Search}
              />
            </div>
          </div>

          <div className="flex justify-between mr-2 space-x-1 sm:space-x-3 ">
            <img
              loading="lazy"
              src={Cart}
              onClick={Cart_Page}
              className=" w-6 sm:w-8  cursor-pointer flex-shrink-0"
              alt="Cart"
            />
            <img
              loading="lazy"
              src={Heart}
              onClick={Favorites_Page}
              className="w-6 sm:w-8  cursor-pointer flex-shrink-0"
              alt="Heart"
            />
             <div
              className="relative group"
              onClick={toggleProfileMenu}
              onBlur={closeProfileMenu}
              tabIndex={0}
            >
              <img
                loading="lazy"
                src={User}
                className="w-6 sm:w-8 cursor-pointer flex-shrink-0"
                alt="User"
              />
              {isProfileMenuOpen && (
          <div className="absolute right-0">
          <Menubar />
        </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
