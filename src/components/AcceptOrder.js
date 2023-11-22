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
      setAccept(response.data.status)

    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  return (
    <>
      {accept === false && <div>
        Sorry
      </div>
      }
      {accept === true && <div>
        Order Accepted
      </div>}
    </>
  )
}
export default AcceptOrder;