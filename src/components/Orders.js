import React from "react";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);


  const fetchOrders = async () => {
    try {
      const response = await axios.get('https://example.com/api/orders', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });

      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };


  return (
    <>
      <div className="order-list">
        {orders.map((order) => (
          <div key={order.order_id} className="order-card">
            <h2>Order #{order.order_id}</h2>
            <p>Customer: {order.customer_name}</p>
            <p>Total Amount: ${order.total_amount}</p>
            <p>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default Orders;