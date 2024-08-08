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

    const validateForm = () => {
        let valid = true;
        let newErrors = {usernameError: ''}, passwordError: ''}

        //will check if the user entered values into both username and password fields
        if (form.username === '') {
            newErrors.usernameError = 'Please enter username';
            valid = false;
            }

        if (form.password === '') {
            newErrors.passwordError = 'Please enter a password';
            valid = false;
            } else if (form.password.length < 8 ) {
                newErrors.passwordError = 'Password must be 8 characters or longer';
                valid = false;
            }

        if (password.length <7) {
            setPasswordError('The password must be 8 characters or longer')
            return

        setErrors(newErrors);
        return valid;
    };

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
            <div className = {'inputUser'}>
                <input
                    value = {username}
                    placeholder = "Enter your username here"
                    onChange = {(ev) => setUsername(ev.target.value)}
                    className = {'usernameBox'}
                />
                <label className = "errorLabel">{usernameError}</label>
            </div>
            <br />
            <div className = {'inputPass'}>
                <input
                    value = {password}
                    placeholder = "Enter your password here"
                    onChange = {(ev) => setPassword(ev.target.value)}
                    className = {'passwordBox'}
                />
                <label className = "errorLabel">{passwordError}</label>
            </div>
            <br />
            <div>
                <input type = "button" onClick = {onButtonClick} value = {'Log in'} />
            </div>
        </div>
      );
  };

  export default Login;
  