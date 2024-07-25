import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = userState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate()

    const onButtonClick = () => {
        //feature to be added soon
    }


    return (
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
                <label className = "errorLabel">{emailError}</label>
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
  