import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");

  // TEMP email (we will remove this later)
  const email = "test@gmail.com";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user/${email}`
        );
        setUser(response.data);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data);
        } else {
          setMessage("Server not reachable");
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Profile</h2>

        {user ? (
          <div className="space-y-2">
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
          </div>
        ) : (
          <p className="text-center text-red-600">
            {message || "Loading profile..."}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
