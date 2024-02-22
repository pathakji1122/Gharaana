import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const PlaceOrder = ({ order }) => {
  useEffect(() => {
    // Check if the order object is not empty and send it to the API
    if (Object.keys(order).length !== 0) {
      const sendOrderToAPI = async () => {
        try {
          const authToken = Cookies.get("authToken");
          const response = await axios.post(
            "https://gharaanah.onrender.com/customer/placeorder",
            order,
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          if (response.data.status === true) {
            console.log("Data sent successfully:", response.data);
            window.alert(`Order Successful`);
          } else {
            window.alert(`Order Failed. Please try again later.`);
          }
        } catch (error) {
          console.error("Error sending data:", error);
          window.alert(`Error sending order. Please try again later.`);
        }
      };

      sendOrderToAPI();
    }
  }, [order]);

  return null;
};

export default PlaceOrder;
