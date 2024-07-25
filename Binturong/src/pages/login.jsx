import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = userState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate()

    const onButtonClick = () => {
        //start of authentication

        //will set initial error values to an empty one
        setUsernameError('')
        setPasswordError('')

        //will check if the user entered values into both username and password fields
        if ('' === username) {
            setUsernameError('Please enter your username')
            return
            }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
            }

        if (password.length <7) {
            setPasswordError('The password must be 8 characters or longer')
            return
            }
    }


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
  