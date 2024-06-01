import React from "react";
import "../App.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";

const Display = () => {
  return (
    <div className="space-y-12 px-4 md:px-16 py-4 md:py-12">
      <div className="text-center">
        <h1
          className="text-[#333]"
          style={{ fontSize: "40px", fontWeight: "600" }}
        >
          About <span className="text-[#DC143C]">Homestay</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-[#FEF4EA] p-4 md:p-8 rounded-lg shadow-md">
        <div className="md:w-1/2">
          <img
            src={image1.src}
            alt="Simply Luxury Cabin"
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: "450px" }}
          />
        </div>
        <div className="md:w-1/2 md:pl-8 text-center md:text-left text-black">
          <h2 className="text-[30px] font-bold mt-4 md:mt-0">
            Serene Homestay Haven
          </h2>
          <p className="text-[16px] mt-4">
            Welcome to Serene Homestay Haven, where tranquility meets comfort.
            Reserve your stay now and immerse yourself in serene surroundings
            for ultimate relaxation and rejuvenation.
          </p>

          <button className=" mt-6 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
            Book Now
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center bg-[#E0EAF5] p-4 md:p-8 rounded-lg shadow-md">
        <div className="md:w-1/2 md:pl-8 text-center md:text-left text-black">
          <h2 className="text-[30px] font-bold mt-4 md:mt-0">
            Nature-Inspired Dining Experience
          </h2>
          <p className="text-[16px] mt-4">
            Indulge in a dining experience like no other at Simply Luxury Cabin.
            Immerse yourself in natures beauty while enjoying exquisite cuisine.
            Book your stay now for the ultimate relaxation and rejuvenation.
          </p>

          <button className=" mt-6 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
            Book Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src={image2.src}
            alt="Dining with a nature view"
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: "550px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Display;
