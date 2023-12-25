import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const increaseCount = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const decreaseCount = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <h1>Carousel</h1>
      <div className="carousel-container flex">
        <div className="leftArrow arrowDiv flex" onClick={decreaseCount}>
          <ArrowBackIosIcon />
        </div>
        <h2 className="title">{images[currentIndex].title}</h2>
        <img src={images[currentIndex].img} alt="" />
        <h4 className="caption">{images[currentIndex].subtitle}</h4>
        <div className="rightArrow arrowDiv flex" onClick={increaseCount}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </>
  );
}

export default Carousel;
