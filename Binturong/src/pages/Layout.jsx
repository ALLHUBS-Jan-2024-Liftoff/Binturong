// Handles the Layout for the Navbar
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "./Logout";

function Layout({ authenticated, setAuthenticated }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {authenticated && (
            <>
              <li><Link to="/userProfile">Profile</Link></li>
              <li><Link to="/userSettings">Settings</Link></li>
              <li><Link to="/userFeed">Feed</Link></li>
              <li><Link to="/userSavedFeed">Saved Feed</Link></li>
              <li><Logout setAuthenticated = {setAuthenticated} /></li>
            </>
          )}
          {!authenticated && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
