//Page to register new users
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function Register() {
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState ("");
    const [message, setMessage] = useState ("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/user/register",
                {
                  username,
                  password,
                  name,
                  location,
                },
                {
                  withCredentials: true,
                }
            );
            setMessage (response.data.message);
        } catch (error) {
            setMessage (error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div>
           <div className = {'registerHeading'}>
               <div>Register</div>
           </div>
           <form onSubmit = {handleRegister}>
               <div className = {'inputUser'}>
                   <input
                    type = "text"
                    value = {username}
                    onChange = {(e) => setUsername (e.target.value)}
                    placeholder = "Username"
                    />
               </div>
               <br />
               <div className = {'inputPass'}>
                   <input
                    type = "password"
                    value = {password}
                    onChange = {(e) => setPassword (e.target.value)}
                    placeholder = "Password"
                   />
               </div>
                <button type = "submit" className = "loginBtn">Login</button>
               </form>
               {message && <p> {message} </p>}
        </div>
    );
}

export default Register;