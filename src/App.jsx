import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer';
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import LatestAnimePage from "./Pages/LatestAnimePage";
import NewsPage from "./Pages/NewsPage";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/latestAnime' element={<LatestAnimePage />} />
        <Route path='/News' element={<NewsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
