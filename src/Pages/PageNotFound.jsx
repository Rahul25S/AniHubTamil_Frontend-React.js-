import React from "react";
import { Link } from "react-router-dom";
import background from "../assets/background.png";

const NotFound = () => {  
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-900 text-white px-4"
      style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="mb-6 text-gray-300">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
