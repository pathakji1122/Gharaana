import React from "react";
import {NavLink} from "react-router-dom";
import profile from "./profile.png"
import { useState } from "react";
const Customer=()=>{
    const[customerLoggedIn,setCustomerLoggedIn]=useState(false);
    const [showOptions, setShowOptions] = useState(false);
      
        const toggleOptions = () => {
          setShowOptions(!showOptions);
        };
        const toggleClickOptions = () => {
            setShowOptions(false);
          };



    return(
        <>
        
         <div id="customernav">
                 <NavLink onClick={toggleClickOptions}id="links" to="/">Home</NavLink>

                <NavLink  onClick={toggleClickOptions} id="links"  to="/offer" >Offers for You </NavLink>
               
               
                <NavLink onClick={toggleClickOptions} id="links" to="/rder"> PlaceOrder</NavLink>
                <NavLink onClick={toggleClickOptions} id="links" to="/premium">Upgrade To PREMIUM</NavLink>
                 
                <button  onClick={toggleOptions} class="icon-button">
  <img id="images" src={profile} alt="Search Icon"/> 
</button> 
</div>
{showOptions && (
        <div className="option">
            <div>
            <NavLink id="pi"  to="/option1">My Orders</NavLink>
            </div>
          <div>
          <NavLink id="pi" to="/option2">Profile</NavLink>
          </div>
         <div>
         <NavLink id="pi" to="/option3">Logout</NavLink>
         </div>
         

        </div>
      )}
              
              
                
        </>
        
    )
}
export default Customer;