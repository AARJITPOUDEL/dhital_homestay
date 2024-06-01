import React from "react";

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="photo-section">
        <img
          src="https://via.placeholder.com/150"
          alt="Sample Photo 1"
          className="photo"
        />
      </div>
      <div className="photo-section">
        <img
          src="https://via.placeholder.com/150"
          alt="Sample Photo 2"
          className="photo"
        />
      </div>
      <div className="photo-section">
        <img
          src="https://via.placeholder.com/150"
          alt="Sample Photo 3"
          className="photo"
        />
      </div>
    </div>
  );
};

export default Gallery;
