import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./components/Footer/Footer";
import About from "./Pages/About";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-page" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
