import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'; 

const Logout = ({ setUserStage }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Delete the authentication token
    Cookies.remove('authToken');

    // Update the user stage to 0
    setUserStage(0);

    // Navigate back to the home route
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
