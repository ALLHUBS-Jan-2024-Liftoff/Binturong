import ReactDOM from "react-dom/client";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from './pages/AuthContext';
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
import "./App.css";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

console.log("Authenticated:", isAuthenticated);

  return (
   <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Routes when Not Logged In */}
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Home authenticated={isAuthenticated} />} />
            <Route path="/login" element={<Login setAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            {/* Routes when Logged In */}
            <Route path="/" element={<Layout authenticated={isAuthenticated} setAuthenticated={setIsAuthenticated} />}>
              <Route index element={<Home authenticated={isAuthenticated} />}/>
              <Route path="/userProfile" element={<UserProfile />} />
              <Route path="/userSettings" element={<UserSettings />} />
              <Route path="/userFeed" element={<UserFeed />} />
              <Route path="/userSavedFeed" element={<UserSavedFeed />} />
              <Route path="/user/logout" element={<Logout setAuthenticated={setIsAuthenticated} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

