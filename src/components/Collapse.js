import React, { useState } from "react";
import "./Collapse.scss";
import vector from "../asset/Vector.png";

const Collapse = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`container_box ${isOpen ? "open" : ""}`}>
      <div
        className={`title_box ${isOpen ? "open" : ""}`}
        onClick={handleClick}
      >
        <h3>{props.h3}</h3>
        <img src={vector} alt="" />
      </div>
      {props.p && <p>{props.p}</p>}
      {props.ul && (
        <ul>
          {props.ul.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collapse;
