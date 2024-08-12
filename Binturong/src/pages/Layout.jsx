// Handles the Layout for the Navbar
import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logout from "./Logout";

function Layout({ authenticated, setAuthenticated }) {

    console.log("Layout rendered. Authenticated:", authenticated);

    return (
        <div>
            {authenticated && (
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/userProfile">Profile</Link></li>
                        <li><Link to="/userSettings">Settings</Link></li>
                        <li><Link to="/userFeed">Feed</Link></li>
                        <li><Link to="/userSavedFeed">Saved Feed</Link></li>
                        <li><Logout setAuthenticated={setAuthenticated} /></li>
                    </ul>
                </nav>
            )}
            <Outlet />
        </div>
    );
}

export default Layout;
