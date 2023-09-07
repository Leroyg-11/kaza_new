import React from "react";
import "./AboutContent.scss";
import Collapse from "./Collapse";

const About = () => {
  return (
    <div className="about">
      <Collapse
        h3="Fiabilité"
        p="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
  photos sont conformes aux logements, et toutes les informations sont
  régulièrement vérifiées par nos équipes."
      />

      <Collapse
        h3="Respect"
        p="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
  comportement discriminatoire ou de perturbation du voisinage
  entraînera une exclusion de notre plateforme."
      />

      <Collapse
        h3="Service"
        p="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
  comportement discriminatoire ou de perturbation du voisinage
  entraînera une exclusion de notre plateforme."
      />

      <Collapse
        h3="Securité"
        p="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
  pour les voyageurs, chaque logement correspond aux critères de
  sécurité établis par nos services. En laissant une note aussi bien à
  l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
  standards sont bien respectés. Nous organisons également des ateliers
  sur la sécurité domestique pour nos hôtes."
      />
    </div>
  );
};

export default About;
