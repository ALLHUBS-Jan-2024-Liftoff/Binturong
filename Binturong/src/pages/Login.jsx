import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Login ({ setAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
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

            if (username === hardCodedUsername && password === hardCodedPassword) {
                setAuthenticated(true);
                navigate('/home'); // Redirect to user profile or any other page
            } else {
                setError('Invalid username or password', setError);
            }
    };

        //authentication controller to be set up to work with this code
//         try {
//             const response = await axios.post (
//                 'http//localhost:8080/user/login',
//                 {
//                     username,
//                     password,
//                 },
//                 {
//                     withCredentials: true,
//                 }
//             );
//             setAuthenticated (true);
//             setMessage (response.data.message);
//             } catch (error) {
//               setMessage (error.response?.data?.message || "Login failed");
//             }
//         };

    return (
        //labeled div containers for CSS changes
        <div>
            <div className = {'loginHeading'}>
                <div>Login</div>
            </div>
            <form onSubmit = {handleLogin}>
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

  export default Login;
  