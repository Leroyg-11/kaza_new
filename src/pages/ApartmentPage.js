import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApartmentContent from "../components/ApartmentContent";
import dataBase from "../utils/db.json";
import Error from "../pages/Error";

function ApartmentPage() {
  const { id } = useParams();

  const [selectedFlat, setSelectedFlat] = useState(null);

  useEffect(() => {
    fetchApartmentData();
  }, []);

  function fetchApartmentData() {
    const flat = dataBase.find((flat) => flat.id === id);
    setSelectedFlat(flat);
  }
  if (!selectedFlat) return <Error />;

  if (selectedFlat == null) return <div> ...Loading</div>;
  return (
    <div className="apartment_page">
      <ApartmentContent flat={selectedFlat} />
    </div>
  );
}

export default ApartmentPage;
