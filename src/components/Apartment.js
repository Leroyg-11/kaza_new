import React from "react";
import "./Apartment.scss";
import { Link } from "react-router-dom";


function Apartment(props) {
  
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


// Lorsque le div est cliqué, il navigue vers une route spécifique en utilisant le composant Link de React Router.

// La route est construite en utilisant la valeur props.id