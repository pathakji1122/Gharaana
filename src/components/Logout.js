
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
const Logout = ({ handleLogout }) => {
  const history = useHistory();

  const logout = () => {
    // Clear token from cookies
    Cookies.remove("authToken");

    // Call the handleLogout function to update userStage and localStorage
    handleLogout();

    // Redirect to the login page or any other desired page
    history.push("/login");
  };


  return (
    <>
      <div>
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Logout;