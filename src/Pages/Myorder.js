import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grid, IconButton } from '@mui/material';
import { Divider } from '@mui/material';
import { Stepper, Step, StepLabel } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Otp from '../components/Otp';
import OrderStatus from "../components/OrderStatus";
const Myorder = () => {
  const[getOtpOrderId,setGetOtpOrderId]=useState(null);
  const [orderStatusId,SetOrderStatusId]=useState(null);
const steps = ['Placed', 'Accepted', 'Started','Completed'];
const getStep = (orderStatus) => {
  switch (orderStatus) {
    case 'NOT_ACCEPTED':
      return 0;
    case 'ACCEPTED':
      return 1;
    case 'IN_PROGRESS':
      return 2;
    case 'COMPLETED':
      return 3;
    default:
      return 0;
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

      const response = await axios.post(
        "https://gharaanah.onrender.com/payments/createpayment",
        {
          orderId: orderId,
        },
        config
      );
      console.log(response.data.paymentId);
      setPaymentId(response.data.paymentId);
             
      redirectToRazorpay(order);
    } catch (error) {
      console.error("Error initiating payment:", error);
    }
  };
  const handleOrderStatusClick = (order) => {
   
    console.log("Order status clicked for order:", order);
    SetOrderStatusId(order.orderId);
  }
  const handleCloseOrderStatus = () => {
    SetOrderStatusId(null); // Reset orderStatusId state
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
  
          console.log(paymentId);
          const authToken = Cookies.get("authToken");
          const config = {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          };
    
          axios.post(
            "https://gharaanah.onrender.com/payments/completepayment",
             paymentId ,config
          )
          .then((response) => {
            // Handle successful completion of payment
            console.log("Payment completed:", response.data);
          })
          .catch((error) => {
            // Handle errors
            console.error("Error completing payment:", error);
          });
      
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
  const GetOtp = (orderId) => {
    setGetOtpOrderId(orderId);
  };
  const handleRefresh = async () => {
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

  return (
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
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Order no {order.orderId}
                <IconButton color="primary" onClick={() => handleOrderStatusClick(order)}  >
                  <MoreHorizIcon/>
                </IconButton>
              </Typography>
              <Divider />
              <Typography variant="body2" color="text.secondary">
                {order.expertise}
              </Typography>
              {order.orderStatus !== 'CANCELLED' && (
  <Stepper activeStep={getStep(order.orderStatus)} alternativeLabel>
    {steps.map((label) => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
)}

              <Typography variant="body2" color="text.secondary">
                Total Amount: {order.price}
              </Typography>
              {
                order.orderStatus==='CANCELLED'&&(
                  <Typography>
                    Cancelled Order
                  </Typography>
                )
              }
            </CardContent>
            <div style={{ backgroundColor: '#f5f5f5' }}>
  {!order.payment && order.orderStatus!='CANCELLED'&& (
    <CardActions sx={{ justifyContent: 'space-between' }}> {/* Change justifyContent to 'space-between' */}
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={() => initiatePayment(order.orderId, order)}
      >
        Pay now
      </Button>
      {/* Move the OTP button inside the same CardActions component */}
      {order.orderStatus === 'IN_PROGRESS' && (
        <Button
          size="small"
          color="primary"
          variant="contained"
         onClick={()=>GetOtp(order.orderId)}
        >
          Generate OTP
        </Button>
      )}
    </CardActions>
  )}
    
</div>

           
          </Card>
          
        </Grid>
        
      ))}
             {orderStatusId && <OrderStatus orderId={orderStatusId} onClose={handleCloseOrderStatus} />}
    {getOtpOrderId && <Otp orderId={getOtpOrderId} />}
    </Grid>
    
  );
};

export default Myorder;
