// Handles the Layout for the Navbar
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "./Logout.jsx";
import "../App.css";

function Layout({ authenticated, setAuthenticated }) {
  return (
    <>
      <nav className="homeText">
        {/*Displayed when logged in*/}
        <Link to="/">Home</Link>
        <Link to="/userProfile">Profile</Link>
        <Link to="/userSettings">Settings</Link>
        <Link to="/userFeed">Feed</Link>
        <Link to="/userSavedFeed">Saved Feed</Link>
        <Link to="/map">Map</Link>
        <Logout setAuthenticated={setAuthenticated} />
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
