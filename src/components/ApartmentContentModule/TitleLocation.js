import React from "react";
import "./TitleLocation.scss";

const TitleLocation = (props) => {
  return (
    <div className="title_location">
      <h1>{props.title}</h1>
      <h2>{props.location}</h2>
    </div>
  );
};

export default TitleLocation;
