import React from "react";
import "./Error.scss";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <br />

      <NavLink to="/">
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Error;
