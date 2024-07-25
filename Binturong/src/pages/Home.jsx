//Home page
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = (props) => {
    const {loggedIn, username} = props;

    const onButtonClick = () => {
        //Button function will be added soon
    }

    return (
        //setting up some div containers for CSS changes
        <div>
            <div className = {'appTitle'}>
                <div>Welcome to 2GETHER!</div>
            </div>
            <div>
                <input
                    className = {'loginButton'}
                    type = "button"
                    onClick = {onButtonClick}
                    value = {loggedIn ? 'Log out' : 'Log in'}
                />
                {loggedIn ? <div>Your username is {username}</div> : <div />}
            </div>
        </div>

    )
  };
  
  export default Home;
  