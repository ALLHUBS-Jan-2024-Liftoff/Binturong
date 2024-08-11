// Handles the Layout for the Navbar
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = ({ authenticated }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!authenticated ? (
          <>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
                <li>
                    <Link to = "/register">Register</Link>
                </li>
              </>
          ) : (
            <>
                <li>
                    <Link to = "/userprofile">User Profile</Link>
                </li>
                <li>
                    <Link to = "/usersettings">Settings</Link>
                </li>
                <li>
                    <Link to = "/userfeed">User Feed</Link>
                </li>
                <li>
                    <Link to = "/usersavedfeed">User Saved Feed</Link>
                </li>
                <li>
                    <Link to = "/logout">Logout</Link>
                </li>
            </>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
