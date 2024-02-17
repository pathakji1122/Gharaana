import React from "react";
import profile from "./images/profile.png"
import { useState } from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Expert = () => {


  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const toggleClickOptions = () => {
    setShowOptions(false);
  };



  return (
    <>

      <div id="customernav">
        <NavLink onClick={toggleClickOptions} id="links" to="/">Home</NavLink>

        <NavLink onClick={toggleClickOptions} id="links" to="/clients" >Clients </NavLink>


        <NavLink onClick={toggleClickOptions} id="links" to="/rder"> Post Advertisement</NavLink>
        <NavLink onClick={toggleClickOptions} id="links" to="/premium">Upgrade To PREMIUM</NavLink>

        <button onClick={toggleOptions} class="icon-button">
          <img id="images" src={profile} alt="Search Icon" />
        </button>
      </div>
      {showOptions && (
        <div className="option">
          <div>
            <NavLink id="pi" to="/option1">My Orders</NavLink>
          </div>
          <div>
            <NavLink id="pi" to="/option2">Profile</NavLink>
          </div>
          <div>
            <NavLink id="pi" to="/logout">Logout</NavLink>
          </div>


        </div>
      )}



    </>

  )

}
export default Expert;