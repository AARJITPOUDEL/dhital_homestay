"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import photo1 from "./photo (1).jpg";
import photo2 from "./photo (2).jpg";
import photo3 from "./photo (3).jpg";
import photo4 from "./photo (4).jpg";
import photo5 from "./photo (5).jpg";
import photo6 from "./photo (6).jpg";
import photo7 from "./photo (7).jpg";
import photo8 from "./photo (8).jpg";
import photo9 from "./photo (9).jpg";
import photo10 from "./photo (10).jpg";
import photo11 from "./photo (11).jpg";
import photo12 from "./photo (12).jpg";
import photo13 from "./photo (13).jpg";
import photo14 from "./photo (14).jpg";
import photo15 from "./photo (15).jpg";
import photo16 from "./photo (16).jpg";
import photo17 from "./photo (17).jpg";
import photo18 from "./photo (18).jpg";
import photo19 from "./photo (19).jpg";
import photo20 from "./photo (20).jpg";
import photo21 from "./photo (21).jpg";
import photo22 from "./photo (22).jpg";
import photo23 from "./photo (23).jpg";
import photo24 from "./photo (24).jpg";
import photo25 from "./photo (25).jpg";
import photo26 from "./photo (26).jpg";
import photo27 from "./photo (27).jpg";
import photo28 from "./photo (28).jpg";
import photo29 from "./photo (29).jpg";
import photo30 from "./photo (30).jpg";
import photo31 from "./photo (31).jpg";

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #f0f0f0;
`;

const ImagesWrapper = styled.div`
  display: flex;
  transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
  ${({ currentIndex, totalImages }) =>
    css`
      transform: translateX(calc(-${(currentIndex % totalImages) * (100 / 3)}%));
    `}
`;

const ImageContainer = styled.div`
  min-width: calc(100% / 3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: scale(1.1);
      z-index: 2;
    `}
`;

const Image = styled.img`
  width: 80%;
  height: auto;
  margin: 0 10px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 10;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
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
  const photos = [
    photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, 
    photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, 
    photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25, 
    photo26, photo27, photo28, photo29, photo30, photo31
  ];

  const totalImages = photos.length;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <GalleryContainer>
      <PrevButton onClick={handlePrevClick}>&lt;</PrevButton>
      <ImagesWrapper currentIndex={currentIndex} totalImages={totalImages}>
        {photos.map((photo, idx) => (
          <ImageContainer
            key={idx}
            isActive={idx === (currentIndex + 1) % totalImages} // Highlight middle image
          >
            <Image src={photo.src} alt={`Photo ${idx + 1}`} />
          </ImageContainer>
        ))}
      </ImagesWrapper>
      <NextButton onClick={handleNextClick}>&gt;</NextButton>
    </GalleryContainer>
  );
};

export default Gallery;
