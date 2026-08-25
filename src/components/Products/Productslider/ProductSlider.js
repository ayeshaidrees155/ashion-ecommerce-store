import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./ProductSlider.css";

export default function ProductSlider({ sliderImgs, productName }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  if (!sliderImgs || sliderImgs.length === 0) {
    return <div className="no-image">No Image Available</div>;
  }

  const nextSlide = () => {
    setActiveImgIndex((prevIndex) =>
      prevIndex === sliderImgs.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setActiveImgIndex((prevIndex) =>
      prevIndex === 0 ? sliderImgs.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className="productGallerySec">
      <div className="thumbnailColumn">
        {sliderImgs.map((imgName, index) => (
          <div
            key={index}
            className={`thumbnailWrapper ${index === activeImgIndex ? "activeThumb" : ""}`}
            onClick={() => setActiveImgIndex(index)}
          >
            <img
              src={require(`../../../imgs/${imgName}`)}
              alt={`thumbnail ${index}`}
            />
          </div>
        ))}
      </div>

      <div className="mainSliderViewport">
        <button
          className="sliderArrow leftArrow"
          onClick={prevSlide}
          aria-label="Previous image"
        >
          <FaChevronLeft />
        </button>

        <div className="mainImgContainer">
          <img //../../imgs/${sliderImgs[activeImgIndex]}
            src={require(`../../../imgs/${sliderImgs[activeImgIndex]}`)}
            alt={productName}
          />
        </div>

        <button
          className="sliderArrow rightArrow"
          onClick={nextSlide}
          aria-label="Next image"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
