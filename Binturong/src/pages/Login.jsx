import React, {useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm ({ ...form, [name]: value });
    };

// This part might be redundant after implementing the LoginFormDTO keeping around just in case.
//     const validateForm = () => {
//         let valid = true;
//         let newErrors = {usernameError: ''}, passwordError: ''}
//
//         //will check if the user entered values into both username and password fields
//         if (form.username === '') {
//             newErrors.usernameError = 'Please enter username';
//             valid = false;
//             }
//
//         if (form.password === '') {
//             newErrors.passwordError = 'Please enter a password';
//             valid = false;
//             } else if (form.password.length < 8 ) {
//                 newErrors.passwordError = 'Password must be 8 characters or longer';
//                 valid = false;
//             }
//
//         if (password.length <7) {
//             setPasswordError('The password must be 8 characters or longer')
//             return
//
//         setErrors(newErrors);
//         return valid;
//     };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        //authentication controller to be set up to work with this code
        try {
            const response = away axios.post('http//localhost:8080/auth/login', form, {
                 headers: { 'Content-Type': 'application/json' },
                 withCredentials: true
            });
            console.log('Login successful', response.data);
            navigate('/restricted');
        } catch (error) {
            if (error.response) {
                setError (error.response.data);
            } else {
                setError ('An error occurred');
            }
        }
    };

    return (
        //labeled div containers for CSS changes
        <div>
            <div className = {'loginHeading'}>
                <div>Login</div>
            </div>
            <br />
            <form onSubmit = {handleSubmit}>
                <div className = {'inputUser'}>
                    <input
                        type = "text"
                        name = "username"
                        placeholder = "Username"
                        value = {form.username}
                        onChange = {handleChange}
                    />
                </div>
            <br />
                <div className = {'inputPass'}>
                    <input
                        type = "password"
                        name = "password"
                        placeholder = "Password"
                        value = {form.password}
                        onChange = {handleChange}
                    />
                </div>
                <button type = "submit" className = "loginBtn">Login</button>
            </form>
            <br />
        </div>
      );
  };

  export default Login;
  