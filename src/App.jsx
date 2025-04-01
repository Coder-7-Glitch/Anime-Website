import React from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer/Footer";
import AboutPage from "./Pages/AboutPage";
import LatestAnimePage from "./Pages/LatestAnimePage";
import NewsPage from "./Pages/NewsPage";
import MyProfile from "./components/Profile/MyProfile";
import EditProfile from "./components/Profile/EditProfile";
import Help from "./components/Profile/Help";
import History from "./components/Profile/History";
import MyList from "./components/Profile/MyList";
import Password from "./components/Profile/Password";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <!-- Pages start --> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/latest-anime" element={<LatestAnimePage />} />
        <Route path="/news-page" element={<NewsPage />} />
        {/* <!-- Pages end --> */}
        {/* <!-- Profile Pages start */}
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/history" element={<History />} />
        <Route path="/help" element={<Help />} />
        {/* <!-- Profile Pages end */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
