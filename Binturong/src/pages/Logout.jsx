import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const Logout = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
      console.log('Logout button clicked');
    try {
      await axios.post('http://localhost:8080/user/logout', {},
      { withCredentials: true }).then(response => {
      console.log('Logout response:', response);
      setIsAuthenticated(false);
      navigate('/');
      });
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;

// import React from "react";
// import axios from "axios";
//
// function Logout({ setAuthenticated }) {
//
//     const handleLogout = async (e) => {
//         e.preventDefault(); //Prevents Default Behavior
//         try {
//             console.log("Sending logout request...");
//             await axios.get("http://localhost:8080/user/logout",
//             {
//                 withCredentials: true,
//             });
//             console.log("Logout response:", response);
//             if (response.status === 200) {
//                 setAuthenticated(false);
//                 console.log("User logged out successfully");
//                 window.location.reload(); // Reload the page
//             } else {
//                 console.error("Logout failed with status:", response.status);
//             }
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//     };
//
//     return <button onClick = {handleLogout} >Logout</button>;
// }
//
// export default Logout;