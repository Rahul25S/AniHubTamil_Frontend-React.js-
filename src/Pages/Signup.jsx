import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // Form states
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Message to show user
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh

    // Simple frontend validation
    if (!email || !username || !password) {
      setMessage("All fields are required");
      return;
    }

    // This is where backend will be connected later
    console.log("Signup data:", {
      email,
      username,
      password,
    });

    setMessage("Signup form submitted (frontend only)");

    // Clear form
    setEmail("");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>

        {message && (
          <p className="text-center text-blue-600 mb-3">{message}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
