import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router

const AcceptOrder = ({ orderid }) => {
  const navigate = useNavigate(); // Get the navigate function

  useEffect(() => {
    const acceptOrderUrl = async () => {
      try {
        const authToken = Cookies.get("authToken");
        // Ensure the payload is an object; adjust the key as per your API's expectation
        const payload = {
          orderId: orderid, // Assuming your API expects an object with an orderId field
        };
        const response = await axios.post(
          'https://gharaanah.onrender.com/expert/acceptorder',
          payload,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              'Content-Type': 'application/json', // Make sure to set Content-Type for JSON payload
            },
          }
        );

        console.log("Order accepted successfully", response.data);
        navigate('/'); // Navigate to the home page
      } catch (error) {
        console.error('Error accepting order:', error);
        // Optionally, handle errors (e.g., displaying an error message to the user)
      }
    };

    acceptOrderUrl();
  }, [orderid, navigate]); // Ensure useEffect reacts to changes in orderid and navigate

  return null; // The component does not render anything
};

export default AcceptOrder;
