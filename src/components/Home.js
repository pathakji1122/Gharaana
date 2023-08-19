import React from "react";
import houseclean from"./images/Cleaning.png";
import decoration from"./images/Decoration.png";
import gardening from "./images/Gardening.png";


const Home=()=>{
return(<>
  
  
 
 <div className="welcome">
          Welcome To Gharaana
         
 </div>
    <div id="box">
      <div className="text">
         Our Services

      </div>

    </div>
    <div className="serve">
   House Maintainance
    </div>
    <div>
     
      <img id="services"src={decoration} alt="cleaning "/>
      <img id="services" src={gardening} alt="cleaning "/>
    </div>
    <span id="imagetag">
      Home Decor
    </span>
   <span id="imagetag">
      Lawn Maintainance
   </span>

    
    
 
 
</>
)



}
export default Home;