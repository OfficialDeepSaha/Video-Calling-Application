import React, { useState } from "react";
import logo from "../src/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black/90">
      <div className="flex items-center justify-between px-4 sm:px-6 md:max-w-[90vw] mx-auto h-[5rem]">
        {/* Left */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-white rounded-full">
            <img src={logo} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="text-white font-bold text-lg sm:text-xl ml-2 hidden sm:block">
            Video Calling Application
          </div>
        </div>

        {/* Right */}
        <div className="sm:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Right (Hidden by default on small screens) */}
        <div className={menuOpen ? "block" : "hidden sm:flex items-center gap-4"}>
          <ul className="text-white font-bold flex items-center gap-4 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

