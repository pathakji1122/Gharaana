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

const Myorder = () => {
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
    <Grid container spacing={2} justifyContent="center">
      {orders.map((order) => (
        <Grid item key={order.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345 }}>
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
              <Stepper alternativeLabel>
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
              <Typography variant="body2" color="text.secondary">
                Total Amount: {order.price}
              </Typography>
            </CardContent>
            <div style={{ backgroundColor: '#f5f5f5' }}>
              {!order.payment && (
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button
                    size="small"
                    color="primary"
                    variant="contained"
                    onClick={() => initiatePayment(order.orderId, order)}
                  >
                    Pay now
                  </Button>
                </CardActions>
              )}
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Myorder;
