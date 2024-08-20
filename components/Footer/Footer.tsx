import React from "react";
import { FiHome, FiInfo, FiMail, FiPhone, FiNavigation2 } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../App.css";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-white text-gray-800 py-12"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src="/logo.svg" alt="Logo" className="h-8 w-auto mr-2" />
          </div>
          <p className="text-sm mb-4">
            Discover tranquility at our nature-inspired homestay. Enjoy modern
            comforts intertwined with traditional charm.
          </p>
          <button
            className=" text-white px-4 py-2 rounded  "
            style={{ backgroundColor: "#DC143C" }}
          >
            Book Now
          </button>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="text-sm">
            <li className="mb-2">
              <FiHome className="inline-block mr-2" />
              Home
            </li>
            <li className="mb-2">
              <FiInfo className="inline-block mr-2" />
              About
            </li>
            <li className="mb-2">
              <FiNavigation2 className="inline-block mr-2" />
              Services
            </li>
            <li className="mb-2">
              <FiMail className="inline-block mr-2" />
              Contact
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Our Services</h3>
          <ul className="text-sm">
            <li className="mb-2">Camping</li>
            <li className="mb-2">Organic Food</li>
            <li className="mb-2">Hiking Services</li>
            <li className="mb-2">Panorama View</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">Email: info@example.com</p>
          <p className="text-sm mb-4">Phone: +977 9856030858</p>
          <div className="flex">
            <a href="#" className="mr-2">
              <FaFacebook className="text-[#4CC269] text-xl" />
            </a>
            <a href="#" className="mr-2">
              <FaTwitter className="text-[#4CC269] text-xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-[#4CC269] text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
