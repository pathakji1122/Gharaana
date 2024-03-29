import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StartOrder from "../components/StartOrder";
import CompleteOrder from "../components/CompleteOrder";

const ExpertsOrders = () => {
    const [startingOrderId, setstartingOrderId] = useState(null); 
    const [completeOrderId,setCompleteOrderId]=useState(null);
  const getOrderStatusLabel = (status) => {
    switch (status) {
      case "NOT_ACCEPTED":
        return "Placed";
      case "ACCEPTED":
        return "Accepted";
      case "IN_PROGRESS":
        return "Started";
      case "COMPLETED":
        return "Completed";
      default:
        return "Placed";
    }
  };
  
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get(
        "https://gharaanah.onrender.com/expert/myorders",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setOrders(response.data.orderList);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleStartOrder = (orderId) => {
  
    console.log("Starting order:", orderId);
    setstartingOrderId(orderId);

  };
  const handleCompleteOrder=(orderId)=>{
    setCompleteOrderId(orderId);
  }
  const handleRefresh = async () => {
   
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get(
        "https://gharaanah.onrender.com/expert/myorders",
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setOrders(response.data.orderList);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  return (
    <>
    <Grid container spacing={2} justifyContent="center">
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
      
      {orders.map((order) => (
        <Grid item key={order.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 445,margin:5}}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Order no {order.orderId}
                <IconButton color="primary">
                  <MoreHorizIcon />
                </IconButton>
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                {order.expertise}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Order Status: {order.orderStatus}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Total Amount: {order.price}
              </Typography>
            </CardContent>
            <CardActions>
              {order.orderStatus === "ACCEPTED" && (
                <Button onClick={() => handleStartOrder(order.orderId)} color="primary">
                  Click to Start Order
                </Button>
              )}
              {order.orderStatus === "IN_PROGRESS" && (
                <Button onClick={() => handleCompleteOrder(order.orderId)} color="primary">
                 Complete Order
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
    {startingOrderId && <StartOrder orderId={startingOrderId} />}
    {completeOrderId && <CompleteOrder orderId={completeOrderId} />}
</>
    
  );
};

export default ExpertsOrders;
