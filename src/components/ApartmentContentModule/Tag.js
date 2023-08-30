import React from "react";
import "./Tag.scss";

const Tag = (props) => {
  return (
    <div className="apartment_tag">
      {props.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default Tag;
