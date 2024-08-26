import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import { Comments } from "./pages/comments.jsx";
import Map from "./pages/Map.jsx";
import UserSettings from "./pages/UserSettings.jsx";
import DrkToggle from "./Components/Toggle/DrkToggle.jsx";
import "./App.css";
import { NewCommentPage } from "./pages/NewCommentPage.jsx";
import { UpdatePostPage } from "./pages/UpdatePostPage.jsx";

export default function App() {
    const [authenticated, setAuthenticated] = useState(() => {
      return JSON.parse(localStorage.getItem("authenticated")) || false;
    });

    //For Dark Mode
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    //Login and Register Dialog Pop ups
    const [showLoginDialog, setShowLoginDialog] = useState(false);
    const [showRegisterDialog, setShowRegisterDialog] = useState(false);

    const openLoginDialog = () => setShowLoginDialog(true);
    const closeLoginDialog = () => setShowLoginDialog(false);
    const openRegisterDialog = () => setShowRegisterDialog(true);
    const closeRegisterDialog = () => setShowRegisterDialog(false);


    useEffect(() => {
        localStorage.setItem("authenticated", JSON.stringify(authenticated));
      }, [authenticated]);

  return (
    <BrowserRouter>
            <div className="App" data-theme = {isDark ? "dark" : "light"}>
                <header className="App-header">
                    <DrkToggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                    <Routes>

                         {/* Routes when Not Logged In */}
                         {!authenticated ? (
                             <>
                             <Route path="/" element={<Home authenticated={authenticated}
                             openLoginDialog={openLoginDialog} openRegisterDialog={openRegisterDialog}
                             />} />
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
                             <Route path="updatePost" element={<UpdatePostPage/>} />
                             <Route path="userSavedFeed" element={<UserSavedFeed />} />
                             <Route path="map" element={<Map />} />
                             <Route path= "newcomment" element={<NewCommentPage/>} />
                             <Route path= "comments" element={<Comments/>} />
                             <Route path="*" element={<Navigate to="/" replace />} />
                             </Route>
                             </>
                         )}
                    </Routes>
                        {showLoginDialog && <Login setAuthenticated={setAuthenticated} closeDialog={closeLoginDialog} />}
                        {showRegisterDialog && <Register closeDialog={closeRegisterDialog} openLoginDialog={openLoginDialog} />}
                </header>
            </div>
    </BrowserRouter>
  );
}

