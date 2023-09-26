import React from "react";
import Logo from "../asset/LOGO.svg";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={Logo} alt="LogoKaza" />
      </NavLink>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
