"use client";
import React from "react";
import camping from "./camping.jpeg";
import Image from "next/image";
import food from "./food.jpg";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minWidth: "320px", minHeight: "480px", padding: "20px" }}
    >
      <div className="relative" style={{ height: "480px" }}>
        <div className="overflow-hidden" style={{ height: "100%" }}>
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div
          className={`absolute bottom-0 left-0 w-full ${
            isHovered ? "h-3/5 font-bold" : "h-1/3"
          } bg-black bg-opacity-50 transition-all duration-300`}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl text-white mb-2">{title}</div>
            {isHovered && <p className="text-white text-base">{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const cards = [
    {
      title: "Camping",
      description:
        "Enjoy the great outdoors with our camping facilities and experience nature like never before.",
      imageSrc: camping,
    },
    {
      title: "Organic Food",
      description:
        "Indulge in our delicious organic food options sourced locally for a healthy and sustainable dining experience.",
      imageSrc: food,
    },
    {
      title: "Hiking Services",
      description:
        "Explore the surrounding trails with our experienced guides and discover hidden gems along the way.",
      imageSrc: camping,
    },
  ];
  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl mb-6">
        <span className="text-black font-extrabold">Our</span>{" "}
        <span style={{ color: "#DC143C" }} className="  font-extrabold">
          Services
        </span>
      </h1>
      <div className="flex flex-wrap justify-center max-w-screen-lg mx-auto">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default App;
