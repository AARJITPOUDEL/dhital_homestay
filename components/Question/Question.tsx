import React from "react";
import "../App.css";

const Question = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4 font-poppins">
      <h1 className="text-[40px] font-bold text-center mb-4">
        Book Your Holiday with{" "}
        <span style={{ color: "#DC143C" }}>Macchapucchre Dhital Homestay</span>
      </h1>
      <p className="text-[18px] text-center mb-8">
        Welcome to our family-run organic farm and retreat. <br />
        Enjoy delicious cuisine, fresh air, and rejuvenate amidst stunning
        natural beauty.
      </p>
      <button className=" mt-6 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800">
        Book Now
      </button>
    </div>
  );
};

export default Question;
