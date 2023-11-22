import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import OrderStatus from "./OrderStatus";
const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [showOrderStatus, setShowOrderStatus] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handleButtonClick = (orderid) => {
    setSelectedOrderId(orderid);
  };

  useEffect(() => {
    fetchOrders();
  }, []);


  const fetchOrders = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get('http://localhost:8081/customer/myorder', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      setOrders(response.data.orderList);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };



  return (
    <>
      <div >
        {orders.map((order) => (
          <div key={order.orderId} className="order-card">
            <div>Orderid:{order.orderId}</div>

            <p>Total Amount: ${order.price}</p>
            <p> Order status :${order.status}</p>
            <p>Order Time :${order.placedAt}</p>
            <button onClick={() => handleButtonClick(order.orderId)} className="order-button">
              Track
            </button>
            {selectedOrderId === order.orderId && <OrderStatus orderId={order.orderId} />}
          </div>
        ))}
      </div>
    </>
  );




}
export default MyOrders;