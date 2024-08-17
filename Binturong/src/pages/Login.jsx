import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

function Login () {
    const { setIsAuthenticated } = useContext(AuthContext);
    const [form, setForm] = useState({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm ({ ...form, [name]: value });
    };

    //Hard coded user/pass to test to see if the login feature works and switches over to the logged in state
    const handleLogin = async (e) => {
        e.preventDefault();

        const hardCodedUsername = 'testuser';
        const hardCodedPassword = 'password123';

            if (form.username === hardCodedUsername && form.password === hardCodedPassword) {
                setIsAuthenticated(true);
                navigate('/userProfile'); // Redirect to user profile or any other page
            } else {
                console.log("Login Failed");
            }
//     };

        //authentication controller to be set up to work with this code
        try {
            const response = await axios.post (
                "http://localhost:8080/user/login",
                {
                    username: form.username,
                    password: form.password,
                },
                {
                    withCredentials: true,
                }
            );
            setAuthenticated (true);
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
                        name = "username"
                        value = {form.username}
                        onChange = {handleChange}
                        placeholder = "Username"
                    />
                </div>
            <br />
                <div className = {'inputPass'}>
                    <input
                        type = "password"
                        name = "password"
                        value = {form.password}
                        onChange = {handleChange}
                        placeholder = "Password"
                    />
                </div>
                <button type = "submit" className = "loginBtn">Login</button>
            </form>
            {message && <p> {message} </p>}
        </div>
      );
  }

  export default Login;