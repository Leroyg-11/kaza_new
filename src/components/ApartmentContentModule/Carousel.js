import React, { useState } from "react";

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

  if (pictures.length <= 1) {
    // Si pictures.length est inférieur ou égal à 1, alors pas besoin des fleche et du compteur de photos
    return (
      <div className="apartment_img">
        {pictures.map((pic, i) => (
          <img
            key={pic}
            src={pic}
            alt="All Pictures Of Apartment"
            className={getClassName(i)}
          ></img>
        ))}
      </div>
    );
  }

  return (
    <div className="apartment_img">
      {pictures.map((pic, i) => (
        <img
          key={pic}
          src={pic}
          alt="All Pictures Of Apartment"
          className={getClassName(i)}
        ></img>
      ))}
      <p className="counter">
        {currentPic + 1}/{pictures.length}
      </p>
      <div className="button_container">
        <button onClick={moveToNext}>ᐳ</button>
        <button onClick={moveToPrevious}>ᐸ</button>
      </div>
    </div>
  );
};

export default Carousel;
