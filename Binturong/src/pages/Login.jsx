import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Login({ setAuthenticated, closeDialog }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();


    //Axios POST to retrieve username and password from SQL database
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

      // Redundant Login Failed message could be condensed - If/else statement needed to allow for both 200/201 response
      if (response.status === 200 || response.status === 201) {
        const user = response.data.user;
        console.log("User Object:", user);
        setAuthenticated(true);
        localStorage.setItem("authenticated", JSON.stringify(true));
//         localStorage.setItem("user", JSON.stringify(user));
        setMessage(response.data.message);
        closeDialog();
      } else {
        setMessage("Login failed");
      }

    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

    //Displays login screen as a dialog box that goes to updated home when logged in
  return (
    <div className="dialog-overlay">
      <dialog open>
        <div className="homeText">
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
          <button onClick={closeDialog}>Close</button>
        </div>
      </dialog>
    </div>
  );
}

export default Login;