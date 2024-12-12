import React, { useState } from "react";
import "./App.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const images = [
    { src: image1, name: "STRENGTH" },
    { src: image2, name: "MOBILITY" },
    { src: image3, name: "DRILLS" },
  ];

  const handleHover = (index) => {
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${expandedIndex === index ? "expanded" : ""} ${
              index === 1 ? "default-expanded" : ""
            }`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={image.src} alt={image.name} />
            <div className="caption">{image.name}</div>
            {expandedIndex === index && (
              <button className="arrow">{'>'}</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
