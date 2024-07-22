import React, {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Basic validation
        if (username === "user" && password === "pass") {
            setMessage("Login successful!");
            } else {
                setMessage("Invalid username or password. Please check your entry and try again.");
                }
        };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit = {handleLogin}>
                <div>
                    <label>Username: </label>
                    <input type = "text" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                </div>
                <button type = "submit">Login</button>
            </form>
            {message && <p> {message} </p>}
        </div>
      );
  };

  export default Login;
  