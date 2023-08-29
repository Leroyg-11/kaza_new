import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ApartmentGrid from "../components/ApartmentGrid";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div className="main">
      <Banner />
      <ApartmentGrid />
    </div>
  );
};

export default Main;
