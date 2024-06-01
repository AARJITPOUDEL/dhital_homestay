"use client";
import React from "react";
import "../App.css";
import Router from "next/router";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router = useRouter();

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(./hero.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 py-16 flex flex-col items-start justify-center h-full text-left">
        <div className="text-white font-poppins font-extrabold text-[30px] space-y-1">
          <p>A cozy mountain homestay</p>
          <p>Blending tradition with modern comfort</p>
          <p>With all your desired modern comforts</p>
        </div>
        <button
          onClick={() => router.push("/login")}
          className="mt-8 bg-red-700 text-white px-6 py-3 rounded-md hover:bg-red-800"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
