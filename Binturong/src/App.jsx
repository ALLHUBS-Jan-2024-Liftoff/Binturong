import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./pages/Logout.jsx";
import Layout from "./pages/Layout.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";
import Map from "./pages/Map.jsx";
import UserSettings from "./pages/UserSettings.jsx";
import "./App.css";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        {/*Public Routes*/}
                        <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
                        <Route path="/register" element={<Register />} />

                        {/*Default Routes*/}
                        <Route path="/" element={<Home />} />

                        {/*Private Routes*/}
                        {authenticated ? (
                            <>
                                <Route path="/" element={<Layout />}>
                                <Route path="/userProfile" element={<UserProfile />} />
                                <Route path="/userSettings" element={<UserSettings />} />
                                <Route path="/userFeed" element={<UserFeed />} />
                                <Route path="/userSavedFeed" element={<UserSavedFeed />} />
                                <Route path="/map" element={<Map />} />
                                <Route path="/logout" element={<Logout setAuthenticated={setAuthenticated} />} />
                                </Route>
                            </>
                        ) : (
                            <Route path="*" element={<Navigate to="/" replace />} />
                        )}
                    </Routes>
                </header>
            </div>
    </BrowserRouter>
  );
}

