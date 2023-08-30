import React from "react";
import "./Apartment.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Apartment(props) {
  const state = {
    apartmentId: props.id,
  };
  const { id } = useParams();

  return (
    <Link to={`/flat/${props.id}`}>
      <div className="apartment">
        <img src={props.cover} alt="" />
        <p className="card_title">{props.title} </p>
      </div>
    </Link>
  );
}

export default Apartment;
