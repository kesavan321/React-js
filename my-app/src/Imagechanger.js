import React, { useState } from "react";

const ImageChanger = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/350",
  ];

  const handleButtonClick = () => {
    setCurrentImageIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div>
      <img src={images[currentImageIndex]} alt="current" />
      <button onClick={handleButtonClick}>Change Image</button>
    </div>
  );
};

export default ImageChanger;