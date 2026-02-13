import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/background.png";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/signup", {
        email,
        username,
        password,
      });

      setMessage("Signup successful");

      // go login
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setMessage("Signup failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Sign Up
        </h2>

        <form onSubmit={handleSignup} className="space-y-4 text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full px-3 py-2 border rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Register
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600">{message}</p>
        )}

        <div className="flex justify-between mt-4 text-black">
          <p>Already have account?</p>
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
