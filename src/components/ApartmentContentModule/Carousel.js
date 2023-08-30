import React, { useState, useEffect } from "react";

import "./Carousel.scss";

const Carousel = (props) => {
  const pictures = props.pictures;
  const [currentPic, setCurrentPic] = useState(0);
  const getClassName = (i) => {
    if (i === currentPic) return "show";
    return "";
  };

  const moveToNext = () => {
    setCurrentPic((currentPic + 1) % pictures.length);
  };

  const moveToPrevious = () => {
    const newCurrentPic = currentPic - 1;
    if (newCurrentPic < 0) {
      setCurrentPic(pictures.length - 1);
      return;
    }
    setCurrentPic(currentPic - 1);
  };
  return (
    <div>
      <div className="apartment_img">
        {pictures.map((pic, i) => (
          <img
            key={pic}
            src={pic}
            alt="All Pictures Of Apartment"
            className={getClassName(i)}
          ></img>
        ))}
        <div className="button_container">
          <button onClick={moveToNext}>ᐳ</button>
          <button onClick={moveToPrevious}>ᐸ</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
