import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
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
import DrkToggle from "./Components/Toggle/DrkToggle.jsx";
import "./App.css";

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <BrowserRouter>
            <div className="App" data-theme = {isDark ? "dark" : "light"}>
                <header className="App-header">
                    <DrkToggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
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
                             <Route path="map" element={<Map />} />
                             <Route path="*" element={<Navigate to="/" replace />} />
                             </Route>
                             </>
                         )}
                    </Routes>
                </header>
            </div>
    </BrowserRouter>
  );
}

