import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

const OrderStatus = ({ orderId, onClose  }) => {
  const [open, setOpen] = useState(false);
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  const handleClose = () => {
    setOpen(false);
    navigate('/myorder');
   
    onClose(); // Call the onClose function passed from the parent component
  };

  const fetchOrderStatus = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post('https://gharaanah.onrender.com/customer/orderstatus', { orderId }, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      setOrder(response.data.order);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
      setOpen(true);
    }
  };

  const handleCancelOrder = async () => {
    try {
      const authToken = Cookies.get("authToken");
      const response = await axios.post('https://gharaanah.onrender.com/customer/cancelorder', { orderId }, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      fetchOrderStatus();
      // Optionally, handle success or update UI
    } catch (error) {
      console.error('Error canceling order:', error);
    }
  };

  useEffect(() => {
    fetchOrderStatus();
  }, []);

  return (
    <>
      <Dialog open={open}>
        <DialogTitle>
          Order Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Order Id: {order.orderId}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Expert: {order.expert}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Status: {order.orderStatus}
              </Typography>
            </>
          )}
        </DialogContent>
        {(order.orderStatus === 'ACCEPTED' || order.orderStatus === 'NOT_ACCEPTED') && (
  <DialogActions>
    <Button onClick={handleCancelOrder} variant="contained" color="secondary">
      Cancel Order
    </Button>
  </DialogActions>
)}
      </Dialog>
    </>
  );
};

export default OrderStatus;
