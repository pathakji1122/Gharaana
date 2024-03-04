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
import { useLocation } from 'react-router-dom';

const PlaceOrder = (props) => {
  const authToken = Cookies.get('authToken');
  const location = useLocation();
  const data = location.state;

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

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle form submission
  // Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

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
  }
};


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ component: 'form', onSubmit: handleSubmit }}>
      <DialogTitle>Place Order</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To place your order, please enter the date and time you prefer.
        </DialogContentText>
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
  );
};

export default PlaceOrder;
