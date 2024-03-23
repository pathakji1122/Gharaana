import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";
import Cookies from "js-cookie";
import { useLocation, useNavigate } from 'react-router-dom';

import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const PlaceOrder = (props) => {
  const authToken = Cookies.get('authToken');
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    expertise: data.expertise,
    price: data.price,
    placedForDate: "",
    placedForTime: "",
  });

  const handleOrderDataChange = (event) => {
    const { name, value } = event.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate('/'); // Navigate to the home page
  };


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Set loading state to true during form submission

    try {
      // API call to post the order data
      const response = await axios.post(
        'https://gharaanah.onrender.com/customer/placeorder',
        orderData,
        {
          headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json', // Adjust content type as needed
          },
        }
      );

      if (response.data.status === true) {
        window.alert("Order Successful");
        handleClose(); // Close the dialog on successful submission
      } else {
        window.alert("Order failed. Try again.");
      }
    } catch (error) {
      console.error('Error sending data:', error);
      window.alert("Network or server error. Try again.");
    } finally {
      setLoading(false); // Set loading state back to false after form submission
    }
  };

  return (
    <>

      <div style={{ pointerEvents: 'auto' }}>
        
        <Dialog open={open} PaperProps={{ component: 'form', onSubmit: handleSubmit }}>
        <DialogTitle>
          Place Order
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
          <DialogContentText>
            Please enter the date and time for the order.
          </DialogContentText>

          <Typography
            variant="p"
            sx={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: '24px', // Adjusted font size
            }}
          >
            {orderData.expertise}
          </Typography>

         <Typography
            variant="body2"
            sx={{
              textAlign: 'left',
              fontWeight: '600',
              fontSize: '15px', // Adjusted font size
            }}
          >
            Total Amount {orderData.price}
          </Typography>
          <TextField
            autoFocus
            margin="dense"
            id="placedForDate"
            label="Date"
            type="date"
            name="placedForDate"
            fullWidth
            variant="standard"
            value={orderData.placedForDate}
            onChange={handleOrderDataChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            margin="dense"
            id="placedForTime"
            label="Time"
            type="time"
            name="placedForTime"
            fullWidth
            variant="standard"
            value={orderData.placedForTime}
            onChange={handleOrderDataChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Place Order</Button>
        </DialogActions>
      </Dialog>
          
      </div>
    </>
  );
};

export default PlaceOrder;
