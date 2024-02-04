import React from "react";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
const CreateOrder = () => {
  const [order, setOrder] = useState(
    {

      expertise: "",
      price: "",
      placedFor: ""

    }
  );
  const handleInputs = (e) => {
    const { name, value } = e.target;
    if (name === "placedForDate" || name === "placedForTime") {
      const dateValue = name === "placedForDate" ? value : order.placedForDate;
      const timeValue = name === "placedForTime" ? value : order.placedForTime;
      const date = new Date(dateValue);
      const hours = timeValue.split(":")[0];
      const minutes = timeValue.split(":")[1];
      const day = date.getDate();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const formattedDate = `${hours}:${minutes}:${day}:${month}:${year}`;
      setOrder((prevData) => ({
        ...prevData,
        placedFor: formattedDate,
        placedForDate: dateValue,
        placedForTime: timeValue,
      }));
    } else {
      setOrder((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  
  const today = new Date().toISOString().split("T")[0];
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const authToken = Cookies.get("authToken"); // Get the authentication token from cookies
      const response = await axios.post('https://gharaanah.onrender.com/customer/placeorder',
        {
          ...order,
          placedFor: order.placedFor, // Use the formatted date
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`, // Include the token in the headers
          },
        }
      );
      if (response.data.status === true) {
        console.log('Data sent successfully:', response.data);
        setOrder({
          expertise: "",
          price: "",
          placedFor: "",
          placedForDate: "", // Reset placedForDate
          placedForTime: "", // Reset placedForTime
        });
        window.alert(`Order Successful`);
        // Handle success, like showing a success message
      } else {
        // Handle other cases here if needed
        setOrder({
          ...order, // Keep the existing data
          placedForDate: "", // Reset placedForDate
          placedForTime: "", // Reset placedForTime
        });
        window.alert(`Order Failed. Please try again later.`);
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setOrder({
        expertise: "",
        price: "",
        placedFor: "",
        placedForDate: "", // Reset placedForDate
        placedForTime: "", // Reset placedForTime
      });
      window.alert(`Error sending order. Please try again later.`);
      // Handle error, like showing an error message
    }
  };
  return (<>
    <div className="container">
      <h5 className="topics">
        Place Your Order
      </h5>
      <form onSubmit={handleSubmit} className="htmlForums">
        <div>
          <label className="labelform" htmlFor="price">Price</label>
          <input className="inputform" type="number"
            value={order.price}
            onChange={handleInputs}
            name="price" id="price" />
        </div>
        <div>
          <label className="labelform" htmlFor="expertise">Select Type of Service</label>
          <select className="inputform" id="expertise" name="expertise"
            value={order.expertise} onChange={handleInputs}>
            <option value="" disabled> </option>
            <option value="PLUMBER">Plumber</option>
            <option value="CARPENTER">Home Renovations</option>
            <option value="HOUSECLEANING">House Cleaning</option>
            <option value="DRIVER">Automotive  Service</option>
            <option value="YOGAINSTRUCTOR">Yoga Coach</option>
          </select>
        </div>
        <div>
          <label className="labelform" htmlFor="placedForDate">
            Placed For (Date)
          </label>
          <input
            className="inputform"
            type="date"
            value={order.placedForDate}
            onChange={handleInputs}
            name="placedForDate"
            id="placedForDate"
            min={today}
          />
        </div>

        <div>
          <label className="labelform" htmlFor="placedForTime">
            Placed For (Time)
          </label>
          <input
            className="inputform"
            type="time"
            value={order.placedForTime}
            onChange={handleInputs}
            name="placedForTime"
            id="placedForTime"
          />
        </div>


        <br>
        </br>
        <button className="button" onClick={handleSubmit} type="submit">Order</button>

      </form>

    </div>
  </>
  )
}
export default CreateOrder;