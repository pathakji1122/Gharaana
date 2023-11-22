import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Cookies from "js-cookie";
import AcceptOrder from "./AcceptOrder";
const Clients = () => {
  const [clients, setClients] = useState([]);
  const [orderid, setOrderId] = useState();
  useEffect(() => {
    fetchClients();
  }, []);
  const fetchClients = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get('http://localhost:8081/expert/checkorders', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      setClients(response.data.orderList);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  const handleButtonClick = (orderid) => {
    setOrderId(orderid);
  };
  return (
    <>
      <div >
        {clients.map((clients) => (
          <div key={clients.orderid} className="order-card">
            <div>Orderid:-{clients.orderId}</div>

            <p>Total Amount: ${clients.price}</p>
            <button onClick={() => handleButtonClick(clients.orderId)} className="order-button">
              Accept
            </button>
            {orderid === clients.orderId && <AcceptOrder orderid={order.orderId} />}
          </div>
        ))}
      </div>
    </>
  );
}
export default Clients;