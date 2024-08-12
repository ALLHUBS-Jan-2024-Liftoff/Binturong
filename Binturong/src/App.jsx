import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";
import UserSettings from "./pages/UserSettings.jsx";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

console.log("Authenticated:", authenticated);

  return (
    <BrowserRouter>
      <Routes>
        {/* Routes when Not Logged In */}
        {!authenticated ? (
          <>
            <Route path="/" element={<Home authenticated={authenticated} />} />
            <Route path="login" element={<Login setAuthenticated={setAuthenticated} />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            {/* Routes when Logged In */}
            <Route path="/" element={<Layout authenticated={authenticated} setAuthenticated={setAuthenticated} />}>
              <Route index element={<Home authenticated={authenticated} />}/>
              <Route path="userProfile" element={<UserProfile />} />
              <Route path="userSettings" element={<UserSettings />} />
              <Route path="userFeed" element={<UserFeed />} />
              <Route path="userSavedFeed" element={<UserSavedFeed />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

