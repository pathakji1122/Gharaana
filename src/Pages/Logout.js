import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Delete the authentication token
      Cookies.remove('authToken');

      // Update the user stage to 0
      onLogout();

      // Navigate back to the home route
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      window.alert("Try Again");
      // Handle the error or display a message to the user
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
