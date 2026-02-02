import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";

// Anime Pages
import Onepiece from "./Anime/onepiece";
import Sololeveling from "./Anime/sololeveling";
import SakamotoDays from "./Anime/Sakamoto Days";
import BlueBox from "./Anime/Blue Box";
import Dandadan from "./Anime/Dandadan";
import WindBreaker from "./Anime/Wind Breaker";
import Naruto from "./Anime/Naruto";
import BlackClover from "./Anime/Black Clover";
import ClassroomElite from "./Anime/Classroom of the Elite";
import MyStar from "./Anime/My Star";

// Components
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

        {/* Anime pages */}
        <Route path="/onepiece" element={<Onepiece />} />
        <Route path="/sololeveling" element={<Sololeveling />} />
        <Route path="/SakamotoDays" element={<SakamotoDays />} />
        <Route path="/BlueBox" element={<BlueBox />} />
        <Route path="/Dandadan" element={<Dandadan />} />
        <Route path="/WindBreaker" element={<WindBreaker />} />
        <Route path="/Naruto" element={<Naruto />} />
        <Route path="/BlackClover" element={<BlackClover />} />
        <Route path="/ClassroomoftheElite" element={<ClassroomElite />} />
        <Route path="/MyStar" element={<MyStar />} />

        {/* Fallback */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
