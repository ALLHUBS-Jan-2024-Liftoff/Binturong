//Page to register new users
import React, { useState } from "react";
import axios from "axios";
import "../App.css";

function Register({ closeDialog, openLoginDialog }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/user/register",
                {
                    username: username,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            );
            setMessage(response.data.message);
            closeDialog();
            openLoginDialog();
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div className="dialog-overlay">
            <dialog open>
                <div className="homeText">
                    <div className={'registerHeading'}>
                        <h3>Register</h3>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className={'inputUser'}>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                            />
                        </div>
                        <br />
                        <div className={'inputPass'}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit" className="registerBtn">Register</button>
                    </form>
                    {message && <p> {message} </p>}
                    <button onClick={closeDialog}>Close</button>
                </div>
            </dialog>
        </div>
    );
}

export default Register;