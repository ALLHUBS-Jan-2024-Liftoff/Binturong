//Home page
import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = (props) => {
    const {loggedIn, userName} = props
    const navigate = useNavigate()

    const onButtonClick = () => {
        //Button function will be added soon
    }

    return (
        <div>
            <div className = {'appName'}>
                <h1>Welcome to 2gether!</h1>
            </div>
            <div>
                <input
                    className = {'loginButton'}
                    type = "button"
                    onClick = {onButtonClick}
                    value = {logginIn ? 'Log out' : 'Log in'}
                />
                {loggedIn ? <div>Your username is {userName}</div> : <div />}
            </div>
        </div>

    )
  };
  
  export default Home;
  