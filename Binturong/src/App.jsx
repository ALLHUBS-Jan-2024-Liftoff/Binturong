import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";
import UserSettings from "./pages/UserSettings.jsx";

export default function App() {
  const [authenticated, setAuthenticated] = useState (false);

  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<Layout authenticated = {authenticated} />}>
          <Route index element = {<Home />} />

          {/* Routes when Not Logged In */}
            <Route path = "login" element = {<Login setAuthenticated = {setAuthenticated} />} />
            <Route path = "register" element = {<Register />} />

         {/* Routes when Logged In */}
         {authenticated ? (
           <>
            <Route path = "userProfile" element = {<UserProfile />} />
            <Route path = "userSettings" element = {<UserSettings />} />
            <Route path = "userFeed" element = {<UserFeed />} />
            <Route path = "userSavedFeed" element = {<UserSavedFeed />} />
            <Route path = "logout" element = {<Logout setAuthenticated = {setAuthenticated} />} />
           </>
           ) : (
            <Route path="*" element = {<Navigate to = "/login" replace />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Not needed?
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);