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