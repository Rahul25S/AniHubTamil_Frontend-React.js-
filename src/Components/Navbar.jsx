import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const [user, setUser] = useState(null);

  // Change navbar background on scroll (UI only)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg("bg-gray-900 bg-opacity-90");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check login status
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav
      className={`w-full p-2 flex items-center justify-between fixed z-50 ${navbarBg} transition-all duration-300`}
    >
      <Link to="/">
        <img
          src="anihubtamil1.png"
          alt="AniHub Tamil"
          className="lg:h-16 h-8"
        />
      </Link>

        <div className="flex items-center gap-3">
          <Link to="/profile">
            <button className="capitalize bg-blue-600 lg:text-auto px-3 py-1 lg:px-4 lg:py-2 rounded cursor-pointer text-white text-sm">
              Profile
            </button>
          </Link>
        </div>
      
        <div className="flex items-center gap-3">
          <Link to="/login">
            <button className="capitalize text-white text-sm lg:text-auto lg:pr-2 w-16">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="capitalize bg-blue-600 lg:text-auto px-1 py-1 lg:px-4 lg:py-2 rounded cursor-pointer text-white text-sm ml-2">
              Register
            </button>
          </Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
