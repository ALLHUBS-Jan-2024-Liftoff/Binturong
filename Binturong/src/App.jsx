import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="userFeed" element={<UserFeed />} />
          <Route path="userSavedFeed" element={<UserSavedFeed />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element = {<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);