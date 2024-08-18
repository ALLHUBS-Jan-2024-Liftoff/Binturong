import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import axios from 'axios';

const Logout = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = async () => {
      console.log('Logout button clicked');
    try {
      await axios.get("http://localhost:8080/user/logout",
      {
          withCredentials: true,
      });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;