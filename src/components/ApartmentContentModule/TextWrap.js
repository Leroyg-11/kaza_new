import React from "react";
import "../ApartmentContentModule/TextWrap.scss";

import Collapse from "../Collapse";

const TextWrap = (props) => {
  return (
    <div className="textwrap">
      <Collapse h3="Description" p={props.description} />
      <Collapse h3="Equipments" ul={props.equipments} />
    </div>
  );
};

export default TextWrap;
