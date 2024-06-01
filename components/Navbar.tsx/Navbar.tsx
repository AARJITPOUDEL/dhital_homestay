"use client";
import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-white shadow-md fixed w-full z-50"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-black">Logo</div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="black"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-black hover:text-black">
            Home
          </a>
          <a href="#" className="text-black hover:text-black">
            About Us
          </a>
          <a href="#" className="text-black hover:text-black">
            Services
          </a>
          <a href="#" className="text-black hover:text-black">
            Gallery
          </a>
        </div>

        <div className="hidden md:block">
          <button className="  bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
            Book Now
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-transform duration-300 ease-in-out transform ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <a href="#" className="block text-black hover:text-black py-2 px-4">
          Home
        </a>
        <a href="#" className="block text-black hover:text-black py-2 px-4">
          About Us
        </a>
        <a href="#" className="block text-black hover:text-black py-2 px-4">
          Services
        </a>
        <a href="#" className="text-black hover:text-black">
          Gallery
        </a>
        <a href="#" className="block text-black hover:text-black py-2 px-4">
          Book Now
        </a>
        <div className="block py-2 px-4">
          <button className="  bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
