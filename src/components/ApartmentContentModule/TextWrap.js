import React from "react";
import "../ApartmentContentModule/TextWrap.scss";

import vector from "../../asset/Vector.png";

import { useState } from "react";

const TextWrap = (props) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);

  function handleDescriptionClick() {
    setIsOpenDescription(!isOpenDescription);
  }

  function handleEquipmentsClick() {
    setIsOpenEquipments(!isOpenEquipments);
  }

  return (
    <div className="textwrap">
      <div
        className={`description_container ${isOpenDescription ? "open" : ""}`}
      >
        <div
          className={`title_box ${isOpenDescription ? "open" : ""}`}
          onClick={handleDescriptionClick}
        >
          <h3>Description</h3>
          <img src={vector} alt="" />
        </div>
        <p>{props.description}</p>
      </div>

      <div className={`equipments_container ${isOpenEquipments ? "open" : ""}`}>
        <div
          className={`title_box ${isOpenEquipments ? "open" : ""}`}
          onClick={handleEquipmentsClick}
        >
          <h3>Equipments</h3>
          <img src={vector} alt="" />
        </div>
        <ul>
          {props.equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextWrap;
