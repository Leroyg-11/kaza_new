import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApartmentContent from "../components/ApartmentContent";
import dataBase from "../utils/db.json";
import Error from "../pages/Error";

function ApartmentPage() {
  const { id } = useParams(); // récupère le paramètre id de l'URL.

  const [selectedFlat, setSelectedFlat] = useState(null); // initialise la variable d'état selectedFlat à null, et la fonction setSelectedFlat est utilisée pour mettre à jour la valeur de selectedFlat

  useEffect(() => { //utilisé pour récupérer les données de l'appartement lorsque le composant est monté.
    fetchApartmentData();
  }, []);

  function fetchApartmentData() { // Récupérer les données de l'appartement en fonction du paramètre id
    const flat = dataBase.find((flat) => flat.id === id);
    setSelectedFlat(flat);
  }
  if (!selectedFlat) return <Error />;

  return ( // les données selectedFlat sont passées en tant que prop au composant AppartmentContent
    <div className="apartment_page"> 
      <ApartmentContent flat={selectedFlat} /> 
    </div>
  );
}

export default ApartmentPage;
