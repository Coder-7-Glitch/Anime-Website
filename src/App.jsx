import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./Pages/AboutPage";
import LatestAnimePage from "./Pages/LatestAnimePage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/latest-anime" element={<LatestAnimePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
