import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";

// Components
import Navbar from "./Components/Navbar";
import Popular from "./Components/Popular";
import AnimeDetail from "./Pages/AnimeDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />}/>

        <Route path="/onepiece" element={<AnimeDetail />} />
        <Route path="/sololeveling" element={<AnimeDetail />} />
        <Route path="/SakamotoDays" element={<AnimeDetail />} />
        <Route path="/BlueBox" element={<AnimeDetail />} />
        <Route path="/Dandadan" element={<AnimeDetail />} />
        <Route path="/WindBreaker" element={<AnimeDetail />} />
        <Route path="/Naruto" element={<AnimeDetail />} />
        <Route path="/BlackClover" element={<AnimeDetail />} />
        <Route path="/ClassroomoftheElite" element={<AnimeDetail />} />
        <Route path="/MyStar" element={<AnimeDetail />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
