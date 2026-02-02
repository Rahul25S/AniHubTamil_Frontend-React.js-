import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Message for user
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page refresh

    // Simple frontend validation
    if (!email || !password) {
      setMessage("Email and password are required");
      return;
    }

    // Backend will be connected later
    console.log("Login data:", {
      email,
      password,
    });

    setMessage("Login form submitted (frontend only)");

    // Clear form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Log In</h2>

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
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
