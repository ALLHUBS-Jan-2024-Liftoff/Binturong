//Home page
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => (
        //setting up some div containers for CSS changes
        <div>
            <div className = {'appTitle'}>
                <h1>Welcome to 2GETHER!</h1>
            </div>
            <div>
              <p>Please log in below or if you haven't joined take a moment to register!</p>
              <Link to = "/login">Login</Link> | <Link to = "/register">Register</Link>
            </div>
        </div>
  );
  
  export default Home;
  