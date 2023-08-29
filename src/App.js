import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./utils/Layout";
import About from "./pages/About";
import Error from "./pages/Error";
import Main from "./pages/Main";
import ApartmentPage from "./pages/ApartmentPage";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/" element={<Main />} />
            <Route path="/flat/:id" element={<ApartmentPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
