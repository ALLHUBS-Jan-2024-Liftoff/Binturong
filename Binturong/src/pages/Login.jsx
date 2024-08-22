import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "../App.css";

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      );
      if (response.status === 200 || response.status === 201) {
              setAuthenticated(true);
              localStorage.setItem("authenticated", JSON.stringify(true));
              setMessage(response.data.message);
              navigate('/');
            } else {
              setMessage("Login failed");
            }
          } catch (error) {
            setMessage(error.response?.data?.message || "Login failed");
          }
        };

  return (
    <div className = "homeText">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;