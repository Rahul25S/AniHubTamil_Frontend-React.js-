import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  // Temporary user data (later this will come from backend)
  const [user] = useState({
    username: "Guest User",
    email: "guest@example.com",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-600 p-6 rounded shadow text-center">
        <h2 className="text-3xl font-bold mb-4">Profile</h2>

        <p className="text-lg mb-2">
          <strong>Username:</strong> {user.username}
        </p>

        <p className="text-lg mb-4">
          <strong>Email:</strong> {user.email}
        </p>

        {/* Logout button will work later with backend */}
        <Link
          to="/login"
          className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Profile;
