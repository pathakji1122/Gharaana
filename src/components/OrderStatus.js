import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
const OrderStatus = ({ orderId }) => {
  const [order, setOrder] = useState();
  useEffect(() => {
    fetchOrderStatus();
  }, []);

  const fetchOrderStatus = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post('http://localhost:8081/customer/orderstatus', {orderId}, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setOrder(response.data.order);

    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <>
      <h1>
        
      </h1>

    </>
  )
}
export default OrderStatus;