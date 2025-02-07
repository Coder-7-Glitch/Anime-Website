import React from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from "react-router";
import Homepage from "./Pages/HomePage";
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/Home' element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
