import React from "react";
import axios from "axios";

import { useState } from "react";
const Join=()=>{
      const[expert,setExpert]=useState(

       { 
        
        expertName:"",
         email:"",
        phoneNo:"",
        password:"",
        location:"",
        expertise:"",
      }
      );
      
  const handleInputs = (e)=>{
    const { name, value } = e.target;
    setExpert((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    

    try {
      const response = await axios.post('http://localhost:8081/worker/signup', expert);
      if(response.data.accountCreated==true){
      console.log('Data sent successfully:', response.data);
      setExpert({
        expertName: "",
        email: "",
        phoneNo: "",
        password: "",
        location: "",
        expertise: "",
      });
      window.alert(`welcome to gharaana : ${expert.expertName}`)
      // Handle success, like showing a success message
    }
    else{
      setExpert({
        expertName: "",
        email: "",
        phoneNo: "",
        password: "",
        location: "",
        expertise: "",
      });
      window.alert(` : ${response.data.response}`)
    }
   } catch (error) {
      console.error('Error sending data:', error);
      setExpert({
        expertName: "",
        email: "",
        phoneNo: "",
        password: "",
        location: "",
        expertise: "",
      });
      
    }
  };  
 
  return<>


       
      <div className="container">
      <h5 className="topics">
        Register as Expert
      </h5>
      <form onSubmit={handleSubmit} className="htmlForums">
     
      <div>
           <label className="labelform"htmlFor="expertName">Name</label>
           <input className="inputform"type="text" 
           value={expert.expertName}
           onChange={handleInputs}
           name="expertName" id="name"/>          
        </div>
        <div>
           <label className="labelform" htmlFor="password">Password</label>
           <input  className="inputform" type="text"
             value={expert.password}
             onChange={handleInputs}
           name="password" id="password"/>
          
        </div>
        <div>
           <label className="labelform" htmlFor="phoneno">PhoneNo</label>
           <input  className="inputform" type="text"
            value={expert.phoneNo}
            onChange={handleInputs}
           name="phoneNo" id="phoneNo"/>
           
        </div>
        <div>
           <label className="labelform" htmlFor="email">Email</label>
           <input  className="inputform" type="text"
            value={expert.email}
            onChange={handleInputs}
           name="email" id="email"/>
          
        </div>
        
        
        <div>
  <label className="labelform" htmlFor="location">Location</label>
  <select className="inputform" id="location" name="location"
          value={expert.location} onChange={handleInputs}>
    <option value="" disabled>Select Your location</option>
    <option value="HYDERABAD">Hyderabad</option>
    <option value="MUMBAI">MUMBAI</option>
    <option value="BANGALORE">BANGALORE</option>
    <option value="GUNTAKAL">Guntakal</option>
    <option value="CHURU">Churu</option>
   
  </select>
</div>

<div>
  <label className="labelform" htmlFor="Expertise">Expertise</label>
  <select className="inputform" id="expertise" name="expertise"
          value={expert.expertise} onChange={handleInputs}>
    <option value="" disabled>Select Your Expertise</option>
    <option value="CA">C.A.</option>
    <option value="ASSISTANT">Assistant</option>
    <option value="ENGINEER">ENGINEER</option>
    <option value="MECHANIC">Mechanic</option>
    <option value="DRIVER">Driver</option>
   
  </select>
</div>   
      
        
    
<br>
</br>
<button className="button" onClick={handleSubmit} type="submit">Register</button>
    
      </form>

      </div>




    </>
}
export default Join;