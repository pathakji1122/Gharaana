import React from "react";
import axios from "axios";

import { useState } from "react";
const Join = () => {
  const [expert, setExpert] = useState(

    {

      expertName: "",
      email: "",
      phoneNo: "",
      password: "",
      location: "",
      expertise: [],
    }
  );
  const [selectedDomain, setSelectedDomain] = useState("");
  const handleDomainChange = (event) => {
    const { value } = event.target;
    setSelectedDomain(value); // Update selectedDomain state
  };
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // If the checkbox is checked, add the value to the expertise list
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: [...prevExpert.expertise, value],
      }));
    } else {
      // If the checkbox is unchecked, remove the value from the expertise list
      setExpert((prevExpert) => ({
        ...prevExpert,
        expertise: prevExpert.expertise.filter((item) => item !== value),
      }));
    }
  };
  

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setExpert((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/expert/signup', expert);
      if (response.data.accountCreated === true) {
        console.log('Data sent successfully:', response.data);
        
        setExpert({
          expertName: "",
          email: "",
          phoneNo: "",
          password: "",
          location: "",
          expertise: [],
        });
        window.alert(`welcome to gharaana : ${expert.expertName}`)
        // Handle success, like showing a success message
      }
      else if (response.data.accountCreated === false) {

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
        expertise: [],
      });

    }
  };

  return <>



    <div className="joincontainer">
      <h5 className="topics">
        Register as Expert
      </h5>
      <form onSubmit={handleSubmit} className="htmlForums">
        
        <div className="joinforum">
          <label className="labelform" htmlFor="expertName">Name</label>
          <input className="inputjoinform" type="text"
            value={expert.expertName}
            onChange={handleInputs}
            name="expertName" id="name" />
        </div>
        <div className="joinforum">
          <label className="labelform" htmlFor="phoneno">PhoneNo</label>
          <input className="inputjoinform" type="text"
            value={expert.phoneNo}
            onChange={handleInputs}
            name="phoneNo" id="phoneNo" />

        </div>
        <div className="joinforuml2">
          <label className="labelform" htmlFor="email">Email</label>
          <input className="inputjoinforml2" type="text"
            value={expert.email}
            onChange={handleInputs}
            name="email" id="email" />

        </div>
        <div className="joinforuml2">
          <label className="labelform" htmlFor="password">Password</label>
          <input className="inputjoinforml2" type="text"
            value={expert.password}
            onChange={handleInputs}
            name="password" id="password" />

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
          <label className="labelform" htmlFor="Expertise">
            Domain
          </label>
          <select
            className="inputform"
            id="expertise"
            name="expertise"
            value={selectedDomain} // Use selectedDomain here
            onChange={handleDomainChange} // Use handleDomainChange here
          >
            <option value="" disabled>
              Select Your Service Domain
            </option>
            <option value="House Maintainance">House Maintainance</option>
            <option value="Automobile Services">Automobile Services</option>
            <option value="Beauty and Wellness">Beauty and Wellness</option>
            <option value="Appliances Installation & Repairing">
              Appliances Installation & Repairing
            </option>
            <option value="Health and Fitness">Health and Fitness</option>
          </select>
        </div>
        {selectedDomain === "Appliances Installation & Repairing" && (
          <div>
            <label className="labelform" htmlFor="checkboxOptions">
              Expertise Options (Select all that apply):
            </label>
            <div>
              <input
                type="checkbox"
                name="checkboxOptions"
                value="AC_REPAIRING"
                onChange={handleCheckboxChange}
              />
               <label htmlFor="option1">R.O. Purifier</label>
               <input
                type="checkbox"
                name="checkboxOptions"
                value="WASHING_MACHINE"
                onChange={handleCheckboxChange}
              />
               <label htmlFor="option1">Washing Machine</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="checkboxOptions"
                value="TV_REPAIRING"
                onChange={handleCheckboxChange}
              />
               <label htmlFor="option1">T.V.</label>
               <input
                type="checkbox"
                name="checkboxOptions"
                value="FRIDGE"
                onChange={handleCheckboxChange}
              />
               <label htmlFor="option1">Refrigerator</label>
            </div>
            </div>
             )}
             

        <br>
        </br>
        <button className="button" onClick={handleSubmit} type="submit">Register</button>

      </form>

    </div>




  </>
}
export default Join;