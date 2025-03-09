import React from 'react'
import './App.css'
import Navbar from "./components/Header/Navbar"
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Footer from './components/Footer/Footer';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
