import React from "react";
import "./Footer.scss";
import footerLogo from "../asset/FootertLOGO.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <NavLink to="/">
          <img src={footerLogo} alt="Logo Kasa" />
        </NavLink>

        <p>
          © 2023 Kasa. <br className="break" />
          All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
