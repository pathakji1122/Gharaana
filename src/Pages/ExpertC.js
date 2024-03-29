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
  const handleRefresh = async () => {
    // Fetch orders again
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


  const handleAcceptOrder = (orderId) => {
    setAcceptingOrderId(orderId);
  };
  return (
    <div>
   <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
  <Button
    variant="contained"
    color="primary"
    onClick={handleRefresh}
    style={{ margin: '20px' }}
  >
    Refresh
  </Button>
</div>


      {orders.map(order => (
     
<Card key={order.orderId} sx={{ maxWidth: 500, margin: 2, borderRadius: 4, boxShadow: 3 }}>
  <CardActionArea>
    <CardContent>
    <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Roboto', fontWeight: 'bold', letterSpacing: '1px', color: '#555', borderBottom: '2px solid #000', paddingBottom: '5px' }}>
        Order Details
      </Typography>
      <Typography variant="h5" component="div" style={{ fontFamily: 'Roboto', fontStyle: 'normal', marginBottom: '10px', color: '#333' }}>
        <span style={{ fontWeight: 'bold', marginRight: '5px' }}>Order ID:</span> {order.orderId}
      </Typography>
      <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Cursive', fontWeight: 'bold', marginBottom: '10px' }}>
        Service: {order.expertise}
      </Typography>
      <Typography variant="body1" color="text.primary" style={{ fontFamily: 'Verdana', fontStyle: 'italic' }}>
       Total Price: {order.price}
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions>
  <Button 
  onClick={() => handleAcceptOrder(order.orderId)} 
  style={{ 
    display: 'block', 
    margin: 'auto', 
    border: '1px solid black', 
    borderRadius: '5px',
    backgroundColor: '#76FF7A',
    color: 'white',
    padding: '8px 20px',
    fontWeight: 'bold',
    cursor: 'pointer', // Ensure the cursor changes to pointer on hover
    transition: 'background-color 0.3s ease', // Smooth transition effect
  }}
>
  Accept
</Button>


  </CardActions>
</Card>
      ))}
            {acceptingOrderId && <AcceptOrder orderId={acceptingOrderId} />}
    </div>
  );
};

export default ExpertC;
