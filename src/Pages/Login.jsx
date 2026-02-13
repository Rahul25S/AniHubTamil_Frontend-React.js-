import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import background from "../assets/background.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });

      // save user
      localStorage.setItem("user", JSON.stringify(response.data));

      setMessage("Login successful");

      // go profile
      setTimeout(() => {
        navigate("/profile");
      }, 1000);

    } catch (error) {
      setMessage("Invalid credentials");
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
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 text-black">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button className="w-full bg-green-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-red-600">{message}</p>
        )}

        <div className="flex justify-between mt-4 text-black">
          <p>New to AniHub Tamil?</p>
          <Link to="/signup" className="text-blue-600">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
