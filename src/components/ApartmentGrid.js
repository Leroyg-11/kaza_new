import React, { useEffect, useState } from "react";
import "./ApartmentGrid.scss";
import Apartment from "./Apartment";
import dataBase from "../utils/db.json";

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    setApartments(dataBase);
  }, []);

  return (
    <div className="apartment_grid">
      {apartments.map((apartment) => (
        <Apartment
          key={apartment.id}
          title={apartment.title}
          cover={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
