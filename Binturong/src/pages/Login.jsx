import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function Login () {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

         //authentication controller to be set up to work with this code
        try {
            const response = await axios.post (
                "http://localhost:8080/user/login",
                {
                    username,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            setAuthenticated(true);
            setMessage (response.data.message);
            } catch (error) {
              setMessage (error.response?.data?.message || "Login failed");
            }
        };

    return (
        //labeled div containers for CSS changes
        <div>
            <div className = {'loginHeading'}>
                <h3>Login</h3>
            </div>
            <form onSubmit = {handleLogin}>
                <div className = {'inputUser'}>
                    <input
                        type = "text"
                        value = {username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder = "Username"
                    />
                </div>
            <br />
                <div className = {'inputPass'}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button type = "submit" className = "loginBtn">Login</button>
            </form>
            {message && <p> {message} </p>}
        </div>
      );
  }

  export default Login;