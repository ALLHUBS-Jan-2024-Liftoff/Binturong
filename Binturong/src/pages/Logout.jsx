import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout({ setAuthenticated }) {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user/logout", {
        withCredentials: true,
      });
      if (response.status === 200 || response.status === 204) {
        console.log("Logout successful, status:", response.status);
        setAuthenticated(false);
        localStorage.removeItem("authenticated");
        console.log("Authenticated state set to false and local storage cleared");
        navigate("/");
      } else {
        console.error("Logout failed with status:", response.status);
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;