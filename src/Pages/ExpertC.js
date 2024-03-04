import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Cookies from "js-cookie";
import { Button, CardActionArea, CardActions } from '@mui/material';
import axios from "axios";
import AcceptOrder from "../components/AcceptOrder"; // Ensure this path is correct

const ExpertC = () => {
  const authToken = Cookies.get('authToken');
  const [orders, setOrders] = useState([]);
  const [acceptingOrderId, setAcceptingOrderId] = useState(null); // New state to track order being accepted
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://gharaanah.onrender.com/expert/checkorders',
          {
            headers: {
              'Authorization': `Bearer ${authToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        setOrders(response.data.orderList);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchData();
  }, [authToken]);
  
  const handleAcceptOrder = (orderId) => {
    // Set the ID of the order being accepted
    setAcceptingOrderId(orderId);
  };

  return (
    <div>
      {orders.map(order => (
        <Card key={order.orderId} sx={{ maxWidth: 345, margin: 2 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Order ID: {order.orderId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Service: {order.expertise}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Order Price: {order.price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleAcceptOrder(order.orderId)}>
              Accept
            </Button>
          </CardActions>
        </Card>
      ))}
      {acceptingOrderId && <AcceptOrder orderid={acceptingOrderId} />}
    </div>
  );
};

export default ExpertC;
