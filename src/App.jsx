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
import DeleteAcc from "./components/Profile/DeleteAcc";
import Help from "./components/Profile/Help";
import History from "./components/Profile/History";
import LogOut from "./components/Profile/LogOut";
import MyList from "./components/Profile/MyList";
import Password from "./components/Profile/Password";
import Sponsorship from "./components/Profile/Sponsorship";
import SwitchAcc from "./components/Profile/SwitchAcc";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-page" element={<AboutPage />} />
        <Route path="/latest-anime" element={<LatestAnimePage />} />
        <Route path="/news-page" element={<NewsPage />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/sponsorship" element={<DeleteAcc />} />
        <Route path="/password" element={<Password />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/my-list" element={<Help />} />
        <Route path="/history" element={<History />} />
        <Route path="/help" element={<MyList />} />
        <Route path="/switch-acc" element={<SwitchAcc />} />
        <Route path="/delete-acc" element={<Sponsorship />} />
        <Route path="/log-out" element={<LogOut />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
