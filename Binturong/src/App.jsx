import ReactDOM from "react-dom/client";
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, AuthContext } from './pages/AuthContext';
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";
import Map from "./pages/Map.jsx";
import UserSettings from "./pages/UserSettings.jsx";
import "./App.css";

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      {/* Routes when Not Logged In */}
      {!isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      ) : (
        <>
          {/* Routes when Logged In */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/userSettings" element={<UserSettings />} />
            <Route path="/userFeed" element={<UserFeed />} />
            <Route path="/userSavedFeed" element={<UserSavedFeed />} />
            <Route path="/map" element={<Map />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

