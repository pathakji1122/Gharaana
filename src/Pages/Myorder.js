import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Divider } from '@mui/material';
import { Stepper, Step, StepLabel } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const Myorder = () => {
  const getOrderStatusLabel= (status) => {
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
  const [paymentId, setPaymentId] = useState();
  

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.get(
        "https://gharaanah.onrender.com/customer/myorder",
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

  const initiatePayment = async (orderId, order) => {
    try {
      const authToken = Cookies.get("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    };
 

    // Make the axios POST request with the configured headers
    const response = await axios.post(
      "https://gharaanah.onrender.com/payments/createpayment",
      {
        orderId: orderId,
      },
      config // Pass the config object containing headers
    );
      setPaymentId(response.data.paymentId);

      redirectToRazorpay(order);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };

  const redirectToRazorpay = async (order) => {
    const options = {
      key: "rzp_test_WlBGirQk7gdDcJ",
      amount: order.price * 100,
      currency: "INR",
      description: "Purchase Description",
      order_id: paymentId,
      handler: function (response) {
        
        console.log(response);
     
      },
      prefill: {
        name: "",
        email: "",
        contact: "",
      },
      notes: {
        address: "",
      },
      theme: {
        color: "#F37254",
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h1>Your Orders</h1>
      {orders.map((order) => (
         <div key={order.id} style={{ margin: 26,borderRadius: 5 }}>
 
 <Card sx={{ maxWidth: 1000, margin: 'auto' }}>
    <CardActionArea>
        <CardContent>
        <Typography variant="h8" gutterBottom component="div" sx={{ fontFamily: 'Arial', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <div>
    Order no {order.orderId}
  </div>
 
  <IconButton color="primary">
      <MoreHorizIcon />
    </IconButton>
</Typography>
            <Divider />
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '18px', maxWidth: 1000 }}>
  <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial', fontWeight: 'bold', marginTop: '10px', fontSize: '25px' }}>
    {order.expertise}
  </Typography>
  <div style={{ marginLeft: '200px' }}>
    <Stepper alternativeLabel style={{ marginTop:10,width:600}}>
      <Step>
        <StepLabel>{getOrderStatusLabel(order.status)}</StepLabel>
      </Step>
      <Step>
        <StepLabel>Accepted</StepLabel>
      </Step>
      <Step>
        <StepLabel>Started</StepLabel>
      </Step>
      <Step>
        <StepLabel>Completed</StepLabel>
      </Step>
    </Stepper>
  </div>
</div>

                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'Arial' }}>
                Total Amount: {order.price}
            </Typography>
        </CardContent>
    </CardActionArea>
    
    <div style={{ backgroundColor: '#f5f5f5' }}>
        { !order.payment && (
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button 
                    size="small" 
                    color="primary" 
                    variant="contained" 
                    onClick={() => initiatePayment(order.orderId, order)} 
                    sx={{ borderRadius: 10, backgroundColor: 'primary' }}
                >
                    Pay now
                </Button>
            </CardActions>
        )}
    </div>
</Card>

 </div>
      ))}
    </div>
  );
};

export default Myorder;
