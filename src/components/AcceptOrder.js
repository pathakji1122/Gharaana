import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
const AcceptOrder = ({ orderid }) => {
  useEffect(() => {
    acceptOrderUrl();
  }, []);
  const acceptOrderUrl = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post('http://localhost:8081/expert/accept', orderid, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
  
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  return (
    <>
      { <div>
        Order Accepted
      </div>}
    </>
  )
}
export default AcceptOrder;