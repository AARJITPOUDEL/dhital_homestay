"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import one from "./1.jpg";
import two from "./2.jpg";
// import three from './3.jpg'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: contain;
  animation: ${slideIn} 1s ease-in-out;
`;

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff; /* Light theme background */
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* Light theme button background */
  color: black; /* Dark text color */
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

const PrevButton = styled(Button)`
  left: 1rem;
`;

const NextButton = styled(Button)`
  right: 1rem;
`;

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // 3 is the number of images
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <GalleryContainer>
      <PrevButton onClick={handlePrevClick}>&lt;</PrevButton>
      <NextButton onClick={handleNextClick}>&gt;</NextButton>
      {currentIndex === 0 && <Image src={one.src} alt="Sample Photo 1" />}
      {currentIndex === 1 && <Image src={two.src} alt="Sample Photo 2" />}
      {currentIndex === 2 && <Image src={two.src} alt="Sample Photo 3" />}
    </GalleryContainer>
  );
};

export default Gallery;
