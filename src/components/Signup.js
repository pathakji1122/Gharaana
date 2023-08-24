import React from "react";
import "../App.css"
import axios from "axios";
import { useState } from "react";
const SignUp =()=>{
    const[customer,setCustomer]=useState(

     { 
      
      customerName:"",
       email:"",
      phoneNo:"",
      password:"",
      location:"",
      
    }
    );
    
const handleInputs = (e)=>{
  const { name, value } = e.target;
  setCustomer((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:8081/customer/signup', customer);
    if(response.data.accountCreated===true){
    console.log('Data sent successfully:', response.data);
    setCustomer({
      customerName: "",
      email: "",
      phoneNo: "",
      password: "",
      location: "",
      
    });
    window.alert(`welcome to gharaana : ${customer.customerName}`)
    // Handle success, like showing a success message
  }
  else if(response.data.accountCreated===true){
    setCustomer({
      customerName: "",
      email: "",
      phoneNo: "",
      password: "",
      location: "",
     
    });
    window.alert(` hiii : ${response.data.response}`)
  }
 }  catch (error) {
    console.error('Error sending data:', error);
    setCustomer({
      customerName: "",
      email: "",
      phoneNo: "",
      password: "",
      location: "",
      
    });
    // Handle error, like showing an error message
  }
};  

return<>


     
    <div className="container">
    <h5 className="topics">
      SignUp
    </h5>
    <form onSubmit={handleSubmit} className="htmlForums">
   
    <div>
         <label className="labelform"htmlFor="customerName">Name</label>
         <input className="inputform"type="text" 
         value={customer.customerName}
         onChange={handleInputs}
         name="customerName" id="name"/>          
      </div>
      <div>
         <label className="labelform" htmlFor="password">Password</label>
         <input  className="inputform" type="text"
           value={customer.password}
           onChange={handleInputs}
         name="password" id="password"/>
        
      </div>
      <div>
         <label className="labelform" htmlFor="phoneno">PhoneNo</label>
         <input  className="inputform" type="text"
          value={customer.phoneNo}
          onChange={handleInputs}
         name="phoneNo" id="phoneNo"/>
         
      </div>
      <div>
         <label className="labelform" htmlFor="email">Email</label>
         <input  className="inputform" type="text"
          value={customer.email}
          onChange={handleInputs}
         name="email" id="email"/>
        
      </div>
      
      
      <div>
<label className="labelform" htmlFor="location">Location</label>
<select className="inputform" id="location" name="location"
        value={customer.location} onChange={handleInputs}>
  <option value="" disabled>Select Your location</option>
  <option value="HYDERABAD">Hyderabad</option>
  <option value="MUMBAI">MUMBAI</option>
  <option value="GUNTAKAL">Guntakal</option>
  <option value="CHURU">Churu</option>
 
</select>
</div>

 
    
      
  
<br>
</br>
<button className="button" onClick={handleSubmit} type="submit">SignUp</button>
  
    </form>

    </div>

  </>



  
    
}


export default SignUp;