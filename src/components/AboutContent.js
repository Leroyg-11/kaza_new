import React from "react";
import "./AboutContent.scss";

import vector from "../asset/Vector.png";

import { useState } from "react";

const About = () => {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);

  function handleClickOne() {
    setIsOpenOne(!isOpenOne);
  }

  function handleClickTwo() {
    setIsOpenTwo(!isOpenTwo);
  }
  function handleClickThree() {
    setIsOpenThree(!isOpenThree);
  }
  function handleClickFour() {
    setIsOpenFour(!isOpenFour);
  }

  return (
    <div className="about">
      <div className={`container_box ${isOpenOne ? "open" : ""}`}>
        <div
          className={`title_box ${isOpenOne ? "open" : ""}`}
          onClick={handleClickOne}
        >
          <h3>Fiabilité</h3>
          <img src={vector} alt="" />
        </div>
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>

      <div className={`container_box ${isOpenTwo ? "open" : ""}`}>
        <div
          className={`title_box ${isOpenTwo ? "open" : ""}`}
          onClick={handleClickTwo}
        >
          <h3>Respect</h3>
          <img src={vector} alt="" />
        </div>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>

      <div className={`container_box ${isOpenThree ? "open" : ""}`}>
        <div
          className={`title_box ${isOpenThree ? "open" : ""}`}
          onClick={handleClickThree}
        >
          <h3>Service</h3>
          <img src={vector} alt="" />
        </div>
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      </div>

      <div className={`container_box ${isOpenFour ? "open" : ""}`}>
        <div
          className={`title_box ${isOpenFour ? "open" : ""}`}
          onClick={handleClickFour}
        >
          <h3>Securité</h3>
          <img src={vector} alt="" />
        </div>
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      </div>
    </div>
  );
};

export default About;
