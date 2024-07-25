import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/home.jsx";
import UserFeed from "./pages/UserFeed.jsx";
import UserSavedFeed from "./pages/UserSavedFeed.jsx";
import Login from "./pages/login.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import NoPage from "./pages/NoPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<home />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="userfeed" element={<UserFeed />} />
          <Route path="usersavedfeed" element={<UserSavedFeed />} />
          <Route path="login" element={<login />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);