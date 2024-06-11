import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Header = () => {

  const [toggle, setToggle] = useState(false);

  const toggleNavbar = () => {
    console.log(toggle)
    setToggle(!toggle);
  }
  return (
    <div className="fixed w-full z-40">
      <nav
        className="bg-gray-200 m-5 p-5 rounded-xl"
        style={{
          boxShadow:
            "8px 9px 6px -1px rgb(83 51 51 / 10%), 0 2px 4px -2px rgb(0 0 0)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 sm:px-6">
          <div className="flex justify-between items-center h-8">
            <div className="font-bold text-[25px]">Portfolio</div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8 font-semibold">
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#project">Projects</a>
                <a>Contact</a>
              </div>
            </div>
            <div className="flex md:hidden ">
              <button onClick={toggleNavbar}>
                {toggle ? (
                  <IoMdClose />
                ) : (
                  <FaBarsStaggered
                    className={`transform ${toggle ? "rotate-90" : ""}`}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden transition-all duration-5000  bg-slate-200 m-5 rounded-lg ${
          toggle ? "block" : "hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3">
          <div className="flex flex-col items-center mt-5 space-y-3 sm:px-3">
            <a>Home</a>
            <a>About</a>
            <a>Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;