import React from "react";
import { NavLink } from "react-router-dom";
import profile from "./images/profile.png"
import { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Customer = ({ }) => {
  const history = useHistory();

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

        <NavLink onClick={toggleClickOptions} id="links" to="/offer" >Offers for You </NavLink>


        <NavLink onClick={toggleClickOptions} id="links" to="/order"> PlaceOrder</NavLink>
        <NavLink onClick={toggleClickOptions} id="links" to="/premium">Gharaana PREMIUM</NavLink>

        <button onClick={toggleOptions} class="icon-button">
          <img id="images" src={profile} alt="Search Icon" />
        </button>
      </div>
      {showOptions && (
        <div className="option">
          <div>
            <NavLink id="pi" to="/myorders">My Orders</NavLink>
          </div>
          <div>
            <NavLink id="pi" to="/profile">Profile</NavLink>
          </div>
          <div>
            <NavLink id="pi" to="/logout">Logout</NavLink>
          </div>


        </div>
      )}



    </>

  )
}
export default Customer;