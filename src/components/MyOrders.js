import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
const MyOrders=()=>{
    const [orders, setOrders] = useState([]);

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
        <div key={order.order_id} className="order-card">
          <h2>Order #{order.orderId}</h2>
         
          <p>Total Amount: ${order.price}</p>
        
        </div>
      ))}
    </div>
  </>
);

        
    
    
}
export default MyOrders;